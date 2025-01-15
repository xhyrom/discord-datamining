"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["69057"],
  {
    194188: function (e, t, n) {
      n.d(t, {
        x: function () {
          return i;
        },
      });
      let i = (0, n(818083).B)({
        kind: "user",
        id: "2024-10_weighted_sample_activity_shelf",
        label: "Weighted Sample Activity Shelf",
        defaultConfig: { enabled: !1 },
        treatments: [
          {
            id: 1,
            label:
              "Perform weighted sampling of top N activities in shelf and disable frecency sorting in shelf",
            config: { enabled: !0 },
          },
        ],
      });
    },
    694312: function (e, t, n) {
      n.d(t, {
        E: function () {
          return s;
        },
      }),
        n(47120);
      var i = n(192379),
        l = n(442837),
        r = n(835473),
        o = n(594174),
        u = n(695103),
        a = n(823379),
        c = n(358085),
        d = n(317381),
        f = n(761122);
      function s(e) {
        let t = (0, l.e7)([o.default], o.default.getCurrentUser),
          n = (0, l.Wu)([d.ZP], () => d.ZP.getShelfActivities(e)),
          s = (0, l.e7)([u.Z], () => u.Z.testModeEmbeddedApplicationId),
          p = n.map((e) => e.application_id),
          v = null != s ? [s, ...p] : p,
          h = (0, r.Z)(v),
          g = i.useMemo(() => h.filter(a.lm), [h]),
          Z = i.useMemo(
            () =>
              null != s &&
              g.length > 0 &&
              g[0].id === s &&
              null != g[0].embeddedActivityConfig
                ? [{ activity: g[0].embeddedActivityConfig, application: g[0] }]
                : [],
            [g, s],
          ),
          m = i.useMemo(
            () =>
              n
                .map((e) => {
                  let t = g.find((t) => t.id === e.application_id);
                  return null == t ? null : { activity: e, application: t };
                })
                .filter(a.lm),
            [n, g],
          );
        return i.useMemo(
          () =>
            [...Z, ...m]
              .filter((e) => {
                var t;
                let { activity: n } = e;
                return (
                  null !== (t = n.supported_platforms) && void 0 !== t ? t : []
                ).includes((0, f.Z)((0, c.getOS)()));
              })
              .filter((e) => {
                let { activity: n } = e;
                return (
                  !n.requires_age_gate ||
                  (null == t ? void 0 : t.nsfwAllowed) === !0 ||
                  (null == t ? void 0 : t.nsfwAllowed) == null
                );
              }),
          [null == t ? void 0 : t.nsfwAllowed, m, Z],
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
      var i = n(192379),
        l = n(442837),
        r = n(115130),
        o = n(694312),
        u = n(405625),
        a = n(664097);
      function c(e) {
        let { guildId: t, enableFilter: n = !1 } = e,
          { filter: c } = (0, l.cj)([r.Z], () => ({ filter: r.Z.getFilter() })),
          d = (0, o.E)(t),
          f = (0, u.Z)(d),
          s = (0, a.o)();
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
          let t = [...s].filter(e),
            i = new Set(t.map((e) => e.application.id));
          for (let n of f) !i.has(n.application.id) && e(n) && t.push(n);
          return t;
        }, [s, n, c, f]);
      }
    },
    405625: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return d;
        },
      }),
        n(653041),
        n(47120);
      var i = n(192379),
        l = n(911969),
        r = n(822245),
        o = n(675478),
        u = n(358085),
        a = n(194188),
        c = n(761122);
      function d(e) {
        o.DZ.loadIfNecessary();
        let { enabled: t } = a.x.getCurrentConfig(
          { location: "useActivityShelfItemsSorting" },
          { autoTrackExposure: !1 },
        );
        return i.useMemo(() => {
          let n = [];
          e.forEach((e) => n.push(e.application.id));
          let i = [...n];
          return (
            i.sort((e, i) => {
              if (!t) {
                let t = r.Z.getScoreWithoutLoadingLatest(e),
                  n = r.Z.getScoreWithoutLoadingLatest(i);
                if (t !== n) return n - t;
              }
              return n.findIndex((t) => t === e) < n.findIndex((e) => e === i)
                ? -1
                : 1;
            }),
            f(e, i)
          );
        }, [e, t]);
      }
      let f = (e, t) => {
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
                              (0, c.Z)((0, u.getOS)())
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
      var i = n(192379),
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
          return f;
        },
        gb: function () {
          return p;
        },
        uF: function () {
          return v;
        },
      }),
        n(47120),
        n(653041);
      var i = n(192379),
        l = n(442837),
        r = n(835473),
        o = n(158776),
        u = n(594174),
        a = n(823379),
        c = n(317381),
        d = n(16609);
      function f(e, t) {
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
              let i = (0, d.p)(t.embeddedActivity.location);
              if (null == i) return;
              let l = null !== (n = e.get(i)) && void 0 !== n ? n : [];
              l.push(t), e.set(i, l);
            }),
            e
          );
        }, [t]);
      }
      function p(e, t) {
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
      function v(e) {
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
      var i = n(192379),
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
          return b;
        },
        fD: function () {
          return I;
        },
        w1: function () {
          return S;
        },
      }),
        n(789020),
        n(757143);
      var i,
        l,
        r = n(442837),
        o = n(911969),
        u = n(906732),
        a = n(835473),
        c = n(592125),
        d = n(630388),
        f = n(358085),
        s = n(317381),
        p = n(638880),
        v = n(122613),
        h = n(619915),
        g = n(16609),
        Z = n(761122),
        m = n(361213),
        _ = n(716600),
        E = n(952561),
        y = n(778569),
        A = n(701488),
        w = n(981631);
      ((l = i || (i = {}))[(l.START = 0)] = "START"),
        (l[(l.JOIN = 1)] = "JOIN"),
        (l[(l.LEAVE = 2)] = "LEAVE");
      function b(e) {
        let {
            activityItem: t,
            channel: n,
            locationObject: i,
            onActivityItemSelected: l,
            embeddedActivitiesManager: r,
            assetNames: u = ["embedded_cover"],
            backgroundResolution: a = 250,
            launchingComponentId: c,
            commandOrigin: d,
            source: s,
          } = e,
          { application: p, activity: v } = t,
          g = v.client_platform_config[(0, Z.Z)((0, f.getOS)())],
          _ = null != g.label_until && Date.now() < Date.parse(g.label_until),
          E = (0, y.Z)({ applicationId: p.id, size: a, names: u }),
          A =
            null != v.activity_preview_video_asset_id
              ? (0, m.Z)(p.id, v.activity_preview_video_asset_id)
              : null,
          w = (0, h.ZP)(n).find((e) => {
            let { embeddedActivity: t } = e;
            return p.id === t.applicationId;
          }),
          b = C({ channelId: null == n ? void 0 : n.id, applicationId: p.id }),
          x = S({
            applicationId: t.application.id,
            channelId: null == n ? void 0 : n.id,
            locationObject: i,
            embeddedActivitiesManager: r,
            onActivityItemSelectedProp: l,
            launchingComponentId: c,
            commandOrigin: d,
            source: s,
          }),
          L = I(p, t.activity);
        return {
          imageBackground: E,
          videoUrl: A,
          joinableEmbeddedApp: w,
          activityAction: b,
          onActivityItemSelected: x,
          labelType: _ ? g.label_type : o.ww.NONE,
          staffReleasePhase: L,
        };
      }
      function I(e, t) {
        var n;
        let i = null !== (n = e.flags) && void 0 !== n ? n : 0;
        if (
          !(
            (0, d.yE)(i, w.udG.EMBEDDED_RELEASED) ||
            (0, d.yE)(i, w.udG.EMBEDDED_FIRST_PARTY)
          )
        )
          return;
        let l =
          t.client_platform_config[(0, Z.Z)((0, f.getOS)())].release_phase;
        return A.eB.includes(l)
          ? l.replace("_", " ").replace(/(^\w|\s\w)/g, (e) => e.toUpperCase())
          : void 0;
      }
      function C(e) {
        let { channelId: t, applicationId: n, fetchesApplication: i = !0 } = e,
          l = 0,
          o = (0, r.e7)([c.Z], () => c.Z.getChannel(t)),
          u = (0, _.Z)(),
          d = (0, E.Z)({ fetchesApplication: i }),
          f = (0, a.q)(n, i),
          s = (0, h.ZP)(o).find((e) => {
            let { embeddedActivity: t } = e;
            return null != f && f.id === t.applicationId;
          });
        if (null == f) return l;
        let p = (0, g.p)(null == u ? void 0 : u.location);
        return (
          null != o && p === o.id && (null == d ? void 0 : d.id) === f.id
            ? (l = 2)
            : null != s && (l = 1),
          l
        );
      }
      function S(e) {
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
            fetchesApplication: f = !0,
          } = e,
          h = C({ channelId: n, applicationId: t, fetchesApplication: f }),
          { analyticsLocations: g } = (0, u.ZP)(),
          Z = (0, _.Z)();
        switch (h) {
          case 0:
            return async () => {
              await (0, v.Z)({
                targetApplicationId: t,
                locationObject: i,
                channelId: n,
                analyticsLocations: g,
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
                (await (0, p.Z)({
                  applicationId: t,
                  activityChannelId: n,
                  locationObject: i,
                  analyticsLocations: g,
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
                (null != Z &&
                  l.leaveActivity({ location: Z.location, applicationId: t }),
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
          return s;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(120356),
        r = n.n(l),
        o = n(399606),
        u = n(481060),
        a = n(337682),
        c = n(115130),
        d = n(388032),
        f = n(780349);
      function s(e) {
        let { hideSearch: t, className: n } = e,
          {
            activityUrlOverride: l,
            useActivityUrlOverride: s,
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
          className: r()(f.container, n),
          children: [
            (0, i.jsx)(u.Checkbox, {
              type: u.Checkbox.Types.INVERTED,
              value: s,
              onClick: a.Y$,
              children: (0, i.jsx)(u.Text, {
                variant: "text-md/semibold",
                children: d.intl.string(d.t["3TSGuL"]),
              }),
            }),
            s
              ? (0, i.jsx)(u.FormItem, {
                  title: d.intl.string(d.t["9rnmen"]),
                  children: (0, i.jsx)(u.TextInput, {
                    disabled: !s,
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
                    className: f.searchBar,
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
    880448: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      var i = n(200651);
      n(192379);
      var l = n(331595);
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
//# sourceMappingURL=58084b164fa51df900bd.js.map
