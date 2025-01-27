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
        a = n(695103),
        u = n(823379),
        c = n(358085),
        d = n(317381),
        f = n(761122);
      function s(e) {
        let t = (0, l.e7)([o.default], o.default.getCurrentUser),
          n = (0, l.Wu)([d.ZP], () => d.ZP.getShelfActivities(e)),
          s = (0, l.e7)([a.Z], () => a.Z.testModeEmbeddedApplicationId),
          p = n.map((e) => e.application_id),
          v = null != s ? [s, ...p] : p,
          h = (0, r.Z)(v),
          g = i.useMemo(() => h.filter(u.lm), [h]),
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
                .filter(u.lm),
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
        a = n(405625),
        u = n(664097);
      function c(e) {
        let { guildId: t, enableFilter: n = !1 } = e,
          { filter: c } = (0, l.cj)([r.Z], () => ({ filter: r.Z.getFilter() })),
          d = (0, o.E)(t),
          f = (0, a.Z)(d),
          s = (0, u.o)();
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
        a = n(358085),
        u = n(194188),
        c = n(761122);
      function d(e) {
        o.DZ.loadIfNecessary();
        let { enabled: t } = u.x.getCurrentConfig(
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
                              (0, c.Z)((0, a.getOS)())
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
          return a;
        },
      });
      var i = n(192379),
        l = n(442837),
        r = n(115130),
        o = n(701488);
      let a = () => {
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
        a = n(594174),
        u = n(823379),
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
          [a.default],
          () => {
            let e = [];
            for (let t of c) e.push(a.default.getUser(t));
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
              .filter(u.lm)
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
        a = n(566620),
        u = n(782769);
      function c() {
        let e = (0, u.z)(),
          t = r.Sb.getSetting(),
          n = (0, l.e7)([o.Z], () => o.Z.getFetchState(), []);
        return (
          i.useEffect(() => {
            e && t && n === o.O.INITIALIZED && (0, a.$h)();
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
          return w;
        },
        fD: function () {
          return b;
        },
        w1: function () {
          return I;
        },
      }),
        n(789020),
        n(757143);
      var i,
        l,
        r = n(493683),
        o = n(911969),
        a = n(906732),
        u = n(835473),
        c = n(630388),
        d = n(358085),
        f = n(317381),
        s = n(638880),
        p = n(122613),
        v = n(619915),
        h = n(16609),
        g = n(761122),
        Z = n(361213),
        m = n(716600),
        y = n(952561),
        _ = n(778569),
        E = n(701488),
        A = n(981631);
      ((l = i || (i = {}))[(l.START = 0)] = "START"),
        (l[(l.JOIN = 1)] = "JOIN"),
        (l[(l.LEAVE = 2)] = "LEAVE");
      function w(e) {
        let {
            activityItem: t,
            context: n,
            locationObject: i,
            onActivityItemSelected: l,
            embeddedActivitiesManager: r,
            assetNames: a = ["embedded_cover"],
            backgroundResolution: u = 250,
            launchingComponentId: c,
            commandOrigin: f,
            source: s,
          } = e,
          { application: p, activity: h } = t,
          m = h.client_platform_config[(0, g.Z)((0, d.getOS)())],
          y = null != m.label_until && Date.now() < Date.parse(m.label_until),
          E = (0, _.Z)({ applicationId: p.id, size: u, names: a }),
          A =
            null != h.activity_preview_video_asset_id
              ? (0, Z.Z)(p.id, h.activity_preview_video_asset_id)
              : null,
          w = (0, v.ZP)("channel" === n.type ? n.channel : void 0).find((e) => {
            let { embeddedActivity: t } = e;
            return p.id === t.applicationId;
          }),
          S = C({ context: n, applicationId: p.id }),
          x = I({
            applicationId: t.application.id,
            context: n,
            locationObject: i,
            embeddedActivitiesManager: r,
            onActivityItemSelectedProp: l,
            launchingComponentId: c,
            commandOrigin: f,
            source: s,
          }),
          L = b(p, t.activity);
        return {
          imageBackground: E,
          videoUrl: A,
          joinableEmbeddedApp: w,
          activityAction: S,
          onActivityItemSelected: x,
          labelType: y ? m.label_type : o.ww.NONE,
          staffReleasePhase: L,
        };
      }
      function b(e, t) {
        var n;
        let i = null !== (n = e.flags) && void 0 !== n ? n : 0;
        if (
          !(
            (0, c.yE)(i, A.udG.EMBEDDED_RELEASED) ||
            (0, c.yE)(i, A.udG.EMBEDDED_FIRST_PARTY)
          )
        )
          return;
        let l =
          t.client_platform_config[(0, g.Z)((0, d.getOS)())].release_phase;
        return E.eB.includes(l)
          ? l.replace("_", " ").replace(/(^\w|\s\w)/g, (e) => e.toUpperCase())
          : void 0;
      }
      function C(e) {
        let { context: t, applicationId: n, fetchesApplication: i = !0 } = e,
          l = 0,
          r = "channel" === t.type ? t.channel : void 0,
          o = (0, m.Z)(),
          a = (0, y.Z)({ fetchesApplication: i }),
          c = (0, u.q)(n, i),
          d = (0, v.ZP)(r).find((e) => {
            let { embeddedActivity: t } = e;
            return null != c && c.id === t.applicationId;
          });
        if (null == c) return l;
        let f = (0, h.p)(null == o ? void 0 : o.location);
        return (
          null != r && f === r.id && (null == a ? void 0 : a.id) === c.id
            ? (l = 2)
            : null != d && (l = 1),
          l
        );
      }
      function I(e) {
        let {
            applicationId: t,
            botUserIdForAppDM: n,
            context: i,
            locationObject: l,
            embeddedActivitiesManager: o,
            onActivityItemSelectedProp: u,
            launchingComponentId: c,
            commandOrigin: d,
            sectionName: v,
            source: h,
            fetchesApplication: g = !0,
          } = e,
          Z = C({ context: i, applicationId: t, fetchesApplication: g }),
          { analyticsLocations: y } = (0, a.ZP)(),
          _ = (0, m.Z)();
        switch (Z) {
          case 0:
            return async () => {
              let e = "channel" === i.type ? i.channel.id : void 0;
              if (null != n)
                try {
                  e = await r.Z.openPrivateChannel(n);
                } catch (e) {
                  return;
                }
              await (0, p.Z)({
                targetApplicationId: t,
                locationObject: l,
                channelId: e,
                analyticsLocations: y,
                componentId: c,
                commandOrigin: d,
                sectionName: v,
                source: h,
              }).then(
                (e) => e && (null == u ? void 0 : u({ applicationId: t })),
              );
            };
          case 1:
            return async () => {
              !f.ZP.isLaunchingActivity() &&
                (await (0, s.Z)({
                  applicationId: t,
                  activityChannelId:
                    "channel" === i.type ? i.channel.id : void 0,
                  locationObject: l,
                  analyticsLocations: y,
                  componentId: c,
                  sectionName: v,
                  source: h,
                }).then(
                  (e) => e && (null == u ? void 0 : u({ applicationId: t })),
                ));
            };
          case 2:
            return () => {
              !f.ZP.isLaunchingActivity() &&
                (null != _ &&
                  o.leaveActivity({ location: _.location, applicationId: t }),
                null == u || u({ applicationId: t }));
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
        a = n(481060),
        u = n(337682),
        c = n(115130),
        d = n(388032),
        f = n(114228);
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
            (0, i.jsx)(a.Checkbox, {
              type: a.Checkbox.Types.INVERTED,
              value: s,
              onClick: u.Y$,
              children: (0, i.jsx)(a.Text, {
                variant: "text-md/semibold",
                children: d.intl.string(d.t["3TSGuL"]),
              }),
            }),
            s
              ? (0, i.jsx)(a.FormItem, {
                  title: d.intl.string(d.t["9rnmen"]),
                  children: (0, i.jsx)(a.TextInput, {
                    disabled: !s,
                    value: null != l ? l : void 0,
                    onChange: u.jS,
                    placeholder: "https://localhost:3000",
                  }),
                })
              : null,
            !0 === t
              ? null
              : (0, i.jsx)("div", {
                  children: (0, i.jsx)(a.SearchBar, {
                    className: f.searchBar,
                    query: p,
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
          ...a
        } = e;
        return (0, i.jsx)("svg", {
          ...(0, l.Z)(a),
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
//# sourceMappingURL=6513780ca7a0bb3a0c08.js.map
