"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["2986"],
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
          return i;
        },
        lc: function () {
          return a;
        },
        mJ: function () {
          return u;
        },
      });
      var r = e(570140);
      function i(n) {
        r.Z.dispatch({ type: "CATEGORY_COLLAPSE", id: n });
      }
      function u(n) {
        r.Z.dispatch({ type: "CATEGORY_EXPAND", id: n });
      }
      function l(n) {
        r.Z.dispatch({ type: "CATEGORY_COLLAPSE_ALL", guildId: n });
      }
      function a(n) {
        r.Z.dispatch({ type: "CATEGORY_EXPAND_ALL", guildId: n });
      }
    },
    497321: function (n, t, e) {
      e(47120);
      var r,
        i = e(200651),
        u = e(192379),
        l = e(120356),
        a = e.n(l),
        o = e(481060),
        d = e(37234),
        c = e(230711),
        s = e(981631),
        f = e(388032),
        E = e(261121);
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
      class p extends (r = u.Component) {
        render() {
          return (0, i.jsxs)("div", {
            className: E.streamerModeEnabled,
            children: [
              (0, i.jsx)("div", { className: E.streamerModeEnabledImage }),
              (0, i.jsx)(o.Clickable, {
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
    605984: function (n, t, e) {
      e.d(t, {
        k: function () {
          return d;
        },
      });
      var r = e(385956),
        i = e(15701),
        u = e(359119),
        l = e(897769),
        a = e(403485),
        o = e(88101);
      function d(n) {
        let t = (0, i.G)(n),
          e = (0, r.v)(n),
          d = (0, l.S)(n, u.pj.LIKELY_ATO),
          c = (0, a.h)(n).length > 0,
          s = null != (0, o.P)(n);
        if (!t && !e && !c && !s) return d;
      }
    },
    394059: function (n, t, e) {
      var r, i;
      e.d(t, {
        K: function () {
          return r;
        },
      }),
        ((i = r || (r = {}))[(i.STREAM = 0)] = "STREAM"),
        (i[(i.VIDEO = 1)] = "VIDEO");
    },
    27584: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return d;
        },
      });
      var r = e(442837),
        i = e(846027),
        u = e(314897),
        l = e(131951),
        a = e(981631),
        o = e(65154);
      function d(n) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : o.Yn.DEFAULT,
          e = (0, r.e7)([u.default], () => u.default.getId()),
          d = (0, r.e7)(
            [l.Z],
            () => l.Z.supports(o.AN.DISABLE_VIDEO) && l.Z.isVideoEnabled(),
          ),
          c = (0, r.e7)([l.Z], () => l.Z.isLocalVideoDisabled(e, t), [e, t]),
          s = null == n || n === e;
        return [
          s && (d || c),
          c,
          (n) => {
            let r = n ? a.ZUi.DISABLED : a.ZUi.MANUAL_ENABLED;
            i.Z.setDisableLocalVideo(e, r, t);
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
      var r = e(200651);
      e(192379);
      var i = e(153867),
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
        return (0, r.jsx)(u.default, {
          confirmText: a.intl.string(a.t["cY+Ooa"]),
          secondaryConfirmText: a.intl.string(a.t["JdIQ/f"]),
          title: d,
          cancelText: a.intl.string(a.t["ETE/oK"]),
          onConfirm: e,
          onConfirmSecondary: () => {
            i.ZP.updatedUnsyncedSettings({
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
      var r = e(200651);
      e(192379);
      var i = e(442837),
        u = e(481060),
        l = e(475179),
        a = e(358221),
        o = e(388032);
      function d(n) {
        let t = (0, i.e7)([a.Z], () => a.Z.getVoiceParticipantsHidden(n));
        return (0, r.jsx)(u.MenuCheckboxItem, {
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
      var r = e(200651);
      e(192379);
      var i = e(442837),
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
          _ = (0, i.e7)(
            [l.ZP],
            () => l.ZP.disableHideSelfStreamAndVideoConfirmationAlert,
          );
        return e
          ? (0, r.jsx)(u.MenuCheckboxItem, {
              id: "self-video-hide",
              label: s.intl.string(s.t.MH8ESU),
              checked: !f,
              action: () => {
                if (_ || f) return E(!f);
                (0, u.openModal)((n) =>
                  (0, r.jsx)(o.Z, {
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
          return T;
        },
        k: function () {
          return A;
        },
      }),
        e(47120);
      var r = e(200651);
      e(192379);
      var i = e(913527),
        u = e.n(i),
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
        h = e(388032);
      let A = () => [
          { value: m.Oe.MINUTES_15, label: h.intl.string(h.t["8ot6go"]) },
          { value: m.Oe.HOURS_1, label: h.intl.string(h.t.UMWBZm) },
          { value: m.Oe.HOURS_3, label: h.intl.string(h.t.QmYWtr) },
          { value: m.Oe.HOURS_8, label: h.intl.string(h.t.EpAXPD) },
          { value: m.Oe.HOURS_24, label: h.intl.string(h.t["755t4u"]) },
          { value: m.Oe.ALWAYS, label: h.intl.string(h.t.r3LawM) },
        ],
        C = (n) => {
          let t = n > 0 ? u()().add(n, "second").toISOString() : null;
          return {
            muted: !0,
            mute_config: { selected_time_window: n, end_time: t },
          };
        };
      function T(n, t) {
        let [e, i] = (0, l.Wu)([f.ZP], () => [
            f.ZP.isChannelMuted(n.guild_id, n.id),
            f.ZP.getChannelMuteConfig(n.guild_id, n.id),
          ]),
          u = (0, s.U)(i),
          m = (0, _.ZP)(n, !0);
        function T(t) {
          t && n.type === p.d4z.GUILD_CATEGORY && (0, o.c4)(n.id),
            d.Z.updateChannelOverrideSettings(
              n.guild_id,
              n.id,
              { muted: t },
              E.UE.muted(t),
            );
        }
        let N = h.intl.string(h.t.tbeRRE),
          g = h.intl.string(h.t.OYefmZ);
        switch (n.type) {
          case p.d4z.GUILD_CATEGORY:
            (N = h.intl.string(h.t.pNMCg4)), (g = h.intl.string(h.t.olaBeH));
            break;
          case p.d4z.GROUP_DM:
            (N = h.intl.string(h.t.LO3kaG)), (g = h.intl.string(h.t["s5/5fn"]));
            break;
          case p.d4z.DM:
            (N = h.intl.format(h.t.byjuJi, { name: m })),
              (g = h.intl.format(h.t["eC+9rq"], { name: m }));
            break;
          default:
            (N = h.intl.string(h.t.tbeRRE)), (g = h.intl.string(h.t.OYefmZ));
        }
        return e
          ? (0, r.jsx)(a.MenuItem, {
              id: "unmute-channel",
              label: g,
              subtext: u,
              action: () => T(!1),
            })
          : (0, r.jsx)(a.MenuItem, {
              id: "mute-channel",
              label: N,
              action: () => {
                T(!0),
                  (0, c.s)({
                    channelId: n.id,
                    location: "channel_context_menu",
                  });
              },
              children: A().map((e) => {
                let { value: i, label: u } = e;
                return (0, r.jsx)(
                  a.MenuItem,
                  {
                    id: "".concat(i),
                    label: u,
                    action: () =>
                      (function (e) {
                        n.type === p.d4z.GUILD_CATEGORY && (0, o.c4)(n.id);
                        let r = C(e);
                        d.Z.updateChannelOverrideSettings(
                          n.guild_id,
                          n.id,
                          r,
                          E.ZB.Muted,
                          t,
                        );
                      })(i),
                  },
                  i,
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
          return C;
        },
        kj: function () {
          return f;
        },
        oC: function () {
          return E;
        },
        s3: function () {
          return h;
        },
        uA: function () {
          return A;
        },
        xh: function () {
          return m;
        },
      }),
        e(47120);
      var r = e(524437),
        i = e(675478),
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
          if (e.type === r.Dd.CATEGORY) continue;
          let i = u.Z.getChannel(t);
          if (null == i) {
            delete n[t];
            continue;
          }
          if (!i.isPrivate()) {
            if (!l.Z.can(d.Pl.VIEW_CHANNEL, i)) {
              delete n[t];
              continue;
            }
          }
        }
      }
      function f(n, t) {
        if (!o.Z.isFavorite(n))
          i.hW.updateAsync(
            "favorites",
            (e) => {
              (e.favoriteChannels[n] = r.aV.create({
                nickname: "",
                type: r.Dd.REFERENCE_ORIGINAL,
                position: c(),
                parentId: null != t ? t : "0",
              })),
                s(e.favoriteChannels);
            },
            i.fy.FREQUENT_USER_ACTION,
          );
      }
      function E(n) {
        let t = o.Z.getFavorite(n);
        if (null != t)
          i.hW.updateAsync(
            "favorites",
            (e) => {
              if ((delete e.favoriteChannels[n], t.type === r.Dd.CATEGORY))
                for (let t in e.favoriteChannels)
                  e.favoriteChannels[t].parentId === n &&
                    (e.favoriteChannels[t].parentId = "0");
              s(e.favoriteChannels);
            },
            i.fy.INFREQUENT_USER_ACTION,
          );
      }
      function _(n, t) {
        if (!!o.Z.isFavorite(n))
          i.hW.updateAsync(
            "favorites",
            (e) => {
              e.favoriteChannels[n].nickname = null != t ? t : "";
            },
            i.fy.INFREQUENT_USER_ACTION,
          );
      }
      function p(n) {
        let t = a.default.fromTimestamp(Date.now());
        i.hW.updateAsync(
          "favorites",
          (e) => {
            e.favoriteChannels[t] = r.aV.create({
              nickname: n,
              type: r.Dd.CATEGORY,
              position: c(),
              parentId: "0",
            });
          },
          i.fy.FREQUENT_USER_ACTION,
        );
      }
      function m(n) {
        E(n);
      }
      function h(n) {
        i.hW.updateAsync(
          "favorites",
          (t) => {
            for (let r of n)
              if (
                (null != r.position &&
                  (t.favoriteChannels[r.id].position = r.position),
                void 0 !== r.parent_id)
              ) {
                var e;
                t.favoriteChannels[r.id].parentId =
                  null !== (e = r.parent_id) && void 0 !== e ? e : "0";
              }
          },
          i.fy.FREQUENT_USER_ACTION,
        );
      }
      function A(n, t) {
        i.hW.updateAsync(
          "favorites",
          (e) => {
            e.favoriteChannels[n].parentId = null != t ? t : "0";
          },
          i.fy.FREQUENT_USER_ACTION,
        );
      }
      function C() {
        i.hW.updateAsync(
          "favorites",
          (n) => {
            n.muted = !n.muted;
          },
          i.fy.INFREQUENT_USER_ACTION,
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
      var r = e(192379),
        i = e(106351),
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
          r = (0, u.e7)([o.Z], () => o.Z.isFavorite(n.id)),
          i = n.isDM() || n.isThread();
        return t && !__OVERLAY__ && !r && (!i || e);
      }
      function E(n) {
        return (0, u.e7)([o.Z], () => o.Z.getFavorite(n));
      }
      function _() {
        return (0, u.e7)([l.ZP], () => l.ZP.getChannels(s.I_8))[
          i.d.GUILD_CATEGORY
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
          e = r.useCallback(() => {
            n && t.notifyFavoriteAdded();
          }, [t, n]),
          i = r.useCallback(() => {
            n && t.clearFavoriteAdded();
          }, [t, n]);
        return {
          favoriteAdded: t.favoriteAdded,
          notifyFavoriteAdded: e,
          clearFavoriteAdded: i,
        };
      }
    },
    434065: function (n, t, e) {
      e.d(t, {
        r: function () {
          return u;
        },
      });
      var r = e(15729),
        i = e(731965);
      let u = (0, r.U)((n) => ({
        favoriteAdded: !1,
        notifyFavoriteAdded: () => (0, i.j)(() => n({ favoriteAdded: !0 })),
        clearFavoriteAdded: () => (0, i.j)(() => n({ favoriteAdded: !1 })),
      }));
    },
    276022: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return m;
        },
      }),
        e(653041);
      var r = e(200651),
        i = e(192379),
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
            application: h,
            guildId: A,
            context: C,
            onItemClick: T,
          } = n,
          N =
            null !== (t = null == h ? void 0 : h.id) && void 0 !== t
              ? t
              : null == m
                ? void 0
                : m.id,
          g = f.Z.getGuild(A),
          I = (0, u.e7)([E.Z], () =>
            null != g ? E.Z.can(_.Plq.MANAGE_GUILD, g) : null,
          ),
          v = (0, d.LD)(A, !0),
          R = (0, d.PL)(!0, !0),
          { isUserApp: O, isGuildApp: P } = i.useMemo(() => {
            var n, t, e, r;
            if (null == N) return { isGuildApp: !1, isUserApp: !1 };
            let i = Object.values(
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
                  (r =
                    null === (t = R.result) || void 0 === t
                      ? void 0
                      : t.sections) && void 0 !== r
                  ? r
                  : {},
              );
            return {
              isGuildApp: i.some((n) => {
                var t;
                return (
                  (null === (t = n.descriptor.application) || void 0 === t
                    ? void 0
                    : t.id) === N
                );
              }),
              isUserApp: u.some((n) => {
                var t;
                return (
                  (null === (t = n.descriptor.application) || void 0 === t
                    ? void 0
                    : t.id) === N
                );
              }),
            };
          }, [v, R, N]);
        i.useEffect(() => {
          e(360606);
        }, []);
        let S = i.useCallback(() => {
            if ((null == g ? void 0 : g.id) != null)
              c.Z.open(g.id, _.pNK.INTEGRATIONS),
                a.Z.setSection(_.b4C.APPLICATION, N),
                null == T || T();
          }, [N, null == g ? void 0 : g.id, T]),
          Z = i.useCallback(() => {
            o.Z.open(_.oAB.AUTHORIZED_APPS);
            let n = "";
            null != h ? (n = h.name) : null != m && (n = m.username),
              "" !== n && s.J.setState({ searchQuery: n }),
              null == T || T();
          }, [h, T, m]);
        if (C === _.IlC.POPOUT) return null;
        let b = [];
        return (
          P &&
            I &&
            b.push(
              (0, r.jsx)(
                l.MenuItem,
                {
                  id: "manage-server-integration",
                  label: p.intl.string(p.t.IuSJT0),
                  action: S,
                },
                "manage-server-integration",
              ),
            ),
          O &&
            b.push(
              (0, r.jsx)(
                l.MenuItem,
                {
                  id: "manage-authorized-app",
                  label: p.intl.string(p.t.V8ruv7),
                  action: Z,
                },
                "manage-authorized-app",
              ),
            ),
          b
        );
      }
    },
    97797: function (n, t, e) {
      e.d(t, {
        i: function () {
          return u;
        },
      });
      var r = e(981631),
        i = e(388032);
      function u(n) {
        let {
          username: t,
          usernameOnClickHandler: e = r.dG4,
          productName: u,
        } = n;
        return i.intl.formatToParts(i.t.w4iXs7, {
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
      var r = e(373228),
        i = e(388032);
      let u = () => [i.intl.string(i.t.b6wEe3), i.intl.string(i.t.i8o9hY)],
        l = () => [i.intl.string(i.t.vqnToa), i.intl.string(i.t["9yh+dH"])],
        a = [
          {
            id: "781323471249604648",
            format_type: r.u3.APNG,
            description: "Cheerful Choco jumps out of gift box",
            name: "Surprise",
          },
          {
            id: "781324642736144424",
            format_type: r.u3.APNG,
            description: "Cheerful Choco preens against window",
            name: "Affection",
          },
          {
            id: "781323769960202280",
            format_type: r.u3.APNG,
            description: "Cheerful Choco sparkles",
            name: "OMG",
          },
          {
            id: "781324722394103808",
            format_type: r.u3.APNG,
            description: "Cheerful Choco cheers",
            name: "Cheer",
          },
          {
            id: "813951723822645278",
            format_type: r.u3.APNG,
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
          return h;
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
      var r = e(367907),
        i = e(200876),
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
            roleSubscriptionOnClickHandler: r,
            guildId: i,
            roleSubscriptionData: u,
          } = n,
          { content: l, formatParams: a } = E({
            username: t,
            usernameOnClickHandler: e,
            roleSubscriptionOnClickHandler: r,
            guildId: i,
            roleSubscriptionData: u,
          });
        return o.intl.format(l, a);
      }
      function s(n) {
        let {
            username: t,
            usernameOnClickHandler: e,
            roleSubscriptionOnClickHandler: r,
            guildId: i,
            roleSubscriptionData: u,
          } = n,
          { content: l, formatParams: a } = E({
            username: t,
            usernameOnClickHandler: e,
            roleSubscriptionOnClickHandler: r,
            guildId: i,
            roleSubscriptionData: u,
          });
        return o.intl.formatToParts(l, a);
      }
      function f(n, t) {
        var e, r;
        let i = u.Z.getGuild(n),
          l =
            null !== (e = null == t ? void 0 : t.total_months_subscribed) &&
            void 0 !== e
              ? e
              : 0;
        return {
          guild: i,
          totalMonthsSubscribed: l,
          showWithDuration: l > 0,
          isRenewal:
            null !== (r = null == t ? void 0 : t.is_renewal) &&
            void 0 !== r &&
            r,
        };
      }
      function E(n) {
        let t,
          {
            username: e,
            usernameOnClickHandler: r = d,
            roleSubscriptionOnClickHandler: i = a.dG4,
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
              usernameHook: r,
              guildName: null == c ? void 0 : c.name,
              handleGuildNameClick: i,
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
            usernameOnClickHandler: r = d,
            roleSubscriptionOnClickHandler: i = a.dG4,
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
            usernameOnClick: r,
            roleSubscriptionOnClick: i,
            months: s,
          })
        );
      }
      function p(n) {
        return (0, i.l)(n);
      }
      function m(n, t, e, i) {
        var u;
        r.ZP.trackWithMetadata(
          a.rMx.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CLICKED,
          {
            guild_id: n,
            user_id:
              null === (u = l.default.getCurrentUser()) || void 0 === u
                ? void 0
                : u.id,
            channel_id: t,
            message_id: e,
            role_subscription_listing_id: i,
          },
        );
      }
      function h(n, t) {
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
      var r = e(200651);
      e(192379);
      var i = e(481060),
        u = e(303511);
      t.Z = () =>
        (0, r.jsx)("div", {
          className: u.loadingWrapper,
          children: (0, r.jsx)(i.Dots, { dotRadius: 4, themed: !0 }),
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
      var r = e(544891),
        i = e(570140),
        u = e(893776),
        l = e(290323),
        a = e(981631);
      async function o(n) {
        await r.tn.put({
          url: a.ANM.CHANNEL_RECIPIENT_ME(n),
          body: { consent_status: l.h.ACCEPTED },
          rejectWithError: !1,
        }),
          i.Z.dispatch({
            type: "MESSAGE_REQUEST_ACCEPT_OPTIMISTIC",
            channelId: n,
          });
      }
      function d(n) {
        return r.tn.put({
          url: a.ANM.CHANNEL_RECIPIENT_ME(n),
          body: { consent_status: l.h.UNSPECIFIED },
          rejectWithError: !1,
        });
      }
      function c(n) {
        return r.tn.put({
          url: a.ANM.CHANNEL_RECIPIENT_ME(n),
          body: { consent_status: l.h.PENDING },
          rejectWithError: !1,
        });
      }
      function s(n) {
        return r.tn.del({
          url: a.ANM.CHANNEL_RECIPIENT_ME(n),
          rejectWithError: !1,
        });
      }
      function f(n) {
        return r.tn.put({
          url: a.ANM.CHANNEL_RECIPIENT_REJECT_BATCH(),
          body: { channel_ids: n },
          rejectWithError: !1,
        });
      }
      function E() {
        u.Z.getLocationMetadata();
      }
    },
    290323: function (n, t, e) {
      var r, i;
      e.d(t, {
        h: function () {
          return r;
        },
      }),
        ((i = r || (r = {}))[(i.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (i[(i.PENDING = 1)] = "PENDING"),
        (i[(i.ACCEPTED = 2)] = "ACCEPTED"),
        (i[(i.REJECTED = 3)] = "REJECTED");
    },
    385956: function (n, t, e) {
      e.d(t, {
        T: function () {
          return a;
        },
        v: function () {
          return l;
        },
      });
      var r = e(442837),
        i = e(355298),
        u = e(333984);
      function l(n) {
        return (0, r.e7)([i.Z], () => i.Z.isMessageRequest(n), [n]);
      }
      function a(n) {
        return (0, r.e7)(
          [i.Z, u.Z],
          () => null != n && (i.Z.isMessageRequest(n) || u.Z.isSpam(n)),
        );
      }
    },
    15701: function (n, t, e) {
      e.d(t, {
        G: function () {
          return u;
        },
      });
      var r = e(442837),
        i = e(333984);
      function u(n) {
        return (0, r.e7)([i.Z], () => i.Z.isSpam(n), [n]);
      }
    },
    850908: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return r;
        },
      });
      function r(n) {
        if (null != n.title && null != n.filename) {
          let t = n.filename.lastIndexOf("."),
            e = t > 0 ? n.filename.substr(t) : "";
          return n.title + e;
        }
        return n.filename;
      }
    },
    759198: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return o;
        },
      });
      var r = e(200651);
      e(192379);
      var i = e(120356),
        u = e.n(i),
        l = e(481060),
        a = e(457900);
      function o(n) {
        let { className: t, color: e, ...i } = n;
        return (0, r.jsx)(l.Text, {
          className: u()({ [a.text]: null == e }, t),
          color: e,
          ...i,
        });
      }
    },
    499401: function (n, t, e) {
      e.d(t, {
        Y: function () {
          return i;
        },
      });
      var r = e(388032);
      function i(n) {
        let { application: t, username: e, usernameOnClick: i } = n;
        return null != t
          ? r.intl.formatToParts(r.t.Tes5Oj, {
              username: e,
              applicationName: t.name,
              usernameOnClick: i,
            })
          : r.intl.formatToParts(r.t.PUJtgo, {
              username: e,
              usernameOnClick: i,
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
      var r = e(63063),
        i = e(981631),
        u = e(388032);
      function l(n) {
        let {
          application: t,
          username: e,
          usernameHook: l = i.dG4,
          applicationNameHook: a = i.dG4,
        } = n;
        return null != t
          ? u.intl.format(u.t.J8SaGx, {
              username: e,
              otherUsername: t.name,
              usernameHook: l,
              otherUsernameHook: a,
              helpCenterLink: r.Z.getArticleURL(
                i.BhN.PRIVATE_CHANNEL_INTEGRATIONS,
              ),
            })
          : u.intl.format(u.t["+6V2sb"], {
              username: e,
              usernameHook: l,
              helpCenterLink: r.Z.getArticleURL(
                i.BhN.PRIVATE_CHANNEL_INTEGRATIONS,
              ),
            });
      }
      function a(n) {
        let {
          application: t,
          username: e,
          usernameHook: l = i.dG4,
          applicationNameHook: a = i.dG4,
        } = n;
        return null != t
          ? u.intl.format(u.t.eGCDam, {
              username: e,
              otherUsername: t.name,
              usernameHook: l,
              otherUsernameHook: a,
              helpCenterLink: r.Z.getArticleURL(
                i.BhN.PRIVATE_CHANNEL_INTEGRATIONS,
              ),
            })
          : u.intl.format(u.t.sAX6rq, {
              username: e,
              usernameHook: l,
              helpCenterLink: r.Z.getArticleURL(
                i.BhN.PRIVATE_CHANNEL_INTEGRATIONS,
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
                url: r.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS),
              },
            })
          : u.intl.formatToParts(u.t.ojysqa, {
              username: e,
              usernameOnClick: l,
              medium: o,
              helpCenterLink: {
                url: r.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS),
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
                url: r.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS),
              },
            })
          : u.intl.formatToParts(u.t["x2CN/f"], {
              username: e,
              usernameOnClick: l,
              medium: o,
              helpCenterLink: {
                url: r.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS),
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
          return i;
        },
      });
      let r = (0, e(987170).Z)({
        kind: "user",
        id: "2024-05_secure_frames_ui_rollout",
        label: "Secure Frames Rollout",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled.", config: { enabled: !0 } }],
      });
      function i(n) {
        let { location: t } = n;
        return r.useExperiment({ location: t }, { autoTrackExposure: !0 });
      }
      function u(n) {
        let { location: t } = n;
        return r.getCurrentConfig({ location: t }, { autoTrackExposure: !0 });
      }
    },
    441894: function (n, t, e) {
      e.d(t, {
        J: function () {
          return o;
        },
      }),
        e(47120);
      var r = e(442837),
        i = e(592125),
        u = e(19780),
        l = e(977059),
        a = e(760373);
      function o(n) {
        let { channelId: t, location: e } = n,
          { enabled: o } = (0, l.S)({ location: e });
        return (0, r.e7)(
          [u.Z, i.Z],
          () =>
            (function (n, t) {
              var e;
              let [r, l] =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : [u.Z, i.Z];
              if (!t || null == n || r.getChannelId() !== n) return !1;
              let o = l.getChannel(n);
              if (null == o || o.isGuildStageVoice()) return !1;
              let d =
                null === (e = r.getSecureFramesState()) || void 0 === e
                  ? void 0
                  : e.version;
              return null != d && d !== a.Eg;
            })(t, o, [u.Z, i.Z]),
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
      var r = e(442837),
        i = e(359119);
      function u(n, t) {
        return (0, r.e7)([i.ZP], () => i.ZP.getChannelSafetyWarnings(n), [n])
          .filter((n) => n.type === t)
          .find(
            (n) =>
              null == n.dismiss_timestamp &&
              ((null == n ? void 0 : n.expiry) == null ||
                Date.parse(n.expiry) > Date.now()),
          );
      }
    },
    981312: function (n, t, e) {
      e.d(t, {
        U: function () {
          return u;
        },
      });
      var r = e(442837),
        i = e(594174);
      function u() {
        return (
          !1 ===
          (0, r.e7)([i.default], () => {
            var n;
            return null === (n = i.default.getCurrentUser()) || void 0 === n
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
      var r = e(359119),
        i = e(897769),
        u = e(237292),
        l = e(403485),
        a = e(604849);
      function o(n, t) {
        let e = (0, u.y0)({ location: t }),
          o = (0, a.c)(),
          d = (0, l.h)(n),
          c = (0, i.S)(n, r.pj.INAPPROPRIATE_CONVERSATION_TIER_2);
        if (
          !(
            !e ||
            !o ||
            0 === d.length ||
            d.some(
              (n) =>
                n.type === r.pj.INAPPROPRIATE_CONVERSATION_TIER_1 ||
                (n.type === r.pj.INAPPROPRIATE_CONVERSATION_TIER_2 &&
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
      var r = e(442837),
        i = e(359119);
      function u(n) {
        return (0, r.e7)([i.ZP], () => i.ZP.getChannelSafetyWarnings(n), [
          n,
        ]).filter(
          (n) =>
            n.type === i.pj.INAPPROPRIATE_CONVERSATION_TIER_1 ||
            n.type === i.pj.INAPPROPRIATE_CONVERSATION_TIER_2,
        );
      }
    },
    604849: function (n, t, e) {
      e.d(t, {
        c: function () {
          return a;
        },
      });
      var r = e(442837),
        i = e(581883),
        u = e(594174),
        l = e(981312);
      let a = () => {
        let n = u.default.getCurrentUser(),
          t = (0, r.e7)([i.Z], () => {
            var n, t, e;
            return (
              null ===
                (e =
                  null === (t = i.Z.settings.privacy) || void 0 === t
                    ? void 0
                    : null === (n = t.inappropriateConversationWarnings) ||
                        void 0 === n
                      ? void 0
                      : n.value) ||
              void 0 === e ||
              e
            );
          });
        return ((0, l.U)() || (null == n ? void 0 : n.isStaff()) === !0) && t;
      };
    },
    88101: function (n, t, e) {
      e.d(t, {
        P: function () {
          return s;
        },
      });
      var r = e(442837),
        i = e(385956),
        u = e(15701),
        l = e(594174),
        a = e(359119),
        o = e(897769),
        d = e(981312),
        c = e(403485);
      function s(n) {
        let t = (0, r.e7)([l.default], () => l.default.getCurrentUser()),
          e = (0, u.G)(n),
          s = (0, i.v)(n),
          f = (0, o.S)(n, a.pj.STRANGER_DANGER),
          E = (0, d.U)(),
          _ = (null == t ? void 0 : t.isStaff()) !== !0,
          p = (0, c.h)(n).length > 0;
        if ((!!E || !_) && !e && !s && !p) return f;
      }
    },
    305587: function (n, t, e) {
      e.d(t, {
        Xs: function () {
          return i;
        },
      });
      let r = (0, e(818083).B)({
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
      function i(n) {
        let { enabled: t } = r.getCurrentConfig(
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
      var r = e(200651),
        i = e(704215),
        u = e(481060),
        l = e(570140),
        a = e(605236),
        o = e(592125),
        d = e(305587);
      function c(n) {
        let { channelId: t, location: e } = n,
          r = o.Z.getChannel(t),
          u = (0, a.un)(i.z.USER_DM_MUTE_FEEDBACK);
        if (null != r && !!r.isDM() && !u)
          (0, d.Xs)(e) &&
            l.Z.dispatch({ type: "USER_DM_MUTE_SHOW_FEEDBACK", channel: r });
      }
      function s() {
        (0, u.openModalLazy)(async () => {
          let { default: n } = await e.e("87995").then(e.bind(e, 180970));
          return (t) => (0, r.jsx)(n, { ...t });
        });
      }
    },
    471253: function (n, t, e) {
      e.d(t, {
        DT: function () {
          return g;
        },
        Ef: function () {
          return O;
        },
        HO: function () {
          return R;
        },
        NZ: function () {
          return P;
        },
        Pq: function () {
          return v;
        },
        Q1: function () {
          return A;
        },
        RK: function () {
          return T;
        },
        _0: function () {
          return C;
        },
        hz: function () {
          return I;
        },
        yi: function () {
          return N;
        },
      });
      var r = e(512722),
        i = e.n(r),
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
        h = e(981631);
      function A(n, t) {
        let e = n.getGuildId();
        return (
          i()(null != e, "This channel cannot be guildless."),
          t && (0, d.yw)(h.rMx.REQUEST_TO_SPEAK_INITIATED, { ...(0, _.s$)(n) }),
          l.tn.patch({
            url: h.ANM.UPDATE_VOICE_STATE(e),
            body: {
              request_to_speak_timestamp: t ? new Date().toISOString() : null,
              channel_id: n.id,
            },
            rejectWithError: !1,
          })
        );
      }
      function C(n, t) {
        let e = n.getGuildId();
        return (
          i()(null != e, "This channel cannot be guildless."),
          l.tn.patch({
            url: h.ANM.UPDATE_VOICE_STATE(e, t),
            body: {
              suppress: !1,
              request_to_speak_timestamp: new Date().toISOString(),
              channel_id: n.id,
            },
            rejectWithError: !1,
          })
        );
      }
      function T(n, t) {
        let e = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          r = null == n ? void 0 : n.getGuildId();
        i()(null != r, "This channel cannot be guildless.");
        let u = s.Z.getVoiceStateForChannel(n.id);
        return (
          (0, m.gf)(u) === m.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK &&
            !t &&
            (0, d.yw)(h.rMx.PROMOTED_TO_SPEAKER, { ...(0, _.s$)(n) }),
          l.tn.patch({
            url: h.ANM.UPDATE_VOICE_STATE(r),
            body: {
              suppress: t,
              request_to_speak_timestamp: null,
              channel_id: n.id,
              ...(e ? { silent: e } : {}),
            },
            rejectWithError: !1,
          })
        );
      }
      function N(n) {
        let t = null == n ? void 0 : n.getGuildId();
        return (
          i()(null != t, "This channel cannot be guildless."),
          l.tn.patch({
            url: h.ANM.UPDATE_VOICE_STATE(t),
            body: {
              suppress: !0,
              channel_id: n.id,
              self_video: !1,
              self_stream: !1,
            },
            rejectWithError: !1,
          })
        );
      }
      function g(n, t, e) {
        let r = n.getGuildId();
        return (
          i()(null != r, "This channel cannot be guildless."),
          l.tn.patch({
            url: h.ANM.UPDATE_VOICE_STATE(r, t),
            body: { suppress: e, channel_id: n.id },
            rejectWithError: !1,
          })
        );
      }
      function I(n, t) {
        if (null == t || null == n) return;
        let e = t.getGuildId();
        return (
          i()(null != e, "This channel cannot be guildless."),
          g(t, n.id, !0),
          l.tn.patch({
            url: h.ANM.UPDATE_VOICE_STATE(e, n.id),
            body: {
              suppress: !0,
              channel_id: t.id,
              self_video: !1,
              self_stream: !1,
            },
            rejectWithError: !1,
          })
        );
      }
      function v(n, t, e) {
        let r = n.getGuildId();
        i()(null != r, "Channel cannot be guildless");
        let l = n.permissionOverwrites[r],
          d = { id: r, type: o.BN.ROLE, allow: f.Hn, deny: f.Hn, ...l };
        e
          ? ((d.allow = u.IH(d.allow, t)), (d.deny = u.Od(d.deny, t)))
          : ((d.allow = u.Od(d.allow, t)), (d.deny = u.IH(d.deny, t))),
          a.Z.updatePermissionOverwrite(n.id, d);
      }
      async function R(n, t, e, r) {
        if ("" === t) return;
        c.Z.getVoiceChannelId() !== n.id && (0, E.TM)(n);
        let i = await (0, p.me)(n.id, t, e, r);
        return T(n, !1, !0), i;
      }
      async function O(n, t, e) {
        if ("" !== t) return await (0, p.Dk)(n.id, t, e);
      }
      async function P(n) {
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
      var r = e(19780),
        i = e(5192),
        u = e(700785),
        l = e(427679),
        a = e(157925),
        o = e(981631),
        d = e(71080),
        c = e(388032);
      function s(n, t, e, r) {
        let u = t[0],
          l = i.ZP.getName(n, e, u),
          a = null != r ? r : t.length;
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
          media_session_id: r.Z.getMediaSessionId(),
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
      var r = e(544891),
        i = e(981631);
      async function u(n, t, e, u, l) {
        return (
          await r.tn.post({
            url: i.ANM.STAGE_INSTANCES,
            body: {
              channel_id: n,
              topic: t,
              privacy_level: e,
              guild_scheduled_event_id: l,
              send_start_notification: u,
            },
            rejectWithError: !1,
          })
        ).body;
      }
      async function l(n, t, e) {
        return (
          await r.tn.patch({
            url: i.ANM.STAGE_INSTANCE(n),
            body: { topic: t, privacy_level: e },
            rejectWithError: !1,
          })
        ).body;
      }
      function a(n) {
        return r.tn.del({ url: i.ANM.STAGE_INSTANCE(n), rejectWithError: !1 });
      }
    },
    623633: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return l;
        },
      });
      var r = e(442837),
        i = e(592125),
        u = e(944486);
      function l() {
        return (0, r.e7)([u.Z, i.Z], () => {
          let n = u.Z.getVoiceChannelId();
          if (null != n) {
            let t = i.Z.getChannel(n);
            if (null == t ? void 0 : t.isGuildStageVoice()) return t;
          }
          return null;
        });
      }
    },
    570870: function (n, t, e) {
      var r = e(200651),
        i = e(192379),
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
        h = e(689079),
        A = e(388032),
        C = e(148562);
      t.Z = (n) => {
        let t,
          {
            commandType: e,
            commandTargetId: u,
            channel: T,
            guildId: N,
            onHeightUpdate: g,
            context: I,
          } = n,
          v = (0, a.e7)([_.Z], () => _.Z.getGuild(null != N ? N : T.guild_id)),
          R = (0, a.e7)([p.default], () => p.default.getUser(u)),
          O = (0, f.Z)({
            user: R,
            guildId: null == v ? void 0 : v.id,
            context: I,
          }),
          {
            commands: P,
            sectionDescriptors: S,
            loading: Z,
          } = d.wi({
            channel: T,
            filters: { commandTypes: [e] },
            options: { limit: h.lr },
            allowFetch: !0,
          }),
          { sections: b } = i.useMemo(() => {
            let n = {};
            return (
              S.forEach((t) => {
                n[t.id] = t;
              }),
              { sections: n }
            );
          }, [S]),
          M = i.useRef(Z.current);
        i.useEffect(() => {
          Z.current !== M.current &&
            ((M.current = Z.current), null == g || g());
        }, [Z, g]);
        let y = i.useCallback(
          (n) => {
            l()(null != T, "menu item should not show if channel is null");
            let t = b[n.applicationId],
              e = null != t ? (0, s.ky)(t) : void 0;
            return (0, r.jsx)(
              o.MenuItem,
              {
                id: n.id,
                label: n.displayName,
                iconLeft: () =>
                  null != e
                    ? (0, r.jsx)(e, {
                        channel: T,
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
                    context: { channel: T, guild: v },
                    commandTargetId: u,
                  });
                },
              },
              n.id,
            );
          },
          [T, v, u, b],
        );
        if (
          (Z.current
            ? (t = (0, r.jsx)(
                o.MenuItem,
                {
                  id: "menu-commands-placeholder",
                  render: () => (0, r.jsx)(E.Z, {}),
                  disabled: !0,
                },
                "menu-commands-placeholder",
              ))
            : ((t =
                0 === P.length
                  ? (0, r.jsx)(
                      o.MenuItem,
                      {
                        id: "menu-commands-empty",
                        label: A.intl.string(A.t.YSNlV1),
                        disabled: !0,
                      },
                      "menu-commands-empty",
                    )
                  : P.map(y)),
              null != O &&
                O.length > 0 &&
                (t = (0, r.jsxs)(r.Fragment, {
                  children: [
                    t,
                    (0, r.jsx)(o.MenuSeparator, {}, "separator"),
                    O,
                  ],
                }))),
          !m.TPd.TEXTUAL.has(T.type))
        ) {
          if (null == O) return null;
          t = O;
        }
        return (0, r.jsx)(o.MenuItem, {
          id: "apps",
          label: A.intl.string(A.t.PHjkRE),
          listClassName: C.list,
          children: t,
        });
      };
    },
    352736: function (n, t, e) {
      var r,
        i,
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
        h = e(5192),
        A = e(709054),
        C = e(981631),
        T = e(388032);
      let N = {
        "234395307759108106": "https://groovy.bot/commands",
        "365975655608745985": "https://www.pokecord.com/getting-started",
        512412940897484800: "http://jameslantz.net/smilebot",
      };
      ((r = i || (i = {})).NORMAL = "NORMAL"), (r.CLAN = "CLAN");
      let g = () => [
          T.t["0cuj7u"],
          T.t["MuW+CA"],
          T.t.osqpHR,
          T.t["5ToSh4"],
          T.t.JEB8pq,
          T.t.pkOV5e,
          T.t.kRb1Jy,
          T.t.EmKLY2,
          T.t.rPtBnZ,
          T.t["5B/ekZ"],
          T.t.ESNC3d,
          T.t["Iw6d8/"],
          T.t.WecSZ2,
        ],
        I = () => [
          T.t.Jm6e09,
          T.t.MGRnRU,
          T.t.EXOEGh,
          T.t["5uCTFB"],
          T.t.rl45Qk,
          T.t.Bh9zpa,
          T.t.RdEy1N,
          T.t.qcdp09,
          T.t.F7w2Rk,
          T.t.gSyOgI,
          T.t.uYgqv7,
          T.t["b/1SBQ"],
          T.t.LhebZG,
        ],
        v = () => [
          T.t["20E/ys"],
          T.t["oa8+kp"],
          T.t.zoKkXl,
          T.t.FP9aS0,
          T.t.E5Zj1d,
          T.t["6Anmws"],
          T.t.sR78HR,
          T.t.gA9qPz,
          T.t.Hkiyp6,
          T.t.w1HMho,
        ],
        R = () => [
          T.t["8fy3DQ"],
          T.t.UproUV,
          T.t["7l3EyM"],
          T.t.GToyaG,
          T.t["DUs+Zm"],
          T.t.yLkbfn,
          T.t.oWdvws,
          T.t.tOoKTE,
          T.t["VM7+Oj"],
          T.t["hJx/u7"],
        ],
        O = (n) => {
          switch (n) {
            case "NORMAL":
            default:
              return g();
            case "CLAN":
              return v();
          }
        },
        P = (n) => {
          switch (n) {
            case "NORMAL":
            default:
              return I();
            case "CLAN":
              return R();
          }
        };
      function S(n, t) {
        let e = P(t),
          r = A.default.extractTimestamp(n) % e.length;
        return e[r];
      }
      function Z(n) {
        return (0, u.Rp)(
          T.intl.formatToParts(T.t["ihxM9/"], {
            username: n,
            usernameOnClick: C.dG4,
          }),
        );
      }
      function b(n, t) {
        let e = _.Z.getChannel(t);
        return null == e || null == p.Z.getGuild(e.getGuildId())
          ? Z(n)
          : (0, u.Rp)(
              T.intl.formatToParts(T.t["ihxM9/"], {
                username: n,
                usernameOnClick: C.dG4,
              }),
            );
      }
      function M(n) {
        var t;
        return (
          null === (t = p.Z.getGuild(n)) || void 0 === t
            ? void 0
            : t.hasFeature(C.oNc.CLAN)
        )
          ? "CLAN"
          : "NORMAL";
      }
      t.Z = {
        stringify: function (n, t) {
          var e, r, i, A;
          let N = null === (e = n.mentions) || void 0 === e ? void 0 : e[0],
            g =
              null != N && "string" != typeof N
                ? m.default.getUser(N.id)
                : void 0,
            I = n.channel_id,
            v = h.ZP.getName(null, I, n.author);
          switch (n.type) {
            case C.uaV.RECIPIENT_ADD:
              if (null == g) return;
              return (0, u.Rp)(
                T.intl.formatToParts(T.t["7/Xl0d"], {
                  username: v,
                  usernameOnClick: C.dG4,
                  otherUsername: h.ZP.getName(null, I, g),
                  otherUsernameOnClick: C.dG4,
                }),
              );
            case C.uaV.RECIPIENT_REMOVE:
              if (null == g) return;
              let R = n.author;
              if (null == R || R.id === g.id)
                return (0, u.Rp)(
                  T.intl.formatToParts(T.t["Qn5+LS"], {
                    username: v,
                    usernameOnClick: C.dG4,
                  }),
                );
              return (0, u.Rp)(
                T.intl.formatToParts(T.t.QtZ0RE, {
                  username: v,
                  usernameOnClick: C.dG4,
                  otherUsername: h.ZP.getName(null, I, g),
                  otherUsernameOnClick: C.dG4,
                }),
              );
            case C.uaV.CALL:
              let { call: O } = n;
              if (null != O && -1 === O.participants.indexOf(E.default.getId()))
                return (0, u.Rp)(
                  T.intl.formatToParts(T.t.DbgSAw, {
                    username: v,
                    usernameOnClick: C.dG4,
                  }),
                );
              return;
            case C.uaV.CHANNEL_NAME_CHANGE:
              return (0, u.Rp)(
                T.intl.formatToParts(
                  t.isForumPost() ? T.t["qa0e/v"] : T.t.XCPMEB,
                  {
                    username: v,
                    usernameOnClick: C.dG4,
                    channelName: n.content,
                  },
                ),
              );
            case C.uaV.CHANNEL_ICON_CHANGE:
              return (0, u.Rp)(
                T.intl.formatToParts(T.t.wypJZ2, {
                  username: v,
                  usernameOnClick: C.dG4,
                }),
              );
            case C.uaV.CHANNEL_PINNED_MESSAGE:
              return (0, u.Rp)(
                T.intl.formatToParts(T.t["/M60j4"], {
                  username: v,
                  usernameOnClick: C.dG4,
                }),
              );
            case C.uaV.USER_JOIN:
              let P = M(t.guild_id);
              return (0, u.Rp)(
                T.intl.formatToParts(S(n.id, P), {
                  username: v,
                  usernameOnClick: C.dG4,
                }),
              );
            case C.uaV.GUILD_BOOST:
              return Z(v);
            case C.uaV.GUILD_BOOST_TIER_1:
            case C.uaV.GUILD_BOOST_TIER_2:
            case C.uaV.GUILD_BOOST_TIER_3:
              return b(v, I);
            case C.uaV.GUILD_INVITE_REMINDER:
              return T.intl.string(T.t.gxyKvr);
            case C.uaV.THREAD_STARTER_MESSAGE:
              return T.intl.formatToPlainString(T.t["B8H+Cg"], {
                username: v,
                threadName: t.name,
              });
            case C.uaV.ROLE_SUBSCRIPTION_PURCHASE:
              if (n instanceof f.ZP) return null;
              return (0, u.Rp)(
                (0, a.vp)({
                  username: v,
                  guildId: t.guild_id,
                  roleSubscriptionData: n.role_subscription_data,
                }),
              );
            case C.uaV.PURCHASE_NOTIFICATION:
              if (
                n instanceof f.ZP ||
                (null === (i = n.purchase_notification) || void 0 === i
                  ? void 0
                  : null === (r = i.guild_product_purchase) || void 0 === r
                    ? void 0
                    : r.product_name) == null
              )
                return null;
              return (0, u.Rp)(
                (0, l.i)({
                  username: v,
                  productName:
                    n.purchase_notification.guild_product_purchase.product_name,
                }),
              );
            case C.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION:
              if (n instanceof f.ZP) return null;
              let y = (0, d.ZH)((0, o.e5)(n));
              return (0, u.Rp)(
                (0, c.Y)({ application: n.application, username: y.nick }),
              );
            case C.uaV.PRIVATE_CHANNEL_INTEGRATION_ADDED:
              if (n instanceof f.ZP) return null;
              return (0, u.Rp)(
                (0, s.B2)({
                  application: n.application,
                  username: (0, d.ZH)((0, o.e5)(n)).nick,
                }),
              );
            case C.uaV.PRIVATE_CHANNEL_INTEGRATION_REMOVED:
              if (n instanceof f.ZP) return null;
              return (0, u.Rp)(
                (0, s.hj)({
                  application: n.application,
                  username: (0, d.ZH)((0, o.e5)(n)).nick,
                }),
              );
            case C.uaV.AUTO_MODERATION_ACTION:
              if (
                null === (A = n.embeds) || void 0 === A
                  ? void 0
                  : A.some((n) => {
                      let { type: t } = n;
                      return t === C.hBH.AUTO_MODERATION_NOTIFICATION;
                    })
              )
                return (function (n) {
                  let t = _.Z.getChannel(n);
                  if (null == t) return null;
                  let e = p.Z.getGuild(t.getGuildId());
                  return null == e
                    ? null
                    : (0, u.Rp)(
                        T.intl.formatToParts(T.t["a+lJKi"], {
                          guildName: e.name,
                        }),
                      );
                })(I);
              return n.content;
            case C.uaV.GUILD_INCIDENT_ALERT_MODE_ENABLED:
              return (function (n, t, e) {
                let r = _.Z.getChannel(t);
                if (null == r) return null;
                let i = p.Z.getGuild(r.getGuildId());
                return null == i
                  ? null
                  : (0, u.Rp)(
                      T.intl.formatToParts(T.t.iOuWPj, {
                        username: n,
                        guildName: i.name,
                        time:
                          "" !== e
                            ? new Date(e).toLocaleString(T.intl.currentLocale, {
                                hour: "numeric",
                                minute: "2-digit",
                              })
                            : "",
                      }),
                    );
              })(v, I, n.content);
            case C.uaV.GUILD_INCIDENT_ALERT_MODE_DISABLED:
              return (function (n, t) {
                let e = _.Z.getChannel(t);
                if (null == e) return null;
                let r = p.Z.getGuild(e.getGuildId());
                return null == r
                  ? null
                  : (0, u.Rp)(
                      T.intl.formatToParts(T.t.axmbpq, {
                        username: n,
                        guildName: r.name,
                      }),
                    );
              })(v, I);
            default:
              return n.content;
          }
        },
        getSystemMessageUserJoin: function (n, t) {
          let e = O(t),
            r = A.default.extractTimestamp(n) % e.length;
          return e[r];
        },
        getSystemMessageUserJoinMobile: S,
        getSystemMessageBotJoin: function (n) {
          return null == N[n]
            ? null
            : T.intl.format(T.t.xw1Ij4, {
                learnOnClick: { onClick: () => window.open(N[n]) },
              });
        },
        getWelcomeMessageKind: M,
      };
    },
    261121: function (n, t, e) {
      n.exports = {
        streamerModeEnabled: "streamerModeEnabled_c50c8b",
        streamerModeEnabledImage: "streamerModeEnabledImage_c50c8b",
        streamerModeEnabledBtn: "streamerModeEnabledBtn_c50c8b",
        disabled: "disabled_c50c8b",
      };
    },
    303511: function (n, t, e) {
      n.exports = { loadingWrapper: "loadingWrapper_c8df80" };
    },
    150626: function (n, t, e) {
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
    457900: function (n, t, e) {
      n.exports = { text: "text_b953a6" };
    },
    148562: function (n, t, e) {
      n.exports = { list: "list_fd4745" };
    },
    705197: function (n, t, e) {
      n.exports = {
        videoPaused: "videoPaused_f2b765",
        warningCircle: "warningCircle_f2b765",
      };
    },
    312403: function (n, t, e) {
      n.exports = {
        root: "root_dc0d6d",
        icon: "icon_dc0d6d",
        text: "text_dc0d6d",
        info: "info_dc0d6d",
        warning: "warning_dc0d6d",
      };
    },
    728513: function (n, t, e) {
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
//# sourceMappingURL=71683874737461febad8.js.map
