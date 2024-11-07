"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["41271"],
  {
    511293: function (n) {
      n.exports = "/assets/9c98a52269227f104a1d.svg";
    },
    278198: function (n) {
      n.exports = "/assets/b35d1a1c8adf17410d7c.svg";
    },
    497321: function (n, e, t) {
      t(47120);
      var i,
        r = t(200651),
        l = t(192379),
        u = t(120356),
        a = t.n(u),
        o = t(481060),
        d = t(37234),
        s = t(230711),
        c = t(981631),
        f = t(388032),
        _ = t(243014);
      function E(n, e, t) {
        return (
          e in n
            ? Object.defineProperty(n, e, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (n[e] = t),
          n
        );
      }
      class p extends (i = l.Component) {
        render() {
          return (0, r.jsxs)("div", {
            className: _.streamerModeEnabled,
            children: [
              (0, r.jsx)("div", { className: _.streamerModeEnabledImage }),
              (0, r.jsx)(o.Clickable, {
                className: a()(_.streamerModeEnabledBtn, {
                  [_.disabled]: this.props.disableButton,
                }),
                onClick: this.handleClick,
                children: f.intl.string(f.t.Br1ls7),
              }),
            ],
          });
        }
        constructor(...n) {
          super(...n),
            E(this, "handleClick", () => {
              !this.props.disableButton &&
                ((0, d.jN)(c.S9g.USER_SETTINGS),
                s.Z.setSection(c.oAB.STREAMER_MODE));
            });
        }
      }
      E(p, "defaultProps", { disableButton: !1 }), (e.Z = p);
    },
    394059: function (n, e, t) {
      var i, r;
      t.d(e, {
        K: function () {
          return i;
        },
      }),
        ((r = i || (i = {}))[(r.STREAM = 0)] = "STREAM"),
        (r[(r.VIDEO = 1)] = "VIDEO");
    },
    27584: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return d;
        },
      });
      var i = t(442837),
        r = t(846027),
        l = t(314897),
        u = t(131951),
        a = t(981631),
        o = t(65154);
      function d(n) {
        let e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : o.Yn.DEFAULT,
          t = (0, i.e7)([l.default], () => l.default.getId()),
          d = (0, i.e7)(
            [u.Z],
            () => u.Z.supports(o.AN.DISABLE_VIDEO) && u.Z.isVideoEnabled(),
          ),
          s = (0, i.e7)([u.Z], () => u.Z.isLocalVideoDisabled(t, e), [t, e]),
          c = null == n || n === t;
        return [
          c && (d || s),
          s,
          (n) => {
            let i = n ? a.ZUi.DISABLED : a.ZUi.MANUAL_ENABLED;
            r.Z.setDisableLocalVideo(t, i, e);
          },
        ];
      }
    },
    295510: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return o;
        },
      });
      var i = t(200651);
      t(192379);
      var r = t(153867),
        l = t(468026),
        u = t(394059),
        a = t(388032);
      function o(n) {
        let { type: e, onConfirm: t, ...o } = n,
          d =
            e === u.K.STREAM
              ? a.intl.string(a.t["/lFMWl"])
              : a.intl.string(a.t.xzxhZW),
          s =
            e === u.K.STREAM
              ? a.intl.string(a.t.xaOX7e)
              : a.intl.string(a.t.oU1p9P);
        return (0, i.jsx)(l.default, {
          confirmText: a.intl.string(a.t["cY+Ooa"]),
          secondaryConfirmText: a.intl.string(a.t["JdIQ/f"]),
          title: d,
          cancelText: a.intl.string(a.t["ETE/oK"]),
          onConfirm: t,
          onConfirmSecondary: () => {
            r.ZP.updatedUnsyncedSettings({
              disableHideSelfStreamAndVideoConfirmationAlert: !0,
            }),
              t();
          },
          body: s,
          ...o,
        });
      }
    },
    441061: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return d;
        },
      });
      var i = t(200651);
      t(192379);
      var r = t(442837),
        l = t(481060),
        u = t(475179),
        a = t(358221),
        o = t(388032);
      function d(n) {
        let e = (0, r.e7)([a.Z], () => a.Z.getVoiceParticipantsHidden(n));
        return (0, i.jsx)(l.MenuCheckboxItem, {
          id: "no-video-hide",
          label: o.intl.string(o.t.BL8ss7),
          checked: !e,
          action: () => u.Z.toggleVoiceParticipantsHidden(n, !e),
        });
      }
    },
    167675: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return f;
        },
      }),
        t(47120);
      var i = t(200651);
      t(192379);
      var r = t(442837),
        l = t(481060),
        u = t(740492),
        a = t(27584),
        o = t(295510),
        d = t(394059),
        s = t(65154),
        c = t(388032);
      function f(n) {
        let e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : s.Yn.DEFAULT,
          [t, f, _] = (0, a.Z)(n, e),
          E = (0, r.e7)(
            [u.ZP],
            () => u.ZP.disableHideSelfStreamAndVideoConfirmationAlert,
          );
        return t
          ? (0, i.jsx)(l.MenuCheckboxItem, {
              id: "self-video-hide",
              label: c.intl.string(c.t.MH8ESU),
              checked: !f,
              action: () => {
                if (E || f) return _(!f);
                (0, l.openModal)((n) =>
                  (0, i.jsx)(o.Z, {
                    ...n,
                    type: d.K.VIDEO,
                    onConfirm: () => _(!f),
                  }),
                );
              },
            })
          : null;
      }
    },
    776568: function (n, e, t) {
      t.d(e, {
        ZP: function () {
          return C;
        },
        k: function () {
          return m;
        },
      }),
        t(47120);
      var i = t(200651);
      t(192379);
      var r = t(913527),
        l = t.n(r),
        u = t(442837),
        a = t(481060),
        o = t(211739),
        d = t(87051),
        s = t(496729),
        c = t(777861),
        f = t(9156),
        _ = t(621600),
        E = t(933557),
        p = t(981631),
        v = t(969943),
        h = t(388032);
      let m = () => [
          { value: v.Oe.MINUTES_15, label: h.intl.string(h.t["8ot6go"]) },
          { value: v.Oe.HOURS_1, label: h.intl.string(h.t.UMWBZm) },
          { value: v.Oe.HOURS_3, label: h.intl.string(h.t.QmYWtr) },
          { value: v.Oe.HOURS_8, label: h.intl.string(h.t.EpAXPD) },
          { value: v.Oe.HOURS_24, label: h.intl.string(h.t["755t4u"]) },
          { value: v.Oe.ALWAYS, label: h.intl.string(h.t.r3LawM) },
        ],
        g = (n) => {
          let e = n > 0 ? l()().add(n, "second").toISOString() : null;
          return {
            muted: !0,
            mute_config: { selected_time_window: n, end_time: e },
          };
        };
      function C(n, e) {
        let [t, r] = (0, u.Wu)([f.ZP], () => [
            f.ZP.isChannelMuted(n.guild_id, n.id),
            f.ZP.getChannelMuteConfig(n.guild_id, n.id),
          ]),
          l = (0, c.U)(r),
          v = (0, E.ZP)(n, !0);
        function C(e) {
          e && n.type === p.d4z.GUILD_CATEGORY && (0, o.c4)(n.id),
            d.Z.updateChannelOverrideSettings(
              n.guild_id,
              n.id,
              { muted: e },
              _.UE.muted(e),
            );
        }
        let A = h.intl.string(h.t.tbeRRE),
          I = h.intl.string(h.t.OYefmZ);
        switch (n.type) {
          case p.d4z.GUILD_CATEGORY:
            (A = h.intl.string(h.t.pNMCg4)), (I = h.intl.string(h.t.olaBeH));
            break;
          case p.d4z.GROUP_DM:
            (A = h.intl.string(h.t.LO3kaG)), (I = h.intl.string(h.t["s5/5fn"]));
            break;
          case p.d4z.DM:
            (A = h.intl.format(h.t.byjuJi, { name: v })),
              (I = h.intl.format(h.t["eC+9rq"], { name: v }));
            break;
          default:
            (A = h.intl.string(h.t.tbeRRE)), (I = h.intl.string(h.t.OYefmZ));
        }
        return t
          ? (0, i.jsx)(a.MenuItem, {
              id: "unmute-channel",
              label: I,
              subtext: l,
              action: () => C(!1),
            })
          : (0, i.jsx)(a.MenuItem, {
              id: "mute-channel",
              label: A,
              action: () => {
                C(!0),
                  (0, s.s)({
                    channelId: n.id,
                    location: "channel_context_menu",
                  });
              },
              children: m().map((t) => {
                let { value: r, label: l } = t;
                return (0, i.jsx)(
                  a.MenuItem,
                  {
                    id: "".concat(r),
                    label: l,
                    action: () =>
                      (function (t) {
                        n.type === p.d4z.GUILD_CATEGORY && (0, o.c4)(n.id);
                        let i = g(t);
                        d.Z.updateChannelOverrideSettings(
                          n.guild_id,
                          n.id,
                          i,
                          _.ZB.Muted,
                          e,
                        );
                      })(r),
                  },
                  r,
                );
              }),
            });
      }
    },
    117984: function (n, e, t) {
      t.d(e, {
        CM: function () {
          return p;
        },
        UT: function () {
          return E;
        },
        _Z: function () {
          return g;
        },
        kj: function () {
          return f;
        },
        oC: function () {
          return _;
        },
        s3: function () {
          return h;
        },
        uA: function () {
          return m;
        },
        xh: function () {
          return v;
        },
      }),
        t(47120);
      var i = t(524437),
        r = t(675478),
        l = t(592125),
        u = t(496675),
        a = t(709054),
        o = t(853856),
        d = t(231338);
      function s() {
        let n = o.Z.getFavoriteChannels(),
          e = 1;
        for (let t in n) e = Math.max(e, n[t].order);
        return e + 1;
      }
      function c(n) {
        for (let e in n) {
          let t = n[e];
          if (null == t) {
            delete n[e];
            continue;
          }
          if (t.type === i.Dd.CATEGORY) continue;
          let r = l.Z.getChannel(e);
          if (null == r) {
            delete n[e];
            continue;
          }
          if (!r.isPrivate()) {
            if (!u.Z.can(d.Pl.VIEW_CHANNEL, r)) {
              delete n[e];
              continue;
            }
          }
        }
      }
      function f(n, e) {
        if (!o.Z.isFavorite(n))
          r.hW.updateAsync(
            "favorites",
            (t) => {
              (t.favoriteChannels[n] = i.aV.create({
                nickname: "",
                type: i.Dd.REFERENCE_ORIGINAL,
                position: s(),
                parentId: null != e ? e : "0",
              })),
                c(t.favoriteChannels);
            },
            r.fy.FREQUENT_USER_ACTION,
          );
      }
      function _(n) {
        let e = o.Z.getFavorite(n);
        if (null != e)
          r.hW.updateAsync(
            "favorites",
            (t) => {
              if ((delete t.favoriteChannels[n], e.type === i.Dd.CATEGORY))
                for (let e in t.favoriteChannels)
                  t.favoriteChannels[e].parentId === n &&
                    (t.favoriteChannels[e].parentId = "0");
              c(t.favoriteChannels);
            },
            r.fy.INFREQUENT_USER_ACTION,
          );
      }
      function E(n, e) {
        if (!!o.Z.isFavorite(n))
          r.hW.updateAsync(
            "favorites",
            (t) => {
              t.favoriteChannels[n].nickname = null != e ? e : "";
            },
            r.fy.INFREQUENT_USER_ACTION,
          );
      }
      function p(n) {
        let e = a.default.fromTimestamp(Date.now());
        r.hW.updateAsync(
          "favorites",
          (t) => {
            t.favoriteChannels[e] = i.aV.create({
              nickname: n,
              type: i.Dd.CATEGORY,
              position: s(),
              parentId: "0",
            });
          },
          r.fy.FREQUENT_USER_ACTION,
        );
      }
      function v(n) {
        _(n);
      }
      function h(n) {
        r.hW.updateAsync(
          "favorites",
          (e) => {
            for (let i of n)
              if (
                (null != i.position &&
                  (e.favoriteChannels[i.id].position = i.position),
                void 0 !== i.parent_id)
              ) {
                var t;
                e.favoriteChannels[i.id].parentId =
                  null !== (t = i.parent_id) && void 0 !== t ? t : "0";
              }
          },
          r.fy.FREQUENT_USER_ACTION,
        );
      }
      function m(n, e) {
        r.hW.updateAsync(
          "favorites",
          (t) => {
            t.favoriteChannels[n].parentId = null != e ? e : "0";
          },
          r.fy.FREQUENT_USER_ACTION,
        );
      }
      function g() {
        r.hW.updateAsync(
          "favorites",
          (n) => {
            n.muted = !n.muted;
          },
          r.fy.INFREQUENT_USER_ACTION,
        );
      }
    },
    593214: function (n, e, t) {
      t.d(e, {
        Mt: function () {
          return p;
        },
        li: function () {
          return f;
        },
        s4: function () {
          return _;
        },
        up: function () {
          return v;
        },
        zv: function () {
          return E;
        },
      }),
        t(47120),
        t(653041);
      var i = t(192379),
        r = t(106351),
        l = t(442837);
      t(592125);
      var u = t(984933),
        a = t(914010);
      t(709054);
      var o = t(853856),
        d = t(362658),
        s = t(434065),
        c = t(981631);
      function f(n) {
        let { favoritesEnabled: e, hasStaffPrivileges: t } = (0, d.z)(
            "useCanFavoriteChannel",
          ),
          i = (0, l.e7)([o.Z], () => o.Z.isFavorite(n.id)),
          r = n.isDM() || n.isThread();
        return e && !__OVERLAY__ && !i && (!r || t);
      }
      function _(n) {
        return (0, l.e7)([o.Z], () => o.Z.getFavorite(n));
      }
      function E() {
        return (0, l.e7)([u.ZP], () => u.ZP.getChannels(c.I_8))[
          r.d.GUILD_CATEGORY
        ].map((n) => ({
          id: "null" === n.channel.id ? null : n.channel.id,
          name: n.channel.name,
        }));
      }
      function p() {
        return (0, l.e7)([a.Z], () => a.Z.getGuildId()) === c.I_8;
      }
      function v() {
        let { isFavoritesPerk: n } = (0, d.z)("useFavoriteAdded"),
          e = (0, s.r)(),
          t = i.useCallback(() => {
            n && e.notifyFavoriteAdded();
          }, [e, n]),
          r = i.useCallback(() => {
            n && e.clearFavoriteAdded();
          }, [e, n]);
        return {
          favoriteAdded: e.favoriteAdded,
          notifyFavoriteAdded: t,
          clearFavoriteAdded: r,
        };
      }
    },
    434065: function (n, e, t) {
      t.d(e, {
        r: function () {
          return l;
        },
      });
      var i = t(905837),
        r = t(731965);
      let l = (0, i.ZP)((n) => ({
        favoriteAdded: !1,
        notifyFavoriteAdded: () => (0, r.j)(() => n({ favoriteAdded: !0 })),
        clearFavoriteAdded: () => (0, r.j)(() => n({ favoriteAdded: !1 })),
      }));
    },
    276022: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return v;
        },
      }),
        t(653041);
      var i = t(200651),
        r = t(192379),
        l = t(442837),
        u = t(481060),
        a = t(139387),
        o = t(230711),
        d = t(213459),
        s = t(434404),
        c = t(795594),
        f = t(430824),
        _ = t(496675),
        E = t(981631),
        p = t(388032);
      function v(n) {
        var e;
        let {
            user: v,
            application: h,
            guildId: m,
            context: g,
            onItemClick: C,
          } = n,
          A =
            null !== (e = null == h ? void 0 : h.id) && void 0 !== e
              ? e
              : null == v
                ? void 0
                : v.id,
          I = f.Z.getGuild(m),
          T = (0, l.e7)([_.Z], () =>
            null != I ? _.Z.can(E.Plq.MANAGE_GUILD, I) : null,
          ),
          N = (0, d.LD)(m, !0),
          b = (0, d.PL)(!0, !0),
          { isUserApp: S, isGuildApp: P } = r.useMemo(() => {
            var n, e, t, i;
            if (null == A) return { isGuildApp: !1, isUserApp: !1 };
            let r = Object.values(
                null !==
                  (t =
                    null === (n = N.result) || void 0 === n
                      ? void 0
                      : n.sections) && void 0 !== t
                  ? t
                  : {},
              ),
              l = Object.values(
                null !==
                  (i =
                    null === (e = b.result) || void 0 === e
                      ? void 0
                      : e.sections) && void 0 !== i
                  ? i
                  : {},
              );
            return {
              isGuildApp: r.some((n) => {
                var e;
                return (
                  (null === (e = n.descriptor.application) || void 0 === e
                    ? void 0
                    : e.id) === A
                );
              }),
              isUserApp: l.some((n) => {
                var e;
                return (
                  (null === (e = n.descriptor.application) || void 0 === e
                    ? void 0
                    : e.id) === A
                );
              }),
            };
          }, [N, b, A]);
        r.useEffect(() => {
          t(360606);
        }, []);
        let y = r.useCallback(() => {
            if ((null == I ? void 0 : I.id) != null)
              s.Z.open(I.id, E.pNK.INTEGRATIONS),
                a.Z.setSection(E.b4C.APPLICATION, A),
                null == C || C();
          }, [A, null == I ? void 0 : I.id, C]),
          O = r.useCallback(() => {
            o.Z.open(E.oAB.AUTHORIZED_APPS);
            let n = "";
            null != h ? (n = h.name) : null != v && (n = v.username),
              "" !== n && c.J.setState({ searchQuery: n }),
              null == C || C();
          }, [h, C, v]);
        if (g === E.IlC.POPOUT) return null;
        let R = [];
        return (
          P &&
            T &&
            R.push(
              (0, i.jsx)(
                u.MenuItem,
                {
                  id: "manage-server-integration",
                  label: p.intl.string(p.t.IuSJT0),
                  action: y,
                },
                "manage-server-integration",
              ),
            ),
          S &&
            R.push(
              (0, i.jsx)(
                u.MenuItem,
                {
                  id: "manage-authorized-app",
                  label: p.intl.string(p.t.V8ruv7),
                  action: O,
                },
                "manage-authorized-app",
              ),
            ),
          R
        );
      }
    },
    523361: function (n, e, t) {
      t.d(e, {
        HG: function () {
          return a;
        },
        Md: function () {
          return u;
        },
        Q8: function () {
          return l;
        },
      });
      var i = t(373228),
        r = t(388032);
      let l = () => [r.intl.string(r.t.b6wEe3), r.intl.string(r.t.i8o9hY)],
        u = () => [r.intl.string(r.t.vqnToa), r.intl.string(r.t["9yh+dH"])],
        a = [
          {
            id: "781323471249604648",
            format_type: i.u3.APNG,
            description: "Cheerful Choco jumps out of gift box",
            name: "Surprise",
          },
          {
            id: "781324642736144424",
            format_type: i.u3.APNG,
            description: "Cheerful Choco preens against window",
            name: "Affection",
          },
          {
            id: "781323769960202280",
            format_type: i.u3.APNG,
            description: "Cheerful Choco sparkles",
            name: "OMG",
          },
          {
            id: "781324722394103808",
            format_type: i.u3.APNG,
            description: "Cheerful Choco cheers",
            name: "Cheer",
          },
          {
            id: "813951723822645278",
            format_type: i.u3.APNG,
            description: "Cheerful Choco gives thumbs up",
            name: "Nice",
          },
        ];
    },
    35125: function (n, e, t) {
      t.d(e, {
        PA: function () {
          return c;
        },
        Tn: function () {
          return s;
        },
        _i: function () {
          return h;
        },
        eI: function () {
          return p;
        },
        vp: function () {
          return E;
        },
        y8: function () {
          return v;
        },
      });
      var i = t(367907),
        r = t(200876),
        l = t(430824),
        u = t(594174);
      t(709054), t(523361);
      var a = t(981631),
        o = t(388032);
      function d(n) {
        return n;
      }
      function s(n) {
        let {
            username: e,
            usernameOnClickHandler: t,
            roleSubscriptionOnClickHandler: i,
            guildId: r,
            roleSubscriptionData: l,
          } = n,
          { content: u, formatParams: a } = _({
            username: e,
            usernameOnClickHandler: t,
            roleSubscriptionOnClickHandler: i,
            guildId: r,
            roleSubscriptionData: l,
          });
        return o.intl.format(u, a);
      }
      function c(n) {
        let {
            username: e,
            usernameOnClickHandler: t,
            roleSubscriptionOnClickHandler: i,
            guildId: r,
            roleSubscriptionData: l,
          } = n,
          { content: u, formatParams: a } = _({
            username: e,
            usernameOnClickHandler: t,
            roleSubscriptionOnClickHandler: i,
            guildId: r,
            roleSubscriptionData: l,
          });
        return o.intl.formatToParts(u, a);
      }
      function f(n, e) {
        var t, i;
        let r = l.Z.getGuild(n),
          u =
            null !== (t = null == e ? void 0 : e.total_months_subscribed) &&
            void 0 !== t
              ? t
              : 0;
        return {
          guild: r,
          totalMonthsSubscribed: u,
          showWithDuration: u > 0,
          isRenewal:
            null !== (i = null == e ? void 0 : e.is_renewal) &&
            void 0 !== i &&
            i,
        };
      }
      function _(n) {
        let e,
          {
            username: t,
            usernameOnClickHandler: i = d,
            roleSubscriptionOnClickHandler: r = a.dG4,
            guildId: l,
            roleSubscriptionData: u,
          } = n,
          {
            guild: s,
            totalMonthsSubscribed: c,
            showWithDuration: _,
            isRenewal: E,
          } = f(l, u);
        return (
          (e = _ ? (E ? o.t.Iy66Mz : o.t.eCgb2d) : E ? o.t.mPTTdn : o.t.mYjFFx),
          {
            content: e,
            formatParams: {
              username: t,
              usernameHook: i,
              guildName: null == s ? void 0 : s.name,
              handleGuildNameClick: r,
              tierName: null == u ? void 0 : u.tier_name,
              months: c,
            },
          }
        );
      }
      function E(n) {
        let e,
          {
            username: t,
            usernameOnClickHandler: i = d,
            roleSubscriptionOnClickHandler: r = a.dG4,
            guildId: l,
            roleSubscriptionData: u,
          } = n,
          {
            guild: s,
            totalMonthsSubscribed: c,
            showWithDuration: _,
            isRenewal: E,
          } = f(l, u);
        return (
          (e = _
            ? E
              ? o.t.OQ0OU1
              : o.t["+N9bxs"]
            : E
              ? o.t.OxP1ND
              : o.t["6Z1E+/"]),
          o.intl.formatToParts(e, {
            guildName: null == s ? void 0 : s.name,
            tierName: null == u ? void 0 : u.tier_name,
            username: t,
            usernameOnClick: i,
            roleSubscriptionOnClick: r,
            months: c,
          })
        );
      }
      function p(n) {
        return (0, r.l)(n);
      }
      function v(n, e, t, r) {
        var l;
        i.ZP.trackWithMetadata(
          a.rMx.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CLICKED,
          {
            guild_id: n,
            user_id:
              null === (l = u.default.getCurrentUser()) || void 0 === l
                ? void 0
                : l.id,
            channel_id: e,
            message_id: t,
            role_subscription_listing_id: r,
          },
        );
      }
      function h(n, e) {
        var t;
        return {
          guild_id: n.guild_id,
          sender:
            null === (t = u.default.getCurrentUser()) || void 0 === t
              ? void 0
              : t.id,
          target_user: e.author.id,
          channel_id: n.id,
          message_id: e.id,
        };
      }
    },
    978983: function (n, e, t) {
      var i = t(200651);
      t(192379);
      var r = t(481060),
        l = t(53304);
      e.Z = () =>
        (0, i.jsx)("div", {
          className: l.loadingWrapper,
          children: (0, i.jsx)(r.Dots, { dotRadius: 4, themed: !0 }),
        });
    },
    823162: function (n, e, t) {
      t.d(e, {
        Xy: function () {
          return s;
        },
        e4: function () {
          return o;
        },
        gN: function () {
          return c;
        },
        hi: function () {
          return _;
        },
        qR: function () {
          return d;
        },
        r_: function () {
          return f;
        },
      });
      var i = t(544891),
        r = t(570140),
        l = t(893776),
        u = t(290323),
        a = t(981631);
      async function o(n) {
        await i.tn.put({
          url: a.ANM.CHANNEL_RECIPIENT_ME(n),
          body: { consent_status: u.h.ACCEPTED },
        }),
          r.Z.dispatch({
            type: "MESSAGE_REQUEST_ACCEPT_OPTIMISTIC",
            channelId: n,
          });
      }
      function d(n) {
        return i.tn.put({
          url: a.ANM.CHANNEL_RECIPIENT_ME(n),
          body: { consent_status: u.h.UNSPECIFIED },
        });
      }
      function s(n) {
        return i.tn.put({
          url: a.ANM.CHANNEL_RECIPIENT_ME(n),
          body: { consent_status: u.h.PENDING },
        });
      }
      function c(n) {
        return i.tn.del({ url: a.ANM.CHANNEL_RECIPIENT_ME(n) });
      }
      function f(n) {
        return i.tn.put({
          url: a.ANM.CHANNEL_RECIPIENT_REJECT_BATCH(),
          body: { channel_ids: n },
        });
      }
      function _() {
        l.Z.getLocationMetadata();
      }
    },
    290323: function (n, e, t) {
      var i, r;
      t.d(e, {
        h: function () {
          return i;
        },
      }),
        ((r = i || (i = {}))[(r.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (r[(r.PENDING = 1)] = "PENDING"),
        (r[(r.ACCEPTED = 2)] = "ACCEPTED"),
        (r[(r.REJECTED = 3)] = "REJECTED");
    },
    759198: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return o;
        },
      });
      var i = t(200651);
      t(192379);
      var r = t(120356),
        l = t.n(r),
        u = t(481060),
        a = t(507815);
      function o(n) {
        let { className: e, color: t, ...r } = n;
        return (0, i.jsx)(u.Text, {
          className: l()({ [a.text]: null == t }, e),
          color: t,
          ...r,
        });
      }
    },
    977059: function (n, e, t) {
      t.d(e, {
        R: function () {
          return l;
        },
        S: function () {
          return r;
        },
      });
      let i = (0, t(987170).Z)({
        kind: "user",
        id: "2024-05_secure_frames_ui_rollout",
        label: "Secure Frames Rollout",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled.", config: { enabled: !0 } }],
      });
      function r(n) {
        let { location: e } = n;
        return i.useExperiment({ location: e }, { autoTrackExposure: !0 });
      }
      function l(n) {
        let { location: e } = n;
        return i.getCurrentConfig({ location: e }, { autoTrackExposure: !0 });
      }
    },
    441894: function (n, e, t) {
      t.d(e, {
        J: function () {
          return o;
        },
      }),
        t(47120);
      var i = t(442837),
        r = t(592125),
        l = t(19780),
        u = t(977059),
        a = t(760373);
      function o(n) {
        let { channelId: e, location: t } = n,
          { enabled: o } = (0, u.S)({ location: t });
        return (0, i.e7)(
          [l.Z, r.Z],
          () =>
            (function (n, e) {
              var t;
              let [i, u] =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : [l.Z, r.Z];
              if (!e || null == n || i.getChannelId() !== n) return !1;
              let o = u.getChannel(n);
              if (null == o || o.isGuildStageVoice()) return !1;
              let d =
                null === (t = i.getSecureFramesState()) || void 0 === t
                  ? void 0
                  : t.version;
              return null != d && d !== a.Eg;
            })(e, o, [l.Z, r.Z]),
          [e, o],
        );
      }
    },
    897769: function (n, e, t) {
      t.d(e, {
        S: function () {
          return l;
        },
      });
      var i = t(442837),
        r = t(359119);
      function l(n, e) {
        return (0, i.e7)([r.ZP], () => r.ZP.getChannelSafetyWarnings(n), [n])
          .filter((n) => n.type === e)
          .find((n) => null == n.dismiss_timestamp);
      }
    },
    981312: function (n, e, t) {
      t.d(e, {
        U: function () {
          return l;
        },
      });
      var i = t(442837),
        r = t(594174);
      function l() {
        return (
          !1 ===
          (0, i.e7)([r.default], () => {
            var n;
            return null === (n = r.default.getCurrentUser()) || void 0 === n
              ? void 0
              : n.nsfwAllowed;
          })
        );
      }
    },
    13279: function (n, e, t) {
      t.d(e, {
        z: function () {
          return o;
        },
      });
      var i = t(359119),
        r = t(897769),
        l = t(237292),
        u = t(403485),
        a = t(604849);
      function o(n, e) {
        let t = (0, l.y0)({ location: e }),
          o = (0, a.c)(),
          d = (0, u.h)(n),
          s = (0, r.S)(n, i.pj.INAPPROPRIATE_CONVERSATION_TIER_2);
        if (
          !(
            !t ||
            !o ||
            0 === d.length ||
            d.some(
              (n) =>
                n.type === i.pj.INAPPROPRIATE_CONVERSATION_TIER_1 ||
                (n.type === i.pj.INAPPROPRIATE_CONVERSATION_TIER_2 &&
                  null != n.dismiss_timestamp),
            )
          )
        )
          return s;
      }
    },
    403485: function (n, e, t) {
      t.d(e, {
        h: function () {
          return l;
        },
      });
      var i = t(442837),
        r = t(359119);
      function l(n) {
        return (0, i.e7)([r.ZP], () => r.ZP.getChannelSafetyWarnings(n), [
          n,
        ]).filter(
          (n) =>
            n.type === r.pj.INAPPROPRIATE_CONVERSATION_TIER_1 ||
            n.type === r.pj.INAPPROPRIATE_CONVERSATION_TIER_2,
        );
      }
    },
    604849: function (n, e, t) {
      t.d(e, {
        c: function () {
          return u;
        },
      });
      var i = t(442837),
        r = t(581883),
        l = t(981312);
      let u = () => {
        let n = (0, i.e7)([r.Z], () => {
          var n, e, t;
          return (
            null ===
              (t =
                null === (e = r.Z.settings.privacy) || void 0 === e
                  ? void 0
                  : null === (n = e.inappropriateConversationWarnings) ||
                      void 0 === n
                    ? void 0
                    : n.value) ||
            void 0 === t ||
            t
          );
        });
        return (0, l.U)() && n;
      };
    },
    305587: function (n, e, t) {
      t.d(e, {
        Xs: function () {
          return r;
        },
      });
      let i = (0, t(818083).B)({
        kind: "user",
        id: "2024-09_dm_mute_feedback",
        label: "DM Mute Feedback Experiment",
        defaultConfig: { enabled: !1 },
        treatments: [
          {
            id: 1,
            label: "Enable DM Mute Feedback Survey",
            config: { enabled: !0 },
          },
        ],
      });
      function r(n) {
        let { enabled: e } = i.getCurrentConfig(
          { location: n },
          { autoTrackExposure: !0 },
        );
        return e;
      }
    },
    496729: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return c;
        },
        s: function () {
          return s;
        },
      });
      var i = t(200651),
        r = t(704215),
        l = t(481060),
        u = t(570140),
        a = t(605236),
        o = t(592125),
        d = t(305587);
      function s(n) {
        let { channelId: e, location: t } = n,
          i = o.Z.getChannel(e),
          l = (0, a.un)(r.z.USER_DM_MUTE_FEEDBACK);
        if (null != i && !!i.isDM() && !l)
          (0, d.Xs)(t) &&
            u.Z.dispatch({ type: "USER_DM_MUTE_SHOW_FEEDBACK", channel: i });
      }
      function c() {
        (0, l.openModalLazy)(async () => {
          let { default: n } = await t.e("87995").then(t.bind(t, 180970));
          return (e) => (0, i.jsx)(n, { ...e });
        });
      }
    },
    471253: function (n, e, t) {
      t.d(e, {
        DT: function () {
          return I;
        },
        Ef: function () {
          return S;
        },
        HO: function () {
          return b;
        },
        NZ: function () {
          return P;
        },
        Pq: function () {
          return N;
        },
        Q1: function () {
          return m;
        },
        RK: function () {
          return C;
        },
        _0: function () {
          return g;
        },
        hz: function () {
          return T;
        },
        yi: function () {
          return A;
        },
      });
      var i = t(512722),
        r = t.n(i),
        l = t(149765),
        u = t(544891),
        a = t(493683);
      t(749210);
      var o = t(911969),
        d = t(367907),
        s = t(944486),
        c = t(979651),
        f = t(700785),
        _ = t(922482),
        E = t(192079),
        p = t(706058),
        v = t(590415),
        h = t(981631);
      function m(n, e) {
        let t = n.getGuildId();
        return (
          r()(null != t, "This channel cannot be guildless."),
          e && (0, d.yw)(h.rMx.REQUEST_TO_SPEAK_INITIATED, { ...(0, E.s$)(n) }),
          u.tn.patch({
            url: h.ANM.UPDATE_VOICE_STATE(t),
            body: {
              request_to_speak_timestamp: e ? new Date().toISOString() : null,
              channel_id: n.id,
            },
          })
        );
      }
      function g(n, e) {
        let t = n.getGuildId();
        return (
          r()(null != t, "This channel cannot be guildless."),
          u.tn.patch({
            url: h.ANM.UPDATE_VOICE_STATE(t, e),
            body: {
              suppress: !1,
              request_to_speak_timestamp: new Date().toISOString(),
              channel_id: n.id,
            },
          })
        );
      }
      function C(n, e) {
        let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          i = null == n ? void 0 : n.getGuildId();
        r()(null != i, "This channel cannot be guildless.");
        let l = c.Z.getVoiceStateForChannel(n.id);
        return (
          (0, v.gf)(l) === v.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK &&
            !e &&
            (0, d.yw)(h.rMx.PROMOTED_TO_SPEAKER, { ...(0, E.s$)(n) }),
          u.tn.patch({
            url: h.ANM.UPDATE_VOICE_STATE(i),
            body: {
              suppress: e,
              request_to_speak_timestamp: null,
              channel_id: n.id,
              ...(t ? { silent: t } : {}),
            },
          })
        );
      }
      function A(n) {
        let e = null == n ? void 0 : n.getGuildId();
        return (
          r()(null != e, "This channel cannot be guildless."),
          u.tn.patch({
            url: h.ANM.UPDATE_VOICE_STATE(e),
            body: {
              suppress: !0,
              channel_id: n.id,
              self_video: !1,
              self_stream: !1,
            },
          })
        );
      }
      function I(n, e, t) {
        let i = n.getGuildId();
        return (
          r()(null != i, "This channel cannot be guildless."),
          u.tn.patch({
            url: h.ANM.UPDATE_VOICE_STATE(i, e),
            body: { suppress: t, channel_id: n.id },
          })
        );
      }
      function T(n, e) {
        if (null == e || null == n) return;
        let t = e.getGuildId();
        return (
          r()(null != t, "This channel cannot be guildless."),
          I(e, n.id, !0),
          u.tn.patch({
            url: h.ANM.UPDATE_VOICE_STATE(t, n.id),
            body: {
              suppress: !0,
              channel_id: e.id,
              self_video: !1,
              self_stream: !1,
            },
          })
        );
      }
      function N(n, e, t) {
        let i = n.getGuildId();
        r()(null != i, "Channel cannot be guildless");
        let u = n.permissionOverwrites[i],
          d = { id: i, type: o.BN.ROLE, allow: f.Hn, deny: f.Hn, ...u };
        t
          ? ((d.allow = l.IH(d.allow, e)), (d.deny = l.Od(d.deny, e)))
          : ((d.allow = l.Od(d.allow, e)), (d.deny = l.IH(d.deny, e))),
          a.Z.updatePermissionOverwrite(n.id, d);
      }
      async function b(n, e, t, i) {
        if ("" === e) return;
        s.Z.getVoiceChannelId() !== n.id && (0, _.TM)(n);
        let r = await (0, p.me)(n.id, e, t, i);
        return C(n, !1, !0), r;
      }
      async function S(n, e, t) {
        if ("" !== e) return await (0, p.Dk)(n.id, e, t);
      }
      async function P(n) {
        await (0, p.Ix)(n.id);
      }
    },
    192079: function (n, e, t) {
      t.d(e, {
        ER: function () {
          return c;
        },
        kk: function () {
          return f;
        },
        s$: function () {
          return _;
        },
      }),
        t(724458),
        t(47120),
        t(392711);
      var i = t(19780),
        r = t(5192),
        l = t(700785),
        u = t(427679),
        a = t(157925),
        o = t(981631),
        d = t(71080),
        s = t(388032);
      function c(n, e, t, i) {
        let l = e[0],
          u = r.ZP.getName(n, t, l),
          a = null != i ? i : e.length;
        return 1 === a && null != l
          ? u
          : null == l
            ? s.intl.formatToPlainString(s.t.chmM9P, { count: a })
            : s.intl.formatToPlainString(s.t.GhkJ29, { name: u, count: a - 1 });
      }
      function f(n, e) {
        switch (n) {
          case d.aC.OWNER:
            return s.intl.string(s.t.icuNBA);
          case d.aC.ADMINISTRATOR:
            return s.intl.string(s.t.eTmN5e);
          case d.aC.MEMBER:
          case d.aC.ROLE:
            return e ? s.intl.string(s.t.Hw3XW1) : s.intl.string(s.t.YieyPj);
          case d.aC.EMPTY_STATE:
        }
        return null;
      }
      function _(n) {
        let e = u.Z.getStageInstanceByChannel(n.id);
        return {
          channel_id: n.id,
          guild_id: n.guild_id,
          topic: null == e ? void 0 : e.topic,
          media_session_id: i.Z.getMediaSessionId(),
          request_to_speak_state: l.Uu(o.Plq.REQUEST_TO_SPEAK, n)
            ? a.BM.EVERYONE
            : a.BM.NO_ONE,
          stage_instance_id: null == e ? void 0 : e.id,
        };
      }
    },
    706058: function (n, e, t) {
      t.d(e, {
        Dk: function () {
          return u;
        },
        Ix: function () {
          return a;
        },
        me: function () {
          return l;
        },
      });
      var i = t(544891),
        r = t(981631);
      async function l(n, e, t, l, u) {
        return (
          await i.tn.post({
            url: r.ANM.STAGE_INSTANCES,
            body: {
              channel_id: n,
              topic: e,
              privacy_level: t,
              guild_scheduled_event_id: u,
              send_start_notification: l,
            },
          })
        ).body;
      }
      async function u(n, e, t) {
        return (
          await i.tn.patch({
            url: r.ANM.STAGE_INSTANCE(n),
            body: { topic: e, privacy_level: t },
          })
        ).body;
      }
      function a(n) {
        return i.tn.del(r.ANM.STAGE_INSTANCE(n));
      }
    },
    623633: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return u;
        },
      });
      var i = t(442837),
        r = t(592125),
        l = t(944486);
      function u() {
        return (0, i.e7)([l.Z, r.Z], () => {
          let n = l.Z.getVoiceChannelId();
          if (null != n) {
            let e = r.Z.getChannel(n);
            if (null == e ? void 0 : e.isGuildStageVoice()) return e;
          }
          return null;
        });
      }
    },
    570870: function (n, e, t) {
      var i = t(200651),
        r = t(192379),
        l = t(512722),
        u = t.n(l),
        a = t(442837),
        o = t(481060),
        d = t(10718),
        s = t(667204),
        c = t(826298),
        f = t(276022),
        _ = t(978983),
        E = t(430824),
        p = t(594174),
        v = t(981631),
        h = t(689079),
        m = t(388032),
        g = t(62352);
      e.Z = (n) => {
        let e,
          {
            commandType: t,
            commandTargetId: l,
            channel: C,
            guildId: A,
            onHeightUpdate: I,
            context: T,
          } = n,
          N = (0, a.e7)([E.Z], () => E.Z.getGuild(null != A ? A : C.guild_id)),
          b = (0, a.e7)([p.default], () => p.default.getUser(l)),
          S = (0, f.Z)({
            user: b,
            guildId: null == N ? void 0 : N.id,
            context: T,
          }),
          {
            commands: P,
            sectionDescriptors: y,
            loading: O,
          } = d.wi({
            channel: C,
            filters: { commandTypes: [t] },
            options: { limit: h.lr },
            allowFetch: !0,
          }),
          { sections: R } = r.useMemo(() => {
            let n = {};
            return (
              y.forEach((e) => {
                n[e.id] = e;
              }),
              { sections: n }
            );
          }, [y]),
          Z = r.useRef(O.current);
        r.useEffect(() => {
          O.current !== Z.current &&
            ((Z.current = O.current), null == I || I());
        }, [O, I]);
        let M = r.useCallback(
          (n) => {
            u()(null != C, "menu item should not show if channel is null");
            let e = R[n.applicationId],
              t = null != e ? (0, c.ky)(e) : void 0;
            return (0, i.jsx)(
              o.MenuItem,
              {
                id: n.id,
                label: n.displayName,
                iconLeft: () =>
                  null != t
                    ? (0, i.jsx)(t, {
                        channel: C,
                        section: e,
                        width: 18,
                        height: 18,
                        selectable: !1,
                      })
                    : null,
                action: () => {
                  (0, s.Z)({
                    command: n,
                    optionValues: {},
                    context: { channel: C, guild: N },
                    commandTargetId: l,
                  });
                },
              },
              n.id,
            );
          },
          [C, N, l, R],
        );
        if (
          (O.current
            ? (e = (0, i.jsx)(
                o.MenuItem,
                {
                  id: "menu-commands-placeholder",
                  render: () => (0, i.jsx)(_.Z, {}),
                  disabled: !0,
                },
                "menu-commands-placeholder",
              ))
            : ((e =
                0 === P.length
                  ? (0, i.jsx)(
                      o.MenuItem,
                      {
                        id: "menu-commands-empty",
                        label: m.intl.string(m.t.YSNlV1),
                        disabled: !0,
                      },
                      "menu-commands-empty",
                    )
                  : P.map(M)),
              null != S &&
                (e = (0, i.jsxs)(i.Fragment, {
                  children: [
                    e,
                    (0, i.jsx)(o.MenuSeparator, {}, "separator"),
                    S,
                  ],
                }))),
          !v.TPd.TEXTUAL.has(C.type))
        ) {
          if (null == S) return null;
          e = S;
        }
        return (0, i.jsx)(o.MenuItem, {
          id: "apps",
          label: m.intl.string(m.t.PHjkRE),
          listClassName: g.list,
          children: e,
        });
      };
    },
    243014: function (n, e, t) {
      n.exports = {
        streamerModeEnabled: "streamerModeEnabled_c50c8b",
        streamerModeEnabledImage: "streamerModeEnabledImage_c50c8b",
        streamerModeEnabledBtn: "streamerModeEnabledBtn_c50c8b",
        disabled: "disabled_c50c8b",
      };
    },
    53304: function (n, e, t) {
      n.exports = { loadingWrapper: "loadingWrapper_c8df80" };
    },
    100210: function (n, e, t) {
      n.exports = {
        rootContainer: "rootContainer_e45ea8",
        headerContainer: "headerContainer_e45ea8",
        text: "text_e45ea8",
        newBadge: "newBadge_e45ea8",
        nitroWheel: "nitroWheel_e45ea8",
        labelContainer: "labelContainer_e45ea8",
        playButton: "playButton_e45ea8",
        mutedLabel: "mutedLabel_e45ea8",
      };
    },
    507815: function (n, e, t) {
      n.exports = { text: "text_b953a6" };
    },
    62352: function (n, e, t) {
      n.exports = { list: "list_fd4745" };
    },
    201683: function (n, e, t) {
      n.exports = {
        videoPaused: "videoPaused_f2b765",
        warningCircle: "warningCircle_f2b765",
      };
    },
    179840: function (n, e, t) {
      n.exports = {
        root: "root_dc0d6d",
        icon: "icon_dc0d6d",
        text: "text_dc0d6d",
        info: "info_dc0d6d",
        warning: "warning_dc0d6d",
      };
    },
    822352: function (n, e, t) {
      n.exports = {
        authedApp: "authedApp_f0135d",
        header: "header_f0135d",
        headerText: "headerText_f0135d",
        headerTextContainer: "headerTextContainer_f0135d",
        appAvatar: "appAvatar_f0135d",
        permission: "permission_f0135d",
        permissionCheckmark: "permissionCheckmark_f0135d",
        disclosureIcon: "disclosureIcon_f0135d",
        infoBox: "infoBox_f0135d",
        twoWayWarning: "twoWayWarning_f0135d",
        twoWayWarningIcon: "twoWayWarningIcon_f0135d",
        searchContainer: "searchContainer_f0135d",
        tosPrivacy: "tosPrivacy_f0135d",
        tos: "tos_f0135d",
        privacy: "privacy_f0135d",
        externalLinkIcon: "externalLinkIcon_f0135d",
        divider: "divider_f0135d",
        link: "link_f0135d",
      };
    },
  },
]);
//# sourceMappingURL=34919d47c5776531cffe.js.map
