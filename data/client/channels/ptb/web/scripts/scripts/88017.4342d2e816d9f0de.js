"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["88017"],
  {
    729937(t, n, e) {
      e.d(n, { OH: () => c, ZH: () => d, yb: () => s });
      var i = e(636537),
        l = e(228366),
        r = e(981616),
        a = e(290863),
        u = e(652215);
      function c(t, n) {
        l.h.dispatch({ type: "ACTIVITY_SYNC", activity: t, userId: n });
      }
      function d(t, n) {
        (0, r.LI)(t, n)
          .then((e) =>
            l.h.dispatch({
              type: "ACTIVITY_PLAY",
              activity: t,
              userId: n,
              metadata: e,
            }),
          )
          .catch(() =>
            l.h.dispatch({ type: "ACTIVITY_PLAY", activity: t, userId: n }),
          );
      }
      async function s(t, n) {
        let e = t.metadata;
        if (null != e && Object.keys(e).length > 0) return e;
        let r = a.A.getActivityMetadata(n);
        if (null != r) return r;
        if (null == t.session_id) throw Error("null/undefined session_id");
        let { body: c } = await i.Bo.get({
          url: u.Rsh.USER_ACTIVITY_METADATA(n, t.session_id, t.application_id),
          oldFormErrors: !0,
          rejectWithError: !1,
        });
        return (
          l.h.dispatch({
            type: "ACTIVITY_METADATA_UPDATE",
            metadata: c,
            userId: n,
          }),
          c
        );
      }
    },
    454292(t, n, e) {
      e.d(n, { A: () => i });
      function i(t, n, e) {
        return null == e
          ? null
          : (t.getApplicationActivity(e) ??
              n.getApplicationActivity(e, !0) ??
              n.getHiddenActivities().find((t) => t.application_id === e));
      }
    },
    206589(t, n, e) {
      e.d(n, { w: () => i });
      function i(t, n) {
        return (
          n?.party?.id != null &&
          t?.party?.id != null &&
          t.party.id === n.party.id
        );
      }
    },
    125017(t, n, e) {
      e.d(n, { _: () => i });
      function i(t) {
        if (
          null == t ||
          null == t.party ||
          null == t.party.size ||
          t.party.size.length < 2
        )
          return { partySize: -1, maxPartySize: -1 };
        let [n, e] = t.party.size;
        return { partySize: n, maxPartySize: e };
      }
    },
    908289(t, n, e) {
      e.d(n, { A: () => l });
      var i = e(360469);
      function l(t) {
        if (null != t && null != t.url && i.yz.test(t.url)) return t.url;
      }
    },
    287613(t, n, e) {
      e.d(n, { A: () => i });
      function i(t) {
        let { partySize: n, maxPartySize: e } = t;
        return n > -1 && e > -1;
      }
    },
    874546(t, n, e) {
      e.d(n, { Ay: () => c, _C: () => u });
      var i = e(574381),
        l = e(809733),
        r = e(833349),
        a = e(652215);
      function u(t) {
        return (
          null != t && !!(0, r.A)(t, a.jUm.JOIN) && t.type === a.$pd.PLAYING
        );
      }
      function c(t) {
        if (!u(t)) return !1;
        let n = (0, i.un)()
          ? a.yTV.IOS
          : (0, l.I)()
            ? a.yTV.META_QUEST
            : (0, i.m0)()
              ? a.yTV.ANDROID
              : a.yTV.DESKTOP;
        if ((t?.platform != null ? t.platform : a.yTV.DESKTOP) === n) return !0;
        let e = t?.supported_platforms;
        return null != e && 0 !== e.length && e.includes(n);
      }
    },
    702631(t, n, e) {
      e.d(n, { U: () => i });
      function i(t) {
        let { partySize: n, maxPartySize: e } = t;
        return n > -1 && e > 0 && n >= e;
      }
    },
    714114(t, n, e) {
      e.d(n, { A: () => c });
      var i = e(17928),
        l = e(734057),
        r = e(576705),
        a = e(977997),
        u = e(818348);
      function c(t) {
        let { userId: n, guildId: e } = t,
          c = (0, i.bG)([a.A], () =>
            null != e && null != n
              ? a.A.getDiscoverableVoiceState(e, n)
              : null != n
                ? a.A.getDiscoverableVoiceStateForUser(n)
                : void 0,
          ),
          d = c?.channelId,
          s = (0, i.bG)([l.A], () => {
            if (null != d) return l.A.getChannel(d);
          });
        return (0, i.bG)(
          [r.A],
          () => s?.isPrivate() || r.A.can(u.xB.VIEW_CHANNEL, s),
        )
          ? { voiceState: c, voiceChannel: s }
          : {};
      }
    },
    50268(t, n, e) {
      e.d(n, { A: () => s });
      var i = e(627968);
      e(64700);
      var l = e(284009),
        r = e.n(l),
        a = e(477782),
        u = e(473935),
        c = e(253932),
        d = e(957565);
      function s(t) {
        let {
            id: n,
            label: e,
            onSuccess: l,
            shiftId: s,
            showIconFirst: o,
            showWithoutDeveloperMode: p,
          } = t,
          A = c.Q_.useSetting();
        if (__OVERLAY__ || !(p || A) || !d.p5 || null == n) return null;
        let y = `devmode-copy-id-${n}`;
        return (0, i.jsx)(
          a.Dr,
          {
            id: y,
            label: e,
            action: function (t) {
              let e = null != s && t.shiftKey ? s : n;
              r()(null != e, "cannot copy null text"), (0, d.C)(e, l);
            },
            icon: o ? void 0 : u.L,
            iconLeft: o ? u.L : void 0,
            leadingAccessory: { type: "icon", icon: u.L },
          },
          y,
        );
      }
    },
    285933(t, n, e) {
      e.d(n, { A: () => c });
      var i = e(954571),
        l = e(981616),
        r = e(272984),
        a = e(652215);
      let u = [r.Qp.USER_ACTIVITY_SYNC, r.Qp.EMBED_SYNC];
      function c(t, n, e, r) {
        i.default.track(a.HAw.SPOTIFY_BUTTON_CLICKED, {
          type: t,
          source: r,
          is_premium: (0, l.mD)(),
          party_id: u.includes(t) && e?.party != null ? e.party.id : null,
          other_user_id: n.id,
        });
      }
    },
    227005(t, n, e) {
      e.d(n, { A: () => r });
      var i = e(773952),
        l = e(652215);
      function r(t) {
        return (
          !!t ||
          ((0, i.A)({
            platformType: l.fg2.SPOTIFY,
            location: "Spotify Button",
          }),
          !1)
        );
      }
    },
    286617(t, n, e) {
      e.d(n, { A: () => l });
      var i = e(981616);
      function l(t, n, e, l) {
        let r = t.hasConnectedAccount(),
          a = (0, i.d3)(t),
          u = t.getTrack(),
          c = t.getSyncingWith(),
          d = t.getActivity(),
          s = u?.id ?? d?.sync_id ?? t.getLastPlayedTrackId(),
          o = e.id === n.getId(),
          p = r && !a,
          A = null != s && s === l?.sync_id,
          y = d?.party != null && l?.party?.id === d.party.id,
          f = c?.userId != null && c?.userId === e.id;
        return {
          user: e,
          activity: l,
          hasSpotifyAccount: r,
          canPlaySpotify: a,
          notPlayable: p,
          syncingWithParty: y,
          syncingWithUser: f,
          isCurrentUser: o,
          currentUserTrackId: s,
          playingSameTrack: A,
          playDisabled: o || p || A,
          syncDisabled: o || f || y,
        };
      }
    },
    533207(t, n, e) {
      e.d(n, { A: () => d });
      var i = e(627968);
      e(64700);
      var l = e(192308),
        r = e(729937),
        a = e(981616),
        u = e(285933),
        c = e(227005);
      async function d(t, n, d) {
        let { hasSpotifyAccount: s, activity: o, user: p } = t;
        (0, c.A)(s) &&
          null != o &&
          null != o.sync_id &&
          (await (0, a.dM)(),
          await (0, a.G8)().catch(
            (t) => (
              (0, l.openModalLazy)(async () => {
                let { default: t } = await Promise.all([
                  e.e("73547"),
                  e.e("3371"),
                ]).then(e.bind(e, 990726));
                return (n) => (0, i.jsx)(t, { ...n });
              }),
              Promise.reject(t)
            ),
          ),
          r.OH(o, p.id),
          (0, u.A)(n, p, o, d));
      }
    },
    243949(t, n, e) {
      e.d(n, { A: () => o });
      var i = e(627968);
      e(64700);
      var l = e(477782),
        r = e(688810),
        a = e(267102),
        u = e(183555),
        c = e(975732),
        d = e(652215),
        s = e(985018);
      function o(t) {
        let { label: n, onAction: e, icon: o, ...p } = t,
          { analyticsLocations: A } = (0, r.Ay)(),
          { context: y } = (0, u.NJ)(),
          f = (0, a.aL)(),
          h = (0, a.Us)();
        return (0, i.jsx)(l.Dr, {
          id: "user-profile",
          label: n ?? s.intl.string(s.t.LYju5J),
          action: () => {
            e?.(),
              (0, c.openUserProfileModal)({
                sourceAnalyticsLocations: A,
                appContext: h,
                ...y,
                ...p,
              }),
              f.dispatch(d.jej.POPOUT_CLOSE);
          },
          icon: o,
          leadingAccessory: null != o ? { type: "icon", icon: o } : void 0,
        });
      }
    },
    10862(t, n, e) {
      e.d(n, { A: () => y });
      var i = e(627968);
      e(64700);
      var l = e(17928),
        r = e(978940),
        a = e(808107),
        u = e(451394),
        c = e(512474),
        d = e(146151),
        s = e(983851),
        o = e(148719),
        p = e(576705),
        A = e(818348);
      function y(t) {
        let { channel: n, ...e } = t,
          y = (0, l.bG)([p.A], () => n.isPrivate() || p.A.can(A.xB.CONNECT, n));
        if (n.isDM() || n.isGroupDM()) return (0, i.jsx)(r._, { ...e });
        let f = n.isGuildStageVoice(),
          h = !y || (0, o.A)(n);
        return f && h
          ? (0, i.jsx)(a.D, { ...e })
          : f
            ? (0, i.jsx)(u.q, { ...e })
            : n.isNSFW()
              ? (0, i.jsx)(c.O, { ...e })
              : h
                ? (0, i.jsx)(d.t, { ...e })
                : (0, i.jsx)(s.H, { ...e });
      }
    },
    473935(t, n, e) {
      e.d(n, { L: () => u });
      var i = e(627968);
      e(64700);
      var l = e(661531),
        r = e(996682),
        a = e(27989);
      let u = (t) => {
        let {
            size: n = "md",
            width: e,
            height: u,
            color: c = l.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            ...s
          } = t,
          o = (0, a.J)(n),
          p = o?.width ?? e,
          A = o?.height ?? u;
        return (0, i.jsxs)("svg", {
          ...(0, r.A)(s),
          xmlns: "http://www.w3.org/2000/svg",
          width: p,
          height: A,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, i.jsx)("path", {
              fill: "string" == typeof c ? c : c.css,
              d: "M15.3 14.48c-.46.45-1.08.67-1.86.67h-1.39V9.2h1.39c.78 0 1.4.22 1.86.67.46.45.68 1.22.68 2.31 0 1.1-.22 1.86-.68 2.31Z",
              className: d,
            }),
            (0, i.jsx)("path", {
              fill: "string" == typeof c ? c : c.css,
              fillRule: "evenodd",
              d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm1 15h2.04V7.34H6V17Zm4-9.66V17h3.44c1.46 0 2.6-.42 3.38-1.25.8-.83 1.2-2.02 1.2-3.58s-.4-2.75-1.2-3.58c-.79-.83-1.92-1.25-3.38-1.25H10Z",
              clipRule: "evenodd",
              className: d,
            }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=88017.4342d2e816d9f0de.js.map
