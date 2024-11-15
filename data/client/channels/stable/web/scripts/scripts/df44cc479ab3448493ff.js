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
        u = t(442837),
        d = t(570140),
        o = t(314897),
        h = t(900849);
      ((l = r || (r = {})).UNSET = "unset"),
        (l.FETCHING = "fetching"),
        (l.FAILED = "failed"),
        (l.SUCCEEDED = "succeeded");
      let m = {};
      class g extends (c = u.ZP.Store) {
        initialize() {
          this.waitFor(o.default);
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
        (n.Z = new g(d.Z, {
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
        u = t(780384),
        d = t(481060),
        o = t(410030),
        h = t(686546),
        m = t(372769),
        g = t(134432),
        f = t(703656),
        _ = t(314897),
        x = t(271383),
        T = t(768581),
        p = t(900849),
        E = t(249842),
        N = t(838367),
        P = t(981631),
        v = t(388032),
        j = t(846610),
        I = t(892561),
        S = t(494536);
      function b() {
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)("div", { className: j.splashPlaceholder }),
            (0, l.jsxs)("div", {
              className: s()(j.body, j.hasSplash),
              children: [
                (0, l.jsx)("div", { className: j.iconPlaceholder }),
                (0, l.jsx)("div", {
                  className: j.__invalid_headerText,
                  children: (0, l.jsx)("div", { className: j.namePlaceholder }),
                }),
                (0, l.jsxs)("div", {
                  className: j.memberInfo,
                  children: [
                    (0, l.jsx)("div", {
                      className: j.memberCount,
                      children: (0, l.jsx)("div", {
                        className: j.memberInfoPlaceholder,
                      }),
                    }),
                    (0, l.jsx)("div", {
                      className: j.memberCount,
                      children: (0, l.jsx)("div", {
                        className: j.memberInfoPlaceholder,
                      }),
                    }),
                  ],
                }),
                (0, l.jsx)("div", { className: j.viewButtonPlaceholder }),
              ],
            }),
          ],
        });
      }
      function C() {
        let e = (0, o.ZP)();
        return (0, l.jsx)(d.Dialog, {
          "aria-label": v.intl.string(v.t["8LKcho"]),
          className: j.guildPopout,
          children: (0, l.jsxs)("div", {
            className: j.body,
            children: [
              (0, l.jsx)("img", {
                src: (0, u.wj)(e) ? I : S,
                className: j.unavailableIcon,
                width: 80,
                height: 80,
                alt: "",
              }),
              (0, l.jsx)(d.Heading, {
                className: j.unavailableHeader,
                variant: "heading-md/semibold",
                children: v.intl.string(v.t["+kdPHx"]),
              }),
              (0, l.jsx)(d.Text, {
                variant: "text-sm/normal",
                children: v.intl.string(v.t["Yn1+xs"]),
              }),
            ],
          }),
        });
      }
      function A(e) {
        var n, t;
        let { guild: a, channelId: u, messageId: o } = e,
          {
            name: E,
            id: N,
            discoverySplash: I,
            icon: S,
            description: b,
            presenceCount: C,
            memberCount: A,
            emojis: y,
          } = a,
          O = (0, r.e7)([_.default], () => _.default.getId()),
          U = (0, r.e7)([x.ZP], () => x.ZP.isMember(N, O), [N, O]),
          [Z, D] = i.useState(!1),
          w = (e) => {
            if ((e.stopPropagation(), U)) (0, f.XU)(N, u, o);
            else {
              let e = {
                page: P.ZY5.GUILD_CHANNEL,
                section: P.jXE.GUILD_POPOUT,
                object: P.qAy.CARD,
              };
              (0, p.Ub)(N, e);
            }
            D(!0);
          },
          R = T.ZP.getGuildDiscoverySplashURL({
            id: N,
            splash: I,
            size: 250 * (0, g.x_)(),
          }),
          G =
            null !== (n = T.ZP.getGuildIconURL({ id: N, icon: S, size: 80 })) &&
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
          (0, l.jsxs)(d.Dialog, {
            "aria-label": E,
            className: j.guildPopout,
            children: [
              null != R
                ? (0, l.jsx)("img", {
                    src: R,
                    alt: "",
                    className: j.splashImage,
                  })
                : null,
              (0, l.jsxs)("div", {
                className: s()(j.body, { [j.hasSplash]: null != R }),
                children: [
                  (0, l.jsx)("div", {
                    className: s()({ [j.iconWithSplash]: null != R }),
                    children: (0, l.jsx)(d.Clickable, {
                      onClick: w,
                      children: (0, l.jsx)(h.ZP, {
                        mask: h.ZP.Masks.SQUIRCLE,
                        width: 88,
                        height: 88,
                        children: (0, l.jsx)("div", {
                          className: j.iconMask,
                          children: (0, l.jsx)(h.ZP, {
                            mask: h.ZP.Masks.SQUIRCLE,
                            width: 80,
                            height: 80,
                            children: (0, l.jsx)("img", {
                              src: G,
                              alt: "",
                              className: j.avatar,
                            }),
                          }),
                        }),
                      }),
                    }),
                  }),
                  null != E
                    ? (0, l.jsxs)("div", {
                        className: j.guildNameWrapper,
                        children: [
                          (0, l.jsx)(m.Z, {
                            className: j.badge,
                            guild: a,
                            tooltipPosition: "top",
                            tooltipColor: d.Tooltip.Colors.PRIMARY,
                            badgeColor: c.Z.unsafe_rawColors.PRIMARY_500.css,
                          }),
                          (0, l.jsx)(d.Text, {
                            variant: "text-md/semibold",
                            className: j.guildName,
                            children: E,
                          }),
                        ],
                      })
                    : null,
                  null != b
                    ? (0, l.jsx)(d.Text, {
                        color: "header-secondary",
                        className: j.description,
                        variant: "text-sm/normal",
                        children: b,
                      })
                    : null,
                  (0, l.jsxs)("div", {
                    className: j.memberInfo,
                    children: [
                      null != C
                        ? (0, l.jsxs)("div", {
                            className: j.memberCount,
                            children: [
                              (0, l.jsx)("div", { className: j.dotOnline }),
                              (0, l.jsx)(d.Text, {
                                variant: "text-xs/normal",
                                className: j.memberText,
                                children: v.intl.format(v.t["LC+S+v"], {
                                  membersOnline: C,
                                }),
                              }),
                            ],
                          })
                        : null,
                      null != A
                        ? (0, l.jsxs)("div", {
                            className: j.memberCount,
                            children: [
                              (0, l.jsx)("div", { className: j.dotOffline }),
                              (0, l.jsx)(d.Text, {
                                variant: "text-xs/normal",
                                className: j.memberText,
                                children: v.intl.format(v.t.zRl6XV, {
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
                className: j.footer,
                children: [
                  null != M && M.length > 0
                    ? (0, l.jsxs)(l.Fragment, {
                        children: [
                          (0, l.jsx)(d.Heading, {
                            variant: "heading-deprecated-12/semibold",
                            className: j.emojiHeader,
                            color: "header-secondary",
                            children: v.intl.string(v.t.Q60n1N),
                          }),
                          (0, l.jsxs)("div", {
                            className: s()(j.emojiContainer, {
                              [j.withCounter]: null != L,
                            }),
                            children: [
                              M.map((e) => {
                                let n = T.ZP.getEmojiURL({
                                  id: e.id,
                                  animated: !1,
                                  size: 24,
                                });
                                return (0, l.jsx)(
                                  d.Tooltip,
                                  {
                                    text: ":".concat(e.name, ":"),
                                    children: (e) =>
                                      (0, l.jsx)("img", {
                                        ...e,
                                        width: 24,
                                        height: 24,
                                        src: n,
                                        className: s()({
                                          [j.emoji]: null == L,
                                        }),
                                        alt: "",
                                      }),
                                  },
                                  e.id,
                                );
                              }),
                              null != L
                                ? (0, l.jsx)(d.Heading, {
                                    variant: "heading-deprecated-12/semibold",
                                    className: j.emojiCounter,
                                    color: "header-secondary",
                                    children: "+".concat(L),
                                  })
                                : null,
                            ],
                          }),
                        ],
                      })
                    : null,
                  (0, l.jsx)(d.Button, {
                    look: d.Button.Looks.FILLED,
                    color: d.Button.Colors.BRAND,
                    size: d.Button.Sizes.SMALL,
                    onClick: w,
                    submitting: Z,
                    autoFocus: !0,
                    children: v.intl.string(v.t["K+WeR0"]),
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
            guild: u,
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
          null == u && !s && !c && (0, E.P)(n);
        }, [u, n, s, c]),
        s)
          ? (0, l.jsx)(d.Dialog, {
              "aria-label": v.intl.string(v.t.ZTNur6),
              className: j.guildPopout,
              children: (0, l.jsx)(b, {}),
            })
          : null == u || c
            ? (0, l.jsx)(C, {})
            : (0, l.jsx)(A, { guild: u, channelId: t, messageId: a });
      }
    },
    857395: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return d;
        },
      });
      var l = t(200651),
        i = t(192379),
        a = t(442837),
        s = t(481060),
        r = t(249842),
        c = t(838367),
        u = t(83474);
      function d(e) {
        let { guildId: n, channelId: t, messageId: d, ...o } = e,
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
              renderPopout: (e) => (0, l.jsx)(u.SK, {}),
              ...o,
            })
          : (0, l.jsx)(s.Popout, {
              position: "right",
              preload: f,
              renderPopout: (e) =>
                null == m
                  ? (0, l.jsx)(l.Fragment, {})
                  : (0, l.jsx)(u.sK, {
                      ...e,
                      guild: m,
                      channelId: t,
                      messageId: d,
                    }),
              ...o,
            });
      }
    },
    471253: function (e, n, t) {
      t.d(n, {
        DT: function () {
          return P;
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
          return j;
        },
        Q1: function () {
          return T;
        },
        RK: function () {
          return E;
        },
        _0: function () {
          return p;
        },
        hz: function () {
          return v;
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
        u = t(367907),
        d = t(944486),
        o = t(979651),
        h = t(700785),
        m = t(922482),
        g = t(192079),
        f = t(706058),
        _ = t(590415),
        x = t(981631);
      function T(e, n) {
        let t = e.getGuildId();
        return (
          i()(null != t, "This channel cannot be guildless."),
          n && (0, u.yw)(x.rMx.REQUEST_TO_SPEAK_INITIATED, { ...(0, g.s$)(e) }),
          s.tn.patch({
            url: x.ANM.UPDATE_VOICE_STATE(t),
            body: {
              request_to_speak_timestamp: n ? new Date().toISOString() : null,
              channel_id: e.id,
            },
          })
        );
      }
      function p(e, n) {
        let t = e.getGuildId();
        return (
          i()(null != t, "This channel cannot be guildless."),
          s.tn.patch({
            url: x.ANM.UPDATE_VOICE_STATE(t, n),
            body: {
              suppress: !1,
              request_to_speak_timestamp: new Date().toISOString(),
              channel_id: e.id,
            },
          })
        );
      }
      function E(e, n) {
        let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          l = null == e ? void 0 : e.getGuildId();
        i()(null != l, "This channel cannot be guildless.");
        let a = o.Z.getVoiceStateForChannel(e.id);
        return (
          (0, _.gf)(a) === _.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK &&
            !n &&
            (0, u.yw)(x.rMx.PROMOTED_TO_SPEAKER, { ...(0, g.s$)(e) }),
          s.tn.patch({
            url: x.ANM.UPDATE_VOICE_STATE(l),
            body: {
              suppress: n,
              request_to_speak_timestamp: null,
              channel_id: e.id,
              ...(t ? { silent: t } : {}),
            },
          })
        );
      }
      function N(e) {
        let n = null == e ? void 0 : e.getGuildId();
        return (
          i()(null != n, "This channel cannot be guildless."),
          s.tn.patch({
            url: x.ANM.UPDATE_VOICE_STATE(n),
            body: {
              suppress: !0,
              channel_id: e.id,
              self_video: !1,
              self_stream: !1,
            },
          })
        );
      }
      function P(e, n, t) {
        let l = e.getGuildId();
        return (
          i()(null != l, "This channel cannot be guildless."),
          s.tn.patch({
            url: x.ANM.UPDATE_VOICE_STATE(l, n),
            body: { suppress: t, channel_id: e.id },
          })
        );
      }
      function v(e, n) {
        if (null == n || null == e) return;
        let t = n.getGuildId();
        return (
          i()(null != t, "This channel cannot be guildless."),
          P(n, e.id, !0),
          s.tn.patch({
            url: x.ANM.UPDATE_VOICE_STATE(t, e.id),
            body: {
              suppress: !0,
              channel_id: n.id,
              self_video: !1,
              self_stream: !1,
            },
          })
        );
      }
      function j(e, n, t) {
        let l = e.getGuildId();
        i()(null != l, "Channel cannot be guildless");
        let s = e.permissionOverwrites[l],
          u = { id: l, type: c.BN.ROLE, allow: h.Hn, deny: h.Hn, ...s };
        t
          ? ((u.allow = a.IH(u.allow, n)), (u.deny = a.Od(u.deny, n)))
          : ((u.allow = a.Od(u.allow, n)), (u.deny = a.IH(u.deny, n))),
          r.Z.updatePermissionOverwrite(e.id, u);
      }
      async function I(e, n, t, l) {
        if ("" === n) return;
        d.Z.getVoiceChannelId() !== e.id && (0, m.TM)(e);
        let i = await (0, f.me)(e.id, n, t, l);
        return E(e, !1, !0), i;
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
          return o;
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
        u = t(71080),
        d = t(388032);
      function o(e, n, t, l) {
        let a = n[0],
          s = i.ZP.getName(e, t, a),
          r = null != l ? l : n.length;
        return 1 === r && null != a
          ? s
          : null == a
            ? d.intl.formatToPlainString(d.t.chmM9P, { count: r })
            : d.intl.formatToPlainString(d.t.GhkJ29, { name: s, count: r - 1 });
      }
      function h(e, n) {
        switch (e) {
          case u.aC.OWNER:
            return d.intl.string(d.t.icuNBA);
          case u.aC.ADMINISTRATOR:
            return d.intl.string(d.t.eTmN5e);
          case u.aC.MEMBER:
          case u.aC.ROLE:
            return n ? d.intl.string(d.t.Hw3XW1) : d.intl.string(d.t.YieyPj);
          case u.aC.EMPTY_STATE:
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
          })
        ).body;
      }
      async function s(e, n, t) {
        return (
          await l.tn.patch({
            url: i.ANM.STAGE_INSTANCE(e),
            body: { topic: n, privacy_level: t },
          })
        ).body;
      }
      function r(e) {
        return l.tn.del(i.ANM.STAGE_INSTANCE(e));
      }
    },
  },
]);
//# sourceMappingURL=df44cc479ab3448493ff.js.map
