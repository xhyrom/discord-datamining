"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["38046"],
  {
    511293: function (n) {
      n.exports = "/assets/9c98a52269227f104a1d.svg";
    },
    278198: function (n) {
      n.exports = "/assets/b35d1a1c8adf17410d7c.svg";
    },
    211739: function (n, t, e) {
      e.d(t, {
        N5: function () {
          return l;
        },
        c4: function () {
          return r;
        },
        lc: function () {
          return a;
        },
        mJ: function () {
          return u;
        },
      });
      var i = e(570140);
      function r(n) {
        i.Z.dispatch({ type: "CATEGORY_COLLAPSE", id: n });
      }
      function u(n) {
        i.Z.dispatch({ type: "CATEGORY_EXPAND", id: n });
      }
      function l(n) {
        i.Z.dispatch({ type: "CATEGORY_COLLAPSE_ALL", guildId: n });
      }
      function a(n) {
        i.Z.dispatch({ type: "CATEGORY_EXPAND_ALL", guildId: n });
      }
    },
    497321: function (n, t, e) {
      e(47120);
      var i,
        r = e(200651),
        u = e(192379),
        l = e(120356),
        a = e.n(l),
        o = e(481060),
        d = e(37234),
        c = e(230711),
        s = e(981631),
        f = e(388032),
        E = e(213914);
      function _(n, t, e) {
        return (
          t in n
            ? Object.defineProperty(n, t, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (n[t] = e),
          n
        );
      }
      class p extends (i = u.Component) {
        render() {
          return (0, r.jsxs)("div", {
            className: E.streamerModeEnabled,
            children: [
              (0, r.jsx)("div", { className: E.streamerModeEnabledImage }),
              (0, r.jsx)(o.Clickable, {
                className: a()(E.streamerModeEnabledBtn, {
                  [E.disabled]: this.props.disableButton,
                }),
                onClick: this.handleClick,
                children: f.intl.string(f.t.Br1ls7),
              }),
            ],
          });
        }
        constructor(...n) {
          super(...n),
            _(this, "handleClick", () => {
              !this.props.disableButton &&
                ((0, d.jN)(s.S9g.USER_SETTINGS),
                c.Z.setSection(s.oAB.STREAMER_MODE));
            });
        }
      }
      _(p, "defaultProps", { disableButton: !1 }), (t.Z = p);
    },
    394059: function (n, t, e) {
      var i, r;
      e.d(t, {
        K: function () {
          return i;
        },
      }),
        ((r = i || (i = {}))[(r.STREAM = 0)] = "STREAM"),
        (r[(r.VIDEO = 1)] = "VIDEO");
    },
    27584: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return d;
        },
      });
      var i = e(442837),
        r = e(846027),
        u = e(314897),
        l = e(131951),
        a = e(981631),
        o = e(65154);
      function d(n) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : o.Yn.DEFAULT,
          e = (0, i.e7)([u.default], () => u.default.getId()),
          d = (0, i.e7)(
            [l.Z],
            () => l.Z.supports(o.AN.DISABLE_VIDEO) && l.Z.isVideoEnabled(),
          ),
          c = (0, i.e7)([l.Z], () => l.Z.isLocalVideoDisabled(e, t), [e, t]),
          s = null == n || n === e;
        return [
          s && (d || c),
          c,
          (n) => {
            let i = n ? a.ZUi.DISABLED : a.ZUi.MANUAL_ENABLED;
            r.Z.setDisableLocalVideo(e, i, t);
          },
        ];
      }
    },
    295510: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return o;
        },
      });
      var i = e(200651);
      e(192379);
      var r = e(153867),
        u = e(468026),
        l = e(394059),
        a = e(388032);
      function o(n) {
        let { type: t, onConfirm: e, ...o } = n,
          d =
            t === l.K.STREAM
              ? a.intl.string(a.t["/lFMWl"])
              : a.intl.string(a.t.xzxhZW),
          c =
            t === l.K.STREAM
              ? a.intl.string(a.t.xaOX7e)
              : a.intl.string(a.t.oU1p9P);
        return (0, i.jsx)(u.default, {
          confirmText: a.intl.string(a.t["cY+Ooa"]),
          secondaryConfirmText: a.intl.string(a.t["JdIQ/f"]),
          title: d,
          cancelText: a.intl.string(a.t["ETE/oK"]),
          onConfirm: e,
          onConfirmSecondary: () => {
            r.ZP.updatedUnsyncedSettings({
              disableHideSelfStreamAndVideoConfirmationAlert: !0,
            }),
              e();
          },
          body: c,
          ...o,
        });
      }
    },
    441061: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return d;
        },
      });
      var i = e(200651);
      e(192379);
      var r = e(442837),
        u = e(481060),
        l = e(475179),
        a = e(358221),
        o = e(388032);
      function d(n) {
        let t = (0, r.e7)([a.Z], () => a.Z.getVoiceParticipantsHidden(n));
        return (0, i.jsx)(u.MenuCheckboxItem, {
          id: "no-video-hide",
          label: o.intl.string(o.t.BL8ss7),
          checked: !t,
          action: () => l.Z.toggleVoiceParticipantsHidden(n, !t),
        });
      }
    },
    167675: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return f;
        },
      }),
        e(47120);
      var i = e(200651);
      e(192379);
      var r = e(442837),
        u = e(481060),
        l = e(740492),
        a = e(27584),
        o = e(295510),
        d = e(394059),
        c = e(65154),
        s = e(388032);
      function f(n) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : c.Yn.DEFAULT,
          [e, f, E] = (0, a.Z)(n, t),
          _ = (0, r.e7)(
            [l.ZP],
            () => l.ZP.disableHideSelfStreamAndVideoConfirmationAlert,
          );
        return e
          ? (0, i.jsx)(u.MenuCheckboxItem, {
              id: "self-video-hide",
              label: s.intl.string(s.t.MH8ESU),
              checked: !f,
              action: () => {
                if (_ || f) return E(!f);
                (0, u.openModal)((n) =>
                  (0, i.jsx)(o.Z, {
                    ...n,
                    type: d.K.VIDEO,
                    onConfirm: () => E(!f),
                  }),
                );
              },
            })
          : null;
      }
    },
    776568: function (n, t, e) {
      e.d(t, {
        ZP: function () {
          return C;
        },
        k: function () {
          return A;
        },
      }),
        e(47120);
      var i = e(200651);
      e(192379);
      var r = e(913527),
        u = e.n(r),
        l = e(442837),
        a = e(481060),
        o = e(211739),
        d = e(87051),
        c = e(496729),
        s = e(777861),
        f = e(9156),
        E = e(621600),
        _ = e(933557),
        p = e(981631),
        m = e(969943),
        N = e(388032);
      let A = () => [
          { value: m.Oe.MINUTES_15, label: N.intl.string(N.t["8ot6go"]) },
          { value: m.Oe.HOURS_1, label: N.intl.string(N.t.UMWBZm) },
          { value: m.Oe.HOURS_3, label: N.intl.string(N.t.QmYWtr) },
          { value: m.Oe.HOURS_8, label: N.intl.string(N.t.EpAXPD) },
          { value: m.Oe.HOURS_24, label: N.intl.string(N.t["755t4u"]) },
          { value: m.Oe.ALWAYS, label: N.intl.string(N.t.r3LawM) },
        ],
        h = (n) => {
          let t = n > 0 ? u()().add(n, "second").toISOString() : null;
          return {
            muted: !0,
            mute_config: { selected_time_window: n, end_time: t },
          };
        };
      function C(n, t) {
        let [e, r] = (0, l.Wu)([f.ZP], () => [
            f.ZP.isChannelMuted(n.guild_id, n.id),
            f.ZP.getChannelMuteConfig(n.guild_id, n.id),
          ]),
          u = (0, s.U)(r),
          m = (0, _.ZP)(n, !0);
        function C(t) {
          t && n.type === p.d4z.GUILD_CATEGORY && (0, o.c4)(n.id),
            d.Z.updateChannelOverrideSettings(
              n.guild_id,
              n.id,
              { muted: t },
              E.UE.muted(t),
            );
        }
        let T = N.intl.string(N.t.tbeRRE),
          I = N.intl.string(N.t.OYefmZ);
        switch (n.type) {
          case p.d4z.GUILD_CATEGORY:
            (T = N.intl.string(N.t.pNMCg4)), (I = N.intl.string(N.t.olaBeH));
            break;
          case p.d4z.GROUP_DM:
            (T = N.intl.string(N.t.LO3kaG)), (I = N.intl.string(N.t["s5/5fn"]));
            break;
          case p.d4z.DM:
            (T = N.intl.format(N.t.byjuJi, { name: m })),
              (I = N.intl.format(N.t["eC+9rq"], { name: m }));
            break;
          default:
            (T = N.intl.string(N.t.tbeRRE)), (I = N.intl.string(N.t.OYefmZ));
        }
        return e
          ? (0, i.jsx)(a.MenuItem, {
              id: "unmute-channel",
              label: I,
              subtext: u,
              action: () => C(!1),
            })
          : (0, i.jsx)(a.MenuItem, {
              id: "mute-channel",
              label: T,
              action: () => {
                C(!0),
                  (0, c.s)({
                    channelId: n.id,
                    location: "channel_context_menu",
                  });
              },
              children: A().map((e) => {
                let { value: r, label: u } = e;
                return (0, i.jsx)(
                  a.MenuItem,
                  {
                    id: "".concat(r),
                    label: u,
                    action: () =>
                      (function (e) {
                        n.type === p.d4z.GUILD_CATEGORY && (0, o.c4)(n.id);
                        let i = h(e);
                        d.Z.updateChannelOverrideSettings(
                          n.guild_id,
                          n.id,
                          i,
                          E.ZB.Muted,
                          t,
                        );
                      })(r),
                  },
                  r,
                );
              }),
            });
      }
    },
    117984: function (n, t, e) {
      e.d(t, {
        CM: function () {
          return p;
        },
        UT: function () {
          return _;
        },
        _Z: function () {
          return h;
        },
        kj: function () {
          return f;
        },
        oC: function () {
          return E;
        },
        s3: function () {
          return N;
        },
        uA: function () {
          return A;
        },
        xh: function () {
          return m;
        },
      }),
        e(47120);
      var i = e(524437),
        r = e(675478),
        u = e(592125),
        l = e(496675),
        a = e(709054),
        o = e(853856),
        d = e(231338);
      function c() {
        let n = o.Z.getFavoriteChannels(),
          t = 1;
        for (let e in n) t = Math.max(t, n[e].order);
        return t + 1;
      }
      function s(n) {
        for (let t in n) {
          let e = n[t];
          if (null == e) {
            delete n[t];
            continue;
          }
          if (e.type === i.Dd.CATEGORY) continue;
          let r = u.Z.getChannel(t);
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
        if (!o.Z.isFavorite(n))
          r.hW.updateAsync(
            "favorites",
            (e) => {
              (e.favoriteChannels[n] = i.aV.create({
                nickname: "",
                type: i.Dd.REFERENCE_ORIGINAL,
                position: c(),
                parentId: null != t ? t : "0",
              })),
                s(e.favoriteChannels);
            },
            r.fy.FREQUENT_USER_ACTION,
          );
      }
      function E(n) {
        let t = o.Z.getFavorite(n);
        if (null != t)
          r.hW.updateAsync(
            "favorites",
            (e) => {
              if ((delete e.favoriteChannels[n], t.type === i.Dd.CATEGORY))
                for (let t in e.favoriteChannels)
                  e.favoriteChannels[t].parentId === n &&
                    (e.favoriteChannels[t].parentId = "0");
              s(e.favoriteChannels);
            },
            r.fy.INFREQUENT_USER_ACTION,
          );
      }
      function _(n, t) {
        if (!!o.Z.isFavorite(n))
          r.hW.updateAsync(
            "favorites",
            (e) => {
              e.favoriteChannels[n].nickname = null != t ? t : "";
            },
            r.fy.INFREQUENT_USER_ACTION,
          );
      }
      function p(n) {
        let t = a.default.fromTimestamp(Date.now());
        r.hW.updateAsync(
          "favorites",
          (e) => {
            e.favoriteChannels[t] = i.aV.create({
              nickname: n,
              type: i.Dd.CATEGORY,
              position: c(),
              parentId: "0",
            });
          },
          r.fy.FREQUENT_USER_ACTION,
        );
      }
      function m(n) {
        E(n);
      }
      function N(n) {
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
      function A(n, t) {
        r.hW.updateAsync(
          "favorites",
          (e) => {
            e.favoriteChannels[n].parentId = null != t ? t : "0";
          },
          r.fy.FREQUENT_USER_ACTION,
        );
      }
      function h() {
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
          return p;
        },
        li: function () {
          return f;
        },
        s4: function () {
          return E;
        },
        up: function () {
          return m;
        },
        zv: function () {
          return _;
        },
      }),
        e(47120),
        e(653041);
      var i = e(192379),
        r = e(106351),
        u = e(442837);
      e(592125);
      var l = e(984933),
        a = e(914010);
      e(709054);
      var o = e(853856),
        d = e(362658),
        c = e(434065),
        s = e(981631);
      function f(n) {
        let { favoritesEnabled: t, hasStaffPrivileges: e } = (0, d.z)(
            "useCanFavoriteChannel",
          ),
          i = (0, u.e7)([o.Z], () => o.Z.isFavorite(n.id)),
          r = n.isDM() || n.isThread();
        return t && !__OVERLAY__ && !i && (!r || e);
      }
      function E(n) {
        return (0, u.e7)([o.Z], () => o.Z.getFavorite(n));
      }
      function _() {
        return (0, u.e7)([l.ZP], () => l.ZP.getChannels(s.I_8))[
          r.d.GUILD_CATEGORY
        ].map((n) => ({
          id: "null" === n.channel.id ? null : n.channel.id,
          name: n.channel.name,
        }));
      }
      function p() {
        return (0, u.e7)([a.Z], () => a.Z.getGuildId()) === s.I_8;
      }
      function m() {
        let { isFavoritesPerk: n } = (0, d.z)("useFavoriteAdded"),
          t = (0, c.r)(),
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
          return u;
        },
      });
      var i = e(905837),
        r = e(731965);
      let u = (0, i.Ue)((n) => ({
        favoriteAdded: !1,
        notifyFavoriteAdded: () => (0, r.j)(() => n({ favoriteAdded: !0 })),
        clearFavoriteAdded: () => (0, r.j)(() => n({ favoriteAdded: !1 })),
      }));
    },
    276022: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return m;
        },
      }),
        e(653041);
      var i = e(200651),
        r = e(192379),
        u = e(442837),
        l = e(481060),
        a = e(139387),
        o = e(230711),
        d = e(213459),
        c = e(434404),
        s = e(795594),
        f = e(430824),
        E = e(496675),
        _ = e(981631),
        p = e(388032);
      function m(n) {
        var t;
        let {
            user: m,
            application: N,
            guildId: A,
            context: h,
            onItemClick: C,
          } = n,
          T =
            null !== (t = null == N ? void 0 : N.id) && void 0 !== t
              ? t
              : null == m
                ? void 0
                : m.id,
          I = f.Z.getGuild(A),
          g = (0, u.e7)([E.Z], () =>
            null != I ? E.Z.can(_.Plq.MANAGE_GUILD, I) : null,
          ),
          v = (0, d.LD)(A, !0),
          O = (0, d.PL)(!0, !0),
          { isUserApp: R, isGuildApp: S } = r.useMemo(() => {
            var n, t, e, i;
            if (null == T) return { isGuildApp: !1, isUserApp: !1 };
            let r = Object.values(
                null !==
                  (e =
                    null === (n = v.result) || void 0 === n
                      ? void 0
                      : n.sections) && void 0 !== e
                  ? e
                  : {},
              ),
              u = Object.values(
                null !==
                  (i =
                    null === (t = O.result) || void 0 === t
                      ? void 0
                      : t.sections) && void 0 !== i
                  ? i
                  : {},
              );
            return {
              isGuildApp: r.some((n) => {
                var t;
                return (
                  (null === (t = n.descriptor.application) || void 0 === t
                    ? void 0
                    : t.id) === T
                );
              }),
              isUserApp: u.some((n) => {
                var t;
                return (
                  (null === (t = n.descriptor.application) || void 0 === t
                    ? void 0
                    : t.id) === T
                );
              }),
            };
          }, [v, O, T]);
        r.useEffect(() => {
          e(360606);
        }, []);
        let P = r.useCallback(() => {
            if ((null == I ? void 0 : I.id) != null)
              c.Z.open(I.id, _.pNK.INTEGRATIONS),
                a.Z.setSection(_.b4C.APPLICATION, T),
                null == C || C();
          }, [T, null == I ? void 0 : I.id, C]),
          Z = r.useCallback(() => {
            o.Z.open(_.oAB.AUTHORIZED_APPS);
            let n = "";
            null != N ? (n = N.name) : null != m && (n = m.username),
              "" !== n && s.J.setState({ searchQuery: n }),
              null == C || C();
          }, [N, C, m]);
        if (h === _.IlC.POPOUT) return null;
        let M = [];
        return (
          S &&
            g &&
            M.push(
              (0, i.jsx)(
                l.MenuItem,
                {
                  id: "manage-server-integration",
                  label: p.intl.string(p.t.IuSJT0),
                  action: P,
                },
                "manage-server-integration",
              ),
            ),
          R &&
            M.push(
              (0, i.jsx)(
                l.MenuItem,
                {
                  id: "manage-authorized-app",
                  label: p.intl.string(p.t.V8ruv7),
                  action: Z,
                },
                "manage-authorized-app",
              ),
            ),
          M
        );
      }
    },
    97797: function (n, t, e) {
      e.d(t, {
        i: function () {
          return u;
        },
      });
      var i = e(981631),
        r = e(388032);
      function u(n) {
        let {
          username: t,
          usernameOnClickHandler: e = i.dG4,
          productName: u,
        } = n;
        return r.intl.formatToParts(r.t.w4iXs7, {
          username: t,
          usernameHook: e,
          productName: u,
        });
      }
    },
    523361: function (n, t, e) {
      e.d(t, {
        HG: function () {
          return a;
        },
        Md: function () {
          return l;
        },
        Q8: function () {
          return u;
        },
      });
      var i = e(373228),
        r = e(388032);
      let u = () => [r.intl.string(r.t.b6wEe3), r.intl.string(r.t.i8o9hY)],
        l = () => [r.intl.string(r.t.vqnToa), r.intl.string(r.t["9yh+dH"])],
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
    35125: function (n, t, e) {
      e.d(t, {
        PA: function () {
          return s;
        },
        Tn: function () {
          return c;
        },
        _i: function () {
          return N;
        },
        eI: function () {
          return p;
        },
        vp: function () {
          return _;
        },
        y8: function () {
          return m;
        },
      });
      var i = e(367907),
        r = e(200876),
        u = e(430824),
        l = e(594174);
      e(709054), e(523361);
      var a = e(981631),
        o = e(388032);
      function d(n) {
        return n;
      }
      function c(n) {
        let {
            username: t,
            usernameOnClickHandler: e,
            roleSubscriptionOnClickHandler: i,
            guildId: r,
            roleSubscriptionData: u,
          } = n,
          { content: l, formatParams: a } = E({
            username: t,
            usernameOnClickHandler: e,
            roleSubscriptionOnClickHandler: i,
            guildId: r,
            roleSubscriptionData: u,
          });
        return o.intl.format(l, a);
      }
      function s(n) {
        let {
            username: t,
            usernameOnClickHandler: e,
            roleSubscriptionOnClickHandler: i,
            guildId: r,
            roleSubscriptionData: u,
          } = n,
          { content: l, formatParams: a } = E({
            username: t,
            usernameOnClickHandler: e,
            roleSubscriptionOnClickHandler: i,
            guildId: r,
            roleSubscriptionData: u,
          });
        return o.intl.formatToParts(l, a);
      }
      function f(n, t) {
        var e, i;
        let r = u.Z.getGuild(n),
          l =
            null !== (e = null == t ? void 0 : t.total_months_subscribed) &&
            void 0 !== e
              ? e
              : 0;
        return {
          guild: r,
          totalMonthsSubscribed: l,
          showWithDuration: l > 0,
          isRenewal:
            null !== (i = null == t ? void 0 : t.is_renewal) &&
            void 0 !== i &&
            i,
        };
      }
      function E(n) {
        let t,
          {
            username: e,
            usernameOnClickHandler: i = d,
            roleSubscriptionOnClickHandler: r = a.dG4,
            guildId: u,
            roleSubscriptionData: l,
          } = n,
          {
            guild: c,
            totalMonthsSubscribed: s,
            showWithDuration: E,
            isRenewal: _,
          } = f(u, l);
        return (
          (t = E ? (_ ? o.t.Iy66Mz : o.t.eCgb2d) : _ ? o.t.mPTTdn : o.t.mYjFFx),
          {
            content: t,
            formatParams: {
              username: e,
              usernameHook: i,
              guildName: null == c ? void 0 : c.name,
              handleGuildNameClick: r,
              tierName: null == l ? void 0 : l.tier_name,
              months: s,
            },
          }
        );
      }
      function _(n) {
        let t,
          {
            username: e,
            usernameOnClickHandler: i = d,
            roleSubscriptionOnClickHandler: r = a.dG4,
            guildId: u,
            roleSubscriptionData: l,
          } = n,
          {
            guild: c,
            totalMonthsSubscribed: s,
            showWithDuration: E,
            isRenewal: _,
          } = f(u, l);
        return (
          (t = E
            ? _
              ? o.t.OQ0OU1
              : o.t["+N9bxs"]
            : _
              ? o.t.OxP1ND
              : o.t["6Z1E+/"]),
          o.intl.formatToParts(t, {
            guildName: null == c ? void 0 : c.name,
            tierName: null == l ? void 0 : l.tier_name,
            username: e,
            usernameOnClick: i,
            roleSubscriptionOnClick: r,
            months: s,
          })
        );
      }
      function p(n) {
        return (0, r.l)(n);
      }
      function m(n, t, e, r) {
        var u;
        i.ZP.trackWithMetadata(
          a.rMx.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CLICKED,
          {
            guild_id: n,
            user_id:
              null === (u = l.default.getCurrentUser()) || void 0 === u
                ? void 0
                : u.id,
            channel_id: t,
            message_id: e,
            role_subscription_listing_id: r,
          },
        );
      }
      function N(n, t) {
        var e;
        return {
          guild_id: n.guild_id,
          sender:
            null === (e = l.default.getCurrentUser()) || void 0 === e
              ? void 0
              : e.id,
          target_user: t.author.id,
          channel_id: n.id,
          message_id: t.id,
        };
      }
    },
    978983: function (n, t, e) {
      var i = e(200651);
      e(192379);
      var r = e(481060),
        u = e(808647);
      t.Z = () =>
        (0, i.jsx)("div", {
          className: u.loadingWrapper,
          children: (0, i.jsx)(r.Dots, { dotRadius: 4, themed: !0 }),
        });
    },
    823162: function (n, t, e) {
      e.d(t, {
        Xy: function () {
          return c;
        },
        e4: function () {
          return o;
        },
        gN: function () {
          return s;
        },
        hi: function () {
          return E;
        },
        qR: function () {
          return d;
        },
        r_: function () {
          return f;
        },
      });
      var i = e(544891),
        r = e(570140),
        u = e(893776),
        l = e(290323),
        a = e(981631);
      async function o(n) {
        await i.tn.put({
          url: a.ANM.CHANNEL_RECIPIENT_ME(n),
          body: { consent_status: l.h.ACCEPTED },
        }),
          r.Z.dispatch({
            type: "MESSAGE_REQUEST_ACCEPT_OPTIMISTIC",
            channelId: n,
          });
      }
      function d(n) {
        return i.tn.put({
          url: a.ANM.CHANNEL_RECIPIENT_ME(n),
          body: { consent_status: l.h.UNSPECIFIED },
        });
      }
      function c(n) {
        return i.tn.put({
          url: a.ANM.CHANNEL_RECIPIENT_ME(n),
          body: { consent_status: l.h.PENDING },
        });
      }
      function s(n) {
        return i.tn.del({ url: a.ANM.CHANNEL_RECIPIENT_ME(n) });
      }
      function f(n) {
        return i.tn.put({
          url: a.ANM.CHANNEL_RECIPIENT_REJECT_BATCH(),
          body: { channel_ids: n },
        });
      }
      function E() {
        u.Z.getLocationMetadata();
      }
    },
    290323: function (n, t, e) {
      var i, r;
      e.d(t, {
        h: function () {
          return i;
        },
      }),
        ((r = i || (i = {}))[(r.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (r[(r.PENDING = 1)] = "PENDING"),
        (r[(r.ACCEPTED = 2)] = "ACCEPTED"),
        (r[(r.REJECTED = 3)] = "REJECTED");
    },
    759198: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return o;
        },
      });
      var i = e(200651);
      e(192379);
      var r = e(120356),
        u = e.n(r),
        l = e(481060),
        a = e(954614);
      function o(n) {
        let { className: t, color: e, ...r } = n;
        return (0, i.jsx)(l.Text, {
          className: u()({ [a.text]: null == e }, t),
          color: e,
          ...r,
        });
      }
    },
    499401: function (n, t, e) {
      e.d(t, {
        Y: function () {
          return r;
        },
      });
      var i = e(388032);
      function r(n) {
        let { application: t, username: e, usernameOnClick: r } = n;
        return null != t
          ? i.intl.formatToParts(i.t.Tes5Oj, {
              username: e,
              applicationName: t.name,
              usernameOnClick: r,
            })
          : i.intl.formatToParts(i.t.PUJtgo, {
              username: e,
              usernameOnClick: r,
            });
      }
    },
    693912: function (n, t, e) {
      e.d(t, {
        B2: function () {
          return o;
        },
        DS: function () {
          return l;
        },
        hj: function () {
          return d;
        },
        nh: function () {
          return a;
        },
      });
      var i = e(63063),
        r = e(981631),
        u = e(388032);
      function l(n) {
        let {
          application: t,
          username: e,
          usernameHook: l = r.dG4,
          applicationNameHook: a = r.dG4,
        } = n;
        return null != t
          ? u.intl.format(u.t.J8SaGx, {
              username: e,
              otherUsername: t.name,
              usernameHook: l,
              otherUsernameHook: a,
              helpCenterLink: i.Z.getArticleURL(
                r.BhN.PRIVATE_CHANNEL_INTEGRATIONS,
              ),
            })
          : u.intl.format(u.t["+6V2sb"], {
              username: e,
              usernameHook: l,
              helpCenterLink: i.Z.getArticleURL(
                r.BhN.PRIVATE_CHANNEL_INTEGRATIONS,
              ),
            });
      }
      function a(n) {
        let {
          application: t,
          username: e,
          usernameHook: l = r.dG4,
          applicationNameHook: a = r.dG4,
        } = n;
        return null != t
          ? u.intl.format(u.t.eGCDam, {
              username: e,
              otherUsername: t.name,
              usernameHook: l,
              otherUsernameHook: a,
              helpCenterLink: i.Z.getArticleURL(
                r.BhN.PRIVATE_CHANNEL_INTEGRATIONS,
              ),
            })
          : u.intl.format(u.t.sAX6rq, {
              username: e,
              usernameHook: l,
              helpCenterLink: i.Z.getArticleURL(
                r.BhN.PRIVATE_CHANNEL_INTEGRATIONS,
              ),
            });
      }
      function o(n) {
        let {
          application: t,
          username: e,
          usernameOnClick: l,
          applicationNameOnClick: a,
          medium: o,
        } = n;
        return null != t
          ? u.intl.formatToParts(u.t["8r+Z+P"], {
              username: e,
              otherUsername: t.name,
              usernameOnClick: l,
              otherUsernameOnClick: a,
              medium: o,
              helpCenterLink: {
                url: i.Z.getArticleURL(r.BhN.PRIVATE_CHANNEL_INTEGRATIONS),
              },
            })
          : u.intl.formatToParts(u.t.ojysqa, {
              username: e,
              usernameOnClick: l,
              medium: o,
              helpCenterLink: {
                url: i.Z.getArticleURL(r.BhN.PRIVATE_CHANNEL_INTEGRATIONS),
              },
            });
      }
      function d(n) {
        let {
          application: t,
          username: e,
          usernameOnClick: l,
          applicationNameOnClick: a,
          medium: o,
        } = n;
        return null != t
          ? u.intl.formatToParts(u.t.zmc0mp, {
              username: e,
              otherUsername: t.name,
              usernameOnClick: l,
              otherUsernameOnClick: a,
              medium: o,
              helpCenterLink: {
                url: i.Z.getArticleURL(r.BhN.PRIVATE_CHANNEL_INTEGRATIONS),
              },
            })
          : u.intl.formatToParts(u.t["x2CN/f"], {
              username: e,
              usernameOnClick: l,
              medium: o,
              helpCenterLink: {
                url: i.Z.getArticleURL(r.BhN.PRIVATE_CHANNEL_INTEGRATIONS),
              },
            });
      }
    },
    977059: function (n, t, e) {
      e.d(t, {
        R: function () {
          return u;
        },
        S: function () {
          return r;
        },
      });
      let i = (0, e(987170).Z)({
        kind: "user",
        id: "2024-05_secure_frames_ui_rollout",
        label: "Secure Frames Rollout",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled.", config: { enabled: !0 } }],
      });
      function r(n) {
        let { location: t } = n;
        return i.useExperiment({ location: t }, { autoTrackExposure: !0 });
      }
      function u(n) {
        let { location: t } = n;
        return i.getCurrentConfig({ location: t }, { autoTrackExposure: !0 });
      }
    },
    441894: function (n, t, e) {
      e.d(t, {
        J: function () {
          return o;
        },
      }),
        e(47120);
      var i = e(442837),
        r = e(592125),
        u = e(19780),
        l = e(977059),
        a = e(760373);
      function o(n) {
        let { channelId: t, location: e } = n,
          { enabled: o } = (0, l.S)({ location: e });
        return (0, i.e7)(
          [u.Z, r.Z],
          () =>
            (function (n, t) {
              var e;
              let [i, l] =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : [u.Z, r.Z];
              if (!t || null == n || i.getChannelId() !== n) return !1;
              let o = l.getChannel(n);
              if (null == o || o.isGuildStageVoice()) return !1;
              let d =
                null === (e = i.getSecureFramesState()) || void 0 === e
                  ? void 0
                  : e.version;
              return null != d && d !== a.Eg;
            })(t, o, [u.Z, r.Z]),
          [t, o],
        );
      }
    },
    897769: function (n, t, e) {
      e.d(t, {
        S: function () {
          return u;
        },
      });
      var i = e(442837),
        r = e(359119);
      function u(n, t) {
        return (0, i.e7)([r.ZP], () => r.ZP.getChannelSafetyWarnings(n), [n])
          .filter((n) => n.type === t)
          .find((n) => null == n.dismiss_timestamp);
      }
    },
    981312: function (n, t, e) {
      e.d(t, {
        U: function () {
          return u;
        },
      });
      var i = e(442837),
        r = e(594174);
      function u() {
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
    13279: function (n, t, e) {
      e.d(t, {
        z: function () {
          return o;
        },
      });
      var i = e(359119),
        r = e(897769),
        u = e(237292),
        l = e(403485),
        a = e(604849);
      function o(n, t) {
        let e = (0, u.y0)({ location: t }),
          o = (0, a.c)(),
          d = (0, l.h)(n),
          c = (0, r.S)(n, i.pj.INAPPROPRIATE_CONVERSATION_TIER_2);
        if (
          !(
            !e ||
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
          return c;
      }
    },
    403485: function (n, t, e) {
      e.d(t, {
        h: function () {
          return u;
        },
      });
      var i = e(442837),
        r = e(359119);
      function u(n) {
        return (0, i.e7)([r.ZP], () => r.ZP.getChannelSafetyWarnings(n), [
          n,
        ]).filter(
          (n) =>
            n.type === r.pj.INAPPROPRIATE_CONVERSATION_TIER_1 ||
            n.type === r.pj.INAPPROPRIATE_CONVERSATION_TIER_2,
        );
      }
    },
    604849: function (n, t, e) {
      e.d(t, {
        c: function () {
          return l;
        },
      });
      var i = e(442837),
        r = e(581883),
        u = e(981312);
      let l = () => {
        let n = (0, i.e7)([r.Z], () => {
          var n, t, e;
          return (
            null ===
              (e =
                null === (t = r.Z.settings.privacy) || void 0 === t
                  ? void 0
                  : null === (n = t.inappropriateConversationWarnings) ||
                      void 0 === n
                    ? void 0
                    : n.value) ||
            void 0 === e ||
            e
          );
        });
        return (0, u.U)() && n;
      };
    },
    305587: function (n, t, e) {
      e.d(t, {
        Xs: function () {
          return r;
        },
      });
      let i = (0, e(818083).B)({
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
        let { enabled: t } = i.getCurrentConfig(
          { location: n },
          { autoTrackExposure: !0 },
        );
        return t;
      }
    },
    496729: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return s;
        },
        s: function () {
          return c;
        },
      });
      var i = e(200651),
        r = e(704215),
        u = e(481060),
        l = e(570140),
        a = e(605236),
        o = e(592125),
        d = e(305587);
      function c(n) {
        let { channelId: t, location: e } = n,
          i = o.Z.getChannel(t),
          u = (0, a.un)(r.z.USER_DM_MUTE_FEEDBACK);
        if (null != i && !!i.isDM() && !u)
          (0, d.Xs)(e) &&
            l.Z.dispatch({ type: "USER_DM_MUTE_SHOW_FEEDBACK", channel: i });
      }
      function s() {
        (0, u.openModalLazy)(async () => {
          let { default: n } = await e.e("87995").then(e.bind(e, 180970));
          return (t) => (0, i.jsx)(n, { ...t });
        });
      }
    },
    471253: function (n, t, e) {
      e.d(t, {
        DT: function () {
          return I;
        },
        Ef: function () {
          return R;
        },
        HO: function () {
          return O;
        },
        NZ: function () {
          return S;
        },
        Pq: function () {
          return v;
        },
        Q1: function () {
          return A;
        },
        RK: function () {
          return C;
        },
        _0: function () {
          return h;
        },
        hz: function () {
          return g;
        },
        yi: function () {
          return T;
        },
      });
      var i = e(512722),
        r = e.n(i),
        u = e(149765),
        l = e(544891),
        a = e(493683);
      e(749210);
      var o = e(911969),
        d = e(367907),
        c = e(944486),
        s = e(979651),
        f = e(700785),
        E = e(922482),
        _ = e(192079),
        p = e(706058),
        m = e(590415),
        N = e(981631);
      function A(n, t) {
        let e = n.getGuildId();
        return (
          r()(null != e, "This channel cannot be guildless."),
          t && (0, d.yw)(N.rMx.REQUEST_TO_SPEAK_INITIATED, { ...(0, _.s$)(n) }),
          l.tn.patch({
            url: N.ANM.UPDATE_VOICE_STATE(e),
            body: {
              request_to_speak_timestamp: t ? new Date().toISOString() : null,
              channel_id: n.id,
            },
          })
        );
      }
      function h(n, t) {
        let e = n.getGuildId();
        return (
          r()(null != e, "This channel cannot be guildless."),
          l.tn.patch({
            url: N.ANM.UPDATE_VOICE_STATE(e, t),
            body: {
              suppress: !1,
              request_to_speak_timestamp: new Date().toISOString(),
              channel_id: n.id,
            },
          })
        );
      }
      function C(n, t) {
        let e = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          i = null == n ? void 0 : n.getGuildId();
        r()(null != i, "This channel cannot be guildless.");
        let u = s.Z.getVoiceStateForChannel(n.id);
        return (
          (0, m.gf)(u) === m.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK &&
            !t &&
            (0, d.yw)(N.rMx.PROMOTED_TO_SPEAKER, { ...(0, _.s$)(n) }),
          l.tn.patch({
            url: N.ANM.UPDATE_VOICE_STATE(i),
            body: {
              suppress: t,
              request_to_speak_timestamp: null,
              channel_id: n.id,
              ...(e ? { silent: e } : {}),
            },
          })
        );
      }
      function T(n) {
        let t = null == n ? void 0 : n.getGuildId();
        return (
          r()(null != t, "This channel cannot be guildless."),
          l.tn.patch({
            url: N.ANM.UPDATE_VOICE_STATE(t),
            body: {
              suppress: !0,
              channel_id: n.id,
              self_video: !1,
              self_stream: !1,
            },
          })
        );
      }
      function I(n, t, e) {
        let i = n.getGuildId();
        return (
          r()(null != i, "This channel cannot be guildless."),
          l.tn.patch({
            url: N.ANM.UPDATE_VOICE_STATE(i, t),
            body: { suppress: e, channel_id: n.id },
          })
        );
      }
      function g(n, t) {
        if (null == t || null == n) return;
        let e = t.getGuildId();
        return (
          r()(null != e, "This channel cannot be guildless."),
          I(t, n.id, !0),
          l.tn.patch({
            url: N.ANM.UPDATE_VOICE_STATE(e, n.id),
            body: {
              suppress: !0,
              channel_id: t.id,
              self_video: !1,
              self_stream: !1,
            },
          })
        );
      }
      function v(n, t, e) {
        let i = n.getGuildId();
        r()(null != i, "Channel cannot be guildless");
        let l = n.permissionOverwrites[i],
          d = { id: i, type: o.BN.ROLE, allow: f.Hn, deny: f.Hn, ...l };
        e
          ? ((d.allow = u.IH(d.allow, t)), (d.deny = u.Od(d.deny, t)))
          : ((d.allow = u.Od(d.allow, t)), (d.deny = u.IH(d.deny, t))),
          a.Z.updatePermissionOverwrite(n.id, d);
      }
      async function O(n, t, e, i) {
        if ("" === t) return;
        c.Z.getVoiceChannelId() !== n.id && (0, E.TM)(n);
        let r = await (0, p.me)(n.id, t, e, i);
        return C(n, !1, !0), r;
      }
      async function R(n, t, e) {
        if ("" !== t) return await (0, p.Dk)(n.id, t, e);
      }
      async function S(n) {
        await (0, p.Ix)(n.id);
      }
    },
    192079: function (n, t, e) {
      e.d(t, {
        ER: function () {
          return s;
        },
        kk: function () {
          return f;
        },
        s$: function () {
          return E;
        },
      }),
        e(724458),
        e(47120),
        e(392711);
      var i = e(19780),
        r = e(5192),
        u = e(700785),
        l = e(427679),
        a = e(157925),
        o = e(981631),
        d = e(71080),
        c = e(388032);
      function s(n, t, e, i) {
        let u = t[0],
          l = r.ZP.getName(n, e, u),
          a = null != i ? i : t.length;
        return 1 === a && null != u
          ? l
          : null == u
            ? c.intl.formatToPlainString(c.t.chmM9P, { count: a })
            : c.intl.formatToPlainString(c.t.GhkJ29, { name: l, count: a - 1 });
      }
      function f(n, t) {
        switch (n) {
          case d.aC.OWNER:
            return c.intl.string(c.t.icuNBA);
          case d.aC.ADMINISTRATOR:
            return c.intl.string(c.t.eTmN5e);
          case d.aC.MEMBER:
          case d.aC.ROLE:
            return t ? c.intl.string(c.t.Hw3XW1) : c.intl.string(c.t.YieyPj);
          case d.aC.EMPTY_STATE:
        }
        return null;
      }
      function E(n) {
        let t = l.Z.getStageInstanceByChannel(n.id);
        return {
          channel_id: n.id,
          guild_id: n.guild_id,
          topic: null == t ? void 0 : t.topic,
          media_session_id: i.Z.getMediaSessionId(),
          request_to_speak_state: u.Uu(o.Plq.REQUEST_TO_SPEAK, n)
            ? a.BM.EVERYONE
            : a.BM.NO_ONE,
          stage_instance_id: null == t ? void 0 : t.id,
        };
      }
    },
    706058: function (n, t, e) {
      e.d(t, {
        Dk: function () {
          return l;
        },
        Ix: function () {
          return a;
        },
        me: function () {
          return u;
        },
      });
      var i = e(544891),
        r = e(981631);
      async function u(n, t, e, u, l) {
        return (
          await i.tn.post({
            url: r.ANM.STAGE_INSTANCES,
            body: {
              channel_id: n,
              topic: t,
              privacy_level: e,
              guild_scheduled_event_id: l,
              send_start_notification: u,
            },
          })
        ).body;
      }
      async function l(n, t, e) {
        return (
          await i.tn.patch({
            url: r.ANM.STAGE_INSTANCE(n),
            body: { topic: t, privacy_level: e },
          })
        ).body;
      }
      function a(n) {
        return i.tn.del(r.ANM.STAGE_INSTANCE(n));
      }
    },
    623633: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return l;
        },
      });
      var i = e(442837),
        r = e(592125),
        u = e(944486);
      function l() {
        return (0, i.e7)([u.Z, r.Z], () => {
          let n = u.Z.getVoiceChannelId();
          if (null != n) {
            let t = r.Z.getChannel(n);
            if (null == t ? void 0 : t.isGuildStageVoice()) return t;
          }
          return null;
        });
      }
    },
    723170: function (n, t, e) {
      e.d(t, {
        B: function () {
          return s;
        },
        J: function () {
          return c;
        },
      }),
        e(789020);
      var i = e(442837),
        r = e(592125),
        u = e(9156),
        l = e(630388),
        a = e(569471),
        o = e(124368),
        d = e(981631);
      function c(n) {
        let t = a.Z.flags(n.id);
        if (null == t) return o.iN.NO_MESSAGES;
        if ((0, l.yE)(t, o.iN.ALL_MESSAGES)) return o.iN.ALL_MESSAGES;
        if ((0, l.yE)(t, o.iN.ONLY_MENTIONS)) return o.iN.ONLY_MENTIONS;
        if ((0, l.yE)(t, o.iN.NO_MESSAGES)) return o.iN.NO_MESSAGES;
        let e = r.Z.getChannel(n.parent_id);
        if (null == e || u.ZP.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id))
          return o.iN.NO_MESSAGES;
        let i = u.ZP.resolvedMessageNotifications(e);
        return i === d.bL.NO_MESSAGES
          ? o.iN.NO_MESSAGES
          : i === d.bL.ONLY_MENTIONS
            ? o.iN.ONLY_MENTIONS
            : o.iN.ALL_MESSAGES;
      }
      function s(n) {
        return (0, i.e7)([a.Z, u.ZP, r.Z], () => c(n), [n]);
      }
    },
    570870: function (n, t, e) {
      var i = e(200651),
        r = e(192379),
        u = e(512722),
        l = e.n(u),
        a = e(442837),
        o = e(481060),
        d = e(10718),
        c = e(667204),
        s = e(826298),
        f = e(276022),
        E = e(978983),
        _ = e(430824),
        p = e(594174),
        m = e(981631),
        N = e(689079),
        A = e(388032),
        h = e(418776);
      t.Z = (n) => {
        let t,
          {
            commandType: e,
            commandTargetId: u,
            channel: C,
            guildId: T,
            onHeightUpdate: I,
            context: g,
          } = n,
          v = (0, a.e7)([_.Z], () => _.Z.getGuild(null != T ? T : C.guild_id)),
          O = (0, a.e7)([p.default], () => p.default.getUser(u)),
          R = (0, f.Z)({
            user: O,
            guildId: null == v ? void 0 : v.id,
            context: g,
          }),
          {
            commands: S,
            sectionDescriptors: P,
            loading: Z,
          } = d.wi({
            channel: C,
            filters: { commandTypes: [e] },
            options: { limit: N.lr },
            allowFetch: !0,
          }),
          { sections: M } = r.useMemo(() => {
            let n = {};
            return (
              P.forEach((t) => {
                n[t.id] = t;
              }),
              { sections: n }
            );
          }, [P]),
          b = r.useRef(Z.current);
        r.useEffect(() => {
          Z.current !== b.current &&
            ((b.current = Z.current), null == I || I());
        }, [Z, I]);
        let y = r.useCallback(
          (n) => {
            l()(null != C, "menu item should not show if channel is null");
            let t = M[n.applicationId],
              e = null != t ? (0, s.ky)(t) : void 0;
            return (0, i.jsx)(
              o.MenuItem,
              {
                id: n.id,
                label: n.displayName,
                iconLeft: () =>
                  null != e
                    ? (0, i.jsx)(e, {
                        channel: C,
                        section: t,
                        width: 18,
                        height: 18,
                        selectable: !1,
                      })
                    : null,
                action: () => {
                  (0, c.Z)({
                    command: n,
                    optionValues: {},
                    context: { channel: C, guild: v },
                    commandTargetId: u,
                  });
                },
              },
              n.id,
            );
          },
          [C, v, u, M],
        );
        if (
          (Z.current
            ? (t = (0, i.jsx)(
                o.MenuItem,
                {
                  id: "menu-commands-placeholder",
                  render: () => (0, i.jsx)(E.Z, {}),
                  disabled: !0,
                },
                "menu-commands-placeholder",
              ))
            : ((t =
                0 === S.length
                  ? (0, i.jsx)(
                      o.MenuItem,
                      {
                        id: "menu-commands-empty",
                        label: A.intl.string(A.t.YSNlV1),
                        disabled: !0,
                      },
                      "menu-commands-empty",
                    )
                  : S.map(y)),
              null != R &&
                (t = (0, i.jsxs)(i.Fragment, {
                  children: [
                    t,
                    (0, i.jsx)(o.MenuSeparator, {}, "separator"),
                    R,
                  ],
                }))),
          !m.TPd.TEXTUAL.has(C.type))
        ) {
          if (null == R) return null;
          t = R;
        }
        return (0, i.jsx)(o.MenuItem, {
          id: "apps",
          label: A.intl.string(A.t.PHjkRE),
          listClassName: h.list,
          children: t,
        });
      };
    },
    352736: function (n, t, e) {
      var i,
        r,
        u = e(25209),
        l = e(97797),
        a = e(35125),
        o = e(786761),
        d = e(739566),
        c = e(499401),
        s = e(693912),
        f = e(23750),
        E = e(314897),
        _ = e(592125),
        p = e(430824),
        m = e(594174),
        N = e(5192),
        A = e(709054),
        h = e(981631),
        C = e(388032);
      let T = {
        "234395307759108106": "https://groovy.bot/commands",
        "365975655608745985": "https://www.pokecord.com/getting-started",
        512412940897484800: "http://jameslantz.net/smilebot",
      };
      ((i = r || (r = {})).NORMAL = "NORMAL"), (i.CLAN = "CLAN");
      let I = () => [
          C.t["0cuj7u"],
          C.t["MuW+CA"],
          C.t.osqpHR,
          C.t["5ToSh4"],
          C.t.JEB8pq,
          C.t.pkOV5e,
          C.t.kRb1Jy,
          C.t.EmKLY2,
          C.t.rPtBnZ,
          C.t["5B/ekZ"],
          C.t.ESNC3d,
          C.t["Iw6d8/"],
          C.t.WecSZ2,
        ],
        g = () => [
          C.t.Jm6e09,
          C.t.MGRnRU,
          C.t.EXOEGh,
          C.t["5uCTFB"],
          C.t.rl45Qk,
          C.t.Bh9zpa,
          C.t.RdEy1N,
          C.t.qcdp09,
          C.t.F7w2Rk,
          C.t.gSyOgI,
          C.t.uYgqv7,
          C.t["b/1SBQ"],
          C.t.LhebZG,
        ],
        v = () => [
          C.t["20E/ys"],
          C.t["oa8+kp"],
          C.t.zoKkXl,
          C.t.FP9aS0,
          C.t.E5Zj1d,
          C.t["6Anmws"],
          C.t.sR78HR,
          C.t.gA9qPz,
          C.t.Hkiyp6,
          C.t.w1HMho,
        ],
        O = () => [
          C.t["8fy3DQ"],
          C.t.UproUV,
          C.t["7l3EyM"],
          C.t.GToyaG,
          C.t["DUs+Zm"],
          C.t.yLkbfn,
          C.t.oWdvws,
          C.t.tOoKTE,
          C.t["VM7+Oj"],
          C.t["hJx/u7"],
        ],
        R = (n) => {
          switch (n) {
            case "NORMAL":
            default:
              return I();
            case "CLAN":
              return v();
          }
        },
        S = (n) => {
          switch (n) {
            case "NORMAL":
            default:
              return g();
            case "CLAN":
              return O();
          }
        };
      function P(n, t) {
        let e = S(t),
          i = A.default.extractTimestamp(n) % e.length;
        return e[i];
      }
      function Z(n) {
        return (0, u.Rp)(
          C.intl.formatToParts(C.t["ihxM9/"], {
            username: n,
            usernameOnClick: h.dG4,
          }),
        );
      }
      function M(n, t) {
        let e = _.Z.getChannel(t);
        return null == e || null == p.Z.getGuild(e.getGuildId())
          ? Z(n)
          : (0, u.Rp)(
              C.intl.formatToParts(C.t["ihxM9/"], {
                username: n,
                usernameOnClick: h.dG4,
              }),
            );
      }
      function b(n) {
        var t;
        return (
          null === (t = p.Z.getGuild(n)) || void 0 === t
            ? void 0
            : t.hasFeature(h.oNc.CLAN)
        )
          ? "CLAN"
          : "NORMAL";
      }
      t.Z = {
        stringify: function (n, t) {
          var e, i, r, A;
          let T = null === (e = n.mentions) || void 0 === e ? void 0 : e[0],
            I =
              null != T && "string" != typeof T
                ? m.default.getUser(T.id)
                : void 0,
            g = n.channel_id,
            v = N.ZP.getName(null, g, n.author);
          switch (n.type) {
            case h.uaV.RECIPIENT_ADD:
              if (null == I) return;
              return (0, u.Rp)(
                C.intl.formatToParts(C.t["7/Xl0d"], {
                  username: v,
                  usernameOnClick: h.dG4,
                  otherUsername: N.ZP.getName(null, g, I),
                  otherUsernameOnClick: h.dG4,
                }),
              );
            case h.uaV.RECIPIENT_REMOVE:
              if (null == I) return;
              let O = n.author;
              if (null == O || O.id === I.id)
                return (0, u.Rp)(
                  C.intl.formatToParts(C.t["Qn5+LS"], {
                    username: v,
                    usernameOnClick: h.dG4,
                  }),
                );
              return (0, u.Rp)(
                C.intl.formatToParts(C.t.QtZ0RE, {
                  username: v,
                  usernameOnClick: h.dG4,
                  otherUsername: N.ZP.getName(null, g, I),
                  otherUsernameOnClick: h.dG4,
                }),
              );
            case h.uaV.CALL:
              let { call: R } = n;
              if (null != R && -1 === R.participants.indexOf(E.default.getId()))
                return (0, u.Rp)(
                  C.intl.formatToParts(C.t.DbgSAw, {
                    username: v,
                    usernameOnClick: h.dG4,
                  }),
                );
              return;
            case h.uaV.CHANNEL_NAME_CHANGE:
              return (0, u.Rp)(
                C.intl.formatToParts(
                  t.isForumPost() ? C.t["qa0e/v"] : C.t.XCPMEB,
                  {
                    username: v,
                    usernameOnClick: h.dG4,
                    channelName: n.content,
                  },
                ),
              );
            case h.uaV.CHANNEL_ICON_CHANGE:
              return (0, u.Rp)(
                C.intl.formatToParts(C.t.wypJZ2, {
                  username: v,
                  usernameOnClick: h.dG4,
                }),
              );
            case h.uaV.CHANNEL_PINNED_MESSAGE:
              return (0, u.Rp)(
                C.intl.formatToParts(C.t["/M60j4"], {
                  username: v,
                  usernameOnClick: h.dG4,
                }),
              );
            case h.uaV.USER_JOIN:
              let S = b(t.guild_id);
              return (0, u.Rp)(
                C.intl.formatToParts(P(n.id, S), {
                  username: v,
                  usernameOnClick: h.dG4,
                }),
              );
            case h.uaV.GUILD_BOOST:
              return Z(v);
            case h.uaV.GUILD_BOOST_TIER_1:
            case h.uaV.GUILD_BOOST_TIER_2:
            case h.uaV.GUILD_BOOST_TIER_3:
              return M(v, g);
            case h.uaV.GUILD_INVITE_REMINDER:
              return C.intl.string(C.t.gxyKvr);
            case h.uaV.THREAD_STARTER_MESSAGE:
              return C.intl.formatToPlainString(C.t["B8H+Cg"], {
                username: v,
                threadName: t.name,
              });
            case h.uaV.ROLE_SUBSCRIPTION_PURCHASE:
              if (n instanceof f.ZP) return null;
              return (0, u.Rp)(
                (0, a.vp)({
                  username: v,
                  guildId: t.guild_id,
                  roleSubscriptionData: n.role_subscription_data,
                }),
              );
            case h.uaV.PURCHASE_NOTIFICATION:
              if (
                n instanceof f.ZP ||
                (null === (r = n.purchase_notification) || void 0 === r
                  ? void 0
                  : null === (i = r.guild_product_purchase) || void 0 === i
                    ? void 0
                    : i.product_name) == null
              )
                return null;
              return (0, u.Rp)(
                (0, l.i)({
                  username: v,
                  productName:
                    n.purchase_notification.guild_product_purchase.product_name,
                }),
              );
            case h.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION:
              if (n instanceof f.ZP) return null;
              let y = (0, d.ZH)((0, o.e5)(n));
              return (0, u.Rp)(
                (0, c.Y)({ application: n.application, username: y.nick }),
              );
            case h.uaV.PRIVATE_CHANNEL_INTEGRATION_ADDED:
              if (n instanceof f.ZP) return null;
              return (0, u.Rp)(
                (0, s.B2)({
                  application: n.application,
                  username: (0, d.ZH)((0, o.e5)(n)).nick,
                }),
              );
            case h.uaV.PRIVATE_CHANNEL_INTEGRATION_REMOVED:
              if (n instanceof f.ZP) return null;
              return (0, u.Rp)(
                (0, s.hj)({
                  application: n.application,
                  username: (0, d.ZH)((0, o.e5)(n)).nick,
                }),
              );
            case h.uaV.AUTO_MODERATION_ACTION:
              if (
                null === (A = n.embeds) || void 0 === A
                  ? void 0
                  : A.some((n) => {
                      let { type: t } = n;
                      return t === h.hBH.AUTO_MODERATION_NOTIFICATION;
                    })
              )
                return (function (n) {
                  let t = _.Z.getChannel(n);
                  if (null == t) return null;
                  let e = p.Z.getGuild(t.getGuildId());
                  return null == e
                    ? null
                    : (0, u.Rp)(
                        C.intl.formatToParts(C.t["a+lJKi"], {
                          guildName: e.name,
                        }),
                      );
                })(g);
              return n.content;
            case h.uaV.GUILD_INCIDENT_ALERT_MODE_ENABLED:
              return (function (n, t, e) {
                let i = _.Z.getChannel(t);
                if (null == i) return null;
                let r = p.Z.getGuild(i.getGuildId());
                return null == r
                  ? null
                  : (0, u.Rp)(
                      C.intl.formatToParts(C.t.iOuWPj, {
                        username: n,
                        guildName: r.name,
                        time:
                          "" !== e
                            ? new Date(e).toLocaleString(C.intl.currentLocale, {
                                hour: "numeric",
                                minute: "2-digit",
                              })
                            : "",
                      }),
                    );
              })(v, g, n.content);
            case h.uaV.GUILD_INCIDENT_ALERT_MODE_DISABLED:
              return (function (n, t) {
                let e = _.Z.getChannel(t);
                if (null == e) return null;
                let i = p.Z.getGuild(e.getGuildId());
                return null == i
                  ? null
                  : (0, u.Rp)(
                      C.intl.formatToParts(C.t.axmbpq, {
                        username: n,
                        guildName: i.name,
                      }),
                    );
              })(v, g);
            default:
              return n.content;
          }
        },
        getSystemMessageUserJoin: function (n, t) {
          let e = R(t),
            i = A.default.extractTimestamp(n) % e.length;
          return e[i];
        },
        getSystemMessageUserJoinMobile: P,
        getSystemMessageBotJoin: function (n) {
          return null == T[n]
            ? null
            : C.intl.format(C.t.xw1Ij4, {
                learnOnClick: { onClick: () => window.open(T[n]) },
              });
        },
        getWelcomeMessageKind: b,
      };
    },
    213914: function (n, t, e) {
      n.exports = {
        streamerModeEnabled: "streamerModeEnabled_c50c8b",
        streamerModeEnabledImage: "streamerModeEnabledImage_c50c8b",
        streamerModeEnabledBtn: "streamerModeEnabledBtn_c50c8b",
        disabled: "disabled_c50c8b",
      };
    },
    808647: function (n, t, e) {
      n.exports = { loadingWrapper: "loadingWrapper_c8df80" };
    },
    158595: function (n, t, e) {
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
    954614: function (n, t, e) {
      n.exports = { text: "text_b953a6" };
    },
    418776: function (n, t, e) {
      n.exports = { list: "list_fd4745" };
    },
    407475: function (n, t, e) {
      n.exports = {
        videoPaused: "videoPaused_f2b765",
        warningCircle: "warningCircle_f2b765",
      };
    },
    505965: function (n, t, e) {
      n.exports = {
        root: "root_dc0d6d",
        icon: "icon_dc0d6d",
        text: "text_dc0d6d",
        info: "info_dc0d6d",
        warning: "warning_dc0d6d",
      };
    },
    238870: function (n, t, e) {
      n.exports = {
        authedApp: "authedApp_f0135d",
        header: "header_f0135d",
        headerText: "headerText_f0135d",
        headerTextContainer: "headerTextContainer_f0135d",
        appAvatar: "appAvatar_f0135d",
        reportButton: "reportButton_f0135d",
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
//# sourceMappingURL=e09990c05a96e9f530c8.js.map
