"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["99008"],
  {
    892561: function (e) {
      e.exports = "/assets/3fb87720e4488048b4f0.svg";
    },
    494536: function (e) {
      e.exports = "/assets/614f2929b3d801833680.svg";
    },
    249842: function (e, n, t) {
      t.d(n, {
        P: function () {
          return a;
        },
      });
      var i = t(544891),
        l = t(570140),
        r = t(981631);
      async function a(e) {
        l.Z.dispatch({ type: "GUILD_POPOUT_FETCH_START", guildId: e });
        try {
          let n = await i.tn.get({
            url: r.ANM.GUILD_PREVIEW(e),
            oldFormErrors: !0,
            rejectWithError: !0,
          });
          l.Z.dispatch({
            type: "GUILD_POPOUT_FETCH_SUCCESS",
            guildId: e,
            guild: n.body,
          });
        } catch (n) {
          l.Z.dispatch({ type: "GUILD_POPOUT_FETCH_FAILURE", guildId: e });
        }
      }
    },
    838367: function (e, n, t) {
      var i,
        l,
        r,
        a,
        s,
        c,
        o = t(442837),
        u = t(570140),
        d = t(314897),
        h = t(900849);
      ((i = s || (s = {})).UNSET = "unset"),
        (i.FETCHING = "fetching"),
        (i.FAILED = "failed"),
        (i.SUCCEEDED = "succeeded");
      let m = {};
      class f extends (c = o.ZP.Store) {
        initialize() {
          this.waitFor(d.default);
        }
        isFetchingGuild(e) {
          let n = m[e];
          return null != n && "fetching" === n.fetchState;
        }
        getGuild(e) {
          let n = m[e];
          return null != n ? n.guild : null;
        }
        hasFetchFailed(e) {
          let n = m[e];
          return null != n && "failed" === n.fetchState;
        }
      }
      (a = "GuildPopoutStore"),
        (r = "displayName") in (l = f)
          ? Object.defineProperty(l, r, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (l[r] = a),
        (n.Z = new f(u.Z, {
          GUILD_POPOUT_FETCH_START: function (e) {
            let { guildId: n } = e;
            m[n] = { ...m[n], fetchState: "fetching" };
          },
          GUILD_POPOUT_FETCH_SUCCESS: function (e) {
            let { guildId: n, guild: t } = e,
              i = (0, h.PP)(t);
            m[n] = { ...m[n], guild: i, fetchState: "succeeded" };
          },
          GUILD_POPOUT_FETCH_FAILURE: function (e) {
            let { guildId: n } = e;
            m[n] = { ...m[n], fetchState: "failed" };
          },
        }));
    },
    699553: function (e, n, t) {
      t.d(n, {
        C: function () {
          return a;
        },
      });
      var i = t(544891),
        l = t(405222),
        r = t(981631);
      async function a(e) {
        let n = await i.tn.get({
          url: r.ANM.GUILD_PROFILE(e),
          rejectWithError: !1,
        });
        return (0, l.x)(n.body);
      }
    },
    576306: function (e, n, t) {
      t.d(n, {
        h: function () {
          return l;
        },
      });
      let i = (0, t(818083).B)({
        kind: "user",
        id: "2024-12_new_guild_profile",
        label: "Enables new guild profile",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "On", config: { enabled: !0 } }],
      });
      function l() {
        let { enabled: e } = i.useExperiment(
          { location: "GuildProfileExperiment" },
          { autoTrackExposure: !1 },
        );
        return e;
      }
    },
    405222: function (e, n, t) {
      t.d(n, {
        x: function () {
          return i;
        },
      });
      function i(e) {
        return {
          id: e.id,
          name: e.name,
          description: e.description,
          icon: e.icon_hash,
          onlineCount: e.online_count,
          memberCount: e.member_count,
          brandColorPrimary: e.brand_color_primary,
        };
      }
    },
    934269: function (e, n, t) {
      t.d(n, {
        u: function () {
          return u;
        },
      });
      var i = t(192379),
        l = t(731965),
        r = t(881052),
        a = t(972959),
        s = t(699553);
      let c = {},
        o = (0, a.H)((e, n) => ({
          profiles: {},
          isFetchingGuild: (e) => null != n().fetchPromises[e],
          error: null,
          fetchPromises: {},
          fetchGuildProfile: async function (t) {
            let i =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              a = n().fetchPromises[t];
            if (
              !(function (e) {
                var n;
                let t = Date.now(),
                  i = null !== (n = c[e]) && void 0 !== n ? n : 0;
                return t - i > 6e4;
              })(t) &&
              !i
            ) {
              var o;
              return null != a
                ? await a
                : Promise.resolve(
                    null !== (o = n().profiles[t]) && void 0 !== o ? o : null,
                  );
            }
            c[t] = Date.now();
            try {
              if (null != a) return await a;
              {
                let i = (async () => {
                  let i = await (0, s.C)(t),
                    r = n().profiles,
                    a = n().fetchPromises;
                  return null == a[t]
                    ? i
                    : (delete a[t],
                      (0, l.j)(() => {
                        e({
                          profiles: { ...r, [t]: i },
                          error: null,
                          fetchPromises: a,
                        });
                      }),
                      i);
                })();
                return (
                  (0, l.j)(() => {
                    e({ fetchPromises: { ...n().fetchPromises, [t]: i } });
                  }),
                  await i
                );
              }
            } catch (s) {
              let i = new r.Hx(s),
                a = n().fetchPromises;
              null != a[t] && delete a[t],
                (0, l.j)(() => {
                  e({ error: i, fetchPromises: a });
                });
            }
            return null;
          },
        }));
      function u(e) {
        let n = o.useState(
            (n) => (null != e ? n.profiles[e] : null),
            Object.is,
          ),
          t = o.useState(
            (n) => null != e && null != n.fetchPromises[e],
            Object.is,
          ),
          l = o.useField("fetchGuildProfile");
        return {
          guildProfile: n,
          fetchGuildProfile: i.useCallback(
            async function () {
              let n =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              if (null == e) return null;
              try {
                return await l(e, n);
              } catch (e) {
                return null;
              }
            },
            [e, l],
          ),
          isFetching: t,
        };
      }
    },
    997431: function (e, n, t) {
      t.d(n, {
        M: function () {
          return i;
        },
      });
      function i(e, n) {
        if (null == e || "" === e) return null;
        let t = new Date(e);
        return !(t instanceof Date) || isNaN(t.getTime())
          ? null
          : t.toLocaleDateString(n, { year: "numeric", month: "short" });
      }
    },
    83474: function (e, n, t) {
      t.d(n, {
        SK: function () {
          return A;
        },
        ZP: function () {
          return w;
        },
        sK: function () {
          return O;
        },
      }),
        t(47120);
      var i = t(200651),
        l = t(192379),
        r = t(120356),
        a = t.n(r),
        s = t(442837),
        c = t(692547),
        o = t(780384),
        u = t(481060),
        d = t(410030),
        h = t(686546),
        m = t(372769),
        f = t(134432),
        x = t(703656),
        g = t(314897),
        j = t(271383),
        v = t(768581),
        N = t(900849),
        _ = t(249842),
        p = t(838367),
        E = t(576306),
        P = t(914620),
        T = t(981631),
        b = t(388032),
        C = t(302602),
        I = t(892561),
        S = t(494536);
      function y() {
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)("div", { className: C.splashPlaceholder }),
            (0, i.jsxs)("div", {
              className: a()(C.body, C.hasSplash),
              children: [
                (0, i.jsx)("div", { className: C.iconPlaceholder }),
                (0, i.jsx)("div", {
                  children: (0, i.jsx)("div", { className: C.namePlaceholder }),
                }),
                (0, i.jsxs)("div", {
                  className: C.memberInfo,
                  children: [
                    (0, i.jsx)("div", {
                      className: C.memberCount,
                      children: (0, i.jsx)("div", {
                        className: C.memberInfoPlaceholder,
                      }),
                    }),
                    (0, i.jsx)("div", {
                      className: C.memberCount,
                      children: (0, i.jsx)("div", {
                        className: C.memberInfoPlaceholder,
                      }),
                    }),
                  ],
                }),
                (0, i.jsx)("div", { className: C.viewButtonPlaceholder }),
              ],
            }),
          ],
        });
      }
      function A() {
        let e = (0, d.ZP)();
        return (0, i.jsx)(u.Dialog, {
          "aria-label": b.intl.string(b.t["8LKcho"]),
          className: C.guildPopout,
          children: (0, i.jsxs)("div", {
            className: C.body,
            children: [
              (0, i.jsx)("img", {
                src: (0, o.wj)(e) ? I : S,
                className: C.unavailableIcon,
                width: 80,
                height: 80,
                alt: "",
              }),
              (0, i.jsx)(u.Heading, {
                className: C.unavailableHeader,
                variant: "heading-md/semibold",
                children: b.intl.string(b.t["+kdPHx"]),
              }),
              (0, i.jsx)(u.Text, {
                variant: "text-sm/normal",
                children: b.intl.string(b.t["Yn1+xs"]),
              }),
            ],
          }),
        });
      }
      function O(e) {
        var n, t;
        let { guild: r, channelId: o, messageId: d } = e,
          {
            name: _,
            id: p,
            discoverySplash: E,
            icon: P,
            description: I,
            presenceCount: S,
            memberCount: y,
            emojis: A,
          } = r,
          O = (0, s.e7)([g.default], () => g.default.getId()),
          Z = (0, s.e7)([j.ZP], () => j.ZP.isMember(p, O), [p, O]),
          [w, R] = l.useState(!1),
          D = (e) => {
            if ((e.stopPropagation(), Z)) (0, x.XU)(p, o, d);
            else {
              let e = {
                page: T.ZY5.GUILD_CHANNEL,
                section: T.jXE.GUILD_POPOUT,
                object: T.qAy.CARD,
              };
              (0, N.Ub)(p, e);
            }
            R(!0);
          },
          U = v.ZP.getGuildDiscoverySplashURL({
            id: p,
            splash: E,
            size: 250 * (0, f.x_)(),
          }),
          G =
            null !== (n = v.ZP.getGuildIconURL({ id: p, icon: P, size: 80 })) &&
            void 0 !== n
              ? n
              : void 0,
          k = A,
          L = null;
        return (
          null != k &&
            k.length > 6 &&
            null != A &&
            ((k =
              null !==
                (t =
                  null == A
                    ? void 0
                    : A.slice(
                        Math.max((null == A ? void 0 : A.length) - 6, 0),
                      )) && void 0 !== t
                ? t
                : []),
            (L = A.length - 6)),
          (0, i.jsxs)(u.Dialog, {
            "aria-label": _,
            className: C.guildPopout,
            children: [
              null != U
                ? (0, i.jsx)("img", {
                    src: U,
                    alt: "",
                    className: C.splashImage,
                  })
                : null,
              (0, i.jsxs)("div", {
                className: a()(C.body, { [C.hasSplash]: null != U }),
                children: [
                  (0, i.jsx)("div", {
                    className: a()({ [C.iconWithSplash]: null != U }),
                    children: (0, i.jsx)(u.Clickable, {
                      onClick: D,
                      children: (0, i.jsx)(h.ZP, {
                        mask: h.ZP.Masks.SQUIRCLE,
                        width: 88,
                        height: 88,
                        children: (0, i.jsx)("div", {
                          className: C.iconMask,
                          children: (0, i.jsx)(h.ZP, {
                            mask: h.ZP.Masks.SQUIRCLE,
                            width: 80,
                            height: 80,
                            children: (0, i.jsx)("img", {
                              src: G,
                              alt: "",
                              className: C.avatar,
                            }),
                          }),
                        }),
                      }),
                    }),
                  }),
                  null != _
                    ? (0, i.jsxs)("div", {
                        className: C.guildNameWrapper,
                        children: [
                          (0, i.jsx)(m.Z, {
                            className: C.badge,
                            guild: r,
                            tooltipPosition: "top",
                            tooltipColor: u.Tooltip.Colors.PRIMARY,
                            badgeColor: c.Z.unsafe_rawColors.PRIMARY_500.css,
                          }),
                          (0, i.jsx)(u.Text, {
                            variant: "text-md/semibold",
                            className: C.guildName,
                            children: _,
                          }),
                        ],
                      })
                    : null,
                  null != I
                    ? (0, i.jsx)(u.Text, {
                        color: "header-secondary",
                        className: C.description,
                        variant: "text-sm/normal",
                        children: I,
                      })
                    : null,
                  (0, i.jsxs)("div", {
                    className: C.memberInfo,
                    children: [
                      null != S
                        ? (0, i.jsxs)("div", {
                            className: C.memberCount,
                            children: [
                              (0, i.jsx)("div", { className: C.dotOnline }),
                              (0, i.jsx)(u.Text, {
                                variant: "text-xs/normal",
                                className: C.memberText,
                                children: b.intl.format(b.t["LC+S+v"], {
                                  membersOnline: S,
                                }),
                              }),
                            ],
                          })
                        : null,
                      null != y
                        ? (0, i.jsxs)("div", {
                            className: C.memberCount,
                            children: [
                              (0, i.jsx)("div", { className: C.dotOffline }),
                              (0, i.jsx)(u.Text, {
                                variant: "text-xs/normal",
                                className: C.memberText,
                                children: b.intl.format(b.t.zRl6XV, {
                                  count: y,
                                }),
                              }),
                            ],
                          })
                        : null,
                    ],
                  }),
                ],
              }),
              (0, i.jsxs)("div", {
                className: C.footer,
                children: [
                  null != k && k.length > 0
                    ? (0, i.jsxs)(i.Fragment, {
                        children: [
                          (0, i.jsx)(u.Heading, {
                            variant: "heading-deprecated-12/semibold",
                            className: C.emojiHeader,
                            color: "header-secondary",
                            children: b.intl.string(b.t.Q60n1N),
                          }),
                          (0, i.jsxs)("div", {
                            className: a()(C.emojiContainer, {
                              [C.withCounter]: null != L,
                            }),
                            children: [
                              k.map((e) => {
                                let n = v.ZP.getEmojiURL({
                                  id: e.id,
                                  animated: !1,
                                  size: 24,
                                });
                                return (0, i.jsx)(
                                  u.Tooltip,
                                  {
                                    text: ":".concat(e.name, ":"),
                                    children: (e) =>
                                      (0, i.jsx)("img", {
                                        ...e,
                                        width: 24,
                                        height: 24,
                                        src: n,
                                        className: a()({
                                          [C.emoji]: null == L,
                                        }),
                                        alt: "",
                                      }),
                                  },
                                  e.id,
                                );
                              }),
                              null != L
                                ? (0, i.jsx)(u.Heading, {
                                    variant: "heading-deprecated-12/semibold",
                                    className: C.emojiCounter,
                                    color: "header-secondary",
                                    children: "+".concat(L),
                                  })
                                : null,
                            ],
                          }),
                        ],
                      })
                    : null,
                  (0, i.jsx)(u.Button, {
                    look: u.Button.Looks.FILLED,
                    color: u.Button.Colors.BRAND,
                    size: u.Button.Sizes.SMALL,
                    onClick: D,
                    submitting: w,
                    autoFocus: !0,
                    children: b.intl.string(b.t["K+WeR0"]),
                  }),
                ],
              }),
            ],
          })
        );
      }
      function Z(e) {
        let { guildId: n, channelId: t, messageId: r } = e,
          {
            loading: a,
            unavailable: c,
            guild: o,
          } = (0, s.cj)(
            [p.Z],
            () => ({
              guild: p.Z.getGuild(n),
              loading: p.Z.isFetchingGuild(n),
              unavailable: p.Z.hasFetchFailed(n),
            }),
            [n],
          );
        return (l.useEffect(() => {
          null == o && !a && !c && (0, _.P)(n);
        }, [o, n, a, c]),
        a)
          ? (0, i.jsx)(u.Dialog, {
              "aria-label": b.intl.string(b.t.ZTNur6),
              className: C.guildPopout,
              children: (0, i.jsx)(y, {}),
            })
          : null == o || c
            ? (0, i.jsx)(A, {})
            : (0, i.jsx)(O, { guild: o, channelId: t, messageId: r });
      }
      function w(e) {
        return (0, E.h)()
          ? (0, i.jsx)(P.Z, {
              setPopoutRef: e.setPopoutRef,
              guildId: e.guildId,
              name: e.name,
            })
          : (0, i.jsx)(Z, { ...e });
      }
    },
    857395: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return h;
        },
      });
      var i = t(200651),
        l = t(192379),
        r = t(442837),
        a = t(481060),
        s = t(249842),
        c = t(838367),
        o = t(576306),
        u = t(83474),
        d = t(914620);
      function h(e) {
        let { guildId: n, channelId: t, messageId: h, name: m, ...f } = e,
          x = (0, o.h)(),
          { unavailable: g, guild: j } = (0, r.cj)(
            [c.Z],
            () => ({
              guild: c.Z.getGuild(n),
              unavailable: c.Z.hasFetchFailed(n),
            }),
            [n],
          ),
          v = null != j,
          N = l.useCallback(async () => {
            if (!x)
              try {
                !v && (await (0, s.P)(n));
              } catch {}
          }, [x, v, n]);
        return g
          ? (0, i.jsx)(a.Popout, {
              position: "right",
              renderPopout: (e) => (0, i.jsx)(u.SK, {}),
              ...f,
              clickTrap: !0,
            })
          : (0, i.jsx)(a.Popout, {
              position: "right",
              preload: N,
              clickTrap: !0,
              renderPopout: (e) =>
                x
                  ? (0, i.jsx)(d.Z, { ...e, guildId: n, name: m })
                  : null == j
                    ? (0, i.jsx)(i.Fragment, {})
                    : (0, i.jsx)(u.sK, {
                        ...e,
                        guild: j,
                        channelId: t,
                        messageId: h,
                      }),
              ...f,
            });
      }
    },
    60034: function (e, n, t) {
      t.d(n, {
        R: function () {
          return o;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(120356),
        r = t.n(l),
        a = t(686546),
        s = t(624138),
        c = t(404677);
      function o(e) {
        let { guildName: n, iconSize: t, className: l } = e,
          o = (0, s.Zg)(n);
        return (0, i.jsx)(a.ZP, {
          mask: a.ZP.Masks.CLAN_ICON,
          width: t,
          height: t,
          className: l,
          children: (0, i.jsx)("div", {
            className: r()(c.guildIconImage, c.acronym),
            children: o,
          }),
        });
      }
    },
    914620: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return h;
        },
      });
      var i = t(200651),
        l = t(192379),
        r = t(120356),
        a = t.n(r),
        s = t(481060),
        c = t(934269),
        o = t(722300),
        u = t(910200),
        d = t(37633);
      function h(e) {
        let { guildId: n, name: t, setPopoutRef: r } = e,
          {
            guildProfile: h,
            fetchGuildProfile: m,
            isFetching: f,
          } = (0, c.u)(n),
          x = l.useRef(null),
          g = l.useCallback(() => {
            m(!0);
          }, [m]);
        l.useEffect(() => {
          m();
        }, [m]),
          l.useEffect(() => {
            null == r || r(null == x ? void 0 : x.current);
          }, [x, r]);
        let j = null;
        return (
          (j = f
            ? (0, i.jsx)("div", {
                className: a()(d.container, d.spinnerContainer),
                children: (0, i.jsx)(s.Spinner, {}),
              })
            : null == h
              ? (0, i.jsx)("div", {
                  className: d.container,
                  children: (0, i.jsx)(o.Z, { name: t, onRetry: g }),
                })
              : (0, i.jsx)("div", {
                  className: d.container,
                  children: (0, i.jsx)(u.Z, { profile: h }),
                })),
          (0, i.jsx)(s.Dialog, {
            ref: x,
            "aria-label": null == h ? void 0 : h.name,
            children: j,
          })
        );
      }
    },
    722300: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return h;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(692547),
        r = t(481060),
        a = t(410030),
        s = t(686546),
        c = t(60034),
        o = t(686369),
        u = t(388032),
        d = t(950039);
      function h(e) {
        let { name: n, onRetry: t } = e,
          h = (0, a.ZP)(),
          m = (0, r.useToken)(l.Z.colors.BG_BASE_TERTIARY),
          f = (0, o.d)(h, m.hex()),
          x = null != n ? n : u.intl.string(u.t.DmIUGB);
        return (0, i.jsxs)("div", {
          className: d.container,
          children: [
            (0, i.jsx)("div", {
              className: d.banner,
              style: { background: f },
            }),
            (0, i.jsx)("div", {
              className: d.avatarContainer,
              children: (0, i.jsx)(s.ZP, {
                mask: s.QS.CLAN_ICON,
                width: 70,
                height: 70,
                children: (0, i.jsx)("div", {
                  className: d.avatarWrapper,
                  children: (0, i.jsx)(c.R, { guildName: x, iconSize: 64 }),
                }),
              }),
            }),
            (0, i.jsxs)("div", {
              className: d.header,
              children: [
                (0, i.jsx)(r.Heading, {
                  variant: "heading-lg/medium",
                  color: "header-primary",
                  children: x,
                }),
                (0, i.jsxs)(r.Clickable, {
                  className: d.error,
                  onClick: t,
                  children: [
                    (0, i.jsx)(r.CircleWarningIcon, {
                      size: "sm",
                      color: "currentColor",
                    }),
                    (0, i.jsx)(r.Text, {
                      variant: "text-sm/normal",
                      color: "text-warning",
                      children: u.intl.string(u.t.tmGHjY),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
    },
    686369: function (e, n, t) {
      t.d(n, {
        d: function () {
          return a;
        },
      });
      var i = t(950104),
        l = t(780384),
        r = t(981631);
      function a(e, n) {
        let t = e === r.BRd.DARK ? (0, i.DT)(n, 0.8) : (0, l.r5)(n, 0.8);
        return "linear-gradient(45deg, ".concat(n, " 0%, ").concat(t, " 100%)");
      }
    },
    910200: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return v;
        },
      });
      var i = t(200651),
        l = t(442837),
        r = t(692547),
        a = t(481060),
        s = t(410030),
        c = t(220082),
        o = t(114487),
        u = t(686546),
        d = t(706454),
        h = t(768581),
        m = t(709054),
        f = t(997431),
        x = t(686369),
        g = t(388032),
        j = t(950039);
      function v(e) {
        let { profile: n } = e,
          t = (0, s.ZP)(),
          v = (function (e, n) {
            let t = h.ZP.getGuildIconURL({ id: e.id, icon: e.icon, size: 64 });
            return (0, c.ZP)(t, n);
          })(n, (0, a.useToken)(r.Z.colors.BG_BASE_TERTIARY).hex()),
          N = (0, l.e7)([d.default], () => d.default.locale),
          _ = (0, x.d)(t, v),
          p = (0, f.M)(m.default.extractTimestamp(n.id), N);
        return (0, i.jsxs)("div", {
          className: j.container,
          children: [
            (0, i.jsx)("div", {
              className: j.banner,
              style: { background: _ },
            }),
            (0, i.jsx)("div", {
              className: j.avatarContainer,
              children: (0, i.jsx)(u.ZP, {
                mask: u.QS.CLAN_ICON,
                width: 70,
                height: 70,
                children: (0, i.jsx)("div", {
                  className: j.avatarWrapper,
                  children: (0, i.jsx)(o.b, {
                    guildId: n.id,
                    guildName: n.name,
                    guildIcon: n.icon,
                    iconSize: 64,
                  }),
                }),
              }),
            }),
            (0, i.jsxs)("div", {
              className: j.header,
              children: [
                (0, i.jsx)(a.Heading, {
                  variant: "heading-lg/medium",
                  color: "header-primary",
                  children: n.name,
                }),
                (0, i.jsxs)("div", {
                  className: j.members,
                  children: [
                    (0, i.jsxs)("div", {
                      className: j.memberCount,
                      children: [
                        (0, i.jsx)("div", { className: j.dot }),
                        (0, i.jsx)(a.Text, {
                          variant: "text-sm/normal",
                          color: "text-secondary",
                          children: g.intl.format(g.t.zRl6XV, {
                            count: n.memberCount,
                          }),
                        }),
                      ],
                    }),
                    (0, i.jsxs)("div", {
                      className: j.memberCount,
                      children: [
                        (0, i.jsx)("div", { className: j.dotOnline }),
                        (0, i.jsx)(a.Text, {
                          variant: "text-sm/normal",
                          color: "text-secondary",
                          children: g.intl.format(g.t["LC+S+v"], {
                            membersOnline: n.onlineCount,
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, i.jsx)("div", {
                  className: j.established,
                  children: (0, i.jsx)(a.Text, {
                    variant: "text-sm/normal",
                    color: "text-secondary",
                    children: g.intl.format(g.t["zb2Q5+"], {
                      createdAtDate: p,
                    }),
                  }),
                }),
              ],
            }),
            (0, i.jsx)("div", {
              className: j.body,
              children: (0, i.jsx)(a.Text, {
                variant: "text-sm/normal",
                color: "text-secondary",
                children: n.description,
              }),
            }),
          ],
        });
      }
    },
    471253: function (e, n, t) {
      t.d(n, {
        DT: function () {
          return E;
        },
        Ef: function () {
          return C;
        },
        HO: function () {
          return b;
        },
        NZ: function () {
          return I;
        },
        Pq: function () {
          return T;
        },
        Q1: function () {
          return v;
        },
        RK: function () {
          return _;
        },
        _0: function () {
          return N;
        },
        hz: function () {
          return P;
        },
        yi: function () {
          return p;
        },
      });
      var i = t(512722),
        l = t.n(i),
        r = t(149765),
        a = t(544891),
        s = t(493683);
      t(749210);
      var c = t(911969),
        o = t(367907),
        u = t(944486),
        d = t(979651),
        h = t(700785),
        m = t(922482),
        f = t(192079),
        x = t(706058),
        g = t(590415),
        j = t(981631);
      function v(e, n) {
        let t = e.getGuildId();
        return (
          l()(null != t, "This channel cannot be guildless."),
          n && (0, o.yw)(j.rMx.REQUEST_TO_SPEAK_INITIATED, { ...(0, f.s$)(e) }),
          a.tn.patch({
            url: j.ANM.UPDATE_VOICE_STATE(t),
            body: {
              request_to_speak_timestamp: n ? new Date().toISOString() : null,
              channel_id: e.id,
            },
            rejectWithError: !1,
          })
        );
      }
      function N(e, n) {
        let t = e.getGuildId();
        return (
          l()(null != t, "This channel cannot be guildless."),
          a.tn.patch({
            url: j.ANM.UPDATE_VOICE_STATE(t, n),
            body: {
              suppress: !1,
              request_to_speak_timestamp: new Date().toISOString(),
              channel_id: e.id,
            },
            rejectWithError: !1,
          })
        );
      }
      function _(e, n) {
        let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          i = null == e ? void 0 : e.getGuildId();
        l()(null != i, "This channel cannot be guildless.");
        let r = d.Z.getVoiceStateForChannel(e.id);
        return (
          (0, g.gf)(r) === g.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK &&
            !n &&
            (0, o.yw)(j.rMx.PROMOTED_TO_SPEAKER, { ...(0, f.s$)(e) }),
          a.tn.patch({
            url: j.ANM.UPDATE_VOICE_STATE(i),
            body: {
              suppress: n,
              request_to_speak_timestamp: null,
              channel_id: e.id,
              ...(t ? { silent: t } : {}),
            },
            rejectWithError: !1,
          })
        );
      }
      function p(e) {
        let n = null == e ? void 0 : e.getGuildId();
        return (
          l()(null != n, "This channel cannot be guildless."),
          a.tn.patch({
            url: j.ANM.UPDATE_VOICE_STATE(n),
            body: {
              suppress: !0,
              channel_id: e.id,
              self_video: !1,
              self_stream: !1,
            },
            rejectWithError: !1,
          })
        );
      }
      function E(e, n, t) {
        let i = e.getGuildId();
        return (
          l()(null != i, "This channel cannot be guildless."),
          a.tn.patch({
            url: j.ANM.UPDATE_VOICE_STATE(i, n),
            body: { suppress: t, channel_id: e.id },
            rejectWithError: !1,
          })
        );
      }
      function P(e, n) {
        if (null == n || null == e) return;
        let t = n.getGuildId();
        return (
          l()(null != t, "This channel cannot be guildless."),
          E(n, e.id, !0),
          a.tn.patch({
            url: j.ANM.UPDATE_VOICE_STATE(t, e.id),
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
      function T(e, n, t) {
        let i = e.getGuildId();
        l()(null != i, "Channel cannot be guildless");
        let a = e.permissionOverwrites[i],
          o = { id: i, type: c.BN.ROLE, allow: h.Hn, deny: h.Hn, ...a };
        t
          ? ((o.allow = r.IH(o.allow, n)), (o.deny = r.Od(o.deny, n)))
          : ((o.allow = r.Od(o.allow, n)), (o.deny = r.IH(o.deny, n))),
          s.Z.updatePermissionOverwrite(e.id, o);
      }
      async function b(e, n, t, i) {
        if ("" === n) return;
        u.Z.getVoiceChannelId() !== e.id && (0, m.TM)(e);
        let l = await (0, x.me)(e.id, n, t, i);
        return _(e, !1, !0), l;
      }
      async function C(e, n, t) {
        if ("" !== n) return await (0, x.Dk)(e.id, n, t);
      }
      async function I(e) {
        await (0, x.Ix)(e.id);
      }
    },
    192079: function (e, n, t) {
      t.d(n, {
        ER: function () {
          return d;
        },
        kk: function () {
          return h;
        },
        s$: function () {
          return m;
        },
      }),
        t(724458),
        t(47120),
        t(392711);
      var i = t(19780),
        l = t(5192),
        r = t(700785),
        a = t(427679),
        s = t(157925),
        c = t(981631),
        o = t(71080),
        u = t(388032);
      function d(e, n, t, i) {
        let r = n[0],
          a = l.ZP.getName(e, t, r),
          s = null != i ? i : n.length;
        return 1 === s && null != r
          ? a
          : null == r
            ? u.intl.formatToPlainString(u.t.chmM9P, { count: s })
            : u.intl.formatToPlainString(u.t.GhkJ29, { name: a, count: s - 1 });
      }
      function h(e, n) {
        switch (e) {
          case o.aC.OWNER:
            return u.intl.string(u.t.icuNBA);
          case o.aC.ADMINISTRATOR:
            return u.intl.string(u.t.eTmN5e);
          case o.aC.MEMBER:
          case o.aC.ROLE:
            return n ? u.intl.string(u.t.Hw3XW1) : u.intl.string(u.t.YieyPj);
          case o.aC.EMPTY_STATE:
        }
        return null;
      }
      function m(e) {
        let n = a.Z.getStageInstanceByChannel(e.id);
        return {
          channel_id: e.id,
          guild_id: e.guild_id,
          topic: null == n ? void 0 : n.topic,
          media_session_id: i.Z.getMediaSessionId(),
          request_to_speak_state: r.Uu(c.Plq.REQUEST_TO_SPEAK, e)
            ? s.BM.EVERYONE
            : s.BM.NO_ONE,
          stage_instance_id: null == n ? void 0 : n.id,
        };
      }
    },
    706058: function (e, n, t) {
      t.d(n, {
        Dk: function () {
          return a;
        },
        Ix: function () {
          return s;
        },
        me: function () {
          return r;
        },
      });
      var i = t(544891),
        l = t(981631);
      async function r(e, n, t, r, a) {
        return (
          await i.tn.post({
            url: l.ANM.STAGE_INSTANCES,
            body: {
              channel_id: e,
              topic: n,
              privacy_level: t,
              guild_scheduled_event_id: a,
              send_start_notification: r,
            },
            rejectWithError: !1,
          })
        ).body;
      }
      async function a(e, n, t) {
        return (
          await i.tn.patch({
            url: l.ANM.STAGE_INSTANCE(e),
            body: { topic: n, privacy_level: t },
            rejectWithError: !1,
          })
        ).body;
      }
      function s(e) {
        return i.tn.del({ url: l.ANM.STAGE_INSTANCE(e), rejectWithError: !1 });
      }
    },
  },
]);
//# sourceMappingURL=609c9198403dfd68f806.js.map
