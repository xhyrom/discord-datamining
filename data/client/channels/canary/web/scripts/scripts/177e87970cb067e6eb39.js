"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["67588"],
  {
    694312: function (e, t, n) {
      n.d(t, {
        E: function () {
          return f;
        },
      }),
        n(47120);
      var i = n(470079),
        l = n(442837),
        r = n(835473),
        o = n(594174),
        u = n(695103),
        a = n(823379),
        c = n(358085),
        d = n(317381),
        s = n(761122);
      function f(e) {
        let t = (0, l.e7)([o.default], o.default.getCurrentUser),
          n = (0, l.Wu)([d.ZP], () => d.ZP.getShelfActivities(e)),
          f = (0, l.e7)([u.Z], () => u.Z.testModeEmbeddedApplicationId),
          p = n.map((e) => e.application_id),
          v = null != f ? [f, ...p] : p,
          Z = (0, r.Z)(v),
          h = i.useMemo(() => Z.filter(a.lm), [Z]),
          I = i.useMemo(
            () =>
              null != f &&
              h.length > 0 &&
              h[0].id === f &&
              null != h[0].embeddedActivityConfig
                ? [{ activity: h[0].embeddedActivityConfig, application: h[0] }]
                : [],
            [h, f],
          ),
          g = i.useMemo(
            () =>
              n
                .map((e) => {
                  let t = h.find((t) => t.id === e.application_id);
                  return null == t ? null : { activity: e, application: t };
                })
                .filter(a.lm),
            [n, h],
          );
        return i.useMemo(
          () =>
            [...I, ...g]
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
          [null == t ? void 0 : t.nsfwAllowed, g, I],
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
        o = n(694312),
        u = n(405625),
        a = n(664097);
      function c(e) {
        let { guildId: t, enableFilter: n = !1 } = e,
          { filter: c } = (0, l.cj)([r.Z], () => ({ filter: r.Z.getFilter() })),
          d = (0, o.E)(t),
          s = (0, u.Z)(d),
          f = (0, a.o)();
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
          let t = [...f].filter(e),
            i = new Set(t.map((e) => e.application.id));
          for (let n of s) !i.has(n.application.id) && e(n) && t.push(n);
          return t;
        }, [f, n, c, s]);
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
        o = n(675478),
        u = n(358085),
        a = n(761122);
      function c(e) {
        return (
          o.DZ.loadIfNecessary(),
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
                              (0, a.Z)((0, u.getOS)())
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
          return u;
        },
      });
      var i = n(470079),
        l = n(442837),
        r = n(115130),
        o = n(701488);
      let u = () => {
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
                      ...o.wT,
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
          return f;
        },
        uF: function () {
          return p;
        },
      }),
        n(47120),
        n(653041);
      var i = n(470079),
        l = n(442837),
        r = n(835473),
        o = n(158776),
        u = n(594174),
        a = n(823379),
        c = n(317381);
      function d(e, t) {
        return f(
          (0, l.Wu)([c.ZP], () =>
            null != e && null != e.id && "" !== e.id
              ? c.ZP.getEmbeddedActivitiesForChannel(e.id)
              : c.i6,
          ),
          t,
        );
      }
      function s(e) {
        let t = f(
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
      function f(e, t) {
        let n = e.map((e) => e.applicationId),
          o = (0, r.Z)(n),
          c = new Set([]);
        for (let t of e) for (let e of t.userIds) c.add(e);
        let d = (0, l.Wu)(
          [u.default],
          () => {
            let e = [];
            for (let t of c) e.push(u.default.getUser(t));
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
                let l = o[i],
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
              .filter(a.lm)
          );
        }, [e, o, d, t]);
      }
      function p(e) {
        return (0, l.e7)(
          [o.Z],
          () => {
            let t = new Map();
            return (
              e.forEach((e) => {
                var n;
                let i = o.Z.findActivity(
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
        o = n(115130),
        u = n(566620),
        a = n(782769);
      function c() {
        let e = (0, a.z)(),
          t = r.Sb.getSetting(),
          n = (0, l.e7)([o.Z], () => o.Z.getFetchState(), []);
        return (
          i.useEffect(() => {
            e && t && n === o.O.INITIALIZED && (0, u.$h)();
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
          return C;
        },
        ZP: function () {
          return E;
        },
        fD: function () {
          return A;
        },
        w1: function () {
          return w;
        },
      }),
        n(757143);
      var i,
        l,
        r = n(442837),
        o = n(911969),
        u = n(906732),
        a = n(835473),
        c = n(592125),
        d = n(358085),
        s = n(317381),
        f = n(638880),
        p = n(122613),
        v = n(619915),
        Z = n(761122),
        h = n(361213),
        I = n(716600),
        g = n(952561),
        m = n(778569),
        _ = n(701488);
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
            assetNames: u = ["embedded_cover"],
            backgroundResolution: a = 250,
            launchingComponentId: c,
            commandOrigin: s,
            source: f,
          } = e,
          { application: p, activity: I } = t,
          g = I.client_platform_config[(0, Z.Z)((0, d.getOS)())],
          _ = null != g.label_until && Date.now() < Date.parse(g.label_until),
          E = (0, m.Z)({ applicationId: p.id, size: a, names: u }),
          y =
            null != I.activity_preview_video_asset_id
              ? (0, h.Z)(p.id, I.activity_preview_video_asset_id)
              : null,
          b = (0, v.ZP)(n).find((e) => {
            let { embeddedActivity: t } = e;
            return p.id === t.applicationId;
          }),
          S = C({ channelId: null == n ? void 0 : n.id, applicationId: p.id }),
          T = w({
            applicationId: t.application.id,
            channelId: null == n ? void 0 : n.id,
            locationObject: i,
            embeddedActivitiesManager: r,
            onActivityItemSelectedProp: l,
            launchingComponentId: c,
            commandOrigin: s,
            source: f,
          }),
          M = A(t.activity);
        return {
          imageBackground: E,
          videoUrl: y,
          joinableEmbeddedApp: b,
          activityAction: S,
          onActivityItemSelected: T,
          labelType: _ ? g.label_type : o.ww.NONE,
          staffReleasePhase: M,
        };
      }
      function A(e) {
        let t =
          e.client_platform_config[(0, Z.Z)((0, d.getOS)())].release_phase;
        return _.eB.includes(t)
          ? t.replace("_", " ").replace(/(^\w|\s\w)/g, (e) => e.toUpperCase())
          : void 0;
      }
      function C(e) {
        let { channelId: t, applicationId: n, fetchesApplication: i = !0 } = e,
          l = 0,
          o = (0, r.e7)([c.Z], () => c.Z.getChannel(t)),
          u = (0, I.Z)(),
          d = (0, g.Z)({ fetchesApplication: i }),
          s = (0, a.q)(n, i),
          f = (0, v.ZP)(o).find((e) => {
            let { embeddedActivity: t } = e;
            return null != s && s.id === t.applicationId;
          });
        return null == s
          ? l
          : (null != o &&
            (null == u ? void 0 : u.channelId) === o.id &&
            (null == d ? void 0 : d.id) === s.id
              ? (l = 2)
              : null != f && (l = 1),
            l);
      }
      function w(e) {
        let {
            applicationId: t,
            channelId: n,
            locationObject: i,
            embeddedActivitiesManager: l,
            onActivityItemSelectedProp: r,
            launchingComponentId: o,
            commandOrigin: a,
            sectionName: c,
            source: d,
            fetchesApplication: v = !0,
          } = e,
          Z = C({ channelId: n, applicationId: t, fetchesApplication: v }),
          { analyticsLocations: h } = (0, u.ZP)();
        switch (Z) {
          case 0:
            return async () => {
              await (0, p.Z)({
                targetApplicationId: t,
                locationObject: i,
                channelId: n,
                analyticsLocations: h,
                componentId: o,
                commandOrigin: a,
                sectionName: c,
                source: d,
              }).then(
                (e) => e && (null == r ? void 0 : r({ applicationId: t })),
              );
            };
          case 1:
            return async () => {
              !s.ZP.isLaunchingActivity() &&
                (await (0, f.Z)({
                  applicationId: t,
                  activityChannelId: n,
                  locationObject: i,
                  analyticsLocations: h,
                  componentId: o,
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
        let { fetchesApplication: e = !0 } =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = (0, l.Z)(),
          [n] = (0, i.Z)(null == t ? [] : [t.applicationId], e);
        return null != n ? n : void 0;
      }
    },
    427996: function (e, t, n) {
      n.d(t, {
        W: function () {
          return f;
        },
      });
      var i = n(735250);
      n(470079);
      var l = n(120356),
        r = n.n(l),
        o = n(399606),
        u = n(481060),
        a = n(337682),
        c = n(115130),
        d = n(689938),
        s = n(828018);
      function f(e) {
        let { hideSearch: t, className: n } = e,
          {
            activityUrlOverride: l,
            useActivityUrlOverride: f,
            filter: p,
          } = (0, o.cj)(
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
            (0, i.jsx)(u.Checkbox, {
              type: u.Checkbox.Types.INVERTED,
              value: f,
              onClick: a.Y$,
              children: (0, i.jsx)(u.Text, {
                variant: "text-md/semibold",
                children:
                  d.Z.Messages.EMBEDDED_ACTIVITIES_USE_ACTIVITY_URL_OVERRIDE,
              }),
            }),
            f
              ? (0, i.jsx)(u.FormItem, {
                  title: d.Z.Messages.EMBEDDED_ACTIVITIES_ACTIVITY_URL_OVERRIDE,
                  children: (0, i.jsx)(u.TextInput, {
                    disabled: !f,
                    value: null != l ? l : void 0,
                    onChange: a.jS,
                    placeholder: "https://localhost:3000",
                  }),
                })
              : null,
            !0 === t
              ? null
              : (0, i.jsx)("div", {
                  children: (0, i.jsx)(u.SearchBar, {
                    className: s.searchBar,
                    query: p,
                    onChange: a.a8,
                    onClear: function () {
                      a.a8("");
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
          return a;
        },
      });
      var i = n(735250);
      n(470079);
      var l = n(481060),
        r = n(239091),
        o = n(299206),
        u = n(689938);
      function a(e) {
        let { application: t, onSelect: n } = e,
          a = (0, o.Z)({ id: t.id, label: u.Z.Messages.COPY_ID_APP });
        return (0, i.jsx)(l.Menu, {
          navId: "activity-shelf-item-context",
          onClose: r.Zy,
          "aria-label": u.Z.Messages.ACTIVITY_SHELF_ITEM_ACTIONS_MENU_LABEL,
          onSelect: n,
          children: (0, i.jsx)(
            l.MenuGroup,
            { children: a },
            "developer-actions",
          ),
        });
      }
    },
    880448: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      var i = n(735250);
      n(470079);
      var l = n(325767);
      function r(e) {
        let {
          width: t = 24,
          height: n = 24,
          color: r = "currentColor",
          foreground: o,
          ...u
        } = e;
        return (0, i.jsx)("svg", {
          ...(0, l.Z)(u),
          width: t,
          height: n,
          viewBox: "0 0 24 24",
          fill: "none",
          children: (0, i.jsx)("path", {
            d: "M7.39344 5.33333L5.33333 7.39344V16.6065L7.39348 18.6667H16.6065L18.6667 16.6065V7.39344L16.6065 5.33333H7.39344ZM11.0485 15.6879H9.20459C9.20459 14.1627 7.96392 12.922 6.43868 12.922V11.078C7.96392 11.078 9.20459 9.83735 9.20459 8.31211H11.0485C11.0485 9.82534 10.3057 11.159 9.17607 12C10.3057 12.8411 11.0485 14.1747 11.0485 15.6879ZM17.5556 12.922C16.0304 12.922 14.7896 14.1627 14.7896 15.6879H12.9457C12.9457 14.1747 13.6885 12.8411 14.8181 12C13.6885 11.159 12.9457 9.82534 12.9457 8.31211H14.7896C14.7896 9.83735 16.0304 11.078 17.5556 11.078V12.922Z",
            fill: r,
            className: o,
          }),
        });
      }
    },
  },
]);
//# sourceMappingURL=177e87970cb067e6eb39.js.map
