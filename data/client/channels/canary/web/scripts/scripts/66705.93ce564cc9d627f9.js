"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["66705"],
  {
    413142(e) {
      e.exports = "/assets/b46488e4f6a1d7ef.svg";
    },
    993830(e) {
      e.exports = "/assets/415036ce2536a149.svg";
    },
    944791(e, t, n) {
      n.d(t, { I: () => l });
      var i = n(228366);
      function l(e) {
        i.h.dispatch({ type: "APP_VIEW_SET_HOME_LINK", link: e });
      }
    },
    290595(e, t, n) {
      n.d(t, { Q: () => d, U: () => c });
      var i = n(636537),
        l = n(228366),
        s = n(652215),
        r = n(985018);
      function a(e) {
        return (
          null != e &&
            null != e.body &&
            l.h.dispatch({ type: "UPDATE_CONSENTS", consents: { ...e.body } }),
          e.body
        );
      }
      function o(e) {
        throw Error(
          e.status >= 500 && e.status <= 599
            ? r.intl.string(r.t.cvJdtg)
            : null != e && null != e.body && null != e.body.message
              ? e.body.message
              : r.intl.string(r.t.cvJdtg),
        );
      }
      function d() {
        return i.Bo.get({
          url: s.Rsh.SETTINGS_CONSENT,
          oldFormErrors: !0,
          rejectWithError: !1,
        }).then(a, (e) => Promise.reject(Error(e.body.message)));
      }
      function c(e, t) {
        return i.Bo.post({
          url: s.Rsh.SETTINGS_CONSENT,
          body: { grant: e, revoke: t },
          oldFormErrors: !0,
          rejectWithError: !1,
        }).then(a, o);
      }
    },
    774603(e, t, n) {
      n.d(t, { OX: () => r, Yo: () => s });
      var i = n(625494),
        l = n(652215);
      let s = {
          binds: ["mod+return"],
          comboKeysBindGlobal: !0,
          action() {
            if (i._.hasSubscribers(l.jej.CALL_ACCEPT))
              return i._.dispatch(l.jej.CALL_ACCEPT), !1;
          },
        },
        r = {
          binds: ["ctrl+'", "ctrl+shift+'"],
          comboKeysBindGlobal: !0,
          action(e) {
            if (i._.hasSubscribers(l.jej.CALL_START))
              return i._.dispatch(l.jej.CALL_START, e), !1;
          },
        };
    },
    176522(e, t, n) {
      n.d(t, {
        M$: () => L,
        Fv: () => S,
        kF: () => f,
        Oc: () => T,
        GY: () => O,
      }),
        n(667532);
      var i = n(310953),
        l = n(473529),
        s = n(875448),
        r = n(380335),
        a = n(157550),
        o = n(366811),
        d = n(253932),
        c = n(189081),
        u = n(839067),
        h = n(567761),
        g = n(403362),
        A = n(265422),
        E = n(652215),
        p = n(746080);
      let I = () => {
        let e =
          r.A.getMessageRequestsCount() > 0 || a.A.getSpamChannelsCount() > 0;
        return [
          E.BVt.FRIENDS,
          (0, s.HF)("navigateToChannel") ? E.BVt.ICYMI : null,
          c.A.hasLibraryApplication() && !d.l_.getSetting()
            ? E.BVt.APPLICATION_LIBRARY
            : null,
          e ? E.BVt.MESSAGE_REQUESTS : null,
          E.BVt.APPLICATION_STORE,
          E.BVt.COLLECTIBLES_SHOP,
          d.dm.getSetting() ? E.BVt.FAMILY_CENTER : null,
          E.BVt.QUEST_HOME,
        ].filter(g.Vq);
      };
      function C() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          t = o.A.getState().guildId;
        if (null == t)
          !(function (e) {
            var t, n;
            let { channelId: i, path: l, basePath: s } = o.A.getState(),
              r = h.default.getPrivateChannelIds(),
              a = __OVERLAY__ ? r : [...I(), ...r],
              d =
                (null == i
                  ? ((t = l ?? s), I().findIndex((e) => t.startsWith(e)))
                  : null != i
                    ? a.indexOf(i)
                    : 0) + e;
            d >= a.length ? (d = 0) : d < 0 && (d = a.length - 1);
            let c = a[d];
            if (I().includes(c)) {
              let e;
              (e = u.A.getCurrentRoute()),
                c === E.BVt.APPLICATION_STORE && null != e
                  ? (0, A.a)(e)
                  : (0, A.a)(c);
            } else (n = E.ME), (0, A.i)(n, c);
          })(e);
        else {
          var n, s, r;
          let a, d;
          (a = o.A.getState().channelId),
            (d = (0, i.A)(t, { withCurrentVoiceChannel: !0 }).map((e) => e.id)),
            (0, l.K)(t) && d.unshift(p.VV.GUILD_HOME),
            (n = (null != a ? d.indexOf(a) : -1) + e),
            (s = d.length),
            (r = d[n < 0 ? s - 1 : n >= s ? 0 : n]),
            (0, A.i)(t, r);
        }
      }
      var m = n(963169),
        _ = n(345942),
        b = n(309010),
        N = n(967198),
        v = n(723702);
      let f = {
          binds: ["alt+down"],
          comboKeysBindGlobal: !0,
          action: () => (C(), !1),
        },
        T = {
          binds: ["alt+up"],
          comboKeysBindGlobal: !0,
          action: () => (C(-1), !1),
        },
        S = {
          binds: ["mod+alt+right"],
          comboKeysBindGlobal: !0,
          action() {
            let e;
            if (null != N.A.getGuildId()) e = E.ME;
            else {
              let t = N.A.getLastSelectedGuildId();
              null != t && ((e = t), (0, A.i)(t, b.A.getChannelId(t)));
            }
            return null != e && (0, _.u)(e), !1;
          },
        },
        O = {
          binds: (0, v.isMac)() || (0, v.isMacWeb)() ? ["mod+["] : ["alt+left"],
          comboKeysBindGlobal: !0,
          action: () => ((0, m.OE)("keybind"), !1),
        },
        L = {
          binds:
            (0, v.isMac)() || (0, v.isMacWeb)() ? ["mod+]"] : ["alt+right"],
          comboKeysBindGlobal: !0,
          action: () => ((0, m.Qb)("keybind"), !1),
        };
    },
    739008(e, t, n) {
      n.d(t, { P: () => u });
      var i = n(720149),
        l = n(567035),
        s = n(458294),
        r = n(232835),
        a = n(309010),
        o = n(967198),
        d = n(625494),
        c = n(652215);
      let u = {
        binds: ["shift+esc"],
        comboKeysBindGlobal: !0,
        action() {
          let e = o.A.getGuildId();
          if (null == e || !s.default.getGuildHasUnreadIgnoreMuted(e)) return;
          (0, l.A)([e]);
          let t = a.A.getChannelId(e);
          null == t ||
            (r.A.getMessages(t).hasMoreAfter
              ? i.A.jumpToPresent(t, c.EMb)
              : d._.dispatch(c.jej.SCROLLTO_PRESENT));
        },
      };
    },
    314519(e, t, n) {
      n.d(t, { s: () => r });
      var i = n(720149),
        l = n(222823),
        s = n(309010);
      let r = {
        binds: ["shift+pageup"],
        comboKeysBindGlobal: !0,
        action() {
          let e = s.A.getChannelId();
          if (null != e) {
            let t = l.Ay.ackMessageId(e);
            null != t &&
              l.Ay.getOldestUnreadTimestamp(e) > 0 &&
              i.A.jumpToMessage({
                channelId: e,
                messageId: t,
                offset: 1,
                context: "Keyboard Shortcut",
              });
          }
          return !1;
        },
      };
    },
    806964(e, t, n) {
      n.d(t, { u: () => o });
      var i = n(951001),
        l = n(265422),
        s = n(763827),
        r = n(309010),
        a = n(652215);
      let o = {
        binds: ["mod+alt+left"],
        comboKeysBindGlobal: !0,
        action() {
          if (!s.A.isConnected()) return !1;
          let e = s.A.getGuildId() ?? a.ME,
            t = r.A.getChannelId(e);
          return (
            (0, l.i)(e, t), i.A.channelListScrollTo(e, s.A.getChannelId()), !1
          );
        },
      };
    },
    552049(e, t, n) {
      n.d(t, { U5: () => s, fz: () => r });
      var i = n(625494),
        l = n(652215);
      let s = {
          binds: ["pageup"],
          comboKeysBindGlobal: !0,
          action: () => (
            i._.dispatchToLastSubscribed(l.jej.SCROLL_PAGE_UP), !1
          ),
        },
        r = {
          binds: ["pagedown"],
          comboKeysBindGlobal: !0,
          action: () => (
            i._.dispatchToLastSubscribed(l.jej.SCROLL_PAGE_DOWN), !1
          ),
        };
    },
    877991(e, t, n) {
      n.d(t, { L: () => o });
      var i = n(189551),
        l = n(186111),
        s = n(625494),
        r = n(652215),
        a = n(307731);
      let o = {
        binds: ["mod+e"],
        comboKeysBindGlobal: !0,
        action: () =>
          !(l.A.getLayers().length > 0) &&
          ((0, i.K)(a.EmojiInteractionPoint.SearchEmojiKeybindPressed),
          s._.dispatchToLastSubscribed(r.jej.TOGGLE_EMOJI_POPOUT),
          !1),
      };
    },
    332779(e, t, n) {
      n.d(t, { T: () => r });
      var i = n(186111),
        l = n(625494),
        s = n(652215);
      let r = {
        binds: ["mod+g"],
        comboKeysBindGlobal: !0,
        action: () =>
          !(i.A.getLayers().length > 0) &&
          (l._.dispatchToLastSubscribed(s.jej.TOGGLE_GIF_PICKER), !1),
      };
    },
    274794(e, t, n) {
      n.d(t, { w: () => r });
      var i = n(186111),
        l = n(625494),
        s = n(652215);
      let r = {
        binds: ["mod+s"],
        comboKeysBindGlobal: !0,
        action: () =>
          !(i.A.getLayers().length > 0) &&
          (l._.dispatchToLastSubscribed(s.jej.TOGGLE_STICKER_PICKER), !1),
      };
    },
    928531(e, t, n) {
      n.d(t, { yx: () => _, yv: () => b });
      var i = n(735438),
        l = n.n(i),
        s = n(554146),
        r = n(771781),
        a = n(826673),
        o = n(181079),
        d = n(379587),
        c = n(832275),
        u = n(366811),
        h = n(309010),
        g = n(967198),
        A = n(711014),
        E = n(287809),
        p = n(619921),
        I = n(265422),
        C = n(652215);
      let m = l().throttle(function () {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 1,
            t = A.Ay.getFlattenedGuildIds(),
            { enabled: n } = d.o.getConfig({ location: "navigateToServer" }),
            i = (0, r.dD)(s.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM),
            l = (0, a.k8)(s.M.FAVORITES_SERVER_ONBOARDING_INTRO),
            m = (function (e) {
              let t = u.A.getState().guildId;
              if (null == t) return -2;
              if (t === C.YYv) return -1;
              let n = e.indexOf(t);
              return -1 === n ? -2 : n;
            })(t);
          if (
            (-1 !== (m += e) ||
              (0, c.J)(o.A, E.default, g.A, {
                favoritesGuildXPEnabled: n,
                isMenuItemDCSelected: i,
                isIntroDCDismissed: l,
              }) ||
              (m += e),
            -3 === m && (m = t.length - 1),
            m >= t.length || -2 === m)
          )
            return void (0, I.a)(p.A.getHomeLink());
          let _ = -1 === m ? C.YYv : t[m],
            b = h.A.getChannelId(_);
          (0, I.i)(_, b === _ ? null : b, !1);
        }, C.ugG),
        _ = {
          binds: ["mod+alt+down", "mod+shift+]", "ctrl+tab"],
          comboKeysBindGlobal: !0,
          action: (e) => (e.preventDefault(), e.stopPropagation(), m(), !1),
        },
        b = {
          binds: ["mod+alt+up", "mod+shift+[", "ctrl+shift+tab"],
          comboKeysBindGlobal: !0,
          action: (e) => (e.preventDefault(), e.stopPropagation(), m(-1), !1),
        };
    },
    251494(e, t, n) {
      n.d(t, { X: () => r });
      var i = n(775602),
        l = n(625494),
        s = n(652215);
      let r = {
        binds: ["return"],
        action() {
          if (
            !i.A.keyboardModeEnabled &&
            l._.hasSubscribers(s.jej.MODAL_SUBMIT)
          )
            return l._.dispatch(s.jej.MODAL_SUBMIT), !1;
        },
      };
    },
    82038(e, t, n) {
      n.d(t, { c: () => p });
      var i = n(621466),
        l = n(825437),
        s = n(775602),
        r = n(186111),
        a = n(51760),
        o = n(763827),
        d = n(625494),
        c = n(350535),
        u = n(652215);
      let h = new Set([
          "PageDown",
          "PageUp",
          "Home",
          "End",
          "ArrowUp",
          "ArrowDown",
          "ArrowLeft",
          "ArrowRight",
        ]),
        g = new Set([
          "Alt",
          "AltGraph",
          "CapsLock",
          "Control",
          "Fn",
          "FnLock",
          "Hyper",
          "Meta",
          "NumLock",
          "OS",
          "ScrollLock",
          "Shift",
          "Super",
          "Symbol",
          "SymbolLock",
        ]),
        A = new Set([
          "F1",
          "F2",
          "F3",
          "F4",
          "F5",
          "F6",
          "F7",
          "F8",
          "F9",
          "F10",
          "F11",
          "F12",
          "F13",
          "F14",
          "F15",
          "F16",
          "F17",
          "F18",
          "F19",
          "F20",
          "Accept",
          "ContextMenu",
          "Find",
          "ZoomIn",
          "ZoomOut",
        ]),
        E = new Set([
          "ChannelDown",
          "ChannelUp",
          "MediaFastForward",
          "MediaPause",
          "MediaPlay",
          "MediaPlayPause",
          "MediaRecord",
          "MediaRewind",
          "MediaStop",
          "MediaTrackNext",
          "MediaTrackPrevious",
          "AudioBalanceLeft",
          "AudioBalanceRight",
          "AudioBassDown",
          "AudioBassBoostDown",
          "AudioBassBoostToggle",
          "AudioBassBoostUp",
          "AudioBassUp",
          "AudioFaderFront",
          "AudioFaderReader",
          "AudioSurroundModeNext",
          "AudioTrebleDown",
          "AudioTreblUp",
          "AudioVolumeDown",
          "AudioVolumeMute",
          "AudioVolumeUp",
          "VolumeUp",
          "VolumeDown",
          "VolumeMute",
        ]),
        p = {
          binds: ["any-character"],
          keydown(e, t) {
            let n = (0, i.BF)(e)?.activeElement;
            if (
              (0, i.Cw)(n) ||
              l.rx.isActive() ||
              g.has(t) ||
              A.has(t) ||
              E.has(t)
            )
              return !1;
            let p = null != n && "BODY" === n.tagName;
            if (
              (s.A.keyboardModeEnabled && !p && !/^[a-zA-Z0-9]$/.test(t)) ||
              d._.hasSubscribers(u.jej.MODAL_CLOSE) ||
              r.A.hasLayers()
            )
              return !1;
            if (
              "Tab" === t &&
              d._.hasSubscribers(u.jej.TEXTAREA_FOCUS) &&
              null != document.querySelector('[data-can-focus="true"]')
            )
              return e.preventDefault(), d._.dispatch(u.jej.TEXTAREA_FOCUS), !1;
            if (
              (o.A.isConnected() &&
                a.Ay.getMode() === u.TBI.PUSH_TO_TALK &&
                !a.Ay.isSelfMute() &&
                Object.values(a.Ay.getShortcuts())
                  .map(c.pi)
                  .some((t) => t.map((e) => e.keyCode).includes(e.keyCode))) ||
              e.metaKey ||
              e.ctrlKey ||
              h.has(t)
            )
              return !1;
            let I = "Enter" === t && !e.shiftKey && !e.altKey;
            d._.dispatchToLastSubscribed(u.jej.TEXTAREA_FOCUS, {
              event: e,
              wasEnterPressed: I,
            });
          },
        };
    },
    151199(e, t, n) {
      n.d(t, { y: () => o });
      var i = n(914430),
        l = n(924985),
        s = n(808728),
        r = n(967198),
        a = n(652215);
      let o = {
        binds: ["mod+shift+a"],
        comboKeysBindGlobal: !0,
        action() {
          let e = r.A.getGuildId();
          return (
            null != e &&
            (s.Ay.getChannels(e)[a.rbe.GUILD_CATEGORY].some((e) => {
              let { channel: t } = e;
              return "null" !== t.id && !l.A.isCollapsed(t.id);
            })
              ? (0, i.rZ)(e)
              : (0, i.Al)(e),
            !1)
          );
        },
      };
    },
    467691(e, t, n) {
      n.d(t, { US: () => R, BD: () => y, X8: () => G, mH: () => L });
      var i = n(627968);
      n(64700);
      var l = n(735438),
        s = n.n(l),
        r = n(192308),
        a = n(310953),
        o = n(366811),
        d = n(808728),
        c = n(967198),
        u = n(711014),
        h = n(567761),
        g = n(625494),
        A = n(265422),
        E = n(652215),
        p = n(790782);
      function I(e, t) {
        return [
          { resourceId: e, type: p.P.GUILD_EVENT },
          ...(e === E.ME
            ? h.default.getPrivateChannelIds()
            : (0, a.A)(e, {
                withVoiceChannels: t,
                withCurrentVoiceChannel: !0,
              }).map((e) => e.id)),
        ];
      }
      let C = s().throttle(function (e, t) {
        var l;
        let s,
          a,
          h,
          {
            channelPredicate: p = () => !0,
            guildPredicate: C = () => !0,
            guildFeaturePredicate: m = () => !1,
            ensureChatIsVisible: _ = () => !1,
            withVoiceChannels: b = !1,
          } = t,
          N = o.A.getState().guildId ?? E.ME,
          v = o.A.getState().channelId,
          f =
            ((l = N),
            (a = (s = [E.ME, ...u.Ay.getFlattenedGuildIds()]).indexOf(l)),
            e > 0
              ? s.slice(a).concat(s.slice(0, a), l)
              : (s.splice(a, 0, l), s.slice(a + 1).concat(s.slice(0, a + 1)))),
          T = e > 0 ? 0 : f.length - 1,
          S = I(N, b),
          O = S.indexOf(v) + e;
        for (; null != N && "" !== N; ) {
          if (((h = S[O]), C(N)))
            for (; null != h && "" !== h; ) {
              if ("string" == typeof h) {
                if (p(N, h)) return (0, A.i)(N, h, !1, _(N, h));
              } else if ("object" == typeof h && m(h.resourceId, h.type))
                return (
                  N !== c.A.getGuildId() &&
                    (0, A.i)(N, d.Ay.getDefaultChannel(N)?.id),
                  (0, r.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([
                      n.e("89603"),
                      n.e("8909"),
                      n.e("43513"),
                      n.e("26295"),
                      n.e("37187"),
                      n.e("55973"),
                      n.e("14041"),
                      n.e("22855"),
                      n.e("56373"),
                      n.e("70644"),
                      n.e("52695"),
                      n.e("49347"),
                      n.e("64287"),
                      n.e("19346"),
                      n.e("53934"),
                      n.e("68248"),
                      n.e("43267"),
                      n.e("69647"),
                      n.e("98354"),
                      n.e("11588"),
                    ]).then(n.bind(n, 15823));
                    return (t) => (0, i.jsx)(e, { ...t, guildId: N });
                  })
                );
              (O += e), (h = S[O]);
            }
          if (((T += e), null == (N = f[T]) || "" === N)) break;
          (S = I(N, b)), (O = e < 0 ? S.length - 1 : 0);
        }
        g._.dispatch(E.jej.SHAKE_APP, { duration: 200, intensity: 2 });
      }, E.ugG);
      var m = n(455234),
        _ = n(95701),
        b = n(734057),
        N = n(222823),
        v = n(309010),
        f = n(543465);
      let T = (e, t) => {
          let n = b.A.getChannel(t);
          return (
            null != n &&
            ((0, _.Gw)(n.type) || E.kvI.GUILD_VOCAL.has(n.type)
              ? N.Ay.getMentionCount(t) > 0 || v.A.getVoiceChannelId() === t
              : (!f.Ay.isChannelMuted(e, t) || N.Ay.getMentionCount(t) > 0) &&
                (0, m.Y)(n))
          );
        },
        S = (e, t) =>
          t === p.P.GUILD_EVENT
            ? !f.Ay.isMuteScheduledEventsEnabled(e) && N.Ay.hasUnread(e, t)
            : N.Ay.hasUnread(e, t),
        O = (e, t) => {
          let n = b.A.getChannel(t);
          return (
            null != n &&
            !!E.kvI.GUILD_VOCAL.has(n.type) &&
            (N.Ay.getMentionCount(t) > 0 ||
              (v.A.getVoiceChannelId() === t && N.Ay.getUnreadCount(t) > 0))
          );
        },
        L = {
          binds: ["alt+shift+down"],
          comboKeysBindGlobal: !0,
          action() {
            let e = o.A.getState().guildId ?? E.ME;
            return (
              C(1, {
                channelPredicate: T,
                guildPredicate: (t) => t === e || !f.Ay.isMuted(t),
                guildFeaturePredicate: S,
                ensureChatIsVisible: O,
                withVoiceChannels: !0,
              }),
              !1
            );
          },
        },
        R = {
          binds: ["alt+shift+up"],
          comboKeysBindGlobal: !0,
          action() {
            let e = o.A.getState().guildId ?? E.ME;
            return (
              C(-1, {
                channelPredicate: T,
                guildPredicate: (t) => t === e || !f.Ay.isMuted(t),
                guildFeaturePredicate: S,
                ensureChatIsVisible: O,
                withVoiceChannels: !0,
              }),
              !1
            );
          },
        },
        M = (e, t) => N.Ay.getMentionCount(t) > 0,
        y = {
          binds: ["mod+shift+alt+down"],
          comboKeysBindGlobal: !0,
          action: () => (
            C(1, {
              channelPredicate: M,
              ensureChatIsVisible: O,
              withVoiceChannels: !0,
            }),
            !1
          ),
        },
        G = {
          binds: ["mod+shift+alt+up"],
          comboKeysBindGlobal: !0,
          action: () => (
            C(-1, {
              channelPredicate: M,
              ensureChatIsVisible: O,
              withVoiceChannels: !0,
            }),
            !1
          ),
        };
    },
    406975(e, t, n) {
      n.d(t, { Ay: () => c, O$: () => d, Ur: () => a, hU: () => o });
      var i = n(955572),
        l = n(775602),
        s = n(652215);
      function r(e) {
        return s.hH7.ZOOM_SCALES[
          Math.max(
            0,
            Math.min(
              s.hH7.ZOOM_SCALES.indexOf(l.A.zoom) + e,
              s.hH7.ZOOM_SCALES.length - 1,
            ),
          )
        ];
      }
      let a = {
          binds: ["mod+plus"],
          comboKeysBindGlobal: !0,
          action: () => ((0, i.Qp)(r(1)), !1),
        },
        o = {
          binds: ["mod+minus"],
          comboKeysBindGlobal: !0,
          action: () => ((0, i.Qp)(r(-1)), !1),
        },
        d = {
          binds: ["mod+0"],
          comboKeysBindGlobal: !0,
          action: () => ((0, i.Qp)(s.hH7.ZOOM_DEFAULT), !1),
        },
        c = 21552 == n.j ? { ZOOM_IN: a, ZOOM_OUT: o, ZOOM_RESET: d } : null;
    },
    337371(e, t, n) {
      n.d(t, {
        Bx: () => eh,
        Ay: () => eg,
        Gm: () => eo,
        Q_: () => ea,
        zF: () => ed,
        zR: () => eu,
      }),
        n(321073);
      var i,
        l = n(966597),
        s = n(774603),
        r = n(176522),
        a = n(735438),
        o = n.n(a),
        d = n(691540),
        c = n(857250),
        u = n(97483),
        h = n(734057),
        g = n(309010),
        A = n(147036),
        E = n(957565),
        p = n(985018);
      let I = (0, a.throttle)(
        () => (0, d.P0)((0, c.o)(p.intl.string(p.t["+5kSoW"]), u.Ck.SUCCESS)),
        3e3,
        { leading: !0, trailing: !1 },
      );
      var C = n(265422),
        m = n(967198),
        _ = n(625494),
        b = n(652215),
        N = n(192308),
        v = n(272613),
        f = n(819638),
        T = n(723702),
        S = n(186111),
        O = n(763827),
        L = n(64460),
        R = n(92960),
        M = n(739008),
        y = n(314519),
        G = n(837057),
        x = n(310419),
        w = n(488995),
        j = n(675704),
        V = n(806964),
        D = n(552049),
        P = n(877991),
        U = n(332779),
        H = n(274794),
        W = n(928531),
        B = n(251494),
        F = n(82038),
        K = n(14214),
        k = n(151199),
        Z = n(975571),
        Y = n(28647),
        X = n(851109);
      let z = {
        binds: ["mod+shift+e"],
        comboKeysBindGlobal: !0,
        action: o().debounce(
          () => {
            if (_._.hasSubscribers(b.jej.MARK_TOP_INBOX_CHANNEL_READ))
              return _._.dispatch(b.jej.MARK_TOP_INBOX_CHANNEL_READ), !1;
          },
          100,
          { leading: !0 },
        ),
      };
      var J = n(478437),
        Q = n(367513),
        q = n(604681),
        $ = n(313961),
        ee = n(47675),
        et = n(999291),
        en = n(761640),
        ei = n(467691),
        el = n(674272),
        es = n(431804),
        er = n(406975),
        ea =
          (((i = {}).NAVIGATION = "NAVIGATION"),
          (i.CHAT = "CHAT"),
          (i.VOICE_AND_VIDEO = "VOICE_AND_VIDEO"),
          (i.MISCELLANEOUS = "MISCELLANEOUS"),
          (i.MESSAGE = "MESSAGE"),
          (i.DND = "DND"),
          i);
      function eo(e) {
        switch (e) {
          case "NAVIGATION":
            return p.intl.string(p.t["yGE+jg"]);
          case "VOICE_AND_VIDEO":
            return p.intl.string(p.t.bI8F5u);
          case "CHAT":
            return p.intl.string(p.t.hDhbb3);
          case "MISCELLANEOUS":
            return p.intl.string(p.t.cBdwqs);
          case "MESSAGE":
            return p.intl.string(p.t["5fpmX9"]);
          case "DND":
            return p.intl.string(p.t["69j6+4"]);
        }
      }
      function ed(e) {
        switch (e) {
          case "MESSAGE":
            return p.intl.string(p.t.iepGDn);
          case "DND":
            return p.intl.string(p.t.LBsB0a);
          default:
            return;
        }
      }
      function ec() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return t.map((e) => {
          let t = eu[e];
          if (null == t) throw Error(`getBindsFor(...): No bind for ${t}`);
          return t.binds[0];
        });
      }
      let eu = {
        [b.IWg.SERVER_NEXT]: W.yx,
        [b.IWg.SERVER_PREV]: W.yv,
        [b.IWg.CHANNEL_NEXT]: r.kF,
        [b.IWg.CHANNEL_PREV]: r.Oc,
        [b.IWg.NAVIGATE_BACK]: r.GY,
        [b.IWg.NAVIGATE_FORWARD]: r.M$,
        [b.IWg.UNREAD_NEXT]: ei.mH,
        [b.IWg.UNREAD_PREV]: ei.US,
        [b.IWg.MENTION_CHANNEL_NEXT]: ei.BD,
        [b.IWg.MENTION_CHANNEL_PREV]: ei.X8,
        [b.IWg.TOGGLE_PREVIOUS_GUILD]: r.Fv,
        [b.IWg.JUMP_TO_GUILD]: L.J,
        [b.IWg.SUBMIT]: B.X,
        [b.IWg.TEXTAREA_FOCUS]: F.c,
        [b.IWg.MARK_CHANNEL_READ]: R.Df,
        [b.IWg.MARK_SERVER_READ]: M.P,
        [b.IWg.TOGGLE_CHANNEL_PINS]: {
          binds: ["mod+p"],
          comboKeysBindGlobal: !0,
          action: () => (_._.dispatch(b.jej.TOGGLE_CHANNEL_PINS), !1),
        },
        [b.IWg.TOGGLE_FOR_LATER]: {
          binds: ["mod+l"],
          comboKeysBindGlobal: !0,
          action() {
            let { enabled: e, inInbox: t } = l.A.getConfig({
              location: "keybinds",
            });
            if (e && !t) return _._.dispatch(b.jej.TOGGLE_FOR_LATER), !1;
          },
        },
        [b.IWg.TOGGLE_INBOX]: {
          binds: ["mod+i"],
          comboKeysBindGlobal: !0,
          action: () =>
            !(S.A.getLayers().length > 0) &&
            ((() => {
              let { notificationCenterVariant: e } = (0, X.GE)({
                location: "TOGGLE_INBOX",
              });
              if ("sidebar" !== e) return;
              let t = g.A.getChannelId(),
                n = h.A.getChannel(t);
              return window.location.pathname.startsWith(
                b.BVt.CHANNEL(b.gNP),
              ) && null != n
                ? (0, C.i)(n.guild_id, t)
                : (0, C.a)(b.BVt.CHANNEL(b.gNP, t ?? void 0));
            })(),
            _._.dispatch(b.jej.TOGGLE_INBOX),
            !1),
        },
        [b.IWg.MARK_TOP_INBOX_CHANNEL_READ]: z,
        [b.IWg.TOGGLE_USERS]: {
          binds: ["mod+u"],
          comboKeysBindGlobal: !0,
          action() {
            let e = m.A.getGuildId(),
              t = g.A.getChannelId(e),
              n = h.A.getChannel(t),
              i =
                null != t &&
                n?.isVocalThread() === !0 &&
                $.A.getUserParticipantCount(t) > 0;
            if (null != t && null != n && (n.type === J.r.GUILD_VOICE || i))
              return (
                Q.A.updateChatOpen(
                  t,
                  !$.A.getChatOpen(t),
                  "toggle users keybind",
                ),
                !1
              );
            if (null != t && null != n && n.type === J.r.DM) {
              let e = en.Ay.getSection(t, n?.isDM()),
                i = (0, et.AP)(n.getRecipientId()),
                l = e === b.YvQ.PROFILE;
              return (
                (0, ee.am)({ displayProfile: i, isProfileOpen: !l }),
                q.A.toggleUserProfileSidebarSection(),
                !1
              );
            }
            return q.A.toggleMembersSection(), !1;
          },
        },
        [b.IWg.TOGGLE_HELP]: {
          binds: ["mod+shift+h", "f1"],
          comboKeysBindGlobal: !0,
          action: () => (window.open(Z.C), !1),
        },
        [b.IWg.VIBE_WITH_WUMPUS]: {
          binds: ["mod+alt+shift+w"],
          comboKeysBindGlobal: !0,
          action: () => (
            (0, el.A)({ source: es.y.KEYBIND, onClose: N.closeAllModals }), !1
          ),
        },
        [b.IWg.TOGGLE_MUTE]: K.VT,
        [b.IWg.TOGGLE_DEAFEN]: K.rR,
        [b.IWg.TOGGLE_CATEGORY_COLLAPSED]: k.y,
        [b.IWg.SEARCH_SOUNDBOARD]: {
          binds: ["mod+shift+b"],
          comboKeysBindGlobal: !0,
          action: () => (_._.dispatch(b.jej.TOGGLE_SOUNDBOARD), !1),
        },
        [b.IWg.SCROLL_UP]: D.U5,
        [b.IWg.SCROLL_DOWN]: D.fz,
        [b.IWg.QUICKSWITCHER_SHOW]: j.R,
        [b.IWg.CREATE_DM_GROUP]: {
          binds: ["mod+shift+t"],
          comboKeysBindGlobal: !0,
          action: () => (
            null != m.A.getGuildId() && (0, C.i)(b.ME),
            _._.safeDispatch(b.jej.TOGGLE_DM_CREATE),
            !1
          ),
        },
        [b.IWg.SEARCH_EMOJIS]: P.L,
        [b.IWg.SEARCH_GIFS]: U.T,
        [b.IWg.SEARCH_STICKERS]: H.w,
        [b.IWg.TOGGLE_HOTKEYS]: Y.z,
        [b.IWg.JUMP_TO_FIRST_UNREAD]: y.s,
        [b.IWg.CREATE_GUILD]: {
          binds: ["mod+shift+n"],
          comboKeysBindGlobal: !0,
          action() {
            (0, N.hasModalOpen)(f.fc)
              ? v.A.updateCreateGuildModal({
                  slide: f.oS.JOIN_GUILD,
                  location: "Keyboard Shortcut",
                })
              : v.A.openCreateGuildModal({ location: "Keyboard Shortcut" });
          },
        },
        [b.IWg.UPLOAD_FILE]: {
          binds: ["mod+shift+u"],
          comboKeysBindGlobal: !0,
          action() {
            let e = h.A.getChannel(g.A.getChannelId());
            return (
              null == e ||
                e.isManaged() ||
                _._.dispatch(b.jej.UPLOAD_FILE, { channelId: e.id }),
              !1
            );
          },
        },
        [b.IWg.RETURN_TO_AUDIO_CHANNEL]: V.u,
        [b.IWg.CALL_ACCEPT]: s.Yo,
        [b.IWg.CALL_START]: s.OX,
        [b.IWg.FOCUS_SEARCH]: {
          binds: ["mod+f", "mod+shift+f"],
          comboKeysBindGlobal: !0,
          action(e, t) {
            if (S.A.hasLayers() || (0, N.hasAnyModalOpen)()) return;
            let n = !t.includes("shift");
            return (
              _._.dispatch(b.jej.FOCUS_SEARCH, { prefillCurrentChannel: n }), !1
            );
          },
        },
        [b.IWg.JUMP_TO_CURRENT_CALL]: {
          binds: ["mod+shift+alt+v"],
          comboKeysBindGlobal: !0,
          action(e) {
            e.preventDefault(), e.stopPropagation();
            let t = O.A.getGuildId(),
              n = O.A.getChannelId();
            return null != n && (0, C.i)(t ?? b.ME, n), !1;
          },
        },
        [b.IWg.ZOOM_IN]: er.Ur,
        [b.IWg.ZOOM_OUT]: er.hU,
        [b.IWg.ZOOM_RESET]: er.O$,
        [b.IWg.OPEN_APP_DIRECTORY]: {
          binds: ["mod+ctrl+a"],
          comboKeysBindGlobal: !0,
          action() {
            let e = m.A.getGuildId() ?? void 0;
            (0, G.transitionToGlobalDiscovery)({
              tab: w.GlobalDiscoveryTab.APPS,
              newSessionState: {
                guildId: e ?? null,
                entrypoint: { name: x.sW.KEYBOARD_SHORTCUT },
              },
            });
          },
        },
        [b.IWg.BROWSER_DEVTOOLS]: {
          binds: ["mod+alt+i"],
          comboKeysBindGlobal: !0,
          action(e) {
            if ((0, T.isWeb)() && "discord.com" === location.host)
              return e.preventDefault(), e.stopPropagation(), !1;
          },
        },
        [b.IWg.OPEN_CONTEXT_MENU]: {
          binds: ["shift+f10"],
          comboKeysBindGlobal: !0,
          action() {
            let e = document.activeElement;
            return (
              null != e &&
              e !== document.body &&
              (e.dispatchEvent(
                new MouseEvent("contextmenu", {
                  bubbles: !0,
                  cancelable: !0,
                  view: window,
                  clientX: 0,
                  clientY: 0,
                }),
              ),
              !1)
            );
          },
        },
        [b.IWg.COPY_CHANNEL_LINK]: {
          binds: ["mod+shift+l"],
          comboKeysBindGlobal: !0,
          action() {
            let e = g.A.getChannelId();
            if (null == e) return !1;
            let t = h.A.getChannel(e);
            if (null == t) return !1;
            let n = h.A.getChannel(t.parent_id),
              i = (0, A.af)(t, n);
            return (0, E.C)(i, I), !1;
          },
        },
      };
      function eh() {
        let e = [
            {
              description: p.intl.string(p.t.bx4Uyz),
              binds: ec(b.IWg.SERVER_PREV, b.IWg.SERVER_NEXT),
              group: "NAVIGATION",
            },
            {
              description: p.intl.string(p.t["+Wem6h"]),
              binds: ec(b.IWg.CHANNEL_PREV, b.IWg.CHANNEL_NEXT),
              group: "NAVIGATION",
            },
            {
              description: p.intl.string(p.t["+2fcdz"]),
              binds: ec(b.IWg.NAVIGATE_BACK, b.IWg.NAVIGATE_FORWARD),
              group: "NAVIGATION",
            },
            {
              description: p.intl.string(p.t.eVmj1H),
              binds: ec(b.IWg.UNREAD_PREV, b.IWg.UNREAD_NEXT),
              group: "NAVIGATION",
            },
            {
              description: p.intl.string(p.t.EcqS7Y),
              binds: ec(b.IWg.MENTION_CHANNEL_PREV, b.IWg.MENTION_CHANNEL_NEXT),
              group: "NAVIGATION",
            },
            {
              description: p.intl.string(p.t["4I3pwW"]),
              binds: ec(b.IWg.JUMP_TO_CURRENT_CALL),
              group: "NAVIGATION",
            },
            {
              description: p.intl.string(p.t.Bqss72),
              binds: ec(b.IWg.TOGGLE_PREVIOUS_GUILD),
              group: "NAVIGATION",
            },
            {
              description: p.intl.string(p.t.yYsRlD),
              binds: ec(b.IWg.QUICKSWITCHER_SHOW),
              group: "NAVIGATION",
            },
            {
              description: p.intl.string(p.t.O7ouXO),
              binds: ec(b.IWg.CREATE_GUILD),
              group: "NAVIGATION",
              groupEnd: !0,
            },
            {
              description: p.intl.string(p.t.Lns0Fc),
              binds: ["mod+d"],
              group: "DND",
            },
            {
              description: p.intl.string(p.t.dmMqay),
              binds: ["up", "down"],
              group: "DND",
            },
            {
              description: p.intl.string(p.t["cs/HVH"]),
              binds: ["spacebar", "enter"],
              group: "DND",
            },
            {
              description: p.intl.string(p.t["1ioMJQ"]),
              binds: ["esc"],
              group: "DND",
              groupEnd: !0,
            },
            {
              description: p.intl.string(p.t.UaXAPx),
              binds: ec(b.IWg.MARK_SERVER_READ),
              group: "CHAT",
            },
            {
              description: p.intl.string(p.t["5X9vFj"]),
              binds: ec(b.IWg.MARK_CHANNEL_READ),
              group: "CHAT",
            },
            {
              description: p.intl.string(p.t.wxQFsl),
              binds: ec(b.IWg.CREATE_DM_GROUP),
              group: "CHAT",
            },
            {
              description: p.intl.string(p.t["C+XV7f"]),
              binds: ec(b.IWg.TOGGLE_CHANNEL_PINS),
              group: "CHAT",
            },
            {
              description: p.intl.string(p.t["Q+YV/T"]),
              binds: ec(b.IWg.TOGGLE_INBOX),
              group: "CHAT",
            },
            {
              description: p.intl.string(p.t["YEjV+W"]),
              binds: ec(b.IWg.MARK_TOP_INBOX_CHANNEL_READ),
              group: "CHAT",
            },
            {
              description: p.intl.string(p.t.AcBI9S),
              binds: ec(b.IWg.TOGGLE_USERS),
              group: "CHAT",
            },
            {
              description: p.intl.string(p.t.JoxNnl),
              binds: ec(b.IWg.SEARCH_EMOJIS),
              group: "CHAT",
            },
            {
              description: p.intl.string(p.t["3PHxo8"]),
              binds: ec(b.IWg.SEARCH_GIFS),
              group: "CHAT",
            },
            {
              description: p.intl.string(p.t.YFl7eb),
              binds: ec(b.IWg.SEARCH_STICKERS),
              group: "CHAT",
            },
            {
              description: p.intl.string(p.t.L3RYYJ),
              binds: ec(b.IWg.SCROLL_UP, b.IWg.SCROLL_DOWN),
              group: "CHAT",
            },
            {
              description: p.intl.string(p.t["3HAurM"]),
              binds: ec(b.IWg.JUMP_TO_FIRST_UNREAD),
              group: "CHAT",
            },
            {
              description: p.intl.string(p.t.rrYBEu),
              binds: ec(b.IWg.TEXTAREA_FOCUS),
              group: "CHAT",
            },
            {
              description: p.intl.string(p.t.sUJlPL),
              binds: ec(b.IWg.UPLOAD_FILE),
              group: "CHAT",
            },
            {
              description: p.intl.string(p.t["A+Fv0R"]),
              binds: ec(b.IWg.COPY_CHANNEL_LINK),
              group: "CHAT",
              groupEnd: !0,
            },
            {
              description: p.intl.string(p.t.tL6eVW),
              binds: ec(b.IWg.TOGGLE_MUTE),
              group: "VOICE_AND_VIDEO",
            },
            {
              description: p.intl.string(p.t["QXe/7T"]),
              binds: ec(b.IWg.TOGGLE_DEAFEN),
              group: "VOICE_AND_VIDEO",
            },
            {
              description: p.intl.string(p.t.d6UIii),
              binds: ec(b.IWg.CALL_ACCEPT),
              group: "VOICE_AND_VIDEO",
            },
            {
              description: p.intl.string(p.t.IcEW06),
              binds: ec(b.IWg.MARK_CHANNEL_READ),
              group: "VOICE_AND_VIDEO",
            },
            {
              description: p.intl.string(p.t.WN2dsS),
              binds: ec(b.IWg.CALL_START),
              group: "VOICE_AND_VIDEO",
              groupEnd: !0,
            },
            {
              description: p.intl.string(p.t.rUK0kk),
              binds: ec(b.IWg.SEARCH_SOUNDBOARD),
              group: "VOICE_AND_VIDEO",
            },
            {
              description: p.intl.string(p.t.vkGkSn),
              binds: ec(b.IWg.TOGGLE_HELP),
              group: "MISCELLANEOUS",
            },
            {
              description: p.intl.string(p.t.FJvZ87),
              binds: ec(b.IWg.FOCUS_SEARCH),
              group: "MISCELLANEOUS",
            },
            {
              description: p.intl.string(p.t["FiWl/T"]),
              binds: ec(b.IWg.OPEN_CONTEXT_MENU),
              group: "MISCELLANEOUS",
            },
            {
              description: p.intl.string(p.t.HnNtEI),
              binds: ["h+h+right+n+k"],
              group: "MISCELLANEOUS",
              groupEnd: !0,
            },
            {
              description: p.intl.string(p.t.fsBWmS),
              binds: ["e"],
              group: "MESSAGE",
            },
            {
              description: p.intl.string(p.t.xwMqD7),
              binds: ["backspace"],
              group: "MESSAGE",
            },
            {
              description: p.intl.string(p.t.CvQ18w),
              binds: ["p"],
              group: "MESSAGE",
            },
            {
              description: p.intl.string(p.t.lfIHs4),
              binds: ["plus"],
              group: "MESSAGE",
            },
            {
              description: p.intl.string(p.t["5IEsGx"]),
              binds: ["r"],
              group: "MESSAGE",
            },
            {
              description: p.intl.string(p.t.zSyDdA),
              binds: ["f"],
              group: "MESSAGE",
            },
            {
              description: p.intl.string(p.t.yGLjXF),
              binds: ["s"],
              group: "MESSAGE",
            },
            {
              description: p.intl.string(p.t.JrGD7E),
              binds: ["mod+c"],
              group: "MESSAGE",
            },
            {
              description: p.intl.string(p.t.RpE9k7),
              binds: ["alt+enter"],
              group: "MESSAGE",
            },
            {
              description: p.intl.string(p.t.rrYBEu),
              binds: ["escape"],
              group: "MESSAGE",
              groupEnd: !0,
            },
            {
              description: p.intl.string(p.t.z9c6mt),
              binds: ec(b.IWg.VIBE_WITH_WUMPUS),
              group: "MISCELLANEOUS",
            },
          ],
          { enabled: t, inInbox: n } = l.A.getConfig({ location: "keybinds" });
        return (
          t &&
            !n &&
            e.push({
              description: p.intl.string(p.t.IWNSoH),
              binds: ec(b.IWg.TOGGLE_FOR_LATER),
              group: "CHAT",
            }),
          e
        );
      }
      let eg = 21552 == n.j ? eu : null;
    },
    100767(e, t, n) {
      n.d(t, { $j: () => l, _X: () => a, aW: () => s, wz: () => r });
      var i = n(8880);
      let l = null != window.speechSynthesis;
      function s(e, t) {
        let n = e.replace(/(https?:\/\/[^\s]+)/g, (e) => {
          let t = e.match(/^https?:\/\/(?:www\.)?([^/?#]+)(?:[/?#]|$)/i);
          return null != t ? t[1] : "";
        });
        null != t &&
          n.length > t &&
          (n = (n = n.substring(0, t)).substring(
            0,
            Math.min(n.length, n.lastIndexOf(" ")),
          ));
        let l = new SpeechSynthesisUtterance(n);
        return (l.rate = i.A.speechRate), l;
      }
      function r(e, t) {
        l && ((e.voice = t), speechSynthesis.speak(e));
      }
      function a() {
        l && speechSynthesis.cancel();
      }
    },
    743790(e, t, n) {
      n.d(t, { $: () => o, K: () => d });
      var i = n(627968),
        l = n(834730),
        s = n(573435),
        r = n(260509),
        a = n(601527);
      function o(e) {
        let { guild: t, size: n } = e,
          s = (0, r.Iv)(t, n, !1, !0),
          o = (0, r.Rb)(t);
        return null != s
          ? (0, i.jsx)("img", { src: s, alt: t.name, height: n, width: n })
          : (0, i.jsx)("div", {
              className: a.F,
              children: (0, i.jsx)(l.E, {
                color: "text-subtle",
                variant: 48 === n ? "text-md/semibold" : "text-xxs/semibold",
                children: o,
              }),
            });
      }
      function d(e) {
        let { guild: t, size: n } = e;
        return (0, i.jsx)(s.Ay, {
          className: a.z,
          mask: s.Ay.Masks.SQUIRCLE,
          width: n,
          height: n,
          children: (0, i.jsx)(o, { guild: t, size: n }),
        });
      }
    },
    310953(e, t, n) {
      n.d(t, { A: () => h, W: () => g }), n(321073);
      var i = n(64700),
        l = n(17928),
        s = n(5180),
        r = n(960755),
        a = n(866842),
        o = n(95701),
        d = n(924985),
        c = n(458294),
        u = n(309010);
      function h(e) {
        let { withVoiceChannels: t = !1, withCurrentVoiceChannel: n = !1 } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          i = arguments.length > 2 ? arguments[2] : void 0;
        return A(
          (0, s.ai)(e)
            ? (0, a.g)()
            : r.A.getGuildWithoutChangingGuildActionRows(e).guildChannels,
          {
            currentVoiceChannelId: u.A.getVoiceChannelId(),
            selectedChannelId: u.A.getChannelId(),
          },
          { withVoiceChannels: t, withCurrentVoiceChannel: n },
          i,
        );
      }
      function g(e, t, n) {
        let { withVoiceChannels: s = !1, withCurrentVoiceChannel: r = !1 } =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          a = arguments.length > 4 ? arguments[4] : void 0,
          o = (0, l.bG)([c.default], () => c.default.getGuildChangeSentinel(e)),
          h = (0, l.bG)([d.A], () => d.A.version),
          { currentVoiceChannelId: g, selectedChannelId: E } = (0, l.cf)(
            [u.A],
            () => ({
              currentVoiceChannelId: u.A.getVoiceChannelId(),
              selectedChannelId: u.A.getChannelId(),
            }),
          );
        return (0, i.useMemo)(
          () =>
            A(
              t,
              { currentVoiceChannelId: g, selectedChannelId: E },
              { withVoiceChannels: s, withCurrentVoiceChannel: r },
              a,
            ).map((e) => e.id),
          [t, n, o, h],
        );
      }
      function A(e, t) {
        let { currentVoiceChannelId: n, selectedChannelId: i } = t,
          { withVoiceChannels: l, withCurrentVoiceChannel: s } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = arguments.length > 3 ? arguments[3] : void 0,
          a = [];
        return (
          e.forEachShownChannel((e) => {
            ((0, o.tr)(e.type) ||
              (l && (0, o.ay)(e.type)) ||
              (s && (e.id === n || e.id === i))) &&
              a.push(e);
          }, r),
          a
        );
      }
    },
    963169(e, t, n) {
      n.d(t, { MS: () => a, OE: () => o, Qb: () => d });
      var i = n(228366),
        l = n(976860),
        s = n(954571),
        r = n(652215);
      function a() {
        i.h.dispatch({ type: "ROUTE_CHANGED" });
      }
      function o(e) {
        (0, l.TX)() &&
          (s.default.track(r.HAw.APP_BACK_FORWARD_NAVIGATED, {
            nav_direction: -1,
            nav_trigger: e,
          }),
          (0, l.aX)());
      }
      function d(e) {
        (0, l.TX)() &&
          (s.default.track(r.HAw.APP_BACK_FORWARD_NAVIGATED, {
            nav_direction: 1,
            nav_trigger: e,
          }),
          (0, l.sY)());
      }
    },
    866842(e, t, n) {
      n.d(t, { D: () => L, g: () => R }), n(321073);
      var i = n(64700),
        l = n(735438),
        s = n.n(l),
        r = n(873298),
        a = n(933958),
        o = n(181079),
        d = n(313281),
        c = n(424345),
        u = n(698441),
        h = n(695633),
        g = n(152007),
        A = n(95701),
        E = n(924985),
        p = n(734057),
        I = n(945886),
        C = n(760751),
        m = n(576705),
        _ = n(222823),
        b = n(309010),
        N = n(543465),
        v = n(403362),
        f = n(32603),
        T = n(349828),
        S = n(818348);
      let O =
        21552 == n.j
          ? [a.Ay, o.A, u.Ay, h.A, g.A, E.A, p.A, C.A, m.A, _.Ay, b.A, N.Ay]
          : null;
      function L() {
        let { hasAccess: e } = (0, d.TW)("FavoritesGuildChannelList"),
          [t, n] = i.useState(() => R()),
          l = i.useMemo(() => R({}), []);
        i.useEffect(() => {
          let e = s().throttle(() => n(R()), 100);
          return (
            O.forEach((t) => t.addChangeListener(e)),
            () => O.forEach((t) => t.removeChangeListener(e))
          );
        }, []);
        let r = e ? t : l,
          a = (function (e) {
            if (e.getSections().length > f.TF) return !1;
            let t = !1;
            return (
              e.forEachShownChannel(() => {
                t = !0;
              }),
              !t
            );
          })(r);
        return { guildChannels: r, shouldShowEmptyState: a };
      }
      function R(e) {
        let t = e ?? o.A.getFavoriteChannels(),
          n = N.Ay.isGuildCollapsed(T.Vc),
          i = b.A.getChannelId(),
          l = p.A.getChannel(i),
          a = b.A.getVoiceChannelId(),
          u = [],
          g = {};
        for (let e in t) {
          let n = t[e],
            i = p.A.getChannel(n.id);
          if (null == i || n.type === r.Ip.CATEGORY) continue;
          let l = (0, c.K)(t, n, i);
          if (
            null == n.parentId ||
            null == t[n.parentId] ||
            t[n.parentId].type !== r.Ip.CATEGORY
          ) {
            u.push(l);
            continue;
          }
          let s = n.parentId;
          s in g || (g[s] = []), g[s].push(l);
        }
        function C(e, i) {
          let { isCollapsed: r, isMuted: o } = i;
          return s()(e)
            .map((e) => {
              if (!e.isPrivate() && !m.A.can(S.xB.VIEW_CHANNEL, e)) return null;
              let d = null != l && (l.id === e.id || a === e.id),
                c = null != l && l.isThread() && l.parent_id === e.id,
                u =
                  (d || c || !r
                    ? h.A.getActiveJoinedRelevantThreadsForParent(
                        e.guild_id,
                        e.id,
                      )
                    : h.A.getActiveJoinedUnreadThreadsForParent(
                        e.guild_id,
                        e.id,
                      )) ?? {},
                g = (0, f.wF)(e, u, l, a, n),
                E = I.A.isCollapsed(e.id),
                p = N.Ay.isChannelMuted(e.guild_id, e.id),
                C = {
                  id: e.id,
                  record: e,
                  category: i,
                  position: t[e.id].order,
                  threadIds: g,
                  threadCount: s().size(g),
                  isCollapsed: E,
                  isMuted: p,
                  isFirstVoiceChannel: !1,
                  subtitle: (0, f.go)(e, E, !1),
                };
              return d || c || !s().isEmpty(u) || _.Ay.getMentionCount(e.id) > 0
                ? C
                : (n && p) ||
                    (r &&
                      (p ||
                        o ||
                        (0, A.gV)(e.type) ||
                        ((0, A.ig)(e.type) && !1 === _.Ay.hasUnread(e.id))))
                  ? null
                  : C;
            })
            .filter(v.Vq)
            .sortBy((e) => {
              let { record: t } = e;
              return t.isGuildVocal() ? t.position + 1e4 : t.position;
            })
            .value();
        }
        let O = null,
          L = {
            isMuted: !1,
            isCollapsed: !1,
            position: 0,
            getChannelRecords: () => u,
            getShownChannelIds: () => u.map((e) => e.id),
            getShownChannelAndThreadIds: () => u.map((e) => e.id),
            isEmpty: () => 0 === u.length,
            get channelList() {
              return null == O && (O = C(u, this)), O;
            },
          },
          R = (0, d.m_)(t)
            .filter((e) => null != e.id)
            .map((e) => {
              let { id: n } = e,
                i = o.A.getCategoryRecord(n);
              if (null == i) return null;
              let l = g[n] ?? [],
                s = N.Ay.isChannelMuted(T.Vc, n),
                r = E.A.isCollapsed(n),
                a = null;
              return {
                isMuted: s,
                isCollapsed: r,
                record: i,
                id: n,
                position: t[n]?.order ?? 0,
                getChannelRecords: () => l,
                getShownChannelIds: () => l.map((e) => e.id),
                getShownChannelAndThreadIds: () => l.map((e) => e.id),
                isEmpty: () => 0 === l.length,
                get channelList() {
                  return null == a && (a = C(l, this)), a;
                },
              };
            })
            .filter((e) => null != e),
          M = 0;
        for (let e of [L, ...R])
          for (let t of ((e.position = ++M), e.channelList)) t.position = ++M;
        let y = { isEmpty: () => !0, getRows: () => [], getRow: () => null },
          G = { isEmpty: () => !0, getRows: () => [], getRow: () => null };
        return {
          id: T.Vc,
          hideMutedChannels: n,
          favoritesSectionNumber: 1,
          recentsSectionNumber: 2,
          voiceChannelsSectionNumber: -999,
          getSections() {
            let e = [];
            (e[f.Xt] = 0),
              (e[f.PU] = 0),
              (e[f.HP] = 0),
              (e[f.yO] = 0),
              (e[f.bK] = L.channelList.length);
            for (let t = 0; t < R.length; t++)
              e[f.TF + t] = Math.max(1, R[t].channelList.length);
            return e;
          },
          isPlaceholderRow: (e, t) =>
            !(e < f.TF) && 0 === t && 0 === R[e - f.TF].channelList.length,
          getCategoryFromSection: (e) => (e === f.bK ? L : R[e - f.TF]),
          getNamedCategoryFromSection: (e) => R[e - f.TF],
          getChannelFromSectionRow(e, t) {
            let n = this.getCategoryFromSection(e);
            return null == n || null == n.channelList[t]
              ? null
              : { category: n, channel: n.channelList[t] };
          },
          getGuildActionSection: () => y,
          getChannelNoticeSection: () => G,
          getFirstVoiceChannel: () => null,
          getSectionRowsFromChannel(e) {
            let t = [L, ...R];
            for (let n = 0; n < t.length; n++)
              for (let i = 0; i < t[n].channelList.length; i++)
                if (t[n].channelList[i].id === e)
                  return [{ section: n + f.bK, row: i }];
            return [];
          },
          forEachShownChannel(e) {
            for (let t of [L, ...R])
              for (let n of t.channelList)
                for (let t of (e(n.record), n.threadIds)) {
                  let n = p.A.getChannel(t);
                  null != n && e(n);
                }
          },
          forEachChannel(e) {
            for (let t of [L, ...R]) for (let n of t.getChannelRecords()) e(n);
          },
          getSlicedChannels: (e) => [[], e, []],
          getChannels: () => [],
        };
      }
    },
    414736(e, t, n) {
      n.d(t, { U: () => h, _: () => u });
      var i = n(627968);
      n(64700);
      var l = n(691540),
        s = n(857250),
        r = n(97483),
        a = n(228366),
        o = n(927018),
        d = n(249581),
        c = n(985018);
      function u(e) {
        a.h.dispatch({
          type: "POGGERMODE_ACHIEVEMENT_UNLOCK",
          achievementId: e,
        });
      }
      function h(e, t) {
        let n = (0, o.vM)(e);
        null != n &&
          (0, l.P0)(
            (0, s.o)(c.intl.string(c.t.MPpEUA), r.Ck.CUSTOM, {
              position: r.xJ.BOTTOM,
              component: (0, i.jsx)(d.A, { achievement: n, unlocked: t }),
              duration: 6e3,
            }),
          );
      }
    },
    874486(e, t, n) {
      n.d(t, { A: () => h });
      var i = n(17928),
        l = n(228366),
        s = n(495544),
        r = n(414736),
        a = n(3137),
        o = n(559908);
      let d = { unlockedAchievements: {} },
        c = { ...d };
      class u extends i.Ay.PersistedStore {
        static displayName = "PoggermodeAchievementStore";
        static persistKey = "PoggermodeAchievementStore";
        initialize(e) {
          this.waitFor(s.default, a.A, o.Ay);
          let t = e ?? { ...d };
          for (let e in t) c[e] = t[e];
        }
        getState() {
          return c;
        }
        getAllUnlockedAchievements() {
          return c.unlockedAchievements;
        }
        getUnlocked(e) {
          return c.unlockedAchievements[e] ?? null;
        }
      }
      let h = new u(l.h, {
        POGGERMODE_ACHIEVEMENT_UNLOCK: function (e) {
          let { achievementId: t } = e;
          if (!a.A.isEnabled()) return !1;
          null != c.unlockedAchievements[t] ||
            ((c.unlockedAchievements = {
              ...c.unlockedAchievements,
              [t]: { achievementId: t, dateUnlocked: Date.now() },
            }),
            setTimeout(() => {
              (0, r.U)(t, !0);
            }, 2e3));
        },
      });
    },
    820785(e, t, n) {
      n.d(t, {
        KJ: () => B,
        N_: () => k,
        vw: () => Z,
        lg: () => F,
        nG: () => W,
        c3: () => H,
        OS: () => U,
        Y9: () => K,
      });
      var i = n(627968),
        l = n(64700),
        s = n(939249),
        r = n(97808),
        a = n(778712),
        o = n(685761),
        d = n(173936),
        c = n(99677),
        u = n(194261),
        h = n(34188),
        g = n(577473),
        A = n(403581),
        E = n(323384),
        p = n(625903),
        I = n(659421),
        C = n(329308),
        m = n(571694),
        _ = n(47167),
        b = n(713654),
        N = n(652215),
        v = n(985018);
      function f(e) {
        if (null == e) return null;
        switch (e.type) {
          case N.rbe.GUILD_ANNOUNCEMENT:
            return v.intl.string(v.t.l1dkSD);
          case N.rbe.GUILD_STORE:
            return v.intl.string(v.t["P1/Erq"]);
          case N.rbe.DM:
          case N.rbe.GROUP_DM:
            return v.intl.string(v.t.jN2DfZ);
          case N.rbe.PRIVATE_THREAD:
            return v.intl.string(v.t.F1zyvU);
          case N.rbe.ANNOUNCEMENT_THREAD:
          case N.rbe.PUBLIC_THREAD:
            return v.intl.string(v.t["7Xm5QI"]);
          case N.rbe.GUILD_TEXT:
            return v.intl.string(v.t.Pnajj0);
          case N.rbe.GUILD_FORUM:
            return e.isMediaChannel()
              ? v.intl.string(v.t.seKITE)
              : v.intl.string(v.t.GbryDd);
          case N.rbe.GUILD_MEDIA:
            return v.intl.string(v.t.seKITE);
          case N.rbe.GUILD_STAGE_VOICE:
            return v.intl.string(v.t.EErMzA);
          case N.rbe.GUILD_VOICE:
            return v.intl.string(v.t.BVZqJl);
          case N.rbe.GUILD_CATEGORY:
          default:
            return null;
        }
      }
      var T = n(503698),
        S = n.n(T),
        O = n(702923);
      let L = (e) => {
        let { value: t = 0, text: n, className: l, lowImportance: s, ...r } = e;
        return null != n
          ? (0, i.jsx)("div", {
              className: S()(O.i, l, s && O.H),
              ...r,
              children: n,
            })
          : t > 0
            ? (0, i.jsx)("div", {
                className: S()(O.i, l, s && O.H),
                ...r,
                children: t,
              })
            : null;
      };
      var R = n(137177),
        M = n(548118),
        y = n(376943),
        G = n(636585),
        x = n(71393),
        w = n(994500),
        j = n(287809),
        V = n(427262),
        D = n(818061);
      class P extends l.PureComponent {
        node;
        componentDidMount() {
          let { focused: e, onFocus: t } = this.props,
            { node: n } = this;
          e && null != n && t(n);
        }
        componentDidUpdate(e) {
          let { focused: t, onFocus: n } = this.props,
            { node: i } = this;
          null != i && t && !e.focused && n(i);
        }
        handleClick = (e) => {
          e.preventDefault();
          let { onClick: t } = this.props,
            { node: n } = this;
          null != n && t(e, n);
        };
        handleMouseEnter = (e) => {
          let { onMouseEnter: t } = this.props,
            { node: n } = this;
          null != n && t(e, n);
        };
        setRef = (e) => {
          this.node = e;
        };
        render() {
          let {
            focused: e,
            children: t,
            score: n,
            onContextMenu: l,
            id: r,
            "aria-label": a,
          } = this.props;
          return (0, i.jsxs)(s.D, {
            role: "option",
            id: r,
            "aria-label": a,
            "aria-selected": e,
            focusProps: { enabled: !1 },
            tabIndex: -1,
            innerRef: this.setRef,
            className: D.Ke,
            onClick: this.handleClick,
            onMouseEnter: this.handleMouseEnter,
            onContextMenu: l,
            children: [
              t,
              null != n
                ? (0, i.jsx)("div", { className: D.fN, children: 0 | n })
                : null,
            ],
          });
        }
      }
      class U extends l.Component {
        renderIcon() {
          let { guild: e } = this.props;
          return (0, i.jsx)("div", {
            className: D._C,
            children: (0, i.jsx)(M.Ay, {
              tabIndex: -1,
              guild: e,
              size: M.Ay.Sizes.MINI,
              className: D.$f,
            }),
          });
        }
        renderName() {
          let { guild: e } = this.props;
          return (0, i.jsx)("div", {
            className: D.UU,
            children: (0, i.jsx)("span", { className: D.YW, children: e.name }),
          });
        }
        renderContent() {
          let { unread: e, children: t } = this.props;
          return (0, i.jsxs)("div", {
            className: e ? D.XB : D.xr,
            children: [
              this.renderIcon(),
              this.renderName(),
              (0, i.jsx)("div", { className: D.Lr, children: t }),
            ],
          });
        }
        getAccessibilityLabel() {
          let { guild: e } = this.props;
          return v.intl.formatToPlainString(v.t.WVq3Lr, { name: e.name });
        }
        render() {
          let {
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: l,
            focused: s,
            score: r,
            id: a,
          } = this.props;
          return (0, i.jsx)(P, {
            id: a,
            "aria-label": this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: l,
            focused: s,
            score: r,
            children: this.renderContent(),
          });
        }
      }
      class H extends l.Component {
        static defaultProps = { unread: !1 };
        renderIcon() {
          let { channel: e } = this.props,
            t = (0, b.gU)(e);
          if (null == t) return null;
          let n = f(e) ?? "";
          return (0, i.jsx)("div", {
            className: D.zc,
            role: "img",
            "aria-label": n,
            children: (0, i.jsx)(t, {
              className: D.Kk,
              size: "xs",
              color: "currentColor",
            }),
          });
        }
        renderName() {
          let e,
            t,
            {
              mentions: n,
              category: l,
              channel: s,
              isMentionLowImportance: r,
            } = this.props;
          return (
            null != n &&
              n > 0 &&
              (e = (0, i.jsx)(L, {
                className: D.qS,
                value: n,
                lowImportance: r,
              })),
            null != l &&
              (t = (0, i.jsx)("span", {
                className: D.N4,
                children: (0, _.m1)(l, j.default, w.A),
              })),
            (0, i.jsxs)("div", {
              className: D.UU,
              children: [
                (0, i.jsx)("span", {
                  className: D.YW,
                  children: (0, _.m1)(s, j.default, w.A),
                }),
                e,
                this.renderVoiceStates(),
                t,
              ],
            })
          );
        }
        renderVoiceStates() {
          let { voiceStates: e, channel: t } = this.props;
          return null == e
            ? null
            : (0, i.jsx)(G.A, {
                className: D.x7,
                guildId: t.guild_id,
                users: e.map((e) => {
                  let { user: t } = e;
                  return { user: t };
                }),
                max: 4,
              });
        }
        renderContent() {
          let { unread: e, mentions: t, children: n } = this.props;
          return (0, i.jsxs)("div", {
            "aria-hidden": !0,
            className: e || (null != t && t > 0) ? D.XB : D.xr,
            children: [
              this.renderIcon(),
              this.renderName(),
              (0, i.jsx)("div", { className: D.Lr, children: n }),
            ],
          });
        }
        getAccessibilityLabel() {
          let { channel: e } = this.props,
            t = x.A.getGuild(this.props.channel.guild_id)?.name,
            n = (0, _.m1)(e, j.default, w.A),
            i = f(e);
          return v.intl.formatToPlainString(v.t["Vw/da+"], {
            name: n,
            type: i,
            guild: t,
          });
        }
        render() {
          let {
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: l,
            focused: s,
            score: r,
            id: a,
          } = this.props;
          return (0, i.jsx)(P, {
            id: a,
            "aria-label": this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: l,
            focused: s,
            score: r,
            children: this.renderContent(),
          });
        }
      }
      class W extends l.Component {
        renderIcon() {
          let { channel: e, status: t } = this.props;
          return (0, i.jsx)("div", {
            className: D.IU,
            children: (0, i.jsx)(r.eu, {
              src: (0, m.Y)(e),
              size: a._3.SIZE_20,
              "aria-hidden": !0,
              status: t,
            }),
          });
        }
        renderName() {
          let e,
            { mentions: t, channel: n } = this.props;
          return (
            null != t &&
              t > 0 &&
              (e = (0, i.jsx)(L, { className: D.qS, value: t })),
            (0, i.jsxs)("div", {
              className: D.UU,
              children: [
                (0, i.jsx)("span", {
                  className: D.YW,
                  children: (0, _.m1)(n, j.default, w.A),
                }),
                e,
              ],
            })
          );
        }
        renderContent() {
          let { mentions: e, children: t } = this.props;
          return (0, i.jsxs)("div", {
            className: null != e && e > 0 ? D.XB : D.xr,
            children: [
              this.renderIcon(),
              this.renderName(),
              (0, i.jsx)("div", { className: D.Lr, children: t }),
            ],
          });
        }
        getAccessibilityLabel() {
          let { channel: e, mentions: t } = this.props,
            n = (0, _.m1)(e, j.default, w.A);
          return null != t && t > 0
            ? v.intl.formatToPlainString(v.t.LYdVfN, { name: n, mentions: t })
            : v.intl.formatToPlainString(v.t.lLSbno, { name: n });
        }
        render() {
          let {
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: l,
            focused: s,
            score: r,
            id: a,
          } = this.props;
          return (0, i.jsx)(P, {
            id: a,
            "aria-label": this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: l,
            focused: s,
            score: r,
            children: this.renderContent(),
          });
        }
      }
      class B extends l.Component {
        renderIcon() {
          let { user: e, status: t, isMobile: n } = this.props;
          return (0, i.jsx)("div", {
            className: D.zc,
            children: (0, i.jsx)(r.eu, {
              src: e.getAvatarURL(void 0, 20),
              "aria-hidden": !0,
              size: a._3.SIZE_20,
              status: t,
              isMobile: n,
            }),
          });
        }
        getDisplayNickname() {
          let e,
            { user: t, comparator: n } = this.props,
            i = w.A.getNickname(t.id);
          return (
            ((e = n === t.tag || null == n || "" === n ? t.username : n) ===
              t.username ||
              e === t.id) &&
              (e = i ?? V.Ay.getName(t)),
            e
          );
        }
        renderName() {
          let e,
            { user: t, mentions: n } = this.props,
            l = this.getDisplayNickname();
          return (
            null != n &&
              n > 0 &&
              (e = (0, i.jsx)(L, { className: D.qS, value: n })),
            (0, i.jsxs)("div", {
              className: D.UU,
              children: [
                (0, i.jsx)("span", { className: D.YW, children: l }),
                e,
                (0, i.jsx)("span", {
                  className: D.Xh,
                  children: V.Ay.getUserTag(t),
                }),
              ],
            })
          );
        }
        renderContent() {
          let { children: e, mentions: t } = this.props;
          return (0, i.jsxs)("div", {
            className: null != t && t > 0 ? D.XB : D.xr,
            children: [
              this.renderIcon(),
              this.renderName(),
              (0, i.jsx)("div", { className: D.Lr, children: e }),
            ],
          });
        }
        getAccessibilityLabel() {
          let { mentions: e, user: t } = this.props,
            n = this.getDisplayNickname(),
            i = V.Ay.getUserTag(t);
          return null != e && e > 0
            ? v.intl.formatToPlainString(v.t["6b9UrR"], {
                name: n,
                id: i,
                mentions: e,
              })
            : v.intl.formatToPlainString(v.t.GWYOAY, { name: n, id: i });
        }
        render() {
          let {
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: l,
            focused: s,
            score: r,
            id: a,
          } = this.props;
          return (0, i.jsx)(P, {
            id: a,
            "aria-label": this.getAccessibilityLabel(),
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: l,
            focused: s,
            score: r,
            children: this.renderContent(),
          });
        }
      }
      class F extends l.Component {
        renderContent() {
          let { children: e, application: t } = this.props;
          return (0, i.jsxs)("div", {
            className: D.xr,
            children: [
              (0, i.jsx)("div", {
                className: D.zc,
                children: (0, i.jsx)(R.A, {
                  tabIndex: -1,
                  className: D.Gt,
                  game: t,
                  size: D.D0,
                }),
              }),
              t.name,
              (0, i.jsx)("div", { className: D.Lr, children: e }),
            ],
          });
        }
        render() {
          let {
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            focused: l,
            id: s,
          } = this.props;
          return (0, i.jsx)(P, {
            id: s,
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            focused: l,
            children: this.renderContent(),
          });
        }
      }
      class K extends l.Component {
        render() {
          return (0, i.jsx)("div", {
            className: D.__invalid_resultDefault,
            children: (0, i.jsx)("div", {
              className: D.xr,
              children: (0, i.jsx)("div", {
                className: D.wx,
                children: this.props.children,
              }),
            }),
          });
        }
      }
      class k extends l.Component {
        renderContent() {
          let e,
            t,
            { link: n, children: l } = this.props;
          if (null != n.inviteCode)
            (e = v.intl.string(v.t.w6QG3F)),
              (t = (0, i.jsx)(o.f, { size: "xs", color: "currentColor" }));
          else {
            let l = (0, y.vu)(n.path);
            null == l || void 0 === l.messageId
              ? ((e = v.intl.string(v.t.qbSCqj)),
                (t = (0, i.jsx)(d.q, { size: "xs", color: "currentColor" })))
              : (0, y.r9)(l)
                ? ((e = v.intl.string(v.t["6Fd/j1"])),
                  (t = (0, i.jsx)(c.t, { size: "xs", color: "currentColor" })))
                : ((e = v.intl.string(v.t.jQRwp4)),
                  (t = (0, i.jsx)(u.X, { size: "xs", color: "currentColor" })));
          }
          return (0, i.jsxs)("div", {
            className: D.xr,
            children: [
              (0, i.jsx)("div", { className: D.zc, children: t }),
              e,
              (0, i.jsx)("div", { className: D.Lr, children: l }),
            ],
          });
        }
        render() {
          let {
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: l,
            focused: s,
            score: r,
            id: a,
          } = this.props;
          return (0, i.jsx)(P, {
            id: a,
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: l,
            focused: s,
            score: r,
            children: this.renderContent(),
          });
        }
      }
      class Z extends l.Component {
        renderContent() {
          let e,
            t,
            { navigationRecord: n, children: l } = this.props;
          switch (n.type) {
            case C.t1.SHOP:
              (e = v.intl.string(v.t.pWG4ze)),
                (t = (0, i.jsx)(h.U, { size: "xs", color: "currentColor" }));
              break;
            case C.t1.SHOP_ORBS_TAB:
              (e = v.intl.string(v.t.EBYkzk)),
                (t = (0, i.jsx)(h.U, { size: "xs", color: "currentColor" }));
              break;
            case C.t1.QUEST_ORBS:
              (e = `${v.intl.string(v.t.ElYQFS)} ${v.intl.string(v.t.JALI2K)}`),
                (t = (0, i.jsx)(g.r, { size: "xs", color: "currentColor" }));
              break;
            case C.t1.NITRO_HOME:
              (e = v.intl.string(v.t.Ipxkog)),
                (t = (0, i.jsx)(A.t, { size: "xs", color: "currentColor" }));
              break;
            case C.t1.QUEST_HOME:
              (e = v.intl.string(v.t.JALI2K)),
                (t = (0, i.jsx)(g.r, { size: "xs", color: "currentColor" }));
              break;
            case C.t1.APPS_HOME:
              (e = v.intl.string(v.t.PHjkRE)),
                (t = (0, i.jsx)(E.k, { size: "xs", color: "currentColor" }));
              break;
            case C.t1.SETTINGS:
              (e = n.label ?? v.intl.string(v.t["3D5yo/"])),
                (t = (0, i.jsx)(p.Z, { size: "xs", color: "currentColor" }));
              break;
            case C.t1.PLAYGROUND:
              if (
                ((e = n.label ?? `${n.collectionId} Playground`),
                null != n.IconComponent)
              ) {
                let e = n.IconComponent;
                t = (0, i.jsx)(e, { size: "xs", color: "currentColor" });
              } else t = (0, i.jsx)(I.H, { size: "xs", color: "currentColor" });
              break;
            default:
              (e = n.id),
                (t = (0, i.jsx)(d.q, { size: "xs", color: "currentColor" }));
          }
          return (0, i.jsxs)("div", {
            className: D.xr,
            children: [
              (0, i.jsx)("div", { className: D.zc, children: t }),
              (0, i.jsx)("div", { className: D.UU, children: e }),
              (0, i.jsx)("div", { className: D.Lr, children: l }),
            ],
          });
        }
        render() {
          let {
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: l,
            focused: s,
            score: r,
            id: a,
          } = this.props;
          return (0, i.jsx)(P, {
            id: a,
            onMouseEnter: e,
            onClick: t,
            onFocus: n,
            onContextMenu: l,
            focused: s,
            score: r,
            children: this.renderContent(),
          });
        }
      }
    },
    320989(e, t, n) {
      n.d(t, { A: () => o });
      var i = n(984083),
        l = n(446458),
        s = n(366811),
        r = n(976860);
      n(652215);
      class a {
        unlistenHistory;
        unlistenKeyboardChange;
        rewrites = new Set();
        listeners = new Set();
        routeChangeCount = 0;
        timer = -1;
        connected = !1;
        initialize() {
          this.cleanup(),
            (this.unlistenHistory = (0, r.JK)().listen(this.handleRouteChange));
          let { pathname: e } = (0, r.JK)().location;
          s.A.getState().resetPath(e),
            (this.unlistenKeyboardChange = s.A.subscribe(
              this.handleKeybindRouteChange,
            )),
            l.A.addChangeListener(this.handleConnectionChange);
        }
        handleConnectionChange = () => {
          let e = l.A.isConnected(),
            t = e && !this.connected;
          (this.connected = e),
            t &&
              ((this.routeChangeCount = 0),
              this.executeRouteRewrites((0, r.JK)().location, "REPLACE"));
        };
        handleRouteChange = (e, t) => {
          if ("POP" !== t && this.executeRouteRewrites(e, t)) return;
          let n = s.A.getState();
          for (let i of (n.basePath !== e.pathname && n.resetPath(e.pathname),
          this.listeners))
            try {
              i(e, t);
            } catch (e) {
              console.warn(
                "RouteManager.listen: A route listener has caused an error",
                e.message,
              );
            }
          this.routeChangeCount = 0;
        };
        executeRouteRewrites(e, t) {
          if (((this.routeChangeCount += 1), this.routeChangeCount < 10))
            for (let n of this.rewrites) {
              let l = (0, r.JK)().location.pathname,
                s = n(e, t);
              if (null != s)
                return (
                  (0, i.Z)({
                    message:
                      "RouteManager.handleRouteChange: A route rewrite is replacing the current route",
                    data: { replacePath: s.path, previousPath: l },
                  }),
                  (0, r.bG)(s.path, s.state),
                  !0
                );
            }
          else
            throw Error(
              "RouteManager: Something has gone horribly wrong with rewrites",
            );
          return !1;
        }
        handleKeybindRouteChange = (e) => {
          let { path: t } = e;
          -1 !== this.timer && clearTimeout(this.timer),
            null != t && (this.timer = setTimeout(this.flushRoute, 200));
        };
        flushRoute = () => {
          clearTimeout(this.timer);
          let e = s.A.getState();
          null != e.path && (0, r.pX)(e.path);
        };
        cleanup() {
          this.unlistenHistory?.(),
            (this.unlistenHistory = void 0),
            this.unlistenKeyboardChange?.(),
            (this.unlistenKeyboardChange = void 0),
            l.A.removeChangeListener(this.handleConnectionChange);
        }
        addRouteChangeListener(e) {
          return (
            null != this.unlistenHistory && e((0, r.JK)().location, "REPLACE"),
            this.listeners.add(e),
            () => this.removeRouteChangeListener(e)
          );
        }
        addRouteRewriter(e) {
          if (null != this.unlistenHistory) {
            let t = e((0, r.JK)().location, (0, r.JK)().action);
            null != t && (0, r.bG)(t.path, t.state);
          }
          return this.rewrites.add(e), () => this.removeRouteRewriter(e);
        }
        removeRouteChangeListener(e) {
          this.listeners.delete(e);
        }
        removeRouteRewriter(e) {
          this.rewrites.delete(e);
        }
        getHistory() {
          return (0, r.JK)();
        }
      }
      let o = new a();
    },
    558001(e, t, n) {
      n.d(t, { N: () => s });
      var i = n(954571),
        l = n(652215);
      let s = (e, t) => {
        i.default.track(l.HAw.SAFETY_SETTINGS_NOTICE_ACTION, {
          notice_type: e,
          action: t,
        });
      };
    },
    866945(e, t, n) {
      n.d(t, { e: () => p });
      var i = n(627968),
        l = n(64700),
        s = n(503698),
        r = n.n(s);
      if (21552 == n.j) var a = n(885574);
      if (21552 == n.j) var o = n(834730);
      if (21552 == n.j) var d = n(349288);
      if (21552 == n.j) var c = n(939249);
      if (21552 == n.j) var u = n(789645);
      var h = n(558001),
        g = n(835002),
        A = n(985018),
        E = n(751530);
      function p(e) {
        let {
            label: t,
            labelHook: n,
            count: s,
            dismissNotice: p,
            className: I,
            noticeType: C,
          } = e,
          m = null != p;
        l.useEffect(() => {
          (0, h.N)(C, g.YX.VIEWED);
        }, [C]);
        let _ = l.useCallback(() => {
            null != p && (p(), (0, h.N)(C, g.YX.DISMISS));
          }, [C, p]),
          b = l.useCallback(() => {
            n(), (0, h.N)(C, g.YX.LEARN_MORE);
          }, [C, n]);
        return (0, i.jsxs)("div", {
          className: r()(E.I, I),
          children: [
            (0, i.jsx)(a.m, { size: "md" }),
            (0, i.jsx)(o.E, {
              variant: "text-sm/medium",
              color: "interactive-text-active",
              children:
                null != s
                  ? A.intl.format(t, {
                      hook: (e, t) =>
                        (0, i.jsx)(d.Anchor, { onClick: b, children: e }, t),
                      count: s,
                    })
                  : A.intl.format(t, {
                      hook: (e, t) =>
                        (0, i.jsx)(d.Anchor, { onClick: b, children: e }, t),
                    }),
            }),
            m &&
              (0, i.jsx)(c.D, {
                className: E.b,
                onClick: _,
                children: (0, i.jsx)(u.P, {}),
              }),
          ],
        });
      }
    },
    75804(e, t, n) {
      n.d(t, { P: () => i });
      let i = [
        0, 0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 2.25, 2.5, 2.75, 3, 3.25,
        3.5, 3.75, 4, 4.25, 4.5, 4.75, 5, 5.25, 5.5, 5.75, 6, 6.25, 6.5, 6.75,
        7, 7.25, 7.5, 7.75, 8, 8.25, 8.5, 8.75, 9, 9.25, 9.5, 9.75, 10,
      ];
    },
    839067(e, t, n) {
      n.d(t, { A: () => a });
      var i = n(17928),
        l = n(228366);
      let s = null;
      class r extends i.Ay.Store {
        static displayName = "ApplicationStoreLocationStore";
        getCurrentPath() {
          return null != s ? s.pathname : null;
        }
        getCurrentRoute() {
          var e;
          let t;
          return (
            (t = null != (e = s) && null != e.search ? e.search : ""),
            null != e ? `${e.pathname}${t}` : null
          );
        }
        reset() {
          throw Error(
            "Should not reset the store this way outside of a test environment",
          );
        }
      }
      let a = new r(l.h, {
        APPLICATION_STORE_LOCATION_CHANGE: function (e) {
          let { location: t } = e;
          s = { ...t };
        },
        APPLICATION_STORE_RESET_NAVIGATION: function () {
          s = null;
        },
      });
    },
    619921(e, t, n) {
      n.d(t, { A: () => A });
      var i = n(17928),
        l = n(228366),
        s = n(734057),
        r = n(650048),
        a = n(71393),
        o = n(309010),
        d = n(567761),
        c = n(652215);
      let u = (window?.location?.pathname ?? "").startsWith(c.BVt.ACTIVITIES)
        ? c.BVt.ACTIVITIES
        : null;
      function h(e) {
        let { link: t } = e;
        if (u === t) return !1;
        u = t;
      }
      class g extends i.Ay.Store {
        static displayName = "AppViewStore";
        initialize() {
          this.waitFor(r.A, d.default, o.A, a.A, s.A);
        }
        getHomeLink() {
          return u ?? r.A.fallbackRoute;
        }
      }
      let A = new g(l.h, {
        OVERLAY_INITIALIZE: function () {
          let e = d.default.getPrivateChannelIds(),
            t = o.A.getChannelId(c.ME);
          (null != t || null != e[0]) && (u = c.BVt.CHANNEL(c.ME, t ?? e[0]));
        },
        APP_VIEW_SET_HOME_LINK: h,
        APPLICATION_STORE_LOCATION_CHANGE: function (e) {
          let { location: t } = e;
          h({ link: t.pathname, type: "APP_VIEW_SET_HOME_LINK" });
        },
        APPLICATION_STORE_RESET_NAVIGATION: function () {
          if (null == u || !u.startsWith(c.BVt.APPLICATION_STORE)) return !1;
          u = c.BVt.APPLICATION_STORE;
        },
        CHANNEL_SELECT: function (e) {
          let { guildId: t, channelId: n } = e;
          if (null == t && null != n) {
            let e = c.BVt.CHANNEL(c.ME, n);
            if (e !== u) return (u = e), !0;
          }
          return !1;
        },
        CHANNEL_DELETE: function (e) {
          let { channel: t } = e;
          null == t.guild_id &&
            null != t.id &&
            null != u &&
            u === c.BVt.CHANNEL(c.ME, t.id) &&
            (u = null);
        },
      });
    },
    550640(e, t, n) {
      n.d(t, { c: () => a });
      var i = n(627968);
      n(64700);
      var l = n(661531),
        s = n(996682),
        r = n(27989);
      let a = (e) => {
        let {
            size: t = "md",
            width: n,
            height: a,
            color: o = l.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            ...c
          } = e,
          u = (0, r.J)(t),
          h = u?.width ?? n,
          g = u?.height ?? a;
        return (0, i.jsx)("svg", {
          ...(0, s.A)(c),
          xmlns: "http://www.w3.org/2000/svg",
          width: h,
          height: g,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, i.jsx)("path", {
            fill: "string" == typeof o ? o : o.css,
            fillRule: "evenodd",
            d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm-2.06-3.65a1 1 0 0 1-1.88-.7l1.9-5.08a.5.5 0 0 0 .04-.18v-2.22a.5.5 0 0 0-.38-.48l-2.86-.72a1 1 0 0 1 .48-1.94l3.55.89a5 5 0 0 0 2.42 0l3.55-.89a1 1 0 1 1 .48 1.94l-2.86.72a.5.5 0 0 0-.38.48v2.22l.03.18 1.9 5.08a1 1 0 0 1-1.87.7l-1.6-4.25a.5.5 0 0 0-.93 0l-1.6 4.25ZM14 6a2 2 0 0 0-2-2 2 2 0 0 0-2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2Z",
            clipRule: "evenodd",
            className: d,
          }),
        });
      };
    },
    127062(e, t, n) {
      n.d(t, { c: () => a });
      var i = n(627968);
      n(64700);
      var l = n(661531),
        s = n(996682),
        r = n(27989);
      let a = (e) => {
        let {
            size: t = "md",
            width: n,
            height: a,
            color: o = l.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            ...c
          } = e,
          u = (0, r.J)(t),
          h = u?.width ?? n,
          g = u?.height ?? a;
        return (0, i.jsx)("svg", {
          ...(0, s.A)(c),
          xmlns: "http://www.w3.org/2000/svg",
          width: h,
          height: g,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, i.jsx)("path", {
            fill: "string" == typeof o ? o : o.css,
            fillRule: "evenodd",
            d: "M16 10.49V4a1 1 0 1 0 0-2H8a1 1 0 0 0 0 2v6.49a2 2 0 0 1-.5 1.33l-4.77 5.36A2.9 2.9 0 0 0 4.9 22h14.2a2.9 2.9 0 0 0 2.17-4.82l-4.76-5.36a2 2 0 0 1-.51-1.33ZM10 4v6.49a4 4 0 0 1-1.01 2.66l-1.35 1.51c1.14-.1 2.3.28 3.17 1.15l.13.13a3.73 3.73 0 0 0 4.56.56 3.73 3.73 0 0 1 2.02-.53L15 13.15A4 4 0 0 1 14 10.49V10h-1a1 1 0 1 1 0-2h1V7h-1a1 1 0 1 1 0-2h1V4h-4Z",
            clipRule: "evenodd",
            className: d,
          }),
        });
      };
    },
    99677(e, t, n) {
      n.d(t, { t: () => a });
      var i = n(627968);
      n(64700);
      var l = n(661531),
        s = n(996682),
        r = n(27989);
      let a = (e) => {
        let {
            size: t = "md",
            width: n,
            height: a,
            color: o = l.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            ...c
          } = e,
          u = (0, r.J)(t),
          h = u?.width ?? n,
          g = u?.height ?? a;
        return (0, i.jsxs)("svg", {
          ...(0, s.A)(c),
          xmlns: "http://www.w3.org/2000/svg",
          width: h,
          height: g,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, i.jsx)("path", {
              d: "M12.2 22c.5-.01.66-.84.37-1.24A3 3 0 0 1 15 16h.46c.35 0 .6-.34.56-.69a3 3 0 0 1 5.1-2.43l.06.06c.29.28.77.12.8-.28L22 12a10 10 0 1 0-18.45 5.36c.13.19.11.44-.04.61l-2.06 2.37A1 1 0 0 0 2.2 22h10Z",
              fill: "string" == typeof o ? o : o.css,
              className: d,
            }),
            (0, i.jsx)("path", {
              d: "M19.7 14.3a1 1 0 0 0-1.4 1.4l.29.3 2 2H15a1 1 0 1 0 0 2h5.59l-2.3 2.3a1 1 0 0 0 1.42 1.4l4-4a1 1 0 0 0 0-1.4l-2.57-2.58-1.43-1.43Z",
              fill: "string" == typeof o ? o : o.css,
              className: d,
            }),
          ],
        });
      };
    },
    360669(e, t, n) {
      n.d(t, { B: () => a });
      var i = n(627968);
      n(64700);
      var l = n(661531),
        s = n(996682),
        r = n(27989);
      let a = (e) => {
        let {
            size: t = "md",
            width: n,
            height: a,
            color: o = l.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            ...c
          } = e,
          u = (0, r.J)(t),
          h = u?.width ?? n,
          g = u?.height ?? a;
        return (0, i.jsx)("svg", {
          ...(0, s.A)(c),
          xmlns: "http://www.w3.org/2000/svg",
          width: h,
          height: g,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, i.jsx)("path", {
            fill: "string" == typeof o ? o : o.css,
            fillRule: "evenodd",
            d: "M0 6c0-1.1 1.07-2 2.4-2h19.2c1.32 0 2.4.9 2.4 2v1H0V6ZM2.4 20C1.07 20 0 19.1 0 18v-8h24v8c0 1.1-1.08 2-2.4 2H2.4ZM18 12a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2ZM3 13a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Z",
            clipRule: "evenodd",
            className: d,
          }),
        });
      };
    },
    410767(e, t, n) {
      n.d(t, { F: () => a });
      var i = n(627968);
      n(64700);
      var l = n(661531),
        s = n(996682),
        r = n(27989);
      let a = (e) => {
        let {
            size: t = "md",
            width: n,
            height: a,
            color: o = l.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            ...c
          } = e,
          u = (0, r.J)(t),
          h = u?.width ?? n,
          g = u?.height ?? a;
        return (0, i.jsx)("svg", {
          ...(0, s.A)(c),
          xmlns: "http://www.w3.org/2000/svg",
          width: h,
          height: g,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, i.jsx)("path", {
            fill: "string" == typeof o ? o : o.css,
            fillRule: "evenodd",
            d: "M4 4a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H4Zm-.5 3a.5.5 0 0 0-.5.5v1c0 .28.22.5.5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm4 0a.5.5 0 0 0-.5.5v1c0 .28.22.5.5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1ZM7 11.5c0-.28.22-.5.5-.5h1c.28 0 .5.22.5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM3.5 11a.5.5 0 0 0-.5.5v1c0 .28.22.5.5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1ZM11 7.5c0-.28.22-.5.5-.5h1c.28 0 .5.22.5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm.5 3.5a.5.5 0 0 0-.5.5v1c0 .28.22.5.5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1ZM15 7.5c0-.28.22-.5.5-.5h1c.28 0 .5.22.5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm.5 3.5a.5.5 0 0 0-.5.5v1c0 .28.22.5.5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1ZM19 7.5c0-.28.22-.5.5-.5h1c.28 0 .5.22.5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm.5 3.5a.5.5 0 0 0-.5.5v1c0 .28.22.5.5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1ZM7 15.5c0-.28.22-.5.5-.5h9c.28 0 .5.22.5.5v1a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-1Z",
            clipRule: "evenodd",
            className: d,
          }),
        });
      };
    },
    766928(e, t, n) {
      n.d(t, { W: () => a });
      var i = n(627968);
      n(64700);
      var l = n(661531),
        s = n(996682),
        r = n(27989);
      let a = (e) => {
        let {
            size: t = "md",
            width: n,
            height: a,
            color: o = l.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            ...c
          } = e,
          u = (0, r.J)(t),
          h = u?.width ?? n,
          g = u?.height ?? a;
        return (0, i.jsxs)("svg", {
          ...(0, s.A)(c),
          xmlns: "http://www.w3.org/2000/svg",
          width: h,
          height: g,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, i.jsx)("path", {
              fill: "string" == typeof o ? o : o.css,
              d: "M3 15.5V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v.5a.5.5 0 0 1-.5.5H17a4 4 0 0 0-4 4v4.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5ZM12.5 18H2a1 1 0 1 0 0 2h10.48c.33 0 .57-.3.54-.63A4.08 4.08 0 0 1 13 19v-.5a.5.5 0 0 0-.5-.5Z",
              className: d,
            }),
            (0, i.jsx)("path", {
              fill: "string" == typeof o ? o : o.css,
              fillRule: "evenodd",
              d: "M15 11c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-8Zm2 1a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1Z",
              clipRule: "evenodd",
              className: d,
            }),
          ],
        });
      };
    },
    443865(e, t, n) {
      n.d(t, { x: () => a });
      var i = n(627968);
      n(64700);
      var l = n(661531),
        s = n(996682),
        r = n(27989);
      let a = (e) => {
        let {
            size: t = "md",
            width: n,
            height: a,
            color: o = l.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            ...c
          } = e,
          u = (0, r.J)(t),
          h = u?.width ?? n,
          g = u?.height ?? a;
        return (0, i.jsx)("svg", {
          ...(0, s.A)(c),
          xmlns: "http://www.w3.org/2000/svg",
          width: h,
          height: g,
          fill: "none",
          viewBox: "0 0 24 24",
          children: (0, i.jsx)("path", {
            fill: "string" == typeof o ? o : o.css,
            d: "M4 8.5C4 4.36 7.58 1 12 1s8 3.36 8 7.5c0 2.64-.98 4.02-1.9 5.33-.49.7-.96 1.38-1.27 2.2C16.45 17.09 15.6 18 14.5 18h-1a.5.5 0 0 1-.5-.5v-5.77c0-.32.3-.56.6-.44.29.12.53.27.72.44a1 1 0 0 0 1.36-1.46A5.46 5.46 0 0 0 12 9c-1.3 0-2.72.37-3.68 1.27a1 1 0 1 0 1.36 1.46c.19-.17.43-.32.73-.44s.59.12.59.44v5.77a.5.5 0 0 1-.5.5h-1c-1.1 0-1.95-.92-2.33-1.96-.3-.83-.78-1.5-1.27-2.2C4.98 12.51 4 11.13 4 8.5ZM15.1 19c.5 0 .9.4.9.9 0 .7-.28 1.38-.78 1.88l-.34.34a3 3 0 0 1-2.12.88h-1.52a3 3 0 0 1-2.12-.88l-.34-.34c-.5-.5-.78-1.18-.78-1.89 0-.5.4-.89.9-.89h6.2Z",
            className: d,
          }),
        });
      };
    },
    685761(e, t, n) {
      n.d(t, { f: () => a });
      var i = n(627968);
      n(64700);
      var l = n(661531),
        s = n(996682),
        r = n(27989);
      let a = (e) => {
        let {
            size: t = "md",
            width: n,
            height: a,
            color: o = l.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            ...c
          } = e,
          u = (0, r.J)(t),
          h = u?.width ?? n,
          g = u?.height ?? a;
        return (0, i.jsxs)("svg", {
          ...(0, s.A)(c),
          xmlns: "http://www.w3.org/2000/svg",
          width: h,
          height: g,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, i.jsx)("path", {
              fill: "string" == typeof o ? o : o.css,
              d: "M9 10a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1Z",
              className: d,
            }),
            (0, i.jsx)("path", {
              fill: "string" == typeof o ? o : o.css,
              fillRule: "evenodd",
              d: "M13 1a9 9 0 0 1 9 9v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-8a9 9 0 0 1 9-9h2Zm5.5 15a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM12 8.22a4 4 0 1 0-8 0v9.5a1 1 0 0 0 1.24.97l5.72-1.43c.6-.15 1.04-.7 1.04-1.34v-7.7Zm5.68.26a.73.73 0 0 0-1.36 0l-.18.48a2 2 0 0 1-1.18 1.18l-.48.18a.73.73 0 0 0 0 1.36l.48.18a2 2 0 0 1 1.18 1.18l.18.48a.73.73 0 0 0 1.36 0l.18-.48a2 2 0 0 1 1.18-1.18l.48-.18a.73.73 0 0 0 0-1.36l-.48-.18a2 2 0 0 1-1.18-1.18l-.18-.48ZM14.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z",
              clipRule: "evenodd",
              className: d,
            }),
          ],
        });
      };
    },
    141006(e, t, n) {
      n.d(t, { y: () => a });
      var i = n(627968);
      n(64700);
      var l = n(661531),
        s = n(996682),
        r = n(27989);
      let a = (e) => {
        let {
            size: t = "md",
            width: n,
            height: a,
            color: o = l.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            ...c
          } = e,
          u = (0, r.J)(t),
          h = u?.width ?? n,
          g = u?.height ?? a;
        return (0, i.jsxs)("svg", {
          ...(0, s.A)(c),
          xmlns: "http://www.w3.org/2000/svg",
          width: h,
          height: g,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, i.jsx)("path", {
              fill: "string" == typeof o ? o : o.css,
              d: "M4 6c0-1.1.9-2 2-2h3a1 1 0 0 0 0-2H6a4 4 0 0 0-4 4v3a1 1 0 0 0 2 0V6ZM4 18c0 1.1.9 2 2 2h3a1 1 0 1 1 0 2H6a4 4 0 0 1-4-4v-3a1 1 0 1 1 2 0v3ZM20 6a2 2 0 0 0-2-2h-3a1 1 0 1 1 0-2h3a4 4 0 0 1 4 4v3a1 1 0 1 1-2 0V6Z",
              className: d,
            }),
            (0, i.jsx)("path", {
              fill: "string" == typeof o ? o : o.css,
              fillRule: "evenodd",
              d: "M5 7c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7Zm2 0h2v2H7V7ZM5 15c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-2Zm2 0h2v2H7v-2ZM13 7c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V7Zm2 0h2v2h-2V7ZM17.08 13a1.5 1.5 0 0 0-1.42 1.03c-.09.25-.3.47-.56.47H15a2 2 0 0 0-2 2V20c0 1.1.9 2 2 2h6a2 2 0 0 0 2-2v-3.5a2 2 0 0 0-2-2h-.1c-.26 0-.47-.22-.56-.47A1.5 1.5 0 0 0 18.92 13h-1.84ZM20 18a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",
              clipRule: "evenodd",
              className: d,
            }),
          ],
        });
      };
    },
    153659(e, t, n) {
      n.d(t, { L: () => a });
      var i = n(627968);
      n(64700);
      var l = n(661531),
        s = n(996682),
        r = n(27989);
      let a = (e) => {
        let {
            size: t = "md",
            width: n,
            height: a,
            color: o = l.A.colors.ICON_OVERLAY_LIGHT,
            colorClass: d = "",
            ...c
          } = e,
          u = (0, r.J)(t),
          h = u?.width ?? n,
          g = u?.height ?? a;
        return (0, i.jsxs)("svg", {
          ...(0, s.A)(c),
          xmlns: "http://www.w3.org/2000/svg",
          width: h,
          height: g,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, i.jsx)("path", {
              d: "M22.95 11.05a1 1 0 0 1 1 1 11.5 11.5 0 0 1-19.43 8.33l-.08.08v2.2a1.1 1.1 0 0 1-.68 1 1.1 1.1 0 0 1-1.19-.23 1.1 1.1 0 0 1-.32-.78v-4.8a1.1 1.1 0 0 1 .52-.94l.03-.01c.08-.05.17-.09.25-.11l.05-.01.24-.03h4.82a1.09 1.09 0 0 1 .2.02h.02a1.1 1.1 0 0 1 .18.06l.03.01.07.03.02.02.06.03.03.02.04.03a1.1 1.1 0 0 1 .44.88l-.01.15V18a1.1 1.1 0 0 1-.3.61l-.12.1-.03.02a1.09 1.09 0 0 1-.63.2l-2.18-.02-.04.04a9.5 9.5 0 0 0 16.01-6.91 1 1 0 0 1 1-1Z",
              fill: "string" == typeof o ? o : o.css,
              className: d,
            }),
            (0, i.jsx)("path", {
              fillRule: "evenodd",
              d: "M13.41 7.2c1.1.15 1.96.72 2.59 1.7l-1.35 1.09c-.38-.6-.8-1-1.24-1.18v2.24c.86.16 1.53.45 2.02.86.5.4.74 1.02.74 1.84 0 .81-.25 1.48-.77 1.98-.5.5-1.17.81-1.99.94v1.2h-1.38v-1.18a4.39 4.39 0 0 1-1.83-.58c-.5-.31-.9-.71-1.2-1.2l1.41-1.22c.44.7.98 1.12 1.62 1.28v-2.4a4.19 4.19 0 0 1-1.91-.9 2.32 2.32 0 0 1-.79-1.83c0-.72.25-1.31.75-1.77a3.4 3.4 0 0 1 1.95-.87V6h1.38v1.2Zm0 7.75c.56-.15.84-.48.84-1.02a.97.97 0 0 0-.2-.64c-.12-.16-.33-.29-.64-.4v2.06ZM12.03 8.8c-.27.08-.48.2-.63.39a.84.84 0 0 0-.23.57c0 .25.07.45.19.6.13.15.36.28.67.39V8.8Z",
              clipRule: "evenodd",
              fill: "string" == typeof o ? o : o.css,
              className: d,
            }),
            (0, i.jsx)("path", {
              d: "M21.16 0a1.1 1.1 0 0 1 1.09 1.1v4.8c0 .3-.12.57-.32.78l-.08.07-.08.06-.02.01-.07.05-.03.01-.05.02-.06.03h-.03a1.12 1.12 0 0 1-.11.04l-.04.01h-.05l-.06.02H16.35a1.1 1.1 0 0 1-1.02-1.52 1.1 1.1 0 0 1 .35-.45l.02-.02a1.1 1.1 0 0 1 .64-.2l2.18.02.07-.07A9.5 9.5 0 0 0 3 12.05a1 1 0 1 1-2 0 11.5 11.5 0 0 1 19-8.71l.06-.05v-2.2a1.1 1.1 0 0 1 .68-1c.13-.06.27-.1.42-.09Z",
              fill: "string" == typeof o ? o : o.css,
              className: d,
            }),
          ],
        });
      };
    },
    625657(e, t, n) {
      n.d(t, { l: () => a });
      var i = n(627968);
      n(64700);
      var l = n(661531),
        s = n(996682),
        r = n(27989);
      let a = (e) => {
        let {
            size: t = "md",
            width: n,
            height: a,
            color: o = l.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            ...c
          } = e,
          u = (0, r.J)(t),
          h = u?.width ?? n,
          g = u?.height ?? a;
        return (0, i.jsxs)("svg", {
          ...(0, s.A)(c),
          xmlns: "http://www.w3.org/2000/svg",
          width: h,
          height: g,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, i.jsx)("path", {
              fill: "string" == typeof o ? o : o.css,
              d: "M4 5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v.18a1 1 0 1 0 2 0V5a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h.18a1 1 0 1 0 0-2H5a1 1 0 0 1-1-1V5Z",
              className: d,
            }),
            (0, i.jsx)("path", {
              fill: "string" == typeof o ? o : o.css,
              fillRule: "evenodd",
              d: "M8 11a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-8a3 3 0 0 1-3-3v-8Zm2 0a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-8Z",
              clipRule: "evenodd",
              className: d,
            }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=66705.93ce564cc9d627f9.js.map
