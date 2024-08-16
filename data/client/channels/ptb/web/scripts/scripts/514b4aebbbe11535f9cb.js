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
        s = t(570140),
        i = t(981631);
      async function a(e) {
        s.Z.dispatch({ type: "GUILD_POPOUT_FETCH_START", guildId: e });
        try {
          let n = await l.tn.get({
            url: i.ANM.GUILD_PREVIEW(e),
            oldFormErrors: !0,
          });
          s.Z.dispatch({
            type: "GUILD_POPOUT_FETCH_SUCCESS",
            guildId: e,
            guild: n.body,
          });
        } catch (n) {
          s.Z.dispatch({ type: "GUILD_POPOUT_FETCH_FAILURE", guildId: e });
        }
      }
    },
    838367: function (e, n, t) {
      var l,
        s,
        i,
        a,
        r,
        d,
        u = t(442837),
        c = t(570140),
        o = t(314897),
        h = t(900849);
      ((l = r || (r = {})).UNSET = "unset"),
        (l.FETCHING = "fetching"),
        (l.FAILED = "failed"),
        (l.SUCCEEDED = "succeeded");
      let _ = {};
      class m extends (d = u.ZP.Store) {
        initialize() {
          this.waitFor(o.default);
        }
        isFetchingGuild(e) {
          let n = _[e];
          return null != n && "fetching" === n.fetchState;
        }
        getGuild(e) {
          let n = _[e];
          return null != n ? n.guild : null;
        }
        hasFetchFailed(e) {
          let n = _[e];
          return null != n && "failed" === n.fetchState;
        }
      }
      (a = "GuildPopoutStore"),
        (i = "displayName") in (s = m)
          ? Object.defineProperty(s, i, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (s[i] = a),
        (n.Z = new m(c.Z, {
          GUILD_POPOUT_FETCH_START: function (e) {
            let { guildId: n } = e;
            _[n] = { ..._[n], fetchState: "fetching" };
          },
          GUILD_POPOUT_FETCH_SUCCESS: function (e) {
            let { guildId: n, guild: t } = e,
              l = (0, h.PP)(t);
            _[n] = { ..._[n], guild: l, fetchState: "succeeded" };
          },
          GUILD_POPOUT_FETCH_FAILURE: function (e) {
            let { guildId: n } = e;
            _[n] = { ..._[n], fetchState: "failed" };
          },
        }));
    },
    83474: function (e, n, t) {
      t.d(n, {
        SK: function () {
          return j;
        },
        ZP: function () {
          return b;
        },
        sK: function () {
          return M;
        },
      }),
        t(47120);
      var l = t(735250),
        s = t(470079),
        i = t(120356),
        a = t.n(i),
        r = t(442837),
        d = t(692547),
        u = t(780384),
        c = t(481060),
        o = t(410030),
        h = t(686546),
        _ = t(372769),
        m = t(134432),
        E = t(703656),
        g = t(314897),
        N = t(271383),
        T = t(768581),
        f = t(900849),
        I = t(249842),
        S = t(838367),
        P = t(981631),
        x = t(689938),
        A = t(771370),
        p = t(892561),
        O = t(494536);
      function v() {
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)("div", { className: A.splashPlaceholder }),
            (0, l.jsxs)("div", {
              className: a()(A.body, A.hasSplash),
              children: [
                (0, l.jsx)("div", { className: A.iconPlaceholder }),
                (0, l.jsx)("div", {
                  className: A.__invalid_headerText,
                  children: (0, l.jsx)("div", { className: A.namePlaceholder }),
                }),
                (0, l.jsxs)("div", {
                  className: A.memberInfo,
                  children: [
                    (0, l.jsx)("div", {
                      className: A.memberCount,
                      children: (0, l.jsx)("div", {
                        className: A.memberInfoPlaceholder,
                      }),
                    }),
                    (0, l.jsx)("div", {
                      className: A.memberCount,
                      children: (0, l.jsx)("div", {
                        className: A.memberInfoPlaceholder,
                      }),
                    }),
                  ],
                }),
                (0, l.jsx)("div", { className: A.viewButtonPlaceholder }),
              ],
            }),
          ],
        });
      }
      function j() {
        let e = (0, o.ZP)();
        return (0, l.jsx)(c.Dialog, {
          "aria-label": x.Z.Messages.GUILD_UNAVAILABLE_HEADER,
          className: A.guildPopout,
          children: (0, l.jsxs)("div", {
            className: A.body,
            children: [
              (0, l.jsx)("img", {
                src: (0, u.wj)(e) ? p : O,
                className: A.unavailableIcon,
                width: 80,
                height: 80,
                alt: "",
              }),
              (0, l.jsx)(c.Heading, {
                className: A.unavailableHeader,
                variant: "heading-md/semibold",
                children: x.Z.Messages.GUILD_POPOUT_UNAVAILABLE_HEADER,
              }),
              (0, l.jsx)(c.Text, {
                variant: "text-sm/normal",
                children: x.Z.Messages.GUILD_POPOUT_UNAVAILABLE_FLAVOR,
              }),
            ],
          }),
        });
      }
      function M(e) {
        var n, t;
        let { guild: i, channelId: u, messageId: o } = e,
          {
            name: I,
            id: S,
            discoverySplash: p,
            icon: O,
            description: v,
            presenceCount: j,
            memberCount: M,
            emojis: b,
          } = i,
          C = (0, r.e7)([g.default], () => g.default.getId()),
          R = (0, r.e7)([N.ZP], () => N.ZP.isMember(S, C), [S, C]),
          [U, D] = s.useState(!1),
          Z = (e) => {
            if ((e.stopPropagation(), R)) (0, E.XU)(S, u, o);
            else {
              let e = {
                page: P.ZY5.GUILD_CHANNEL,
                section: P.jXE.GUILD_POPOUT,
                object: P.qAy.CARD,
              };
              (0, f.Ub)(S, e);
            }
            D(!0);
          },
          L = T.ZP.getGuildDiscoverySplashURL({
            id: S,
            splash: p,
            size: 250 * (0, m.x_)(),
          }),
          y =
            null !== (n = T.ZP.getGuildIconURL({ id: S, icon: O, size: 80 })) &&
            void 0 !== n
              ? n
              : void 0,
          G = b,
          w = null;
        return (
          null != G &&
            G.length > 6 &&
            null != b &&
            ((G =
              null !==
                (t =
                  null == b
                    ? void 0
                    : b.slice(
                        Math.max((null == b ? void 0 : b.length) - 6, 0),
                      )) && void 0 !== t
                ? t
                : []),
            (w = b.length - 6)),
          (0, l.jsxs)(c.Dialog, {
            "aria-label": I,
            className: A.guildPopout,
            children: [
              null != L
                ? (0, l.jsx)("img", {
                    src: L,
                    alt: "",
                    className: A.splashImage,
                  })
                : null,
              (0, l.jsxs)("div", {
                className: a()(A.body, { [A.hasSplash]: null != L }),
                children: [
                  (0, l.jsx)("div", {
                    className: a()({ [A.iconWithSplash]: null != L }),
                    children: (0, l.jsx)(c.Clickable, {
                      onClick: Z,
                      children: (0, l.jsx)(h.ZP, {
                        mask: h.ZP.Masks.SQUIRCLE,
                        width: 88,
                        height: 88,
                        children: (0, l.jsx)("div", {
                          className: A.iconMask,
                          children: (0, l.jsx)(h.ZP, {
                            mask: h.ZP.Masks.SQUIRCLE,
                            width: 80,
                            height: 80,
                            children: (0, l.jsx)("img", {
                              src: y,
                              alt: "",
                              className: A.avatar,
                            }),
                          }),
                        }),
                      }),
                    }),
                  }),
                  null != I
                    ? (0, l.jsxs)("div", {
                        className: A.guildNameWrapper,
                        children: [
                          (0, l.jsx)(_.Z, {
                            className: A.badge,
                            guild: i,
                            tooltipPosition: "top",
                            tooltipColor: c.Tooltip.Colors.PRIMARY,
                            badgeColor: d.Z.unsafe_rawColors.PRIMARY_500.css,
                          }),
                          (0, l.jsx)(c.Text, {
                            variant: "text-md/semibold",
                            className: A.guildName,
                            children: I,
                          }),
                        ],
                      })
                    : null,
                  null != v
                    ? (0, l.jsx)(c.Text, {
                        color: "header-secondary",
                        className: A.description,
                        variant: "text-sm/normal",
                        children: v,
                      })
                    : null,
                  (0, l.jsxs)("div", {
                    className: A.memberInfo,
                    children: [
                      null != j
                        ? (0, l.jsxs)("div", {
                            className: A.memberCount,
                            children: [
                              (0, l.jsx)("div", { className: A.dotOnline }),
                              (0, l.jsx)(c.Text, {
                                variant: "text-xs/normal",
                                className: A.memberText,
                                children:
                                  x.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format(
                                    { membersOnline: j },
                                  ),
                              }),
                            ],
                          })
                        : null,
                      null != M
                        ? (0, l.jsxs)("div", {
                            className: A.memberCount,
                            children: [
                              (0, l.jsx)("div", { className: A.dotOffline }),
                              (0, l.jsx)(c.Text, {
                                variant: "text-xs/normal",
                                className: A.memberText,
                                children:
                                  x.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format(
                                    { count: M },
                                  ),
                              }),
                            ],
                          })
                        : null,
                    ],
                  }),
                ],
              }),
              (0, l.jsxs)("div", {
                className: A.footer,
                children: [
                  null != G && G.length > 0
                    ? (0, l.jsxs)(l.Fragment, {
                        children: [
                          (0, l.jsx)(c.Heading, {
                            variant: "heading-deprecated-12/semibold",
                            className: A.emojiHeader,
                            color: "header-secondary",
                            children: x.Z.Messages.SERVER_EMOJI,
                          }),
                          (0, l.jsxs)("div", {
                            className: a()(A.emojiContainer, {
                              [A.withCounter]: null != w,
                            }),
                            children: [
                              G.map((e) => {
                                let n = T.ZP.getEmojiURL({
                                  id: e.id,
                                  animated: !1,
                                  size: 24,
                                });
                                return (0, l.jsx)(
                                  c.Tooltip,
                                  {
                                    text: ":".concat(e.name, ":"),
                                    children: (e) =>
                                      (0, l.jsx)("img", {
                                        ...e,
                                        width: 24,
                                        height: 24,
                                        src: n,
                                        className: a()({
                                          [A.emoji]: null == w,
                                        }),
                                        alt: "",
                                      }),
                                  },
                                  e.id,
                                );
                              }),
                              null != w
                                ? (0, l.jsx)(c.Heading, {
                                    variant: "heading-deprecated-12/semibold",
                                    className: A.emojiCounter,
                                    color: "header-secondary",
                                    children: "+".concat(w),
                                  })
                                : null,
                            ],
                          }),
                        ],
                      })
                    : null,
                  (0, l.jsx)(c.Button, {
                    look: c.Button.Looks.FILLED,
                    color: c.Button.Colors.BRAND,
                    size: c.Button.Sizes.SMALL,
                    onClick: Z,
                    submitting: U,
                    autoFocus: !0,
                    children: x.Z.Messages.GUILD_POPOUT_VIEW_SERVER_BUTTON,
                  }),
                ],
              }),
            ],
          })
        );
      }
      function b(e) {
        let { guildId: n, channelId: t, messageId: i } = e,
          {
            loading: a,
            unavailable: d,
            guild: u,
          } = (0, r.cj)(
            [S.Z],
            () => ({
              guild: S.Z.getGuild(n),
              loading: S.Z.isFetchingGuild(n),
              unavailable: S.Z.hasFetchFailed(n),
            }),
            [n],
          );
        return (s.useEffect(() => {
          null == u && !a && !d && (0, I.P)(n);
        }, [u, n, a, d]),
        a)
          ? (0, l.jsx)(c.Dialog, {
              "aria-label": x.Z.Messages.LOADING,
              className: A.guildPopout,
              children: (0, l.jsx)(v, {}),
            })
          : null == u || d
            ? (0, l.jsx)(j, {})
            : (0, l.jsx)(M, { guild: u, channelId: t, messageId: i });
      }
    },
    857395: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return c;
        },
      });
      var l = t(735250),
        s = t(470079),
        i = t(442837),
        a = t(481060),
        r = t(249842),
        d = t(838367),
        u = t(83474);
      function c(e) {
        let { guildId: n, channelId: t, messageId: c, ...o } = e,
          { unavailable: h, guild: _ } = (0, i.cj)(
            [d.Z],
            () => ({
              guild: d.Z.getGuild(n),
              unavailable: d.Z.hasFetchFailed(n),
            }),
            [n],
          ),
          m = null != _,
          E = s.useCallback(async () => {
            try {
              !m && (await (0, r.P)(n));
            } catch {}
          }, [m, n]);
        return h
          ? (0, l.jsx)(a.Popout, {
              position: "right",
              renderPopout: (e) => (0, l.jsx)(u.SK, {}),
              ...o,
            })
          : (0, l.jsx)(a.Popout, {
              position: "right",
              preload: E,
              renderPopout: (e) =>
                null == _
                  ? (0, l.jsx)(l.Fragment, {})
                  : (0, l.jsx)(u.sK, {
                      ...e,
                      guild: _,
                      channelId: t,
                      messageId: c,
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
          return O;
        },
        HO: function () {
          return p;
        },
        NZ: function () {
          return v;
        },
        Pq: function () {
          return A;
        },
        Q1: function () {
          return T;
        },
        RK: function () {
          return I;
        },
        _0: function () {
          return f;
        },
        hz: function () {
          return x;
        },
        yi: function () {
          return S;
        },
      });
      var l = t(512722),
        s = t.n(l),
        i = t(149765),
        a = t(544891),
        r = t(493683);
      t(749210);
      var d = t(911969),
        u = t(367907),
        c = t(944486),
        o = t(979651),
        h = t(700785),
        _ = t(922482),
        m = t(192079),
        E = t(706058),
        g = t(590415),
        N = t(981631);
      function T(e, n) {
        let t = e.getGuildId();
        return (
          s()(null != t, "This channel cannot be guildless."),
          n && (0, u.yw)(N.rMx.REQUEST_TO_SPEAK_INITIATED, { ...(0, m.s$)(e) }),
          a.tn.patch({
            url: N.ANM.UPDATE_VOICE_STATE(t),
            body: {
              request_to_speak_timestamp: n ? new Date().toISOString() : null,
              channel_id: e.id,
            },
          })
        );
      }
      function f(e, n) {
        let t = e.getGuildId();
        return (
          s()(null != t, "This channel cannot be guildless."),
          a.tn.patch({
            url: N.ANM.UPDATE_VOICE_STATE(t, n),
            body: {
              suppress: !1,
              request_to_speak_timestamp: new Date().toISOString(),
              channel_id: e.id,
            },
          })
        );
      }
      function I(e, n) {
        let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          l = null == e ? void 0 : e.getGuildId();
        s()(null != l, "This channel cannot be guildless.");
        let i = o.Z.getVoiceStateForChannel(e.id);
        return (
          (0, g.gf)(i) === g.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK &&
            !n &&
            (0, u.yw)(N.rMx.PROMOTED_TO_SPEAKER, { ...(0, m.s$)(e) }),
          a.tn.patch({
            url: N.ANM.UPDATE_VOICE_STATE(l),
            body: {
              suppress: n,
              request_to_speak_timestamp: null,
              channel_id: e.id,
              ...(t ? { silent: t } : {}),
            },
          })
        );
      }
      function S(e) {
        let n = null == e ? void 0 : e.getGuildId();
        return (
          s()(null != n, "This channel cannot be guildless."),
          a.tn.patch({
            url: N.ANM.UPDATE_VOICE_STATE(n),
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
          s()(null != l, "This channel cannot be guildless."),
          a.tn.patch({
            url: N.ANM.UPDATE_VOICE_STATE(l, n),
            body: { suppress: t, channel_id: e.id },
          })
        );
      }
      function x(e, n) {
        if (null == n || null == e) return;
        let t = n.getGuildId();
        return (
          s()(null != t, "This channel cannot be guildless."),
          P(n, e.id, !0),
          a.tn.patch({
            url: N.ANM.UPDATE_VOICE_STATE(t, e.id),
            body: {
              suppress: !0,
              channel_id: n.id,
              self_video: !1,
              self_stream: !1,
            },
          })
        );
      }
      function A(e, n, t) {
        let l = e.getGuildId();
        s()(null != l, "Channel cannot be guildless");
        let a = e.permissionOverwrites[l],
          u = { id: l, type: d.BN.ROLE, allow: h.Hn, deny: h.Hn, ...a };
        t
          ? ((u.allow = i.IH(u.allow, n)), (u.deny = i.Od(u.deny, n)))
          : ((u.allow = i.Od(u.allow, n)), (u.deny = i.IH(u.deny, n))),
          r.Z.updatePermissionOverwrite(e.id, u);
      }
      async function p(e, n, t, l) {
        if ("" === n) return;
        c.Z.getVoiceChannelId() !== e.id && (0, _.TM)(e);
        let s = await (0, E.me)(e.id, n, t, l);
        return I(e, !1, !0), s;
      }
      async function O(e, n, t) {
        if ("" !== n) return await (0, E.Dk)(e.id, n, t);
      }
      async function v(e) {
        await (0, E.Ix)(e.id);
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
          return _;
        },
      }),
        t(724458),
        t(47120),
        t(392711);
      var l = t(19780),
        s = t(5192),
        i = t(700785),
        a = t(427679),
        r = t(157925),
        d = t(981631),
        u = t(71080),
        c = t(689938);
      function o(e, n, t, l) {
        let i = n[0],
          a = s.ZP.getName(e, t, i),
          r = null != l ? l : n.length;
        return 1 === r && null != i
          ? a
          : null == i
            ? c.Z.Messages.SPEAKING_COUNT.format({ count: r })
            : c.Z.Messages.USER_SUMMARY_WITH_OTHERS.format({
                name: a,
                count: r - 1,
              });
      }
      function h(e, n) {
        switch (e) {
          case u.aC.OWNER:
            return c.Z.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_OWNER;
          case u.aC.ADMINISTRATOR:
            return c.Z.Messages
              .CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_ADMINISTRATOR;
          case u.aC.MEMBER:
          case u.aC.ROLE:
            return n
              ? c.Z.Messages.CHANNEL_PERMISSIONS_CANNOT_REMOVE_PERMISSIONS
              : c.Z.Messages.CHANNEL_PERMISSIONS_REMOVE_MODERATOR_TOOLTIP;
          case u.aC.EMPTY_STATE:
        }
        return null;
      }
      function _(e) {
        let n = a.Z.getStageInstanceByChannel(e.id);
        return {
          channel_id: e.id,
          guild_id: e.guild_id,
          topic: null == n ? void 0 : n.topic,
          media_session_id: l.Z.getMediaSessionId(),
          request_to_speak_state: i.Uu(d.Plq.REQUEST_TO_SPEAK, e)
            ? r.BM.EVERYONE
            : r.BM.NO_ONE,
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
          return r;
        },
        me: function () {
          return i;
        },
      });
      var l = t(544891),
        s = t(981631);
      async function i(e, n, t, i, a) {
        return (
          await l.tn.post({
            url: s.ANM.STAGE_INSTANCES,
            body: {
              channel_id: e,
              topic: n,
              privacy_level: t,
              guild_scheduled_event_id: a,
              send_start_notification: i,
            },
          })
        ).body;
      }
      async function a(e, n, t) {
        return (
          await l.tn.patch({
            url: s.ANM.STAGE_INSTANCE(e),
            body: { topic: n, privacy_level: t },
          })
        ).body;
      }
      function r(e) {
        return l.tn.del(s.ANM.STAGE_INSTANCE(e));
      }
    },
  },
]);
//# sourceMappingURL=514b4aebbbe11535f9cb.js.map
