"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["24783"],
  {
    108843: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return a;
        },
      });
      var i = e(200651);
      e(192379);
      var l = e(906732);
      function a(n, t) {
        return function (e) {
          let { analyticsLocations: a } = (0, l.ZP)(t);
          return (0, i.jsx)(l.Gt, {
            value: a,
            children: (0, i.jsx)(n, { ...e }),
          });
        };
      }
    },
    207035: function (n, t, e) {
      e.d(t, {
        P: function () {
          return l;
        },
      });
      let i = (0, e(818083).B)({
        kind: "user",
        id: "2023-08-30_open-in-popout",
        label: "Open Channel in Popout",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
      });
      function l(n) {
        return i.useExperiment({ location: n }, { autoTrackExposure: !1 })
          .enabled;
      }
    },
    439635: function (n, t, e) {
      e.r(t);
      var i = e(200651);
      e(192379);
      var l = e(481060),
        a = e(239091),
        r = e(108843),
        u = e(100527),
        o = e(299206),
        c = e(423589),
        d = e(398048),
        s = e(315732),
        p = e(3689),
        _ = e(323597),
        f = e(852245),
        E = e(367722),
        Z = e(776568),
        h = e(218035),
        g = e(775666),
        M = e(593589),
        C = e(442754),
        x = e(981631),
        I = e(388032);
      t.default = (0, r.Z)(
        function (n) {
          let { channel: t, guild: e, includeTopic: r = !1, onSelect: u } = n,
            N = (0, C.Z)(t),
            P = (0, Z.ZP)(t),
            b = (0, h.Z)(t),
            j = (0, s.Z)(t),
            T = (0, f.Z)(t),
            v = (0, E.Z)(t, e),
            A = (0, d.Z)(t, e),
            G = (0, p.Z)(t, e, x.d4z.GUILD_TEXT),
            m = (0, p.Z)(t, e, x.d4z.GUILD_VOICE),
            y = (0, _.Z)(t),
            L = (0, o.Z)({ id: t.id, label: I.intl.string(I.t.gFHI3t) }),
            O = (0, M.Z)(t, "title_context_menu"),
            U = (0, c.Mn)("ChannelTitleContextMenu"),
            S = (0, g.ZP)(t);
          return (0, i.jsxs)(l.Menu, {
            navId: "channel-context",
            onClose: a.Zy,
            "aria-label": I.intl.string(I.t.Xm41aW),
            onSelect: u,
            children: [
              (0, i.jsx)(l.MenuGroup, { children: N }),
              (0, i.jsx)(l.MenuGroup, { children: P }),
              (0, i.jsxs)(l.MenuGroup, { children: [r ? j : U ? S : b, T] }),
              (0, i.jsxs)(l.MenuGroup, { children: [v, A, G, m] }),
              (0, i.jsx)(l.MenuGroup, { children: O }),
              (0, i.jsx)(l.MenuGroup, { children: y }),
              (0, i.jsx)(l.MenuGroup, { children: L }),
            ],
          });
        },
        [u.Z.CONTEXT_MENU, u.Z.CHANNEL_TITLE_MENU],
      );
    },
    398048: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return c;
        },
      });
      var i = e(200651);
      e(192379);
      var l = e(442837),
        a = e(481060),
        r = e(496675),
        u = e(981631),
        o = e(388032);
      function c(n, t) {
        let c = (0, l.e7)([r.Z], () => r.Z.can(u.Plq.MANAGE_CHANNELS, n), [n]);
        return __OVERLAY__ || !c
          ? null
          : (0, i.jsx)(a.MenuItem, {
              id: "clone-channel",
              label: o.intl.string(o.t.dEaPc3),
              action: () =>
                (0, a.openModalLazy)(async () => {
                  let { default: l } = await Promise.all([
                    e.e("7590"),
                    e.e("45094"),
                    e.e("74100"),
                  ]).then(e.bind(e, 218613));
                  return (e) =>
                    (0, i.jsx)(l, {
                      ...e,
                      channelType: n.type,
                      guildId: t.id,
                      categoryId: n.parent_id,
                      cloneChannelId: n.id,
                    });
                }),
            });
      }
    },
    315732: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return u;
        },
      });
      var i = e(200651);
      e(192379);
      var l = e(481060),
        a = e(572004),
        r = e(388032);
      function u(n) {
        return a.wS
          ? (0, i.jsx)(l.MenuItem, {
              id: "copy-channel-topic",
              label: r.intl.string(r.t.Tb3Vsr),
              action: () => (0, a.JG)(n.topic),
            })
          : null;
      }
    },
    3689: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return c;
        },
      });
      var i = e(200651);
      e(192379);
      var l = e(442837),
        a = e(481060),
        r = e(496675),
        u = e(981631),
        o = e(388032);
      function c(n, t) {
        let c =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : n.type,
          d = (0, l.e7)([r.Z], () => r.Z.can(u.Plq.MANAGE_CHANNELS, n), [n]);
        if (__OVERLAY__ || !d) return null;
        let s = () => {
          (0, a.openModalLazy)(async () => {
            let { default: t } = await Promise.all([
              e.e("7590"),
              e.e("45094"),
              e.e("74100"),
            ]).then(e.bind(e, 218613));
            return (e) =>
              (0, i.jsx)(t, {
                ...e,
                channelType: c,
                guildId: n.guild_id,
                categoryId: n.parent_id,
              });
          });
        };
        switch (c) {
          case u.d4z.GUILD_TEXT:
            return (0, i.jsx)(a.MenuItem, {
              id: "create-text-channel",
              label: o.intl.string(o.t.HHkTJC),
              action: s,
            });
          case u.d4z.GUILD_VOICE:
            return (0, i.jsx)(a.MenuItem, {
              id: "create-voice-channel",
              label: o.intl.string(o.t.AlbZaG),
              action: s,
            });
          default:
            return null;
        }
      }
    },
    852245: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return s;
        },
      });
      var i = e(200651);
      e(192379);
      var l = e(442837),
        a = e(481060),
        r = e(787014),
        u = e(685929),
        o = e(496675),
        c = e(981631),
        d = e(388032);
      function s(n) {
        let {
          canManageChannels: t,
          canManageRoles: e,
          canManageWebhooks: s,
          canAccessChannel: p,
          canUnlinkChannel: _,
        } = (0, l.cj)(
          [o.Z],
          () => ({
            canManageChannels: o.Z.can(c.Plq.MANAGE_CHANNELS, n),
            canManageRoles: o.Z.can(c.Plq.MANAGE_ROLES, n),
            canManageWebhooks: o.Z.can(c.Plq.MANAGE_WEBHOOKS, n),
            canAccessChannel: o.Z.can(n.accessPermissions, n),
            canUnlinkChannel: (0, u.C)(n, o.Z),
          }),
          [n],
        );
        return !__OVERLAY__ && p && (t || e || s || _)
          ? (0, i.jsx)(a.MenuItem, {
              id: "edit-channel",
              label:
                n.type === c.d4z.GUILD_CATEGORY
                  ? d.intl.string(d.t.zdPFs7)
                  : d.intl.string(d.t["3gUsJS"]),
              action: () => r.ZP.open(n.id),
            })
          : null;
      }
    },
    367722: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return a;
        },
      });
      var i = e(466330),
        l = e(981631);
      function a(n, t, e) {
        return (0, i.Z)({
          guild: t,
          channel: n,
          stageInstance: e,
          source: l.t4x.CONTEXT_MENU,
        });
      }
    },
    593589: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return f;
        },
      });
      var i = e(200651),
        l = e(192379),
        a = e(481060),
        r = e(372900),
        u = e(238246),
        o = e(788983),
        c = e(207035),
        d = e(823748),
        s = e(981631),
        p = e(157523);
      function _(n) {
        let { windowKey: t, channel: e } = n;
        return (0, i.jsx)(u.Z, {
          withTitleBar: !0,
          windowKey: t,
          title: e.name,
          channelId: e.id,
          contentClassName: p.popoutContent,
          children: (0, i.jsx)(r.Z.Provider, {
            value: e.guild_id,
            children: (0, i.jsx)(d.Z, { providedChannel: e }),
          }),
        });
      }
      function f(n, t) {
        let e = (0, c.P)(t),
          r = l.useCallback(() => {
            o.bA(
              "".concat(s.KJ3.CHANNEL_POPOUT, "-").concat(n.id),
              (t) => (0, i.jsx)(_, { windowKey: t, channel: n }),
              { defaultWidth: 854, defaultHeight: 480 },
            );
          }, [n]);
        return e
          ? (0, i.jsx)(a.MenuItem, {
              id: "channel-pop-out",
              label: "Open in Popout",
              action: () => r(),
            })
          : null;
      }
    },
    442754: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return p;
        },
      });
      var i = e(200651);
      e(192379);
      var l = e(442837),
        a = e(481060),
        r = e(362658),
        u = e(152376),
        o = e(398758),
        c = e(9156),
        d = e(981631),
        s = e(388032);
      function p(n) {
        let { isFavoritesPerk: t } = (0, r.z)("useChannelOptInItems"),
          e = (0, o.DM)(n.guild_id),
          p = (0, l.e7)([c.ZP], () => c.ZP.isChannelOptedIn(n.guild_id, n.id)),
          _ = (0, l.e7)(
            [c.ZP],
            () =>
              null != n.parent_id &&
              c.ZP.isChannelOptedIn(n.guild_id, n.parent_id),
          ),
          f = (0, l.e7)([c.ZP], () => c.ZP.isFavorite(n.guild_id, n.id)),
          E = () => {
            (0, u.XQ)(n.guild_id, n.id, !p, { section: d.jXE.CONTEXT_MENU });
          },
          Z = () => {
            null != n.parent_id &&
              (0, u.XQ)(n.guild_id, n.parent_id, !1, {
                section: d.jXE.CONTEXT_MENU,
              });
          };
        if (!e || n.isThread()) return null;
        if (n.isCategory())
          return (0, i.jsx)(a.MenuItem, {
            id: "opt-into-category",
            label: p
              ? s.intl.string(s.t["3zySTE"])
              : s.intl.string(s.t["9mysCg"]),
            action: () => E(),
          });
        let h = f ? s.intl.string(s.t.z7I3gY) : s.intl.string(s.t["N2c/Ul"]),
          g = f ? s.intl.string(s.t.M5PWSU) : s.intl.string(s.t.RMpwZm);
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(a.MenuItem, {
              id: "opt-in-favorite-channel",
              label: t ? g : h,
              action: () => {
                (0, u.dM)(n.guild_id, n.id, !f, {
                  section: d.jXE.CONTEXT_MENU,
                });
              },
            }),
            _
              ? (0, i.jsx)(a.MenuItem, {
                  id: "opt-out-category",
                  label: s.intl.string(s.t.jNphKS),
                  action: () => Z(),
                })
              : (0, i.jsx)(a.MenuItem, {
                  id: "opt-into-channel",
                  label: p
                    ? s.intl.string(s.t["3zySTE"])
                    : s.intl.string(s.t["9mysCg"]),
                  action: () => E(),
                }),
          ],
        });
      }
    },
    466330: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return s;
        },
      });
      var i = e(200651);
      e(192379);
      var l = e(442837),
        a = e(481060),
        r = e(159300),
        u = e(984933),
        o = e(496675),
        c = e(981631),
        d = e(388032);
      function s(n) {
        let { source: t, guild: e, channel: i, stageInstance: a } = n,
          d = (0, l.e7)([u.ZP], () =>
            u.ZP.getDefaultChannel(e.id, !0, c.Plq.CREATE_INSTANT_INVITE),
          ),
          s = (0, l.e7)([o.Z], () => (0, r.b)(o.Z, e, i, a)),
          f = p(t, e, s && null != i ? i : d),
          E = _(t);
        return null == i && t === c.t4x.GUILD_CONTEXT_MENU
          ? null
          : s || null != d
            ? f
            : E;
      }
      let p = (n, t, l) =>
          (0, i.jsx)(a.MenuItem, {
            id: "invite-people",
            label: d.intl.string(d.t.BN75l5),
            color: "brand",
            icon: n === c.t4x.GUILD_HEADER ? a.GroupPlusIcon : void 0,
            action: () =>
              (0, a.openModalLazy)(async () => {
                let { default: a } = await Promise.all([
                  e.e("7654"),
                  e.e("86004"),
                ]).then(e.bind(e, 560114));
                return (e) =>
                  (0, i.jsx)(a, { ...e, guild: t, channel: l, source: n });
              }),
          }),
        _ = (n) =>
          (0, i.jsx)(a.MenuItem, {
            id: "invite-people",
            label: d.intl.string(d.t.BN75l5),
            color: "brand",
            icon: n === c.t4x.GUILD_HEADER ? a.GroupPlusIcon : void 0,
            action: () =>
              (0, a.openModalLazy)(async () => {
                let { default: n } = await e.e("88358").then(e.bind(e, 598402));
                return (t) => (0, i.jsx)(n, { ...t });
              }),
          });
    },
    685929: function (n, t, e) {
      e.d(t, {
        C: function () {
          return r;
        },
        Y: function () {
          return u;
        },
      });
      var i = e(442837),
        l = e(496675),
        a = e(981631);
      function r(n) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.Z;
        return (
          null != n &&
          null != n.linkedLobby &&
          t.can(a.Plq.MANAGE_CHANNELS, n) &&
          t.can(a.Plq.VIEW_CHANNEL, n) &&
          t.can(a.Plq.SEND_MESSAGES, n)
        );
      }
      function u(n) {
        return (0, i.e7)([l.Z], () => r(n, l.Z));
      }
    },
    157523: function (n, t, e) {
      n.exports = { popoutContent: "popoutContent_fc32a6" };
    },
  },
]);
//# sourceMappingURL=de021131050e2188965e.js.map
