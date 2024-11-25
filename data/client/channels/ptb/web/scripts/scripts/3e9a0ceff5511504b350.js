"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["77564"],
  {
    32750: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return u;
        },
      });
      var i = e(200651);
      e(192379);
      var r = e(481060),
        a = e(346479),
        l = e(665906),
        o = e(388032);
      function u(n) {
        var t;
        let e = (0, l.C7)(n),
          u = (0, l.tc)(n),
          d = n.isArchivedThread();
        if (d ? u : e)
          return (
            null === (t = n.threadMetadata) || void 0 === t
              ? void 0
              : t.archived
          )
            ? (0, i.jsx)(r.MenuItem, {
                id: "unarchive-thread",
                label: n.isForumPost()
                  ? o.intl.string(o.t.cnRubW)
                  : o.intl.string(o.t.S9E4Gx),
                action: () => a.Z.unarchiveThread(n, !1),
              })
            : (0, i.jsx)(r.MenuItem, {
                id: "archive-thread",
                label: n.isForumPost()
                  ? o.intl.string(o.t.BTs4KS)
                  : o.intl.string(o.t.wiIevb),
                action: () => a.Z.archiveThread(n, !1),
              });
      }
    },
    109764: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return f;
        },
      });
      var i = e(200651);
      e(192379);
      var r = e(852229),
        a = e(399606),
        l = e(481060),
        o = e(228392),
        u = e(592125),
        d = e(934415),
        s = e(981631),
        c = e(388032);
      function f(n, t, e) {
        let f = (0, a.e7)([u.Z], () => u.Z.getChannel(n.parent_id));
        return (0, i.jsx)(l.MenuItem, {
          id: "channel-copy-link",
          label: c.intl.string(c.t.WqhZsr),
          action: () => {
            n.isForumPost() &&
              (0, o.B)({
                postId: n.id,
                location: { section: s.jXE.CONTEXT_MENU },
              }),
              (0, r.J)((0, d.EO)(n, f, t, e));
          },
        });
      }
    },
    323597: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return C;
        },
      });
      var i = e(200651);
      e(192379);
      var r = e(442837),
        a = e(481060),
        l = e(787014),
        o = e(904245),
        u = e(787263),
        d = e(660189),
        s = e(144140),
        c = e(314897),
        f = e(496675),
        h = e(709054),
        v = e(981631),
        Z = e(388032);
      function C(n) {
        let t = n.isForumPost(),
          e = (0, r.e7)([c.default], () => n.isOwner(c.default.getId()), [n]),
          { canManageChannel: C, canAccessChannel: m } = (0, r.cj)(
            [f.Z],
            () => ({
              canAccessChannel: f.Z.can(n.accessPermissions, n),
              canManageChannel: f.Z.can(
                n.isThread() ? v.Plq.MANAGE_THREADS : v.Plq.MANAGE_CHANNELS,
                n,
              ),
            }),
            [n],
          ),
          g = (0, r.e7)(
            [s.Z],
            () => {
              var t;
              return null !== (t = s.Z.getCount(n.id)) && void 0 !== t ? t : 0;
            },
            [n.id],
          ),
          { firstMessage: p } = (0, r.e7)([d.Z], () => d.Z.getMessage(n.id), [
            n.id,
          ]),
          E = t && (C || (e && g < 1)),
          I = t && e && !C && g > 0 && null != p;
        return m && (C || E || I)
          ? (0, i.jsx)(a.MenuItem, {
              id: "delete-channel",
              label: (() => {
                if (n.type === v.d4z.GUILD_CATEGORY)
                  return Z.intl.string(Z.t.ifbXnJ);
                if (n.isForumPost())
                  return E
                    ? Z.intl.string(Z.t.nEOg1N)
                    : Z.intl.string(Z.t.xwMqDw);
                if (n.isThread()) return Z.intl.string(Z.t.H7vTe3);
                return Z.intl.string(Z.t["8D8Rsb"]);
              })(),
              color: "danger",
              action: () => {
                (0, u.w)(n, function () {
                  I
                    ? o.Z.deleteMessage(
                        n.id,
                        h.default.castChannelIdAsMessageId(n.id),
                      )
                    : l.ZP.deleteChannel(n.id);
                });
              },
            })
          : null;
      }
    },
    251746: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return v;
        },
      });
      var i = e(200651),
        r = e(192379),
        a = e(392711),
        l = e.n(a),
        o = e(442837),
        u = e(481060),
        d = e(66999),
        s = e(665906),
        c = e(979651),
        f = e(557135),
        h = e(388032);
      function v(n) {
        let t = (0, s.Y)(n),
          e = (0, o.e7)([c.Z], () => c.Z.isInChannel(n.id)),
          a = (0, o.e7)(
            [c.Z],
            () => !l().isEmpty(c.Z.getVoiceStatesForChannel(n.id)),
          ),
          { needSubscriptionToAccess: v } = (0, d.Z)(n.id),
          Z = r.useCallback(() => {
            f.Z.handleVoiceConnect({
              channel: n,
              connected: e,
              needSubscriptionToAccess: v,
              locked: !1,
            });
          }, [n, e, v]);
        return e || !t
          ? null
          : (0, i.jsx)(u.MenuItem, {
              id: "join-thread-voice",
              label: a
                ? h.intl.string(h.t["0D/6R0"])
                : h.intl.string(h.t.My50nZ),
              action: Z,
            });
      }
    },
    193987: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return u;
        },
      });
      var i = e(200651);
      e(192379);
      var r = e(481060),
        a = e(346479),
        l = e(665906),
        o = e(388032);
      function u(n) {
        let t = (0, l.Xb)(n),
          e = n.isLockedThread();
        if (t)
          return e
            ? (0, i.jsx)(r.MenuItem, {
                id: "unlock-thread",
                label: n.isForumPost()
                  ? o.intl.string(o.t["/OKSxs"])
                  : o.intl.string(o.t["jeyb/f"]),
                action: () => a.Z.unlockThread(n),
              })
            : (0, i.jsx)(r.MenuItem, {
                id: "lock-thread",
                label: n.isForumPost()
                  ? o.intl.string(o.t["Ur/0NT"])
                  : o.intl.string(o.t.HoCqm5),
                action: () => a.Z.lockThread(n),
              });
      }
    },
    933793: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return h;
        },
      });
      var i = e(200651);
      e(192379);
      var r = e(442837),
        a = e(481060),
        l = e(240872),
        o = e(456269),
        u = e(346479),
        d = e(665906),
        s = e(592125),
        c = e(176505),
        f = e(388032);
      function h(n) {
        let t = (0, r.e7)([s.Z], () => s.Z.getChannel(n.parent_id)),
          e = (0, d.Xb)(n),
          h = (0, o.kF)(n);
        return (null == t ? void 0 : t.isForumLikeChannel()) && e
          ? n.hasFlag(c.zZ.PINNED)
            ? (0, i.jsx)(a.MenuItem, {
                id: "unpin-thread",
                label: f.intl.string(f.t.trD8am),
                action: () => u.Z.unpin(n),
              })
            : (0, i.jsx)(a.MenuItem, {
                id: "pin-thread",
                label: f.intl.string(f.t.EnaWho),
                action: function () {
                  null != h
                    ? l.Z.show({
                        title: f.intl.string(f.t.IMbjxs),
                        body: f.intl.string(f.t["mi5+Vl"]),
                        onConfirm: async () => {
                          await u.Z.unpin(h), u.Z.pin(n);
                        },
                      })
                    : u.Z.pin(n);
                },
              })
          : null;
      }
    },
    13736: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return u;
        },
      });
      var i = e(200651);
      e(192379);
      var r = e(481060),
        a = e(787014),
        l = e(665906),
        o = e(388032);
      function u(n) {
        let t = (0, l.C7)(n),
          e = (0, l.$R)(n),
          u = (0, l.Gu)(n);
        return !t || !e || u || __OVERLAY__
          ? null
          : (0, i.jsx)(r.MenuItem, {
              id: "edit-thread",
              label: n.isForumPost()
                ? o.intl.string(o.t.NP1yHB)
                : o.intl.string(o.t["2Mk1TE"]),
              action: () => {
                (0, r.closeAllModals)(), a.ZP.open(n.id);
              },
            });
      }
    },
    732393: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return m;
        },
      }),
        e(47120);
      var i = e(200651);
      e(192379);
      var r = e(442837),
        a = e(481060),
        l = e(239091),
        o = e(596454),
        u = e(339085),
        d = e(883429),
        s = e(456269),
        c = e(665906),
        f = e(592125),
        h = e(710352),
        v = e(388032),
        Z = e(979595);
      function C(n) {
        let { tag: t } = n,
          { name: e, emojiId: a, emojiName: l } = t,
          d = (0, r.e7)([u.ZP], () =>
            null != a ? u.ZP.getUsableCustomEmojiById(a) : null,
          );
        return (0, i.jsxs)(i.Fragment, {
          children: [
            null != l || null != a
              ? (0, i.jsx)(o.Z, {
                  className: Z.emoji,
                  emojiId: a,
                  emojiName: l,
                  animated: !!(null == d ? void 0 : d.animated),
                })
              : null,
            e,
          ],
        });
      }
      function m(n) {
        let t = (0, r.e7)([f.Z], () => f.Z.getChannel(n), [n]),
          e = (0, c.C7)(t),
          o = (0, r.e7)(
            [f.Z],
            () => f.Z.getChannel(null == t ? void 0 : t.parent_id),
            [t],
          ),
          u = (0, s.Vm)(o),
          Z = (0, s.eV)(t),
          m = Z.length >= h.Cn,
          g = (0, c.$R)(t);
        if (null == t) return (0, l.Zy)(), null;
        if (
          !e ||
          __OVERLAY__ ||
          !t.isForumPost() ||
          (null == u ? void 0 : u.length) === 0 ||
          !g
        )
          return null;
        let p = (n) => {
            let e = new Set(Z);
            if (e.has(n)) e.delete(n);
            else {
              if (m) return;
              e.add(n);
            }
            let i = Array.from(e).map((n) => n.id);
            d.Z.updateForumPostTags(t.id, i);
          },
          E =
            null == u
              ? void 0
              : u.map((n) => {
                  let t = Z.includes(n);
                  return (0, i.jsx)(
                    a.MenuCheckboxItem,
                    {
                      id: n.id,
                      label: (0, i.jsx)(C, { tag: n }),
                      disabled: m && !t,
                      action: () => p(n),
                      checked: t,
                    },
                    n.id,
                  );
                });
        return (0, i.jsx)(a.MenuItem, {
          id: "edit-tags",
          label: v.intl.string(v.t["436ZFx"]),
          children: E,
        });
      }
    },
    612856: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return c;
        },
      });
      var i = e(200651);
      e(192379);
      var r = e(442837),
        a = e(481060),
        l = e(569471),
        o = e(346479),
        u = e(723170),
        d = e(124368),
        s = e(388032);
      function c(n) {
        let t = (0, u.B)(n);
        return (0, r.e7)([l.Z], () => l.Z.hasJoined(n.id))
          ? (0, i.jsx)(a.MenuItem, {
              id: "thread-notifications",
              label: s.intl.string(s.t.h850Sk),
              children: (0, d.zb)().map((e) => {
                let { setting: r, label: l } = e;
                return (0, i.jsx)(
                  a.MenuRadioItem,
                  {
                    group: "thread-notifications",
                    id: "".concat(r),
                    label: l,
                    action: () => o.Z.setNotificationSettings(n, { flags: r }),
                    checked: r === t,
                  },
                  r,
                );
              }),
            })
          : (0, i.jsx)(a.MenuItem, {
              id: "notifications-disabled",
              label: s.intl.string(s.t.h850Sk),
              disabled: !0,
            });
      }
    },
    137591: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return d;
        },
      });
      var i = e(200651);
      e(192379);
      var r = e(481060),
        a = e(346479),
        l = e(665906),
        o = e(981631),
        u = e(388032);
      function d(n) {
        var t, e;
        if (!(0, l.Xb)(n) || n.type !== o.d4z.PRIVATE_THREAD) return null;
        let d =
          null ===
            (e =
              null === (t = n.threadMetadata) || void 0 === t
                ? void 0
                : t.invitable) ||
          void 0 === e ||
          e;
        return (0, i.jsx)(r.MenuCheckboxItem, {
          id: "toggle-thread-invitable",
          label: u.intl.string(u.t.s2rpNT),
          checked: d,
          action: () => a.Z.setInvitable(n, !d),
        });
      }
    },
    787263: function (n, t, e) {
      e.d(t, {
        w: function () {
          return a;
        },
      });
      var i = e(200651);
      e(192379);
      var r = e(481060);
      function a(n, t) {
        return (0, r.openModalLazy)(async () => {
          let { default: r } = await e.e("79521").then(e.bind(e, 207540));
          return (e) =>
            (0, i.jsx)(r, {
              ...e,
              onConfirm: () => {
                e.onClose(), t();
              },
              channel: n,
            });
        });
      }
    },
    117984: function (n, t, e) {
      e.d(t, {
        CM: function () {
          return Z;
        },
        UT: function () {
          return v;
        },
        _Z: function () {
          return p;
        },
        kj: function () {
          return f;
        },
        oC: function () {
          return h;
        },
        s3: function () {
          return m;
        },
        uA: function () {
          return g;
        },
        xh: function () {
          return C;
        },
      }),
        e(47120);
      var i = e(524437),
        r = e(675478),
        a = e(592125),
        l = e(496675),
        o = e(709054),
        u = e(853856),
        d = e(231338);
      function s() {
        let n = u.Z.getFavoriteChannels(),
          t = 1;
        for (let e in n) t = Math.max(t, n[e].order);
        return t + 1;
      }
      function c(n) {
        for (let t in n) {
          let e = n[t];
          if (null == e) {
            delete n[t];
            continue;
          }
          if (e.type === i.Dd.CATEGORY) continue;
          let r = a.Z.getChannel(t);
          if (null == r) {
            delete n[t];
            continue;
          }
          if (!r.isPrivate()) {
            if (!l.Z.can(d.Pl.VIEW_CHANNEL, r)) {
              delete n[t];
              continue;
            }
          }
        }
      }
      function f(n, t) {
        if (!u.Z.isFavorite(n))
          r.hW.updateAsync(
            "favorites",
            (e) => {
              (e.favoriteChannels[n] = i.aV.create({
                nickname: "",
                type: i.Dd.REFERENCE_ORIGINAL,
                position: s(),
                parentId: null != t ? t : "0",
              })),
                c(e.favoriteChannels);
            },
            r.fy.FREQUENT_USER_ACTION,
          );
      }
      function h(n) {
        let t = u.Z.getFavorite(n);
        if (null != t)
          r.hW.updateAsync(
            "favorites",
            (e) => {
              if ((delete e.favoriteChannels[n], t.type === i.Dd.CATEGORY))
                for (let t in e.favoriteChannels)
                  e.favoriteChannels[t].parentId === n &&
                    (e.favoriteChannels[t].parentId = "0");
              c(e.favoriteChannels);
            },
            r.fy.INFREQUENT_USER_ACTION,
          );
      }
      function v(n, t) {
        if (!!u.Z.isFavorite(n))
          r.hW.updateAsync(
            "favorites",
            (e) => {
              e.favoriteChannels[n].nickname = null != t ? t : "";
            },
            r.fy.INFREQUENT_USER_ACTION,
          );
      }
      function Z(n) {
        let t = o.default.fromTimestamp(Date.now());
        r.hW.updateAsync(
          "favorites",
          (e) => {
            e.favoriteChannels[t] = i.aV.create({
              nickname: n,
              type: i.Dd.CATEGORY,
              position: s(),
              parentId: "0",
            });
          },
          r.fy.FREQUENT_USER_ACTION,
        );
      }
      function C(n) {
        h(n);
      }
      function m(n) {
        r.hW.updateAsync(
          "favorites",
          (t) => {
            for (let i of n)
              if (
                (null != i.position &&
                  (t.favoriteChannels[i.id].position = i.position),
                void 0 !== i.parent_id)
              ) {
                var e;
                t.favoriteChannels[i.id].parentId =
                  null !== (e = i.parent_id) && void 0 !== e ? e : "0";
              }
          },
          r.fy.FREQUENT_USER_ACTION,
        );
      }
      function g(n, t) {
        r.hW.updateAsync(
          "favorites",
          (e) => {
            e.favoriteChannels[n].parentId = null != t ? t : "0";
          },
          r.fy.FREQUENT_USER_ACTION,
        );
      }
      function p() {
        r.hW.updateAsync(
          "favorites",
          (n) => {
            n.muted = !n.muted;
          },
          r.fy.INFREQUENT_USER_ACTION,
        );
      }
    },
    593214: function (n, t, e) {
      e.d(t, {
        Mt: function () {
          return Z;
        },
        li: function () {
          return f;
        },
        s4: function () {
          return h;
        },
        up: function () {
          return C;
        },
        zv: function () {
          return v;
        },
      }),
        e(47120),
        e(653041);
      var i = e(192379),
        r = e(106351),
        a = e(442837);
      e(592125);
      var l = e(984933),
        o = e(914010);
      e(709054);
      var u = e(853856),
        d = e(362658),
        s = e(434065),
        c = e(981631);
      function f(n) {
        let { favoritesEnabled: t, hasStaffPrivileges: e } = (0, d.z)(
            "useCanFavoriteChannel",
          ),
          i = (0, a.e7)([u.Z], () => u.Z.isFavorite(n.id)),
          r = n.isDM() || n.isThread();
        return t && !__OVERLAY__ && !i && (!r || e);
      }
      function h(n) {
        return (0, a.e7)([u.Z], () => u.Z.getFavorite(n));
      }
      function v() {
        return (0, a.e7)([l.ZP], () => l.ZP.getChannels(c.I_8))[
          r.d.GUILD_CATEGORY
        ].map((n) => ({
          id: "null" === n.channel.id ? null : n.channel.id,
          name: n.channel.name,
        }));
      }
      function Z() {
        return (0, a.e7)([o.Z], () => o.Z.getGuildId()) === c.I_8;
      }
      function C() {
        let { isFavoritesPerk: n } = (0, d.z)("useFavoriteAdded"),
          t = (0, s.r)(),
          e = i.useCallback(() => {
            n && t.notifyFavoriteAdded();
          }, [t, n]),
          r = i.useCallback(() => {
            n && t.clearFavoriteAdded();
          }, [t, n]);
        return {
          favoriteAdded: t.favoriteAdded,
          notifyFavoriteAdded: e,
          clearFavoriteAdded: r,
        };
      }
    },
    434065: function (n, t, e) {
      e.d(t, {
        r: function () {
          return a;
        },
      });
      var i = e(15729),
        r = e(731965);
      let a = (0, i.U)((n) => ({
        favoriteAdded: !1,
        notifyFavoriteAdded: () => (0, r.j)(() => n({ favoriteAdded: !0 })),
        clearFavoriteAdded: () => (0, r.j)(() => n({ favoriteAdded: !1 })),
      }));
    },
  },
]);
//# sourceMappingURL=3e9a0ceff5511504b350.js.map
