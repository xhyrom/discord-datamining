"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["49641"],
  {
    403404: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return d;
        },
      });
      var i = t(735250);
      t(470079);
      var l = t(481060),
        r = t(424602),
        o = t(397698),
        a = t(776862),
        u = t(701488),
        c = t(981631);
      function d(n) {
        let {
            channel: e,
            guildId: d,
            locationObject: s,
            openInPopout: C,
            initialSelectedApplicationId: h,
            initialSlide: f = u.ag.DIRECTORY,
            enableSelectedTextChannelInvite: p = !1,
            analyticsLocations: v,
            opensAppLauncherModal: _ = !1,
          } = n,
          m = v.length > 0 ? v[v.length - 1] : "open-activity-shelf",
          { enabled: x } = r.m1.getCurrentConfig(
            { location: m },
            { autoTrackExposure: !1 },
          );
        if (_ && x) {
          null != e &&
            (0, o.Z)({ openInPopout: C, channel: e, analyticsLocation: m });
          return;
        }
        C && (0, a.Z)(c.KJ3.CHANNEL_CALL_POPOUT);
        let E = C ? l.POPOUT_MODAL_CONTEXT : l.DEFAULT_MODAL_CONTEXT;
        return (0, l.openModalLazy)(
          async () => {
            let { default: n } = await Promise.all([
              t.e("36036"),
              t.e("64430"),
            ]).then(t.bind(t, 471840));
            return (t) =>
              (0, i.jsx)(n, {
                ...t,
                channel: e,
                guildId: d,
                locationObject: s,
                initialSlide: f,
                initialSelectedApplicationId: h,
                enableSelectedTextChannelInvite: p,
                analyticsLocations: v,
              });
          },
          { modalKey: u.AC, contextKey: E },
        );
      }
    },
    499254: function (n, e, t) {
      t.d(e, {
        _: function () {
          return l;
        },
        y: function () {
          return r;
        },
      });
      var i = t(570140);
      function l(n, e, t) {
        i.Z.dispatch({
          type: "APP_LAUNCHER_SHOW",
          entrypoint: n,
          activeViewType: e,
          initialState: t,
        });
      }
      function r(n) {
        i.Z.dispatch({ type: "APP_LAUNCHER_DISMISS", closeReason: n });
      }
    },
    314734: function (n, e, t) {
      var i, l;
      t.d(e, {
        Gy: function () {
          return u;
        },
        Jh: function () {
          return r;
        },
        K7: function () {
          return c;
        },
        bS: function () {
          return i;
        },
        e9: function () {
          return o;
        },
        lv: function () {
          return d;
        },
        t4: function () {
          return a;
        },
        u$: function () {
          return s;
        },
      }),
        ((l = i || (i = {}))[(l.POPULAR = 0)] = "POPULAR"),
        (l[(l.ALPHABETICAL = 1)] = "ALPHABETICAL");
      let r = "app-launcher-element",
        o = "app-launcher-modal",
        a = "app-launcher-entrypoint",
        u = 500,
        c = 668,
        d = "min(100vh, ".concat(c, "px)"),
        s = {
          "--custom-app-launcher-width": "".concat(u, "px"),
          "--custom-app-launcher-height": d,
        };
    },
    397698: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return C;
        },
      });
      var i = t(735250);
      t(470079);
      var l = t(481060),
        r = t(776862),
        o = t(306680),
        a = t(626135),
        u = t(499254),
        c = t(827498),
        d = t(314734),
        s = t(981631);
      function C(n) {
        let { channel: e, openInPopout: C, analyticsLocation: h } = n;
        C && (0, r.Z)(s.KJ3.CHANNEL_CALL_POPOUT);
        let f = C ? l.POPOUT_MODAL_CONTEXT : l.DEFAULT_MODAL_CONTEXT;
        (0, u.y)(c.ti.DISMISSED), (0, u._)(c._b.VOICE);
        let p = e.id,
          v = o.ZP.hasUnread(p) || o.ZP.getMentionCount(p) > 0;
        return (
          a.default.track(s.rMx.VOICE_PANEL_TAB_OPENED, {
            tab: "activities",
            location: h,
            source: c._b.VOICE,
            is_chat_badged: v,
          }),
          (0, l.openModalLazy)(
            async () => {
              let { default: n } = await Promise.all([
                t.e("36036"),
                t.e("21351"),
                t.e("39170"),
              ]).then(t.bind(t, 743161));
              return (t) => (0, i.jsx)(n, { channel: e, ...t });
            },
            { modalKey: d.e9, contextKey: f },
          )
        );
      }
    },
    256139: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return u;
        },
      });
      var i = t(735250),
        l = t(120356),
        r = t.n(l),
        o = t(481060),
        a = t(671656);
      function u(n) {
        let { className: e, onClick: t, ...l } = n,
          u = (0, i.jsx)(o.Clickable, {
            ...l,
            className: r()(null != t && a.clickable, e),
            onClick: t,
          });
        return null == t ? (0, i.jsx)(o.BlockInteractions, { children: u }) : u;
      }
    },
    91907: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return u;
        },
      });
      var i = t(735250),
        l = t(470079),
        r = t(793030),
        o = t(256139),
        a = t(866040);
      function u(n) {
        let { user: e, text: t, channel: u, textClassName: c } = n,
          d = (0, l.useMemo)(() => [e], [e]);
        return (0, i.jsx)(a.Z, {
          participants: d,
          channel: u,
          children: (n) =>
            (0, i.jsx)(o.Z, {
              ...n,
              tag: "span",
              children: (0, i.jsx)(r.x, {
                className: c,
                variant: "text-sm/semibold",
                color: "text-primary",
                lineClamp: 1,
                scaleFontToUserSetting: !0,
                children: t,
              }),
            }),
        });
      }
    },
    866040: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return v;
        },
      }),
        t(411104);
      var i = t(735250),
        l = t(470079),
        r = t(442837),
        o = t(481060),
        a = t(239091),
        u = t(751688),
        c = t(184301),
        d = t(103575),
        s = t(210887),
        C = t(5192),
        h = t(981631),
        f = t(303540);
      function p(n) {
        let { participants: e, channel: l } = n;
        return (0, i.jsx)(o.Scroller, {
          className: f.popout,
          children: e.map((n) =>
            (0, i.jsx)(
              u.Z,
              {
                guildId: null == l ? void 0 : l.guild_id,
                user: n,
                nick: C.ZP.getNickname(
                  null == l ? void 0 : l.guild_id,
                  null == l ? void 0 : l.id,
                  n,
                ),
                onContextMenu: (e) => {
                  (0, a.jW)(e, async () => {
                    let { default: e } = await Promise.all([
                      t.e("79695"),
                      t.e("69220"),
                      t.e("46611"),
                    ]).then(t.bind(t, 881351));
                    return (t) => (0, i.jsx)(e, { ...t, user: n });
                  });
                },
              },
              n.id,
            ),
          ),
        });
      }
      function v(n) {
        let { children: e, participants: t, channel: a } = n,
          u = (0, r.e7)([s.Z], () => s.Z.theme),
          C = 1 === t.length ? t[0] : null,
          f = (0, l.useCallback)(
            (n) => {
              if (null != C)
                return (0, i.jsx)(d.Z, {
                  ...n,
                  location: "Content Inventory Embed",
                  userId: C.id,
                  guildId: null == a ? void 0 : a.guild_id,
                  channelId: null == a ? void 0 : a.id,
                  analyticsParams: {
                    location: {
                      page: h.ZY5.GUILD_CHANNEL,
                      section: h.jXE.CONTENT_INVENTORY_EMBED,
                    },
                  },
                });
              if (null != t)
                return (0, i.jsx)(p, { participants: t, channel: a });
              throw Error("One of participant or participants is required");
            },
            [a, t, C],
          );
        return (0, i.jsx)(o.ThemeContextProvider, {
          theme: u,
          children: (0, i.jsx)(o.Popout, {
            renderPopout: f,
            preload: () =>
              null != C
                ? (0, c.Z)(C, {
                    guildId: null == a ? void 0 : a.guild_id,
                    channelId: null == a ? void 0 : a.id,
                  })
                : Promise.resolve(),
            children: e,
          }),
        });
      }
    },
    206295: function (n, e, t) {
      t(47120);
      var i = t(470079),
        l = t(688619),
        r = t.n(l);
      t(979590);
      var o = t(442837),
        a = t(866442),
        u = t(607070),
        c = t(220082),
        d = t(981631);
      e.Z = (n) => {
        var e, l, s, C, h, f;
        let p;
        p = t(481060).tokens;
        let v = (0, o.e7)([u.Z], () => u.Z.saturation),
          [_, m] = (0, c.Cf)(
            n,
            null !==
              (f =
                null == p
                  ? void 0
                  : null === (h = p.colors) || void 0 === h
                    ? void 0
                    : null === (C = h.BACKGROUND_FLOATING) || void 0 === C
                      ? void 0
                      : null === (s = C.resolve) || void 0 === s
                        ? void 0
                        : null ===
                              (l = s.call(C, {
                                theme: d.BRd.DARK,
                                saturation: v,
                              })) || void 0 === l
                          ? void 0
                          : null === (e = l.hex) || void 0 === e
                            ? void 0
                            : e.call(l)) && void 0 !== f
              ? f
              : "#000",
          );
        return i.useMemo(() => {
          let n = (0, a._i)(_),
            e = (0, a._i)(m);
          for (let e = 1; e < 8 && !((0, a.Bd)(n) >= 0.725); e++) {
            n = r()(n).darken(0.5).num();
          }
          for (let n = 1; n < 8 && !((0, a.Bd)(e) >= 0.725); n++) {
            e = r()(e).darken(0.5).num();
          }
          let t = (0, a.Rf)(n);
          return { primaryColor: t, secondaryColor: (0, a.Rf)(e) };
        }, [_, m]);
      };
    },
    410441: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return o;
        },
      });
      var i = t(735250);
      t(470079);
      var l = t(481060),
        r = t(76927);
      function o(n) {
        let { onClick: e, Icon: t, "aria-label": o } = n,
          a = (0, l.useToken)(
            l.tokens.colors.CONTENT_INVENTORY_OVERLAY_TEXT_PRIMARY,
          ),
          u = (0, i.jsx)(t, {
            color: a.hex(),
            size: "custom",
            width: 16,
            height: 16,
          });
        return null == e
          ? (0, i.jsx)("div", {
              className: r.container,
              "aria-label": o,
              children: u,
            })
          : (0, i.jsx)(l.Tooltip, {
              text: o,
              children: (n) =>
                (0, i.jsx)(l.Clickable, {
                  className: r.container,
                  ...n,
                  onClick: e,
                  children: u,
                }),
            });
      }
    },
    908841: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return r;
        },
      });
      var i = t(735250);
      t(470079);
      var l = t(325767);
      function r(n) {
        let {
          width: e = 20,
          height: t = 20,
          color: r = "currentColor",
          ...o
        } = n;
        return (0, i.jsx)("svg", {
          ...(0, l.Z)(o),
          width: e,
          height: t,
          viewBox: "0 0 20 20",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, i.jsx)("path", {
            d: "M10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10C20 7.34784 18.9464 4.8043 17.0711 2.92893C15.1957 1.05357 12.6522 0 10 0ZM14.5625 14.4375C14.3791 14.7161 14.0145 14.8107 13.7188 14.6562C11.375 13.2188 8.40625 12.9062 4.9375 13.6875C4.71979 13.7377 4.49182 13.668 4.33945 13.5046C4.18709 13.3412 4.13348 13.1089 4.19883 12.8952C4.26417 12.6816 4.43854 12.519 4.65625 12.4688C8.46875 11.5938 11.7188 11.9688 14.375 13.5938C14.5149 13.6781 14.6141 13.816 14.6495 13.9755C14.685 14.1349 14.6535 14.3019 14.5625 14.4375ZM15.8125 11.6875C15.7053 11.8622 15.5328 11.9869 15.3333 12.0338C15.1338 12.0807 14.9238 12.0461 14.75 11.9375C12.0625 10.2812 7.96875 9.8125 4.78125 10.7812C4.5133 10.8594 4.22401 10.7887 4.02236 10.5957C3.8207 10.4027 3.73731 10.1168 3.80361 9.84569C3.8699 9.57457 4.0758 9.3594 4.34375 9.28125C7.96875 8.1875 12.5 8.71875 15.5625 10.625C15.9134 10.8575 16.0229 11.3229 15.8125 11.6875ZM15.9062 8.875C12.6875 6.96875 7.375 6.78125 4.28125 7.71875C3.81691 7.79284 3.36952 7.5115 3.23513 7.0609C3.10074 6.61031 3.32093 6.12986 3.75 5.9375C7.28125 4.875 13.1562 5.0625 16.875 7.28125C17.0893 7.40709 17.2434 7.61436 17.3023 7.85577C17.3612 8.09717 17.3198 8.35214 17.1875 8.5625C16.9054 8.98221 16.3499 9.1177 15.9062 8.875Z",
            fill: r,
          }),
        });
      }
    },
  },
]);
//# sourceMappingURL=a8ae90493e75d3f2c5f8.js.map
