"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["52590"],
  {
    205784: function (e, t, l) {
      l.r(t),
        l.d(t, {
          default: function () {
            return p;
          },
        });
      var n = l(200651);
      l(192379);
      var i = l(442837),
        d = l(481060),
        u = l(239091),
        r = l(749210),
        a = l(664915),
        o = l(771845),
        s = l(181945),
        c = l(945983),
        f = l(981631),
        m = l(388032);
      function p(e) {
        var t;
        let {
            folderId: p,
            folderName: b,
            folderColor: g,
            unread: j,
            onSelect: x,
          } = e,
          Z = (0, i.e7)([o.ZP], () => o.ZP.getGuildFolderById(p), [p]),
          k = (0, c.Z)(
            null !== (t = null == Z ? void 0 : Z.guildIds) && void 0 !== t
              ? t
              : [],
          ),
          M = (0, i.e7)([a.Z], () => a.Z.getExpandedFolders().size > 0);
        return (0, n.jsxs)(d.Menu, {
          navId: "guild-context",
          "aria-label": m.intl.string(m.t.HpQykZ),
          onClose: u.Zy,
          onSelect: x,
          children: [
            (0, n.jsx)(d.MenuGroup, {
              children: (0, n.jsx)(d.MenuItem, {
                id: "mark-folder-read",
                label: m.intl.string(m.t.thzRJC),
                action: function () {
                  if (null == Z) return;
                  let { guildIds: e } = Z;
                  (0, s.Z)(e, f.jXE.GUILD_LIST);
                },
                disabled: !j,
              }),
            }),
            null != k ? (0, n.jsx)(d.MenuGroup, { children: k }) : null,
            (0, n.jsxs)(d.MenuGroup, {
              children: [
                (0, n.jsx)(d.MenuItem, {
                  id: "folder-settings",
                  label: m.intl.string(m.t.Dx7im5),
                  action: () =>
                    (0, d.openModalLazy)(async () => {
                      let { default: e } = await l
                        .e("66915")
                        .then(l.bind(l, 662708));
                      return (t) =>
                        (0, n.jsx)(e, {
                          ...t,
                          folderId: p,
                          folderName: b,
                          folderColor: g,
                        });
                    }),
                }),
                M &&
                  (0, n.jsx)(d.MenuItem, {
                    id: "folder-collapse",
                    label: m.intl.string(m.t.rCPsbm),
                    action: () => r.Z.collapseAllFolders(),
                  }),
              ],
            }),
          ],
        });
      }
    },
    945983: function (e, t, l) {
      l.d(t, {
        Z: function () {
          return g;
        },
      });
      var n = l(200651),
        i = l(192379),
        d = l(913527),
        u = l.n(d),
        r = l(442837),
        a = l(481060),
        o = l(87051),
        s = l(776568),
        c = l(818083),
        f = l(9156),
        m = l(621600),
        p = l(388032);
      let b = (0, c.B)({
        kind: "user",
        id: "2022-02_guild_folder_mute",
        label: "Guild Folder Mute",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
      });
      function g(e, t) {
        let { enabled: l } = b.useExperiment(
            { location: "74d87e_1" },
            { autoTrackExposure: !1 },
          ),
          d = (0, r.cj)(
            [f.ZP],
            () => Object.fromEntries(e.map((e) => [e, f.ZP.isMuted(e)])),
            [e],
          ),
          c = i.useCallback(
            (l) => {
              let n = Object.fromEntries(
                e
                  .filter((e) => !d[e])
                  .map((e) => [
                    e,
                    {
                      muted: !0,
                      mute_config:
                        null != l
                          ? {
                              selected_time_window: l,
                              end_time:
                                l > 0
                                  ? u()().add(l, "second").toISOString()
                                  : null,
                            }
                          : void 0,
                    },
                  ]),
              );
              o.Z.updateGuildNotificationSettingsBulk(n, m.ZB.Muted, t);
            },
            [e, t, d],
          ),
          g = i.useCallback(() => {
            o.Z.updateGuildNotificationSettingsBulk(
              Object.fromEntries(
                e.filter((e) => d[e]).map((e) => [e, { muted: !1 }]),
              ),
              m.ZB.Unmuted,
              t,
            );
          }, [e, t, d]);
        return l
          ? (0, n.jsxs)(n.Fragment, {
              children: [
                (0, n.jsx)(a.MenuItem, {
                  id: "mute-folder",
                  label: p.intl.string(p.t.vBTk2N),
                  action: () => c(),
                  children: (0, s.k)().map((e) => {
                    let { value: t, label: l } = e;
                    return (0, n.jsx)(
                      a.MenuItem,
                      { id: "".concat(t), label: l, action: () => c(t) },
                      t,
                    );
                  }),
                }),
                (0, n.jsx)(a.MenuItem, {
                  id: "unmute-folder",
                  label: p.intl.string(p.t.VFDdkZ),
                  action: g,
                }),
              ],
            })
          : null;
      }
    },
  },
]);
//# sourceMappingURL=4581c7544b38e8efa05b.js.map
