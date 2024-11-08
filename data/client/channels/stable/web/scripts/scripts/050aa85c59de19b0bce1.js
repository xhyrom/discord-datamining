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
        h = e(852245),
        Z = e(367722),
        f = e(776568),
        g = e(218035),
        E = e(775666),
        M = e(593589),
        x = e(442754),
        I = e(981631),
        C = e(388032);
      t.default = (0, r.Z)(
        function (n) {
          let { channel: t, guild: e, includeTopic: r = !1, onSelect: u } = n,
            j = (0, x.Z)(t),
            N = (0, f.ZP)(t),
            b = (0, g.Z)(t),
            P = (0, s.Z)(t),
            T = (0, h.Z)(t),
            v = (0, Z.Z)(t, e),
            m = (0, d.Z)(t, e),
            y = (0, p.Z)(t, e, I.d4z.GUILD_TEXT),
            A = (0, p.Z)(t, e, I.d4z.GUILD_VOICE),
            G = (0, _.Z)(t),
            L = (0, o.Z)({ id: t.id, label: C.intl.string(C.t.gFHI3t) }),
            O = (0, M.Z)(t, "title_context_menu"),
            U = (0, c.Mn)("ChannelTitleContextMenu"),
            w = (0, E.ZP)(t);
          return (0, i.jsxs)(l.Menu, {
            navId: "channel-context",
            onClose: a.Zy,
            "aria-label": C.intl.string(C.t.Xm41aW),
            onSelect: u,
            children: [
              (0, i.jsx)(l.MenuGroup, { children: j }),
              (0, i.jsx)(l.MenuGroup, { children: N }),
              (0, i.jsxs)(l.MenuGroup, { children: [r ? P : U ? w : b, T] }),
              (0, i.jsxs)(l.MenuGroup, { children: [v, m, y, A] }),
              (0, i.jsx)(l.MenuGroup, { children: O }),
              (0, i.jsx)(l.MenuGroup, { children: G }),
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
                    e.e("74287"),
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
              e.e("74287"),
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
          return d;
        },
      });
      var i = e(200651);
      e(192379);
      var l = e(442837),
        a = e(481060),
        r = e(787014),
        u = e(496675),
        o = e(981631),
        c = e(388032);
      function d(n) {
        let {
          canManageChannels: t,
          canManageRoles: e,
          canManageWebhooks: d,
          canAccessChannel: s,
        } = (0, l.cj)(
          [u.Z],
          () => ({
            canManageChannels: u.Z.can(o.Plq.MANAGE_CHANNELS, n),
            canManageRoles: u.Z.can(o.Plq.MANAGE_ROLES, n),
            canManageWebhooks: u.Z.can(o.Plq.MANAGE_WEBHOOKS, n),
            canAccessChannel: u.Z.can(n.accessPermissions, n),
          }),
          [n],
        );
        return !__OVERLAY__ && s && (t || e || d)
          ? (0, i.jsx)(a.MenuItem, {
              id: "edit-channel",
              label:
                n.type === o.d4z.GUILD_CATEGORY
                  ? c.intl.string(c.t.zdPFs7)
                  : c.intl.string(c.t["3gUsJS"]),
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
          return h;
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
        p = e(118018);
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
      function h(n, t) {
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
          h = (0, l.e7)([c.ZP], () => c.ZP.isFavorite(n.guild_id, n.id)),
          Z = () => {
            (0, u.XQ)(n.guild_id, n.id, !p, { section: d.jXE.CONTEXT_MENU });
          },
          f = () => {
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
            action: () => Z(),
          });
        let g = h ? s.intl.string(s.t.z7I3gY) : s.intl.string(s.t["N2c/Ul"]),
          E = h ? s.intl.string(s.t.M5PWSU) : s.intl.string(s.t.RMpwZm);
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(a.MenuItem, {
              id: "opt-in-favorite-channel",
              label: t ? E : g,
              action: () => {
                (0, u.dM)(n.guild_id, n.id, !h, {
                  section: d.jXE.CONTEXT_MENU,
                });
              },
            }),
            _
              ? (0, i.jsx)(a.MenuItem, {
                  id: "opt-out-category",
                  label: s.intl.string(s.t.jNphKS),
                  action: () => f(),
                })
              : (0, i.jsx)(a.MenuItem, {
                  id: "opt-into-channel",
                  label: p
                    ? s.intl.string(s.t["3zySTE"])
                    : s.intl.string(s.t["9mysCg"]),
                  action: () => Z(),
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
          h = p(t, e, s && null != i ? i : d),
          Z = _(t);
        return null == i && t === c.t4x.GUILD_CONTEXT_MENU
          ? null
          : s || null != d
            ? h
            : Z;
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
                  e.e("19821"),
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
    118018: function (n, t, e) {
      n.exports = { popoutContent: "popoutContent_fc32a6" };
    },
  },
]);
//# sourceMappingURL=050aa85c59de19b0bce1.js.map
