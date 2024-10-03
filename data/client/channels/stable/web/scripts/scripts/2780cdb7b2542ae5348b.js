"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["52590"],
  {
    205784: function (e, l, t) {
      t.r(l),
        t.d(l, {
          default: function () {
            return _;
          },
        });
      var n = t(735250);
      t(470079);
      var d = t(442837),
        i = t(481060),
        u = t(239091),
        a = t(749210),
        s = t(664915),
        r = t(771845),
        o = t(181945),
        c = t(945983),
        f = t(981631),
        E = t(689938);
      function _(e) {
        var l;
        let {
            folderId: _,
            folderName: m,
            folderColor: M,
            unread: p,
            onSelect: b,
          } = e,
          Z = (0, d.e7)([r.ZP], () => r.ZP.getGuildFolderById(_), [_]),
          g = (0, c.Z)(
            null !== (l = null == Z ? void 0 : Z.guildIds) && void 0 !== l
              ? l
              : [],
          ),
          L = (0, d.e7)([s.Z], () => s.Z.getExpandedFolders().size > 0);
        return (0, n.jsxs)(i.Menu, {
          navId: "guild-context",
          "aria-label": E.Z.Messages.GUILD_ACTIONS_MENU_LABEL,
          onClose: u.Zy,
          onSelect: b,
          children: [
            (0, n.jsx)(i.MenuGroup, {
              children: (0, n.jsx)(i.MenuItem, {
                id: "mark-folder-read",
                label: E.Z.Messages.SERVER_FOLDER_MARK_AS_READ,
                action: function () {
                  if (null == Z) return;
                  let { guildIds: e } = Z;
                  (0, o.Z)(e, f.jXE.GUILD_LIST);
                },
                disabled: !p,
              }),
            }),
            null != g ? (0, n.jsx)(i.MenuGroup, { children: g }) : null,
            (0, n.jsxs)(i.MenuGroup, {
              children: [
                (0, n.jsx)(i.MenuItem, {
                  id: "folder-settings",
                  label: E.Z.Messages.SERVER_FOLDER_SETTINGS,
                  action: () =>
                    (0, i.openModalLazy)(async () => {
                      let { default: e } = await t
                        .e("66915")
                        .then(t.bind(t, 662708));
                      return (l) =>
                        (0, n.jsx)(e, {
                          ...l,
                          folderId: _,
                          folderName: m,
                          folderColor: M,
                        });
                    }),
                }),
                L &&
                  (0, n.jsx)(i.MenuItem, {
                    id: "folder-collapse",
                    label: E.Z.Messages.SERVER_FOLDER_COLLAPSE_ALL,
                    action: () => a.Z.collapseAllFolders(),
                  }),
              ],
            }),
          ],
        });
      }
    },
    945983: function (e, l, t) {
      t.d(l, {
        Z: function () {
          return M;
        },
      });
      var n = t(735250),
        d = t(470079),
        i = t(913527),
        u = t.n(i),
        a = t(442837),
        s = t(481060),
        r = t(87051),
        o = t(776568),
        c = t(818083),
        f = t(9156),
        E = t(621600),
        _ = t(689938);
      let m = (0, c.B)({
        kind: "user",
        id: "2022-02_guild_folder_mute",
        label: "Guild Folder Mute",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
      });
      function M(e, l) {
        let { enabled: t } = m.useExperiment(
            { location: "74d87e_1" },
            { autoTrackExposure: !1 },
          ),
          i = (0, a.cj)(
            [f.ZP],
            () => Object.fromEntries(e.map((e) => [e, f.ZP.isMuted(e)])),
            [e],
          ),
          c = d.useCallback(
            (t) => {
              let n = Object.fromEntries(
                e
                  .filter((e) => !i[e])
                  .map((e) => [
                    e,
                    {
                      muted: !0,
                      mute_config:
                        null != t
                          ? {
                              selected_time_window: t,
                              end_time:
                                t > 0
                                  ? u()().add(t, "second").toISOString()
                                  : null,
                            }
                          : void 0,
                    },
                  ]),
              );
              r.Z.updateGuildNotificationSettingsBulk(n, E.ZB.Muted, l);
            },
            [e, l, i],
          ),
          M = d.useCallback(() => {
            r.Z.updateGuildNotificationSettingsBulk(
              Object.fromEntries(
                e.filter((e) => i[e]).map((e) => [e, { muted: !1 }]),
              ),
              E.ZB.Unmuted,
              l,
            );
          }, [e, l, i]);
        return t
          ? (0, n.jsxs)(n.Fragment, {
              children: [
                (0, n.jsx)(s.MenuItem, {
                  id: "mute-folder",
                  label: _.Z.Messages.SERVER_FOLDER_MUTE_ALL,
                  action: () => c(),
                  children: (0, o.k)().map((e) => {
                    let { value: l, label: t } = e;
                    return (0, n.jsx)(
                      s.MenuItem,
                      { id: "".concat(l), label: t, action: () => c(l) },
                      l,
                    );
                  }),
                }),
                (0, n.jsx)(s.MenuItem, {
                  id: "unmute-folder",
                  label: _.Z.Messages.SERVER_FOLDER_UNMUTE_ALL,
                  action: M,
                }),
              ],
            })
          : null;
      }
    },
  },
]);
//# sourceMappingURL=2780cdb7b2542ae5348b.js.map
