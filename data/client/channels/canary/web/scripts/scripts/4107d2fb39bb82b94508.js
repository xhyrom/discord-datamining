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
      var l = t(544891),
        i = t(570140),
        r = t(981631);
      async function a(e) {
        i.Z.dispatch({ type: "GUILD_POPOUT_FETCH_START", guildId: e });
        try {
          let n = await l.tn.get({
            url: r.ANM.GUILD_PREVIEW(e),
            oldFormErrors: !0,
            rejectWithError: !0,
          });
          i.Z.dispatch({
            type: "GUILD_POPOUT_FETCH_SUCCESS",
            guildId: e,
            guild: n.body,
          });
        } catch (n) {
          i.Z.dispatch({ type: "GUILD_POPOUT_FETCH_FAILURE", guildId: e });
        }
      }
    },
    838367: function (e, n, t) {
      var l,
        i,
        r,
        a,
        s,
        o,
        c = t(442837),
        u = t(570140),
        d = t(314897),
        h = t(900849);
      ((l = s || (s = {})).UNSET = "unset"),
        (l.FETCHING = "fetching"),
        (l.FAILED = "failed"),
        (l.SUCCEEDED = "succeeded");
      let m = {};
      class f extends (o = c.ZP.Store) {
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
        (r = "displayName") in (i = f)
          ? Object.defineProperty(i, r, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (i[r] = a),
        (n.Z = new f(u.Z, {
          GUILD_POPOUT_FETCH_START: function (e) {
            let { guildId: n } = e;
            m[n] = { ...m[n], fetchState: "fetching" };
          },
          GUILD_POPOUT_FETCH_SUCCESS: function (e) {
            let { guildId: n, guild: t } = e,
              l = (0, h.PP)(t);
            m[n] = { ...m[n], guild: l, fetchState: "succeeded" };
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
      var l = t(544891),
        i = t(405222),
        r = t(981631);
      async function a(e) {
        let n = await l.tn.get({
          url: r.ANM.GUILD_PROFILE(e),
          rejectWithError: !1,
        });
        return (0, i.x)(n.body);
      }
    },
    576306: function (e, n, t) {
      t.d(n, {
        h: function () {
          return i;
        },
      });
      let l = (0, t(818083).B)({
        kind: "user",
        id: "2024-12_new_guild_profile",
        label: "Enables new guild profile",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "On", config: { enabled: !0 } }],
      });
      function i() {
        let { enabled: e } = l.useExperiment(
          { location: "GuildProfileExperiment" },
          { autoTrackExposure: !1 },
        );
        return e;
      }
    },
    405222: function (e, n, t) {
      t.d(n, {
        x: function () {
          return l;
        },
      });
      function l(e) {
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
      var l = t(192379),
        i = t(731965),
        r = t(881052),
        a = t(972959),
        s = t(699553);
      let o = {},
        c = (0, a.H)((e, n) => ({
          profiles: {},
          isFetchingGuild: (e) => null != n().fetchPromises[e],
          error: null,
          fetchPromises: {},
          fetchGuildProfile: async (t) => {
            let l = n().fetchPromises[t];
            if (
              !(function (e) {
                var n;
                let t = Date.now(),
                  l = null !== (n = o[e]) && void 0 !== n ? n : 0;
                return t - l > 6e4;
              })(t)
            ) {
              var a;
              return null != l
                ? await l
                : Promise.resolve(
                    null !== (a = n().profiles[t]) && void 0 !== a ? a : null,
                  );
            }
            o[t] = Date.now();
            try {
              if (null != l) return await l;
              {
                let l = (async () => {
                  let l = await (0, s.C)(t),
                    r = n().profiles,
                    a = n().fetchPromises;
                  return null == a[t]
                    ? l
                    : (delete a[t],
                      (0, i.j)(() => {
                        e({
                          profiles: { ...r, [t]: l },
                          error: null,
                          fetchPromises: a,
                        });
                      }),
                      l);
                })();
                return (
                  (0, i.j)(() => {
                    e({ fetchPromises: { ...n().fetchPromises, [t]: l } });
                  }),
                  await l
                );
              }
            } catch (s) {
              let l = new r.Hx(s),
                a = n().fetchPromises;
              null != a[t] && delete a[t],
                (0, i.j)(() => {
                  e({ error: l, fetchPromises: a });
                });
            }
            return null;
          },
        }));
      function u(e) {
        let n = c.useState(
            (n) => (null != e ? n.profiles[e] : null),
            Object.is,
          ),
          t = c.useField("fetchGuildProfile");
        return {
          guildProfile: n,
          fetchGuildProfile: l.useCallback(async () => {
            if (null == e) return null;
            try {
              return await t(e);
            } catch (e) {
              return null;
            }
          }, [e, t]),
        };
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
      var l = t(200651),
        i = t(192379),
        r = t(120356),
        a = t.n(r),
        s = t(442837),
        o = t(692547),
        c = t(780384),
        u = t(481060),
        d = t(410030),
        h = t(686546),
        m = t(372769),
        f = t(134432),
        g = t(703656),
        x = t(314897),
        _ = t(271383),
        j = t(768581),
        v = t(900849),
        p = t(249842),
        E = t(838367),
        N = t(576306),
        P = t(914620),
        T = t(981631),
        b = t(388032),
        I = t(302602),
        C = t(892561),
        S = t(494536);
      function y() {
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)("div", { className: I.splashPlaceholder }),
            (0, l.jsxs)("div", {
              className: a()(I.body, I.hasSplash),
              children: [
                (0, l.jsx)("div", { className: I.iconPlaceholder }),
                (0, l.jsx)("div", {
                  className: I.__invalid_headerText,
                  children: (0, l.jsx)("div", { className: I.namePlaceholder }),
                }),
                (0, l.jsxs)("div", {
                  className: I.memberInfo,
                  children: [
                    (0, l.jsx)("div", {
                      className: I.memberCount,
                      children: (0, l.jsx)("div", {
                        className: I.memberInfoPlaceholder,
                      }),
                    }),
                    (0, l.jsx)("div", {
                      className: I.memberCount,
                      children: (0, l.jsx)("div", {
                        className: I.memberInfoPlaceholder,
                      }),
                    }),
                  ],
                }),
                (0, l.jsx)("div", { className: I.viewButtonPlaceholder }),
              ],
            }),
          ],
        });
      }
      function A() {
        let e = (0, d.ZP)();
        return (0, l.jsx)(u.Dialog, {
          "aria-label": b.intl.string(b.t["8LKcho"]),
          className: I.guildPopout,
          children: (0, l.jsxs)("div", {
            className: I.body,
            children: [
              (0, l.jsx)("img", {
                src: (0, c.wj)(e) ? C : S,
                className: I.unavailableIcon,
                width: 80,
                height: 80,
                alt: "",
              }),
              (0, l.jsx)(u.Heading, {
                className: I.unavailableHeader,
                variant: "heading-md/semibold",
                children: b.intl.string(b.t["+kdPHx"]),
              }),
              (0, l.jsx)(u.Text, {
                variant: "text-sm/normal",
                children: b.intl.string(b.t["Yn1+xs"]),
              }),
            ],
          }),
        });
      }
      function O(e) {
        var n, t;
        let { guild: r, channelId: c, messageId: d } = e,
          {
            name: p,
            id: E,
            discoverySplash: N,
            icon: P,
            description: C,
            presenceCount: S,
            memberCount: y,
            emojis: A,
          } = r,
          O = (0, s.e7)([x.default], () => x.default.getId()),
          Z = (0, s.e7)([_.ZP], () => _.ZP.isMember(E, O), [E, O]),
          [w, R] = i.useState(!1),
          U = (e) => {
            if ((e.stopPropagation(), Z)) (0, g.XU)(E, c, d);
            else {
              let e = {
                page: T.ZY5.GUILD_CHANNEL,
                section: T.jXE.GUILD_POPOUT,
                object: T.qAy.CARD,
              };
              (0, v.Ub)(E, e);
            }
            R(!0);
          },
          D = j.ZP.getGuildDiscoverySplashURL({
            id: E,
            splash: N,
            size: 250 * (0, f.x_)(),
          }),
          G =
            null !== (n = j.ZP.getGuildIconURL({ id: E, icon: P, size: 80 })) &&
            void 0 !== n
              ? n
              : void 0,
          L = A,
          M = null;
        return (
          null != L &&
            L.length > 6 &&
            null != A &&
            ((L =
              null !==
                (t =
                  null == A
                    ? void 0
                    : A.slice(
                        Math.max((null == A ? void 0 : A.length) - 6, 0),
                      )) && void 0 !== t
                ? t
                : []),
            (M = A.length - 6)),
          (0, l.jsxs)(u.Dialog, {
            "aria-label": p,
            className: I.guildPopout,
            children: [
              null != D
                ? (0, l.jsx)("img", {
                    src: D,
                    alt: "",
                    className: I.splashImage,
                  })
                : null,
              (0, l.jsxs)("div", {
                className: a()(I.body, { [I.hasSplash]: null != D }),
                children: [
                  (0, l.jsx)("div", {
                    className: a()({ [I.iconWithSplash]: null != D }),
                    children: (0, l.jsx)(u.Clickable, {
                      onClick: U,
                      children: (0, l.jsx)(h.ZP, {
                        mask: h.ZP.Masks.SQUIRCLE,
                        width: 88,
                        height: 88,
                        children: (0, l.jsx)("div", {
                          className: I.iconMask,
                          children: (0, l.jsx)(h.ZP, {
                            mask: h.ZP.Masks.SQUIRCLE,
                            width: 80,
                            height: 80,
                            children: (0, l.jsx)("img", {
                              src: G,
                              alt: "",
                              className: I.avatar,
                            }),
                          }),
                        }),
                      }),
                    }),
                  }),
                  null != p
                    ? (0, l.jsxs)("div", {
                        className: I.guildNameWrapper,
                        children: [
                          (0, l.jsx)(m.Z, {
                            className: I.badge,
                            guild: r,
                            tooltipPosition: "top",
                            tooltipColor: u.Tooltip.Colors.PRIMARY,
                            badgeColor: o.Z.unsafe_rawColors.PRIMARY_500.css,
                          }),
                          (0, l.jsx)(u.Text, {
                            variant: "text-md/semibold",
                            className: I.guildName,
                            children: p,
                          }),
                        ],
                      })
                    : null,
                  null != C
                    ? (0, l.jsx)(u.Text, {
                        color: "header-secondary",
                        className: I.description,
                        variant: "text-sm/normal",
                        children: C,
                      })
                    : null,
                  (0, l.jsxs)("div", {
                    className: I.memberInfo,
                    children: [
                      null != S
                        ? (0, l.jsxs)("div", {
                            className: I.memberCount,
                            children: [
                              (0, l.jsx)("div", { className: I.dotOnline }),
                              (0, l.jsx)(u.Text, {
                                variant: "text-xs/normal",
                                className: I.memberText,
                                children: b.intl.format(b.t["LC+S+v"], {
                                  membersOnline: S,
                                }),
                              }),
                            ],
                          })
                        : null,
                      null != y
                        ? (0, l.jsxs)("div", {
                            className: I.memberCount,
                            children: [
                              (0, l.jsx)("div", { className: I.dotOffline }),
                              (0, l.jsx)(u.Text, {
                                variant: "text-xs/normal",
                                className: I.memberText,
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
              (0, l.jsxs)("div", {
                className: I.footer,
                children: [
                  null != L && L.length > 0
                    ? (0, l.jsxs)(l.Fragment, {
                        children: [
                          (0, l.jsx)(u.Heading, {
                            variant: "heading-deprecated-12/semibold",
                            className: I.emojiHeader,
                            color: "header-secondary",
                            children: b.intl.string(b.t.Q60n1N),
                          }),
                          (0, l.jsxs)("div", {
                            className: a()(I.emojiContainer, {
                              [I.withCounter]: null != M,
                            }),
                            children: [
                              L.map((e) => {
                                let n = j.ZP.getEmojiURL({
                                  id: e.id,
                                  animated: !1,
                                  size: 24,
                                });
                                return (0, l.jsx)(
                                  u.Tooltip,
                                  {
                                    text: ":".concat(e.name, ":"),
                                    children: (e) =>
                                      (0, l.jsx)("img", {
                                        ...e,
                                        width: 24,
                                        height: 24,
                                        src: n,
                                        className: a()({
                                          [I.emoji]: null == M,
                                        }),
                                        alt: "",
                                      }),
                                  },
                                  e.id,
                                );
                              }),
                              null != M
                                ? (0, l.jsx)(u.Heading, {
                                    variant: "heading-deprecated-12/semibold",
                                    className: I.emojiCounter,
                                    color: "header-secondary",
                                    children: "+".concat(M),
                                  })
                                : null,
                            ],
                          }),
                        ],
                      })
                    : null,
                  (0, l.jsx)(u.Button, {
                    look: u.Button.Looks.FILLED,
                    color: u.Button.Colors.BRAND,
                    size: u.Button.Sizes.SMALL,
                    onClick: U,
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
            unavailable: o,
            guild: c,
          } = (0, s.cj)(
            [E.Z],
            () => ({
              guild: E.Z.getGuild(n),
              loading: E.Z.isFetchingGuild(n),
              unavailable: E.Z.hasFetchFailed(n),
            }),
            [n],
          );
        return (i.useEffect(() => {
          null == c && !a && !o && (0, p.P)(n);
        }, [c, n, a, o]),
        a)
          ? (0, l.jsx)(u.Dialog, {
              "aria-label": b.intl.string(b.t.ZTNur6),
              className: I.guildPopout,
              children: (0, l.jsx)(y, {}),
            })
          : null == c || o
            ? (0, l.jsx)(A, {})
            : (0, l.jsx)(O, { guild: c, channelId: t, messageId: r });
      }
      function w(e) {
        return (0, N.h)()
          ? (0, l.jsx)(P.Z, {
              setPopoutRef: e.setPopoutRef,
              guildId: e.guildId,
            })
          : (0, l.jsx)(Z, { ...e });
      }
    },
    857395: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return h;
        },
      });
      var l = t(200651),
        i = t(192379),
        r = t(442837),
        a = t(481060),
        s = t(249842),
        o = t(838367),
        c = t(576306),
        u = t(83474),
        d = t(914620);
      function h(e) {
        let { guildId: n, channelId: t, messageId: h, ...m } = e,
          f = (0, c.h)(),
          { unavailable: g, guild: x } = (0, r.cj)(
            [o.Z],
            () => ({
              guild: o.Z.getGuild(n),
              unavailable: o.Z.hasFetchFailed(n),
            }),
            [n],
          ),
          _ = null != x,
          j = i.useCallback(async () => {
            if (!f)
              try {
                !_ && (await (0, s.P)(n));
              } catch {}
          }, [f, _, n]);
        return g
          ? (0, l.jsx)(a.Popout, {
              position: "right",
              renderPopout: (e) => (0, l.jsx)(u.SK, {}),
              ...m,
            })
          : (0, l.jsx)(a.Popout, {
              position: "right",
              preload: j,
              renderPopout: (e) =>
                f
                  ? (0, l.jsx)(d.Z, { ...e, guildId: n })
                  : null == x
                    ? (0, l.jsx)(l.Fragment, {})
                    : (0, l.jsx)(u.sK, {
                        ...e,
                        guild: x,
                        channelId: t,
                        messageId: h,
                      }),
              ...m,
            });
      }
    },
    914620: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return c;
        },
      });
      var l = t(200651),
        i = t(192379),
        r = t(481060),
        a = t(934269),
        s = t(910200),
        o = t(37633);
      function c(e) {
        let { guildId: n, setPopoutRef: t } = e,
          { guildProfile: c, fetchGuildProfile: u } = (0, a.u)(n),
          d = i.useRef(null);
        i.useEffect(() => {
          u();
        }, [u]),
          i.useEffect(() => {
            null == t || t(null == d ? void 0 : d.current);
          }, [d, t]);
        let h = null;
        return (
          (h =
            null == c
              ? (0, l.jsx)("div", {
                  className: o.container,
                  children: (0, l.jsx)(r.Spinner, {}),
                })
              : (0, l.jsx)("div", {
                  className: o.container,
                  children: (0, l.jsx)(s.Z, { profile: c }),
                })),
          (0, l.jsx)(r.Dialog, {
            ref: d,
            "aria-label": null == c ? void 0 : c.name,
            children: h,
          })
        );
      }
    },
    910200: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return x;
        },
      });
      var l = t(200651),
        i = t(692547),
        r = t(950104),
        a = t(780384),
        s = t(481060),
        o = t(410030),
        c = t(220082),
        u = t(114487),
        d = t(686546),
        h = t(768581),
        m = t(981631),
        f = t(388032),
        g = t(950039);
      function x(e) {
        let { profile: n } = e,
          t = (0, o.ZP)(),
          x = (function (e, n) {
            let t = e === m.BRd.DARK ? (0, r.DT)(n, 0.8) : (0, a.r5)(n, 0.8);
            return "linear-gradient(45deg, "
              .concat(n, " 0%, ")
              .concat(t, " 100%)");
          })(
            t,
            (function (e, n) {
              let t = h.ZP.getGuildIconURL({
                id: e.id,
                icon: e.icon,
                size: 64,
              });
              return (0, c.ZP)(t, n);
            })(n, (0, s.useToken)(i.Z.colors.BG_BASE_TERTIARY).hex()),
          );
        return (0, l.jsxs)("div", {
          className: g.container,
          children: [
            (0, l.jsx)("div", {
              className: g.banner,
              style: { background: x },
            }),
            (0, l.jsx)("div", {
              className: g.avatarContainer,
              children: (0, l.jsx)(d.ZP, {
                mask: d.QS.CLAN_ICON,
                width: 70,
                height: 70,
                children: (0, l.jsx)("div", {
                  className: g.avatarWrapper,
                  children: (0, l.jsx)(u.b, {
                    guildId: n.id,
                    guildName: n.name,
                    guildIcon: n.icon,
                    iconSize: 64,
                  }),
                }),
              }),
            }),
            (0, l.jsxs)("div", {
              className: g.header,
              children: [
                (0, l.jsx)(s.Heading, {
                  variant: "heading-lg/medium",
                  color: "header-primary",
                  children: n.name,
                }),
                (0, l.jsxs)("div", {
                  className: g.members,
                  children: [
                    (0, l.jsx)("div", {
                      className: g.memberCount,
                      children: (0, l.jsx)(s.Text, {
                        variant: "text-sm/normal",
                        color: "text-secondary",
                        children: f.intl.format(f.t.zRl6XV, {
                          count: n.memberCount,
                        }),
                      }),
                    }),
                    (0, l.jsxs)("div", {
                      className: g.memberCount,
                      children: [
                        (0, l.jsx)("div", { className: g.dotOnline }),
                        (0, l.jsx)(s.Text, {
                          variant: "text-sm/normal",
                          color: "text-secondary",
                          children: f.intl.format(f.t["LC+S+v"], {
                            membersOnline: n.onlineCount,
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, l.jsx)("div", {
              className: g.body,
              children: (0, l.jsx)(s.Text, {
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
          return N;
        },
        Ef: function () {
          return I;
        },
        HO: function () {
          return b;
        },
        NZ: function () {
          return C;
        },
        Pq: function () {
          return T;
        },
        Q1: function () {
          return j;
        },
        RK: function () {
          return p;
        },
        _0: function () {
          return v;
        },
        hz: function () {
          return P;
        },
        yi: function () {
          return E;
        },
      });
      var l = t(512722),
        i = t.n(l),
        r = t(149765),
        a = t(544891),
        s = t(493683);
      t(749210);
      var o = t(911969),
        c = t(367907),
        u = t(944486),
        d = t(979651),
        h = t(700785),
        m = t(922482),
        f = t(192079),
        g = t(706058),
        x = t(590415),
        _ = t(981631);
      function j(e, n) {
        let t = e.getGuildId();
        return (
          i()(null != t, "This channel cannot be guildless."),
          n && (0, c.yw)(_.rMx.REQUEST_TO_SPEAK_INITIATED, { ...(0, f.s$)(e) }),
          a.tn.patch({
            url: _.ANM.UPDATE_VOICE_STATE(t),
            body: {
              request_to_speak_timestamp: n ? new Date().toISOString() : null,
              channel_id: e.id,
            },
            rejectWithError: !1,
          })
        );
      }
      function v(e, n) {
        let t = e.getGuildId();
        return (
          i()(null != t, "This channel cannot be guildless."),
          a.tn.patch({
            url: _.ANM.UPDATE_VOICE_STATE(t, n),
            body: {
              suppress: !1,
              request_to_speak_timestamp: new Date().toISOString(),
              channel_id: e.id,
            },
            rejectWithError: !1,
          })
        );
      }
      function p(e, n) {
        let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          l = null == e ? void 0 : e.getGuildId();
        i()(null != l, "This channel cannot be guildless.");
        let r = d.Z.getVoiceStateForChannel(e.id);
        return (
          (0, x.gf)(r) === x.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK &&
            !n &&
            (0, c.yw)(_.rMx.PROMOTED_TO_SPEAKER, { ...(0, f.s$)(e) }),
          a.tn.patch({
            url: _.ANM.UPDATE_VOICE_STATE(l),
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
      function E(e) {
        let n = null == e ? void 0 : e.getGuildId();
        return (
          i()(null != n, "This channel cannot be guildless."),
          a.tn.patch({
            url: _.ANM.UPDATE_VOICE_STATE(n),
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
      function N(e, n, t) {
        let l = e.getGuildId();
        return (
          i()(null != l, "This channel cannot be guildless."),
          a.tn.patch({
            url: _.ANM.UPDATE_VOICE_STATE(l, n),
            body: { suppress: t, channel_id: e.id },
            rejectWithError: !1,
          })
        );
      }
      function P(e, n) {
        if (null == n || null == e) return;
        let t = n.getGuildId();
        return (
          i()(null != t, "This channel cannot be guildless."),
          N(n, e.id, !0),
          a.tn.patch({
            url: _.ANM.UPDATE_VOICE_STATE(t, e.id),
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
        let l = e.getGuildId();
        i()(null != l, "Channel cannot be guildless");
        let a = e.permissionOverwrites[l],
          c = { id: l, type: o.BN.ROLE, allow: h.Hn, deny: h.Hn, ...a };
        t
          ? ((c.allow = r.IH(c.allow, n)), (c.deny = r.Od(c.deny, n)))
          : ((c.allow = r.Od(c.allow, n)), (c.deny = r.IH(c.deny, n))),
          s.Z.updatePermissionOverwrite(e.id, c);
      }
      async function b(e, n, t, l) {
        if ("" === n) return;
        u.Z.getVoiceChannelId() !== e.id && (0, m.TM)(e);
        let i = await (0, g.me)(e.id, n, t, l);
        return p(e, !1, !0), i;
      }
      async function I(e, n, t) {
        if ("" !== n) return await (0, g.Dk)(e.id, n, t);
      }
      async function C(e) {
        await (0, g.Ix)(e.id);
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
      var l = t(19780),
        i = t(5192),
        r = t(700785),
        a = t(427679),
        s = t(157925),
        o = t(981631),
        c = t(71080),
        u = t(388032);
      function d(e, n, t, l) {
        let r = n[0],
          a = i.ZP.getName(e, t, r),
          s = null != l ? l : n.length;
        return 1 === s && null != r
          ? a
          : null == r
            ? u.intl.formatToPlainString(u.t.chmM9P, { count: s })
            : u.intl.formatToPlainString(u.t.GhkJ29, { name: a, count: s - 1 });
      }
      function h(e, n) {
        switch (e) {
          case c.aC.OWNER:
            return u.intl.string(u.t.icuNBA);
          case c.aC.ADMINISTRATOR:
            return u.intl.string(u.t.eTmN5e);
          case c.aC.MEMBER:
          case c.aC.ROLE:
            return n ? u.intl.string(u.t.Hw3XW1) : u.intl.string(u.t.YieyPj);
          case c.aC.EMPTY_STATE:
        }
        return null;
      }
      function m(e) {
        let n = a.Z.getStageInstanceByChannel(e.id);
        return {
          channel_id: e.id,
          guild_id: e.guild_id,
          topic: null == n ? void 0 : n.topic,
          media_session_id: l.Z.getMediaSessionId(),
          request_to_speak_state: r.Uu(o.Plq.REQUEST_TO_SPEAK, e)
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
      var l = t(544891),
        i = t(981631);
      async function r(e, n, t, r, a) {
        return (
          await l.tn.post({
            url: i.ANM.STAGE_INSTANCES,
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
          await l.tn.patch({
            url: i.ANM.STAGE_INSTANCE(e),
            body: { topic: n, privacy_level: t },
            rejectWithError: !1,
          })
        ).body;
      }
      function s(e) {
        return l.tn.del({ url: i.ANM.STAGE_INSTANCE(e), rejectWithError: !1 });
      }
    },
  },
]);
//# sourceMappingURL=4107d2fb39bb82b94508.js.map
