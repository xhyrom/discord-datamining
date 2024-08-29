"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["36036"],
  {
    694312: function (e, t, n) {
      n.d(t, {
        E: function () {
          return p;
        },
      }),
        n(47120);
      var i = n(470079),
        l = n(442837),
        r = n(835473),
        a = n(594174),
        o = n(695103),
        u = n(823379),
        c = n(358085),
        d = n(317381),
        s = n(761122);
      function p(e) {
        let t = (0, l.e7)([a.default], a.default.getCurrentUser),
          n = (0, l.Wu)([d.ZP], () => d.ZP.getShelfActivities(e)),
          p = (0, l.e7)([o.Z], () => o.Z.testModeEmbeddedApplicationId),
          f = n.map((e) => e.application_id),
          v = null != p ? [p, ...f] : f,
          Z = (0, r.Z)(v),
          _ = i.useMemo(() => Z.filter(u.lm), [Z]),
          h = i.useMemo(
            () =>
              null != p &&
              _.length > 0 &&
              _[0].id === p &&
              null != _[0].embeddedActivityConfig
                ? [{ activity: _[0].embeddedActivityConfig, application: _[0] }]
                : [],
            [_, p],
          ),
          m = i.useMemo(
            () =>
              n
                .map((e) => {
                  let t = _.find((t) => t.id === e.application_id);
                  return null == t ? null : { activity: e, application: t };
                })
                .filter(u.lm),
            [n, _],
          );
        return i.useMemo(
          () =>
            [...h, ...m]
              .filter((e) => {
                var t;
                let { activity: n } = e;
                return (
                  null !== (t = n.supported_platforms) && void 0 !== t ? t : []
                ).includes((0, s.Z)((0, c.getOS)()));
              })
              .filter((e) => {
                let { activity: n } = e;
                return (
                  !n.requires_age_gate ||
                  (null == t ? void 0 : t.nsfwAllowed) === !0 ||
                  (null == t ? void 0 : t.nsfwAllowed) == null
                );
              }),
          [null == t ? void 0 : t.nsfwAllowed, m, h],
        );
      }
    },
    127255: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return c;
        },
      }),
        n(47120),
        n(653041);
      var i = n(470079),
        l = n(442837),
        r = n(115130),
        a = n(694312),
        o = n(405625),
        u = n(664097);
      function c(e) {
        let { guildId: t, enableFilter: n = !1 } = e,
          { filter: c } = (0, l.cj)([r.Z], () => ({ filter: r.Z.getFilter() })),
          d = (0, a.E)(t),
          s = (0, o.Z)(d),
          p = (0, u.o)();
        return i.useMemo(() => {
          function e(e) {
            return (
              !!(
                !n ||
                "" === c ||
                e.application.name.toLowerCase().includes(c.toLowerCase())
              ) || !1
            );
          }
          let t = [...p].filter(e),
            i = new Set(t.map((e) => e.application.id));
          for (let n of s) !i.has(n.application.id) && e(n) && t.push(n);
          return t;
        }, [p, n, c, s]);
      }
    },
    405625: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return c;
        },
      }),
        n(653041),
        n(47120);
      var i = n(470079),
        l = n(911969),
        r = n(822245),
        a = n(675478),
        o = n(358085),
        u = n(761122);
      function c(e) {
        return (
          a.DZ.loadIfNecessary(),
          i.useMemo(() => {
            let t = [];
            e.forEach((e) => t.push(e.application.id));
            let n = [...t];
            return (
              n.sort((e, n) => {
                let i = r.Z.getScoreWithoutLoadingLatest(e),
                  l = r.Z.getScoreWithoutLoadingLatest(n);
                return i !== l
                  ? l - i
                  : t.findIndex((t) => t === e) < t.findIndex((e) => e === n)
                    ? -1
                    : 1;
              }),
              d(e, n)
            );
          }, [e])
        );
      }
      let d = (e, t) => {
        let n = [...e],
          i = 0;
        return (
          t.forEach((e) => {
            let t = n.findIndex((t) => t.application.id === e);
            if (-1 !== t) {
              let e = n[t];
              n.splice(t, 1), (n = [...n.slice(0, i), e, ...n.slice(i)]), ++i;
            }
          }),
          n
            .map((e, t) => [e, t])
            .filter((e) => {
              var t, n;
              let [i] = e,
                r =
                  null === (n = i.application.embeddedActivityConfig) ||
                  void 0 === n
                    ? void 0
                    : null ===
                          (t =
                            n.client_platform_config[
                              (0, u.Z)((0, o.getOS)())
                            ]) || void 0 === t
                      ? void 0
                      : t.label_type;
              return !!r && (r === l.ww.NEW || r === l.ww.UPDATED);
            })
            .forEach((e) => {
              let [t, i] = e,
                l =
                  null != t.application.embeddedActivityConfig &&
                  null != t.application.embeddedActivityConfig.shelf_rank
                    ? t.application.embeddedActivityConfig.shelf_rank - 1
                    : i;
              if (l < i) {
                let e = n[i];
                n.splice(i, 1), (n = [...n.slice(0, l), e, ...n.slice(l)]);
              }
            }),
          n
        );
      };
    },
    664097: function (e, t, n) {
      n.d(t, {
        o: function () {
          return o;
        },
      });
      var i = n(470079),
        l = n(442837),
        r = n(115130),
        a = n(701488);
      let o = () => {
        let { isEnabled: e, lastUsedObject: t } = (0, l.cj)(
            [r.Z],
            () => ({
              isEnabled: r.Z.getIsEnabled(),
              lastUsedObject: r.Z.getLastUsedObject(),
            }),
            [],
          ),
          n = (0, l.Wu)([r.Z], () => r.Z.getDeveloperShelfItems(), []);
        return i.useMemo(
          () =>
            e
              ? n
                  .map((e) => ({
                    application: e,
                    activity: {
                      ...a.wT,
                      ...e.embeddedActivityConfig,
                      application_id: e.id,
                    },
                  }))
                  .sort((e, n) => {
                    let i = t[e.application.id],
                      l = t[n.application.id];
                    return null == i ? 1 : null == l ? -1 : l - i;
                  })
              : [],
          [n, e, t],
        );
      };
    },
    619915: function (e, t, n) {
      n.d(t, {
        QN: function () {
          return s;
        },
        ZP: function () {
          return d;
        },
        gb: function () {
          return p;
        },
        uF: function () {
          return f;
        },
      }),
        n(47120),
        n(653041);
      var i = n(470079),
        l = n(442837),
        r = n(835473),
        a = n(158776),
        o = n(594174),
        u = n(823379),
        c = n(317381);
      function d(e, t) {
        return p(
          (0, l.Wu)([c.ZP], () =>
            null != e && null != e.id && "" !== e.id
              ? c.ZP.getEmbeddedActivitiesForChannel(e.id)
              : c.i6,
          ),
          t,
        );
      }
      function s(e) {
        let t = p(
          (0, l.e7)([c.ZP], () =>
            null != e ? c.ZP.getEmbeddedActivitiesForGuild(e) : c.i6,
          ),
        );
        return i.useMemo(() => {
          let e = new Map();
          return (
            t.forEach((t) => {
              var n;
              let i = t.embeddedActivity.channelId,
                l = null !== (n = e.get(i)) && void 0 !== n ? n : [];
              l.push(t), e.set(i, l);
            }),
            e
          );
        }, [t]);
      }
      function p(e, t) {
        let n = e.map((e) => e.applicationId),
          a = (0, r.Z)(n),
          c = new Set([]);
        for (let t of e) for (let e of t.userIds) c.add(e);
        let d = (0, l.Wu)(
          [o.default],
          () => {
            let e = [];
            for (let t of c) e.push(o.default.getUser(t));
            return e;
          },
          [c],
        );
        return i.useMemo(() => {
          let n = new Map();
          return (
            d.forEach((e) => {
              null != e && n.set(e.id, e);
            }),
            e
              .map((e, i) => {
                let l = a[i],
                  r = [];
                if (null != r)
                  for (let i of e.userIds) {
                    let e = n.get(i);
                    if (null != e && null != t) {
                      let n = t(e);
                      null != n && r.push(n);
                    }
                  }
                return null == l
                  ? null
                  : {
                      embeddedActivity: e,
                      application: l,
                      userParticipantAvatarUrls: r,
                    };
              })
              .filter(u.lm)
          );
        }, [e, a, d, t]);
      }
      function f(e) {
        return (0, l.e7)(
          [a.Z],
          () => {
            let t = new Map();
            return (
              e.forEach((e) => {
                var n;
                let i = a.Z.findActivity(
                  null == e
                    ? void 0
                    : e.embeddedActivity.userIds.values().next().value,
                  (t) => {
                    var n;
                    return (
                      t.application_id ===
                      (null == e
                        ? void 0
                        : null === (n = e.application) || void 0 === n
                          ? void 0
                          : n.id)
                    );
                  },
                );
                t.set(
                  null == e
                    ? void 0
                    : null === (n = e.application) || void 0 === n
                      ? void 0
                      : n.id,
                  { ...e, presenceActivity: i },
                );
              }),
              t
            );
          },
          [e],
          l.pF,
        );
      }
    },
    880308: function (e, t, n) {
      n.d(t, {
        g: function () {
          return c;
        },
      });
      var i = n(470079),
        l = n(442837),
        r = n(695346),
        a = n(115130),
        o = n(566620),
        u = n(782769);
      function c() {
        let e = (0, u.z)(),
          t = r.Sb.getSetting(),
          n = (0, l.e7)([a.Z], () => a.Z.getFetchState(), []);
        return (
          i.useEffect(() => {
            e && t && null == n && (0, o.$h)();
          }, [e, n, t]),
          null
        );
      }
    },
    361213: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var i = n(981631);
      function l(e, t) {
        let n;
        let l = window.GLOBAL_ENV.CDN_HOST,
          r = window.GLOBAL_ENV.API_ENDPOINT;
        return (n =
          null != l
            ? ""
                .concat(location.protocol, "//")
                .concat(l, "/app-assets/")
                .concat(e, "/store/")
                .concat(t, ".mp4")
            : ""
                .concat(location.protocol)
                .concat(r)
                .concat(i.ANM.STORE_ASSET(e, t, "mp4")));
      }
    },
    542094: function (e, t, n) {
      n.d(t, {
        JS: function () {
          return i;
        },
        Qv: function () {
          return A;
        },
        ZP: function () {
          return E;
        },
        w1: function () {
          return y;
        },
      }),
        n(757143);
      var i,
        l,
        r = n(442837),
        a = n(911969),
        o = n(906732),
        u = n(835473),
        c = n(592125),
        d = n(358085),
        s = n(317381),
        p = n(638880),
        f = n(122613),
        v = n(619915),
        Z = n(761122),
        _ = n(361213),
        h = n(716600),
        m = n(952561),
        g = n(778569),
        I = n(701488);
      ((l = i || (i = {}))[(l.START = 0)] = "START"),
        (l[(l.JOIN = 1)] = "JOIN"),
        (l[(l.LEAVE = 2)] = "LEAVE");
      function E(e) {
        let {
            activityItem: t,
            channel: n,
            locationObject: i,
            onActivityItemSelected: l,
            embeddedActivitiesManager: r,
            assetNames: o = ["embedded_cover"],
            backgroundResolution: u = 250,
            launchingComponentId: c,
            commandOrigin: s,
            source: p,
          } = e,
          { application: f, activity: h } = t,
          m = h.client_platform_config[(0, Z.Z)((0, d.getOS)())],
          E = null != m.label_until && Date.now() < Date.parse(m.label_until),
          b = (0, g.Z)({ applicationId: f.id, size: u, names: o }),
          w =
            null != h.activity_preview_video_asset_id
              ? (0, _.Z)(f.id, h.activity_preview_video_asset_id)
              : null,
          C = (0, v.ZP)(n).find((e) => {
            let { embeddedActivity: t } = e;
            return f.id === t.applicationId;
          }),
          S = A({ channelId: null == n ? void 0 : n.id, applicationId: f.id }),
          T = y({
            applicationId: t.application.id,
            channelId: null == n ? void 0 : n.id,
            locationObject: i,
            embeddedActivitiesManager: r,
            onActivityItemSelectedProp: l,
            launchingComponentId: c,
            commandOrigin: s,
            source: p,
          }),
          M =
            t.activity.client_platform_config[(0, Z.Z)((0, d.getOS)())]
              .release_phase,
          O = I.eB.includes(M)
            ? M.replace("_", " ").replace(/(^\w|\s\w)/g, (e) => e.toUpperCase())
            : void 0;
        return {
          imageBackground: b,
          videoUrl: w,
          joinableEmbeddedApp: C,
          activityAction: S,
          onActivityItemSelected: T,
          labelType: E ? m.label_type : a.ww.NONE,
          staffReleasePhase: O,
        };
      }
      function A(e) {
        let { channelId: t, applicationId: n } = e,
          i = 0,
          l = (0, r.e7)([c.Z], () => c.Z.getChannel(t)),
          a = (0, h.Z)(),
          o = (0, m.Z)(),
          d = (0, u.q)(n),
          s = (0, v.ZP)(l).find((e) => {
            let { embeddedActivity: t } = e;
            return null != d && d.id === t.applicationId;
          });
        return null == d
          ? i
          : (null != l &&
            (null == a ? void 0 : a.channelId) === l.id &&
            (null == o ? void 0 : o.id) === d.id
              ? (i = 2)
              : null != s && (i = 1),
            i);
      }
      function y(e) {
        let {
            applicationId: t,
            channelId: n,
            locationObject: i,
            embeddedActivitiesManager: l,
            onActivityItemSelectedProp: r,
            launchingComponentId: a,
            commandOrigin: u,
            sectionName: c,
            source: d,
          } = e,
          v = A({ channelId: n, applicationId: t }),
          { analyticsLocations: Z } = (0, o.ZP)();
        switch (v) {
          case 0:
            return async () => {
              await (0, f.Z)({
                targetApplicationId: t,
                locationObject: i,
                channelId: n,
                analyticsLocations: Z,
                componentId: a,
                commandOrigin: u,
                sectionName: c,
                source: d,
              }).then(
                (e) => e && (null == r ? void 0 : r({ applicationId: t })),
              );
            };
          case 1:
            return async () => {
              !s.ZP.isLaunchingActivity() &&
                (await (0, p.Z)({
                  applicationId: t,
                  activityChannelId: n,
                  locationObject: i,
                  analyticsLocations: Z,
                  componentId: a,
                  commandOrigin: u,
                  sectionName: c,
                  source: d,
                }).then(
                  (e) => e && (null == r ? void 0 : r({ applicationId: t })),
                ));
            };
          case 2:
            return () => {
              !s.ZP.isLaunchingActivity() &&
                (null != n &&
                  l.leaveActivity({ channelId: n, applicationId: t }),
                null == r || r({ applicationId: t }));
            };
        }
      }
    },
    716600: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      var i = n(442837),
        l = n(317381);
      function r() {
        return (0, i.e7)([l.ZP], () => l.ZP.getCurrentEmbeddedActivity());
      }
    },
    952561: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      }),
        n(47120);
      var i = n(835473),
        l = n(716600);
      function r() {
        let e = (0, l.Z)(),
          [t] = (0, i.Z)(null == e ? [] : [e.applicationId]);
        return null != t ? t : void 0;
      }
    },
    427996: function (e, t, n) {
      n.d(t, {
        W: function () {
          return p;
        },
      });
      var i = n(735250);
      n(470079);
      var l = n(120356),
        r = n.n(l),
        a = n(399606),
        o = n(481060),
        u = n(337682),
        c = n(115130),
        d = n(689938),
        s = n(464243);
      function p(e) {
        let { hideSearch: t, className: n } = e,
          {
            activityUrlOverride: l,
            useActivityUrlOverride: p,
            filter: f,
          } = (0, a.cj)(
            [c.Z],
            () => ({
              activityUrlOverride: c.Z.getActivityUrlOverride(),
              useActivityUrlOverride: c.Z.getUseActivityUrlOverride(),
              filter: c.Z.getFilter(),
            }),
            [],
          );
        return (0, i.jsxs)("div", {
          className: r()(s.container, n),
          children: [
            (0, i.jsx)(o.Checkbox, {
              type: o.Checkbox.Types.INVERTED,
              className: s.__invalid_checkbox,
              value: p,
              onClick: u.Y$,
              children: (0, i.jsx)(o.Text, {
                variant: "text-md/semibold",
                children:
                  d.Z.Messages.EMBEDDED_ACTIVITIES_USE_ACTIVITY_URL_OVERRIDE,
              }),
            }),
            (0, i.jsx)(o.FormItem, {
              className: s.__invalid_urlOverride,
              title: d.Z.Messages.EMBEDDED_ACTIVITIES_ACTIVITY_URL_OVERRIDE,
              children: (0, i.jsx)(o.TextInput, {
                disabled: !p,
                value: null != l ? l : void 0,
                onChange: u.jS,
                placeholder: "https://localhost:3000",
              }),
            }),
            !0 === t
              ? null
              : (0, i.jsx)("div", {
                  children: (0, i.jsx)(o.SearchBar, {
                    className: s.searchBar,
                    query: f,
                    onChange: u.a8,
                    onClear: function () {
                      u.a8("");
                    },
                  }),
                }),
          ],
        });
      }
    },
    823531: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var i = n(735250);
      n(470079);
      var l = n(481060),
        r = n(239091),
        a = n(299206),
        o = n(689938);
      function u(e) {
        let { application: t, onSelect: n } = e,
          u = (0, a.Z)({ id: t.id, label: o.Z.Messages.COPY_ID_APP });
        return (0, i.jsx)(l.Menu, {
          navId: "activity-shelf-item-context",
          onClose: r.Zy,
          "aria-label": o.Z.Messages.ACTIVITY_SHELF_ITEM_ACTIONS_MENU_LABEL,
          onSelect: n,
          children: (0, i.jsx)(
            l.MenuGroup,
            { children: u },
            "developer-actions",
          ),
        });
      }
    },
  },
]);
//# sourceMappingURL=c65d02b62fc388454da9.js.map
