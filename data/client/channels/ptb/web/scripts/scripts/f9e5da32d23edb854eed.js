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
          return s;
        },
      });
      var l = t(544891),
        i = t(570140),
        a = t(981631);
      async function s(e) {
        i.Z.dispatch({ type: "GUILD_POPOUT_FETCH_START", guildId: e });
        try {
          let n = await l.tn.get({
            url: a.ANM.GUILD_PREVIEW(e),
            oldFormErrors: !0,
            rejectWithError: !1,
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
        a,
        s,
        r,
        c,
        o = t(442837),
        u = t(570140),
        d = t(314897),
        h = t(900849);
      ((l = r || (r = {})).UNSET = "unset"),
        (l.FETCHING = "fetching"),
        (l.FAILED = "failed"),
        (l.SUCCEEDED = "succeeded");
      let m = {};
      class g extends (c = o.ZP.Store) {
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
      (s = "GuildPopoutStore"),
        (a = "displayName") in (i = g)
          ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (i[a] = s),
        (n.Z = new g(u.Z, {
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
    83474: function (e, n, t) {
      t.d(n, {
        SK: function () {
          return C;
        },
        ZP: function () {
          return y;
        },
        sK: function () {
          return A;
        },
      }),
        t(47120);
      var l = t(200651),
        i = t(192379),
        a = t(120356),
        s = t.n(a),
        r = t(442837),
        c = t(692547),
        o = t(780384),
        u = t(481060),
        d = t(410030),
        h = t(686546),
        m = t(372769),
        g = t(134432),
        f = t(703656),
        _ = t(314897),
        E = t(271383),
        x = t(768581),
        T = t(900849),
        p = t(249842),
        N = t(838367),
        j = t(981631),
        P = t(388032),
        v = t(846610),
        I = t(892561),
        S = t(494536);
      function b() {
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)("div", { className: v.splashPlaceholder }),
            (0, l.jsxs)("div", {
              className: s()(v.body, v.hasSplash),
              children: [
                (0, l.jsx)("div", { className: v.iconPlaceholder }),
                (0, l.jsx)("div", {
                  className: v.__invalid_headerText,
                  children: (0, l.jsx)("div", { className: v.namePlaceholder }),
                }),
                (0, l.jsxs)("div", {
                  className: v.memberInfo,
                  children: [
                    (0, l.jsx)("div", {
                      className: v.memberCount,
                      children: (0, l.jsx)("div", {
                        className: v.memberInfoPlaceholder,
                      }),
                    }),
                    (0, l.jsx)("div", {
                      className: v.memberCount,
                      children: (0, l.jsx)("div", {
                        className: v.memberInfoPlaceholder,
                      }),
                    }),
                  ],
                }),
                (0, l.jsx)("div", { className: v.viewButtonPlaceholder }),
              ],
            }),
          ],
        });
      }
      function C() {
        let e = (0, d.ZP)();
        return (0, l.jsx)(u.Dialog, {
          "aria-label": P.intl.string(P.t["8LKcho"]),
          className: v.guildPopout,
          children: (0, l.jsxs)("div", {
            className: v.body,
            children: [
              (0, l.jsx)("img", {
                src: (0, o.wj)(e) ? I : S,
                className: v.unavailableIcon,
                width: 80,
                height: 80,
                alt: "",
              }),
              (0, l.jsx)(u.Heading, {
                className: v.unavailableHeader,
                variant: "heading-md/semibold",
                children: P.intl.string(P.t["+kdPHx"]),
              }),
              (0, l.jsx)(u.Text, {
                variant: "text-sm/normal",
                children: P.intl.string(P.t["Yn1+xs"]),
              }),
            ],
          }),
        });
      }
      function A(e) {
        var n, t;
        let { guild: a, channelId: o, messageId: d } = e,
          {
            name: p,
            id: N,
            discoverySplash: I,
            icon: S,
            description: b,
            presenceCount: C,
            memberCount: A,
            emojis: y,
          } = a,
          O = (0, r.e7)([_.default], () => _.default.getId()),
          U = (0, r.e7)([E.ZP], () => E.ZP.isMember(N, O), [N, O]),
          [Z, D] = i.useState(!1),
          w = (e) => {
            if ((e.stopPropagation(), U)) (0, f.XU)(N, o, d);
            else {
              let e = {
                page: j.ZY5.GUILD_CHANNEL,
                section: j.jXE.GUILD_POPOUT,
                object: j.qAy.CARD,
              };
              (0, T.Ub)(N, e);
            }
            D(!0);
          },
          R = x.ZP.getGuildDiscoverySplashURL({
            id: N,
            splash: I,
            size: 250 * (0, g.x_)(),
          }),
          G =
            null !== (n = x.ZP.getGuildIconURL({ id: N, icon: S, size: 80 })) &&
            void 0 !== n
              ? n
              : void 0,
          M = y,
          L = null;
        return (
          null != M &&
            M.length > 6 &&
            null != y &&
            ((M =
              null !==
                (t =
                  null == y
                    ? void 0
                    : y.slice(
                        Math.max((null == y ? void 0 : y.length) - 6, 0),
                      )) && void 0 !== t
                ? t
                : []),
            (L = y.length - 6)),
          (0, l.jsxs)(u.Dialog, {
            "aria-label": p,
            className: v.guildPopout,
            children: [
              null != R
                ? (0, l.jsx)("img", {
                    src: R,
                    alt: "",
                    className: v.splashImage,
                  })
                : null,
              (0, l.jsxs)("div", {
                className: s()(v.body, { [v.hasSplash]: null != R }),
                children: [
                  (0, l.jsx)("div", {
                    className: s()({ [v.iconWithSplash]: null != R }),
                    children: (0, l.jsx)(u.Clickable, {
                      onClick: w,
                      children: (0, l.jsx)(h.ZP, {
                        mask: h.ZP.Masks.SQUIRCLE,
                        width: 88,
                        height: 88,
                        children: (0, l.jsx)("div", {
                          className: v.iconMask,
                          children: (0, l.jsx)(h.ZP, {
                            mask: h.ZP.Masks.SQUIRCLE,
                            width: 80,
                            height: 80,
                            children: (0, l.jsx)("img", {
                              src: G,
                              alt: "",
                              className: v.avatar,
                            }),
                          }),
                        }),
                      }),
                    }),
                  }),
                  null != p
                    ? (0, l.jsxs)("div", {
                        className: v.guildNameWrapper,
                        children: [
                          (0, l.jsx)(m.Z, {
                            className: v.badge,
                            guild: a,
                            tooltipPosition: "top",
                            tooltipColor: u.Tooltip.Colors.PRIMARY,
                            badgeColor: c.Z.unsafe_rawColors.PRIMARY_500.css,
                          }),
                          (0, l.jsx)(u.Text, {
                            variant: "text-md/semibold",
                            className: v.guildName,
                            children: p,
                          }),
                        ],
                      })
                    : null,
                  null != b
                    ? (0, l.jsx)(u.Text, {
                        color: "header-secondary",
                        className: v.description,
                        variant: "text-sm/normal",
                        children: b,
                      })
                    : null,
                  (0, l.jsxs)("div", {
                    className: v.memberInfo,
                    children: [
                      null != C
                        ? (0, l.jsxs)("div", {
                            className: v.memberCount,
                            children: [
                              (0, l.jsx)("div", { className: v.dotOnline }),
                              (0, l.jsx)(u.Text, {
                                variant: "text-xs/normal",
                                className: v.memberText,
                                children: P.intl.format(P.t["LC+S+v"], {
                                  membersOnline: C,
                                }),
                              }),
                            ],
                          })
                        : null,
                      null != A
                        ? (0, l.jsxs)("div", {
                            className: v.memberCount,
                            children: [
                              (0, l.jsx)("div", { className: v.dotOffline }),
                              (0, l.jsx)(u.Text, {
                                variant: "text-xs/normal",
                                className: v.memberText,
                                children: P.intl.format(P.t.zRl6XV, {
                                  count: A,
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
                className: v.footer,
                children: [
                  null != M && M.length > 0
                    ? (0, l.jsxs)(l.Fragment, {
                        children: [
                          (0, l.jsx)(u.Heading, {
                            variant: "heading-deprecated-12/semibold",
                            className: v.emojiHeader,
                            color: "header-secondary",
                            children: P.intl.string(P.t.Q60n1N),
                          }),
                          (0, l.jsxs)("div", {
                            className: s()(v.emojiContainer, {
                              [v.withCounter]: null != L,
                            }),
                            children: [
                              M.map((e) => {
                                let n = x.ZP.getEmojiURL({
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
                                        className: s()({
                                          [v.emoji]: null == L,
                                        }),
                                        alt: "",
                                      }),
                                  },
                                  e.id,
                                );
                              }),
                              null != L
                                ? (0, l.jsx)(u.Heading, {
                                    variant: "heading-deprecated-12/semibold",
                                    className: v.emojiCounter,
                                    color: "header-secondary",
                                    children: "+".concat(L),
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
                    onClick: w,
                    submitting: Z,
                    autoFocus: !0,
                    children: P.intl.string(P.t["K+WeR0"]),
                  }),
                ],
              }),
            ],
          })
        );
      }
      function y(e) {
        let { guildId: n, channelId: t, messageId: a } = e,
          {
            loading: s,
            unavailable: c,
            guild: o,
          } = (0, r.cj)(
            [N.Z],
            () => ({
              guild: N.Z.getGuild(n),
              loading: N.Z.isFetchingGuild(n),
              unavailable: N.Z.hasFetchFailed(n),
            }),
            [n],
          );
        return (i.useEffect(() => {
          null == o && !s && !c && (0, p.P)(n);
        }, [o, n, s, c]),
        s)
          ? (0, l.jsx)(u.Dialog, {
              "aria-label": P.intl.string(P.t.ZTNur6),
              className: v.guildPopout,
              children: (0, l.jsx)(b, {}),
            })
          : null == o || c
            ? (0, l.jsx)(C, {})
            : (0, l.jsx)(A, { guild: o, channelId: t, messageId: a });
      }
    },
    857395: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return u;
        },
      });
      var l = t(200651),
        i = t(192379),
        a = t(442837),
        s = t(481060),
        r = t(249842),
        c = t(838367),
        o = t(83474);
      function u(e) {
        let { guildId: n, channelId: t, messageId: u, ...d } = e,
          { unavailable: h, guild: m } = (0, a.cj)(
            [c.Z],
            () => ({
              guild: c.Z.getGuild(n),
              unavailable: c.Z.hasFetchFailed(n),
            }),
            [n],
          ),
          g = null != m,
          f = i.useCallback(async () => {
            try {
              !g && (await (0, r.P)(n));
            } catch {}
          }, [g, n]);
        return h
          ? (0, l.jsx)(s.Popout, {
              position: "right",
              renderPopout: (e) => (0, l.jsx)(o.SK, {}),
              ...d,
            })
          : (0, l.jsx)(s.Popout, {
              position: "right",
              preload: f,
              renderPopout: (e) =>
                null == m
                  ? (0, l.jsx)(l.Fragment, {})
                  : (0, l.jsx)(o.sK, {
                      ...e,
                      guild: m,
                      channelId: t,
                      messageId: u,
                    }),
              ...d,
            });
      }
    },
    471253: function (e, n, t) {
      t.d(n, {
        DT: function () {
          return j;
        },
        Ef: function () {
          return S;
        },
        HO: function () {
          return I;
        },
        NZ: function () {
          return b;
        },
        Pq: function () {
          return v;
        },
        Q1: function () {
          return x;
        },
        RK: function () {
          return p;
        },
        _0: function () {
          return T;
        },
        hz: function () {
          return P;
        },
        yi: function () {
          return N;
        },
      });
      var l = t(512722),
        i = t.n(l),
        a = t(149765),
        s = t(544891),
        r = t(493683);
      t(749210);
      var c = t(911969),
        o = t(367907),
        u = t(944486),
        d = t(979651),
        h = t(700785),
        m = t(922482),
        g = t(192079),
        f = t(706058),
        _ = t(590415),
        E = t(981631);
      function x(e, n) {
        let t = e.getGuildId();
        return (
          i()(null != t, "This channel cannot be guildless."),
          n && (0, o.yw)(E.rMx.REQUEST_TO_SPEAK_INITIATED, { ...(0, g.s$)(e) }),
          s.tn.patch({
            url: E.ANM.UPDATE_VOICE_STATE(t),
            body: {
              request_to_speak_timestamp: n ? new Date().toISOString() : null,
              channel_id: e.id,
            },
            rejectWithError: !1,
          })
        );
      }
      function T(e, n) {
        let t = e.getGuildId();
        return (
          i()(null != t, "This channel cannot be guildless."),
          s.tn.patch({
            url: E.ANM.UPDATE_VOICE_STATE(t, n),
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
        let a = d.Z.getVoiceStateForChannel(e.id);
        return (
          (0, _.gf)(a) === _.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK &&
            !n &&
            (0, o.yw)(E.rMx.PROMOTED_TO_SPEAKER, { ...(0, g.s$)(e) }),
          s.tn.patch({
            url: E.ANM.UPDATE_VOICE_STATE(l),
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
      function N(e) {
        let n = null == e ? void 0 : e.getGuildId();
        return (
          i()(null != n, "This channel cannot be guildless."),
          s.tn.patch({
            url: E.ANM.UPDATE_VOICE_STATE(n),
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
      function j(e, n, t) {
        let l = e.getGuildId();
        return (
          i()(null != l, "This channel cannot be guildless."),
          s.tn.patch({
            url: E.ANM.UPDATE_VOICE_STATE(l, n),
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
          j(n, e.id, !0),
          s.tn.patch({
            url: E.ANM.UPDATE_VOICE_STATE(t, e.id),
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
      function v(e, n, t) {
        let l = e.getGuildId();
        i()(null != l, "Channel cannot be guildless");
        let s = e.permissionOverwrites[l],
          o = { id: l, type: c.BN.ROLE, allow: h.Hn, deny: h.Hn, ...s };
        t
          ? ((o.allow = a.IH(o.allow, n)), (o.deny = a.Od(o.deny, n)))
          : ((o.allow = a.Od(o.allow, n)), (o.deny = a.IH(o.deny, n))),
          r.Z.updatePermissionOverwrite(e.id, o);
      }
      async function I(e, n, t, l) {
        if ("" === n) return;
        u.Z.getVoiceChannelId() !== e.id && (0, m.TM)(e);
        let i = await (0, f.me)(e.id, n, t, l);
        return p(e, !1, !0), i;
      }
      async function S(e, n, t) {
        if ("" !== n) return await (0, f.Dk)(e.id, n, t);
      }
      async function b(e) {
        await (0, f.Ix)(e.id);
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
        a = t(700785),
        s = t(427679),
        r = t(157925),
        c = t(981631),
        o = t(71080),
        u = t(388032);
      function d(e, n, t, l) {
        let a = n[0],
          s = i.ZP.getName(e, t, a),
          r = null != l ? l : n.length;
        return 1 === r && null != a
          ? s
          : null == a
            ? u.intl.formatToPlainString(u.t.chmM9P, { count: r })
            : u.intl.formatToPlainString(u.t.GhkJ29, { name: s, count: r - 1 });
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
        let n = s.Z.getStageInstanceByChannel(e.id);
        return {
          channel_id: e.id,
          guild_id: e.guild_id,
          topic: null == n ? void 0 : n.topic,
          media_session_id: l.Z.getMediaSessionId(),
          request_to_speak_state: a.Uu(c.Plq.REQUEST_TO_SPEAK, e)
            ? r.BM.EVERYONE
            : r.BM.NO_ONE,
          stage_instance_id: null == n ? void 0 : n.id,
        };
      }
    },
    706058: function (e, n, t) {
      t.d(n, {
        Dk: function () {
          return s;
        },
        Ix: function () {
          return r;
        },
        me: function () {
          return a;
        },
      });
      var l = t(544891),
        i = t(981631);
      async function a(e, n, t, a, s) {
        return (
          await l.tn.post({
            url: i.ANM.STAGE_INSTANCES,
            body: {
              channel_id: e,
              topic: n,
              privacy_level: t,
              guild_scheduled_event_id: s,
              send_start_notification: a,
            },
            rejectWithError: !1,
          })
        ).body;
      }
      async function s(e, n, t) {
        return (
          await l.tn.patch({
            url: i.ANM.STAGE_INSTANCE(e),
            body: { topic: n, privacy_level: t },
            rejectWithError: !1,
          })
        ).body;
      }
      function r(e) {
        return l.tn.del({ url: i.ANM.STAGE_INSTANCE(e), rejectWithError: !1 });
      }
    },
  },
]);
//# sourceMappingURL=f9e5da32d23edb854eed.js.map
