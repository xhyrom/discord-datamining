"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["13513"],
  {
    186070: function (e, n, t) {
      t.d(n, {
        FI: function () {
          return a;
        },
        IL: function () {
          return o;
        },
      });
      var l = t(585483),
        i = t(981631);
      let o = {
          binds: ["mod+return"],
          comboKeysBindGlobal: !0,
          action() {
            if (l.S.hasSubscribers(i.CkL.CALL_ACCEPT))
              return l.S.dispatch(i.CkL.CALL_ACCEPT), !1;
          },
        },
        a = {
          binds: ["ctrl+'", "ctrl+shift+'"],
          comboKeysBindGlobal: !0,
          action(e) {
            if (l.S.hasSubscribers(i.CkL.CALL_START))
              return l.S.dispatch(i.CkL.CALL_START, e), !1;
          },
        };
    },
    185514: function (e, n, t) {
      t.d(n, {
        $c: function () {
          return C;
        },
        Nx: function () {
          return _;
        },
        On: function () {
          return h;
        },
        tQ: function () {
          return s;
        },
        x5: function () {
          return E;
        },
      });
      var l = t(140492),
        i = t(475468),
        o = t(703656),
        a = t(769654),
        u = t(944486),
        r = t(914010),
        d = t(358085),
        c = t(981631);
      let s = {
          binds: ["alt+down"],
          comboKeysBindGlobal: !0,
          action: () => ((0, l.Z)(), !1),
        },
        E = {
          binds: ["alt+up"],
          comboKeysBindGlobal: !0,
          action: () => ((0, l.Z)(-1), !1),
        },
        C = {
          binds: ["mod+alt+right"],
          comboKeysBindGlobal: !0,
          action() {
            let e;
            if (null != r.Z.getGuildId()) e = c.ME;
            else {
              let n = r.Z.getLastSelectedGuildId();
              null != n && ((e = n), (0, i.K)(n, u.Z.getChannelId(n)));
            }
            return null != e && (0, a.X)(e), !1;
          },
        },
        _ = {
          binds: (0, d.isMac)() ? ["mod+["] : ["alt+left"],
          comboKeysBindGlobal: !0,
          action: () => ((0, o.op)(), !1),
        },
        h = {
          binds: (0, d.isMac)() ? ["mod+]"] : ["alt+right"],
          comboKeysBindGlobal: !0,
          action: () => ((0, o.eH)(), !1),
        };
    },
    175724: function (e, n, t) {
      t.d(n, {
        f: function () {
          return O;
        },
      });
      var l = t(374470),
        i = t(475179),
        o = t(904245),
        a = t(45114),
        u = t(40851),
        r = t(358221),
        d = t(623292),
        c = t(807092),
        s = t(6025),
        E = t(897473),
        C = t(913663),
        _ = t(268350),
        h = t(433355),
        S = t(592125),
        I = t(703558),
        A = t(323873),
        T = t(375954),
        f = t(306680),
        L = t(944486),
        g = t(914010),
        Z = t(574254),
        p = t(451478),
        P = t(585483),
        N = t(981631);
      let O = {
        binds: ["esc", "shift+pagedown"],
        comboKeysBindGlobal: !0,
        action(e) {
          if (p.Z.isElementFullScreen()) return !1;
          if (P.S.hasSubscribers(N.CkL.CALL_DECLINE))
            return P.S.dispatch(N.CkL.CALL_DECLINE), !1;
          if (Z.Z.close()) return !1;
          if (P.S.hasSubscribers(N.CkL.MEDIA_MODAL_CLOSE))
            return P.S.dispatch(N.CkL.MEDIA_MODAL_CLOSE), !1;
          if ((0, l.k)(e.target)) {
            let n = (0, u.J5)(e.target);
            if (null == n ? void 0 : n.hasSubscribers(N.CkL.POPOUT_CLOSE))
              return n.dispatch(N.CkL.POPOUT_CLOSE), !1;
          }
          if (P.S.hasSubscribers(N.CkL.CLOSE_GIF_PICKER))
            return P.S.dispatch(N.CkL.CLOSE_GIF_PICKER), !1;
          if (P.S.hasSubscribers(N.CkL.MODAL_CLOSE))
            return P.S.dispatch(N.CkL.MODAL_CLOSE), !1;
          if (P.S.hasSubscribers(N.CkL.SEARCH_RESULTS_CLOSE))
            return P.S.dispatch(N.CkL.SEARCH_RESULTS_CLOSE), !1;
          let n = g.Z.getGuildId(),
            t = L.Z.getChannelId(n),
            o = S.Z.getChannel(t),
            a =
              h.ZP.getSection(t, null == o ? void 0 : o.isDM()) ===
              N.ULH.SIDEBAR_CHAT
                ? h.ZP.getSidebarState(t)
                : null,
            d =
              (null == a ? void 0 : a.type) === E.tI.VIEW_THREAD ||
              (null == a ? void 0 : a.type) === E.tI.VIEW_CHANNEL
                ? a.channelId
                : null;
          if (!1 === R(t) || !1 === R(d)) return !1;
          if (null != t && (null == a ? void 0 : a.type) === E.tI.CREATE_THREAD)
            return s.Z.closeChannelSidebar(t), !1;
          let c = b(t),
            C = b(d);
          return null == t || c || C || null == a
            ? null != t && !c && r.Z.getChatOpen(t)
              ? (i.Z.updateChatOpen(t, !1), !1)
              : (P.S.dispatch(N.CkL.SCROLLTO_PRESENT), !1)
            : (s.Z.closeChannelSidebar(t), !1);
        },
      };
      function R(e) {
        if (null != e) {
          if (A.Z.isEditingAny(e)) return o.Z.endEditMessage(e), !1;
          if (null != c.Z.getPendingReply(e)) return (0, d.A6)(e), !1;
          if (null != C.Z.getStickerPreview(e, I.d.ChannelMessage))
            return (0, _.qB)(e, I.d.ChannelMessage), !1;
        }
      }
      function b(e) {
        if (null == e) return !1;
        let n = !1;
        return (
          T.Z.getMessages(e).hasMoreAfter &&
            (o.Z.jumpToPresent(e, N.AQB), (n = !0)),
          f.ZP.hasUnread(e) && ((0, a.In)(e), (n = !0)),
          (0, a.iV)(e),
          n
        );
      }
    },
    705371: function (e, n, t) {
      t.d(n, {
        l: function () {
          return s;
        },
      });
      var l = t(904245),
        i = t(181945),
        o = t(888369),
        a = t(375954),
        u = t(944486),
        r = t(914010),
        d = t(585483),
        c = t(981631);
      let s = {
        binds: ["shift+esc"],
        comboKeysBindGlobal: !0,
        action() {
          let e = r.Z.getGuildId();
          if (null == e || !o.default.getGuildHasUnreadIgnoreMuted(e)) return;
          (0, i.Z)([e]);
          let n = u.Z.getChannelId(e);
          if (null != n)
            a.Z.getMessages(n).hasMoreAfter
              ? l.Z.jumpToPresent(n, c.AQB)
              : d.S.dispatch(c.CkL.SCROLLTO_PRESENT);
        },
      };
    },
    138976: function (e, n, t) {
      t.d(n, {
        O: function () {
          return a;
        },
      });
      var l = t(904245),
        i = t(306680),
        o = t(944486);
      let a = {
        binds: ["shift+pageup"],
        comboKeysBindGlobal: !0,
        action() {
          let e = o.Z.getChannelId();
          if (null != e) {
            let n = i.ZP.ackMessageId(e);
            null != n &&
              i.ZP.getOldestUnreadTimestamp(e) > 0 &&
              l.Z.jumpToMessage({
                channelId: e,
                messageId: n,
                offset: 1,
                context: "Keyboard Shortcut",
              });
          }
          return !1;
        },
      };
    },
    239748: function (e, n, t) {
      t.d(n, {
        F: function () {
          return r;
        },
      });
      var l = t(925549),
        i = t(475468),
        o = t(19780),
        a = t(944486),
        u = t(981631);
      let r = {
        binds: ["mod+alt+left"],
        comboKeysBindGlobal: !0,
        action() {
          var e;
          if (!o.Z.isConnected()) return !1;
          let n = null !== (e = o.Z.getGuildId()) && void 0 !== e ? e : u.ME,
            t = a.Z.getChannelId(n);
          return (
            (0, i.K)(n, t), l.Z.channelListScrollTo(n, o.Z.getChannelId()), !1
          );
        },
      };
    },
    337482: function (e, n, t) {
      t.d(n, {
        B2: function () {
          return o;
        },
        gN: function () {
          return a;
        },
      });
      var l = t(585483),
        i = t(981631);
      let o = {
          binds: ["pageup"],
          comboKeysBindGlobal: !0,
          action: () => (
            l.S.dispatchToLastSubscribed(i.CkL.SCROLL_PAGE_UP), !1
          ),
        },
        a = {
          binds: ["pagedown"],
          comboKeysBindGlobal: !0,
          action: () => (
            l.S.dispatchToLastSubscribed(i.CkL.SCROLL_PAGE_DOWN), !1
          ),
        };
    },
    679080: function (e, n, t) {
      t.d(n, {
        S: function () {
          return u;
        },
      });
      var l = t(130402),
        i = t(585483),
        o = t(981631),
        a = t(185923);
      let u = {
        binds: ["mod+e"],
        comboKeysBindGlobal: !0,
        action: () => (
          (0, l.x)(a.qR.SearchEmojiKeybindPressed),
          i.S.dispatchToLastSubscribed(o.CkL.TOGGLE_EMOJI_POPOUT),
          !1
        ),
      };
    },
    510761: function (e, n, t) {
      t.d(n, {
        X3: function () {
          return o;
        },
        nq: function () {
          return i;
        },
      });
      var l = t(452913);
      let i = {
          binds: ["mod+alt+down", "mod+shift+]", "ctrl+tab"],
          comboKeysBindGlobal: !0,
          action: (e) => (
            e.preventDefault(), e.stopPropagation(), (0, l.Z)(), !1
          ),
        },
        o = {
          binds: ["mod+alt+up", "mod+shift+[", "ctrl+shift+tab"],
          comboKeysBindGlobal: !0,
          action: (e) => (
            e.preventDefault(), e.stopPropagation(), (0, l.Z)(-1), !1
          ),
        };
    },
    189509: function (e, n, t) {
      t.d(n, {
        z: function () {
          return a;
        },
      });
      var l = t(607070),
        i = t(585483),
        o = t(981631);
      let a = {
        binds: ["return"],
        action() {
          if (
            !l.Z.keyboardModeEnabled &&
            i.S.hasSubscribers(o.CkL.MODAL_SUBMIT)
          )
            return i.S.dispatch(o.CkL.MODAL_SUBMIT), !1;
        },
      };
    },
    673553: function (e, n, t) {
      t.d(n, {
        U: function () {
          return S;
        },
      }),
        t(47120);
      var l = t(610521),
        i = t(607070),
        o = t(819640),
        a = t(131951),
        u = t(19780),
        r = t(585483),
        d = t(5967),
        c = t(13140),
        s = t(981631);
      let E = new Set([
          "PageDown",
          "PageUp",
          "Home",
          "End",
          "ArrowUp",
          "ArrowDown",
          "ArrowLeft",
          "ArrowRight",
        ]),
        C = new Set([
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
        _ = new Set([
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
        h = new Set([
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
        S = {
          binds: ["any-character"],
          keydown(e, n) {
            var t;
            let S =
              null === (t = (0, d.uB)(e)) || void 0 === t
                ? void 0
                : t.activeElement;
            if (
              (0, d.VG)(S) ||
              l.fC.isActive() ||
              C.has(n) ||
              _.has(n) ||
              h.has(n)
            )
              return !1;
            let I = null != S && "BODY" === S.tagName;
            return (
              !(
                (i.Z.keyboardModeEnabled && !I && !/^[a-zA-Z0-9]$/.test(n)) ||
                r.S.hasSubscribers(s.CkL.MODAL_CLOSE) ||
                o.Z.hasLayers()
              ) &&
              ("Tab" === n &&
              r.S.hasSubscribers(s.CkL.TEXTAREA_FOCUS) &&
              null != document.querySelector('[data-can-focus="true"]')
                ? (e.preventDefault(), r.S.dispatch(s.CkL.TEXTAREA_FOCUS), !1)
                : !(
                    u.Z.isConnected() &&
                    a.Z.getMode() === s.pM4.PUSH_TO_TALK &&
                    !a.Z.isSelfMute() &&
                    Object.values(a.Z.getShortcuts())
                      .map(c.d2)
                      .some((n) => n.map((e) => e.keyCode).includes(e.keyCode))
                  ) &&
                  void (
                    !e.metaKey &&
                    !e.ctrlKey &&
                    !E.has(n) &&
                    r.S.dispatchToLastSubscribed(s.CkL.TEXTAREA_FOCUS)
                  ))
            );
          },
        };
    },
    280492: function (e, n, t) {
      t.d(n, {
        iN: function () {
          return i;
        },
        oV: function () {
          return o;
        },
      });
      var l = t(846027);
      let i = {
          binds: ["mod+shift+m"],
          comboKeysBindGlobal: !0,
          action: () => (
            l.Z.toggleSelfMute({
              usedKeybind: !0,
              location: "Default Keybind",
            }),
            !1
          ),
        },
        o = {
          binds: ["mod+shift+d"],
          comboKeysBindGlobal: !0,
          action: () => (
            l.Z.toggleSelfDeaf({
              usedKeybind: !0,
              location: "Default Keybind",
            }),
            !1
          ),
        };
    },
    746887: function (e, n, t) {
      t.d(n, {
        u: function () {
          return r;
        },
      });
      var l = t(211739),
        i = t(680089),
        o = t(984933),
        a = t(914010),
        u = t(981631);
      let r = {
        binds: ["mod+shift+a"],
        comboKeysBindGlobal: !0,
        action() {
          let e = a.Z.getGuildId();
          return (
            null != e &&
            (o.ZP.getChannels(e)[u.d4z.GUILD_CATEGORY].some((e) => {
              let { channel: n } = e;
              return "null" !== n.id && !i.Z.isCollapsed(n.id);
            })
              ? (0, l.N5)(e)
              : (0, l.lc)(e),
            !1)
          );
        },
      };
    },
    721383: function (e, n, t) {
      t.d(n, {
        _: function () {
          return a;
        },
      });
      var l = t(481060),
        i = t(191980),
        o = t(285371);
      let a = {
        binds: ["mod+/", "mod+shift+/"],
        comboKeysBindGlobal: !0,
        action: () => ((0, l.hasModalOpen)(o.J) ? i.C() : i.$(), !1),
      };
    },
    743810: function (e, n, t) {
      t.d(n, {
        Nv: function () {
          return T;
        },
        pd: function () {
          return S;
        },
        uX: function () {
          return f;
        },
        wk: function () {
          return I;
        },
      });
      var l = t(350483),
        i = t(220444),
        o = t(905423),
        a = t(131704),
        u = t(592125),
        r = t(306680),
        d = t(944486),
        c = t(9156),
        s = t(981631),
        E = t(490897);
      let C = (e, n) => {
          let t = u.Z.getChannel(n);
          return (
            null != t &&
            ((0, a.hv)(t.type) || s.TPd.GUILD_VOCAL.has(t.type)
              ? r.ZP.getMentionCount(n) > 0 || d.Z.getVoiceChannelId() === n
              : (!c.ZP.isChannelMuted(e, n) || r.ZP.getMentionCount(n) > 0) &&
                (0, i.d)(t))
          );
        },
        _ = (e, n) => {
          if (n === E.W.GUILD_EVENT)
            return (
              !c.ZP.isMuteScheduledEventsEnabled(e) && r.ZP.hasUnread(e, n)
            );
          return r.ZP.hasUnread(e, n);
        },
        h = (e, n) => {
          let t = u.Z.getChannel(n);
          return (
            !!(null != t && s.TPd.GUILD_VOCAL.has(t.type)) &&
            (!!(r.ZP.getMentionCount(n) > 0) ||
              (d.Z.getVoiceChannelId() === n && r.ZP.getUnreadCount(n) > 0))
          );
        },
        S = {
          binds: ["alt+shift+down"],
          comboKeysBindGlobal: !0,
          action() {
            var e;
            let n =
              null !== (e = o.Z.getState().guildId) && void 0 !== e ? e : s.ME;
            return (
              (0, l.Z)(1, {
                channelPredicate: C,
                guildPredicate: (e) => e === n || !c.ZP.isMuted(e),
                guildFeaturePredicate: _,
                ensureChatIsVisible: h,
                withVoiceChannels: !0,
              }),
              !1
            );
          },
        },
        I = {
          binds: ["alt+shift+up"],
          comboKeysBindGlobal: !0,
          action() {
            var e;
            let n =
              null !== (e = o.Z.getState().guildId) && void 0 !== e ? e : s.ME;
            return (
              (0, l.Z)(-1, {
                channelPredicate: C,
                guildPredicate: (e) => e === n || !c.ZP.isMuted(e),
                guildFeaturePredicate: _,
                ensureChatIsVisible: h,
                withVoiceChannels: !0,
              }),
              !1
            );
          },
        },
        A = (e, n) => r.ZP.getMentionCount(n) > 0,
        T = {
          binds: ["mod+shift+alt+down"],
          comboKeysBindGlobal: !0,
          action: () => (
            (0, l.Z)(1, {
              channelPredicate: A,
              ensureChatIsVisible: h,
              withVoiceChannels: !0,
            }),
            !1
          ),
        },
        f = {
          binds: ["mod+shift+alt+up"],
          comboKeysBindGlobal: !0,
          action: () => (
            (0, l.Z)(-1, {
              channelPredicate: A,
              ensureChatIsVisible: h,
              withVoiceChannels: !0,
            }),
            !1
          ),
        };
    },
    140492: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return A;
        },
      }),
        t(47120),
        t(733860);
      var l = t(718528),
        i = t(931261),
        o = t(355298),
        a = t(333984),
        u = t(905423),
        r = t(695346),
        d = t(283595),
        c = t(923834),
        s = t(55589),
        E = t(823379),
        C = t(475468),
        _ = t(981631),
        h = t(176505);
      let S = () => {
        let e =
          o.Z.getMessageRequestsCount() > 0 || a.Z.getSpamChannelsCount() > 0;
        return [
          _.Z5c.FRIENDS,
          d.Z.hasLibraryApplication() && !r.bm.getSetting()
            ? _.Z5c.APPLICATION_LIBRARY
            : null,
          _.Z5c.APPLICATION_STORE,
          e ? _.Z5c.MESSAGE_REQUESTS : null,
          _.Z5c.COLLECTIBLES_SHOP,
          r.Ex.getSetting() ? _.Z5c.FAMILY_CENTER : null,
        ].filter(E.lm);
      };
      function I(e, n) {
        (0, C.K)(e, n);
      }
      function A() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          n = u.Z.getState().guildId;
        null == n
          ? !(function (e) {
              var n, t, l;
              let { channelId: i, path: o, basePath: a } = u.Z.getState(),
                r = s.Z.getPrivateChannelIds(),
                d = __OVERLAY__ ? r : [...S(), ...r];
              let E =
                (null == i
                  ? ((n = null != o ? o : a),
                    S().findIndex((e) => n.startsWith(e)))
                  : null != i
                    ? d.indexOf(i)
                    : 0) + e;
              E >= d.length ? (E = 0) : E < 0 && (E = d.length - 1);
              let h = d[E];
              if (S().includes(h))
                !(function (e) {
                  let n = c.Z.getCurrentRoute();
                  e === _.Z5c.APPLICATION_STORE && null != n
                    ? (0, C.z)(n)
                    : (0, C.z)(e);
                })(h);
              else {
                (t = _.ME), (l = h), (0, C.K)(t, l);
              }
            })(e)
          : !(function (e, n) {
              var t, o, a, r;
              let d = u.Z.getState().channelId,
                c = (0, l.Z)(n, { withCurrentVoiceChannel: !0 }).map(
                  (e) => e.id,
                );
              (0, i.s)(n) && c.unshift(h.oC.GUILD_HOME);
              let s =
                ((t = (null != d ? c.indexOf(d) : -1) + e),
                (o = c.length),
                t < 0 ? o - 1 : t >= o ? 0 : t);
              (a = n), (r = c[s]), (0, C.K)(a, r);
            })(e, n);
      }
    },
    452913: function (e, n, t) {
      var l = t(392711),
        i = t.n(l),
        o = t(853856),
        a = t(706590),
        u = t(905423),
        r = t(592125),
        d = t(496675),
        c = t(944486),
        s = t(771845),
        E = t(774343),
        C = t(475468),
        _ = t(981631);
      n.Z = i().throttle(function () {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          n = s.ZP.getFlattenedGuildIds(),
          t = (function (e) {
            let n = u.Z.getState().guildId;
            if (null == n) return -2;
            if (n === _.I_8) return -1;
            let t = e.indexOf(n);
            return -1 === t ? -2 : t;
          })(n);
        if (
          (-1 === (t += e) && !(0, a.z)(o.Z, r.Z, d.Z) && (t += e),
          -3 === t && (t = n.length - 1),
          t >= n.length || -2 === t)
        ) {
          (0, C.z)(E.Z.getHomeLink());
          return;
        }
        let l = -1 === t ? _.I_8 : n[t],
          i = c.Z.getChannelId(l);
        (0, C.K)(l, i === l ? null : i, !1);
      }, _.aZC);
    },
    350483: function (e, n, t) {
      t(47120);
      var l = t(200651);
      t(192379);
      var i = t(392711),
        o = t.n(i),
        a = t(481060),
        u = t(718528),
        r = t(905423),
        d = t(984933),
        c = t(914010),
        s = t(771845),
        E = t(55589),
        C = t(585483),
        _ = t(475468),
        h = t(981631),
        S = t(490897);
      function I(e, n) {
        var t, l;
        return [
          { resourceId: e, type: S.W.GUILD_EVENT },
          ...((t = e),
          (l = n),
          t === h.ME
            ? E.Z.getPrivateChannelIds()
            : (0, u.Z)(t, {
                withVoiceChannels: l,
                withCurrentVoiceChannel: !0,
              }).map((e) => e.id)),
        ];
      }
      n.Z = o().throttle(function (e, n) {
        var i, o;
        let u,
          {
            channelPredicate: E = () => !0,
            guildPredicate: S = () => !0,
            guildFeaturePredicate: A = () => !1,
            ensureChatIsVisible: T = () => !1,
            withVoiceChannels: f = !1,
          } = n,
          L = null !== (i = r.Z.getState().guildId) && void 0 !== i ? i : h.ME,
          g = r.Z.getState().channelId,
          Z = (function (e, n) {
            let t = [h.ME, ...s.ZP.getFlattenedGuildIds()],
              l = t.indexOf(e);
            return n > 0
              ? t.slice(l).concat(t.slice(0, l), e)
              : (t.splice(l, 0, e), t.slice(l + 1).concat(t.slice(0, l + 1)));
          })(L, e),
          p = e > 0 ? 0 : Z.length - 1,
          P = I(L, f),
          N = P.indexOf(g) + e;
        for (; null != L && "" !== L; ) {
          if (((u = P[N]), S(L)))
            for (; null != u && "" !== u; ) {
              if ("string" == typeof u) {
                if (E(L, u)) return (0, _.K)(L, u, !1, T(L, u));
              } else if ("object" == typeof u && A(u.resourceId, u.type))
                return (
                  L !== c.Z.getGuildId() &&
                    (0, _.K)(
                      L,
                      null === (o = d.ZP.getDefaultChannel(L)) || void 0 === o
                        ? void 0
                        : o.id,
                    ),
                  (0, a.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([
                      t.e("18543"),
                      t.e("22347"),
                      t.e("56236"),
                      t.e("76351"),
                    ]).then(t.bind(t, 17671));
                    return (n) => (0, l.jsx)(e, { ...n, guildId: L });
                  })
                );
              (N += e), (u = P[N]);
            }
          if (((p += e), null == (L = Z[p]) || "" === L)) break;
          (P = I(L, f)), (N = e < 0 ? P.length - 1 : 0);
        }
        C.S.dispatch(h.CkL.SHAKE_APP, { duration: 200, intensity: 2 });
      }, h.aZC);
    },
    475468: function (e, n, t) {
      t.d(n, {
        K: function () {
          return r;
        },
        z: function () {
          return d;
        },
      });
      var l = t(481060),
        i = t(475179),
        o = t(925549),
        a = t(905423),
        u = t(981631);
      function r(e, n) {
        let t =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
          r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!(0, l.hasAnyModalOpen)())
          t && o.Z.channelListScrollTo(e, n),
            r && null != n && i.Z.updateChatOpen(n, !0),
            a.Z.getState().updatePath(u.Z5c.CHANNEL(e, n));
      }
      function d(e) {
        if (!(0, l.hasAnyModalOpen)()) a.Z.getState().updatePath(e);
      }
    },
    718528: function (e, n, t) {
      t.d(n, {
        T: function () {
          return _;
        },
        Z: function () {
          return C;
        },
      }),
        t(653041);
      var l = t(192379),
        i = t(442837),
        o = t(734307),
        a = t(854444),
        u = t(131704),
        r = t(680089),
        d = t(888369),
        c = t(944486),
        s = t(981631),
        E = t(647086);
      function C(e) {
        let { withVoiceChannels: n = !1, withCurrentVoiceChannel: t = !1 } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          l = arguments.length > 2 ? arguments[2] : void 0;
        return h(
          e === E._ || e === s.I_8
            ? (0, a.t)()
            : o.Z.getGuildWithoutChangingGuildActionRows(e).guildChannels,
          {
            currentVoiceChannelId: c.Z.getVoiceChannelId(),
            selectedChannelId: c.Z.getChannelId(),
          },
          { withVoiceChannels: n, withCurrentVoiceChannel: t },
          l,
        );
      }
      function _(e, n, t) {
        let { withVoiceChannels: o = !1, withCurrentVoiceChannel: a = !1 } =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          u = arguments.length > 4 ? arguments[4] : void 0,
          s = (0, i.e7)([d.default], () => d.default.getGuildChangeSentinel(e)),
          E = (0, i.e7)([r.Z], () => r.Z.version),
          { currentVoiceChannelId: C, selectedChannelId: _ } = (0, i.cj)(
            [c.Z],
            () => ({
              currentVoiceChannelId: c.Z.getVoiceChannelId(),
              selectedChannelId: c.Z.getChannelId(),
            }),
          );
        return (0, l.useMemo)(
          () =>
            h(
              n,
              { currentVoiceChannelId: C, selectedChannelId: _ },
              { withVoiceChannels: o, withCurrentVoiceChannel: a },
              u,
            ).map((e) => e.id),
          [n, t, s, E],
        );
      }
      function h(e, n) {
        let { currentVoiceChannelId: t, selectedChannelId: l } = n,
          { withVoiceChannels: i, withCurrentVoiceChannel: o } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          a = arguments.length > 3 ? arguments[3] : void 0,
          r = [];
        return (
          e.forEachShownChannel((e) => {
            ((0, u.r8)(e.type) ||
              (i && (0, u.bw)(e.type)) ||
              (o && (e.id === t || e.id === l))) &&
              r.push(e);
          }, a),
          r
        );
      }
    },
    734307: function (e, n, t) {
      t(47120);
      var l,
        i,
        o,
        a,
        u = t(392711),
        r = t.n(u),
        d = t(442837),
        c = t(570140),
        s = t(317381),
        E = t(430198),
        C = t(924301),
        _ = t(601070),
        h = t(569471),
        S = t(581883),
        I = t(314897),
        A = t(680089),
        T = t(592125),
        f = t(58468),
        L = t(77498),
        g = t(496675),
        Z = t(306680),
        p = t(944486),
        P = t(9156),
        N = t(823379),
        O = t(709054),
        R = t(540126),
        b = t(526761);
      let D = null,
        U = null,
        G = new R.ZP();
      function m() {
        let e = p.Z.getChannelId(),
          n = p.Z.getVoiceChannelId();
        return (D = e), (U = n), G.clear();
      }
      function v(e) {
        let {
          guild: { id: n },
        } = e;
        return G.clearGuildId(n);
      }
      function y(e) {
        let {
          channel: { guild_id: n },
        } = e;
        return G.clearGuildId(n);
      }
      function M(e) {
        let { guildId: n } = e;
        return G.clearGuildId(n);
      }
      function H(e) {
        let { channelId: n } = e;
        return G.nonPositionalChannelIdUpdate(n);
      }
      function w() {
        return null != D && G.nonPositionalChannelIdUpdate(D);
      }
      function F(e) {
        let { channel: n } = e;
        return G.nonPositionalChannelIdUpdate(n.id);
      }
      function K(e) {
        let { id: n } = e;
        return G.nonPositionalChannelIdUpdate(n);
      }
      function V() {
        let e = p.Z.getChannelId(),
          n = p.Z.getVoiceChannelId(),
          t = D !== e || U !== n;
        return (
          !!t &&
          (r()([D, U, e, n])
            .uniq()
            .forEach((e) => {
              null != e && G.nonPositionalChannelIdUpdate(e) && (t = !0);
            }),
          (D = e),
          (U = n),
          !0)
        );
      }
      function B(e) {
        let { id: n } = e,
          t = T.Z.getChannel(n);
        return null == t ? G.clearGuildId(n) : G.clearGuildId(t.guild_id);
      }
      function k(e) {
        let { guildId: n } = e;
        return G.clearGuildId(n);
      }
      function x() {
        return G.updateSubtitles();
      }
      function W(e) {
        let { guildScheduledEvent: n } = e;
        return G.updateSubtitles(n.guild_id);
      }
      class Y extends (l = d.ZP.Store) {
        initialize() {
          this.waitFor(
            _.Z,
            I.default,
            A.Z,
            T.Z,
            f.Z,
            s.ZP,
            L.Z,
            E.Z,
            C.ZP,
            h.Z,
            g.Z,
            Z.ZP,
            p.Z,
            P.ZP,
            S.Z,
          );
        }
        getGuild(e, n) {
          var t, l;
          let i = G.getGuild(
            e,
            null !== (t = null == n ? void 0 : n.guildActionRows) &&
              void 0 !== t
              ? t
              : [],
            null !== (l = null == n ? void 0 : n.channelNoticeRows) &&
              void 0 !== l
              ? l
              : [],
          );
          return { guildChannelsVersion: i.version, guildChannels: i };
        }
        getGuildWithoutChangingGuildActionRows(e) {
          let n = G.getGuildChannelRowsOnly(e);
          return { guildChannelsVersion: n.version, guildChannels: n };
        }
        recentsChannelCount(e) {
          if (null == e) return 0;
          let n = G.getGuildChannelRowsOnly(e);
          return n
            .getCategoryFromSection(n.recentsSectionNumber)
            .getShownChannelIds().length;
        }
      }
      (a = "ChannelListStore"),
        (o = "displayName") in (i = Y)
          ? Object.defineProperty(i, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (i[o] = a),
        (n.Z = new Y(c.Z, {
          APPLICATION_FETCH_FAIL: x,
          APPLICATION_FETCH_SUCCESS: x,
          APPLICATION_FETCH: x,
          APPLICATIONS_FETCH_FAIL: x,
          APPLICATIONS_FETCH_SUCCESS: x,
          APPLICATIONS_FETCH: x,
          BACKGROUND_SYNC: m,
          BULK_ACK: function (e) {
            let { channels: n } = e,
              t = !1;
            return (
              r()(n)
                .map((e) => {
                  var n;
                  return null === (n = T.Z.getChannel(e.channelId)) ||
                    void 0 === n
                    ? void 0
                    : n.guild_id;
                })
                .filter(N.lm)
                .uniq()
                .forEach((e) => {
                  G.clearGuildId(e) && (t = !0);
                }),
              t
            );
          },
          BULK_CLEAR_RECENTS: M,
          CACHE_LOADED_LAZY: m,
          CATEGORY_COLLAPSE_ALL: M,
          CATEGORY_COLLAPSE: B,
          CATEGORY_EXPAND_ALL: M,
          CATEGORY_EXPAND: B,
          CHANNEL_ACK: H,
          CHANNEL_COLLAPSE: function (e) {
            var n;
            let { channelId: t } = e;
            return G.clearGuildId(
              null === (n = T.Z.getChannel(t)) || void 0 === n
                ? void 0
                : n.guild_id,
            );
          },
          CHANNEL_CREATE: y,
          CHANNEL_DELETE: y,
          CHANNEL_LOCAL_ACK: H,
          CHANNEL_MUTE_EXPIRED: M,
          CHANNEL_RTC_UPDATE_CHAT_OPEN: H,
          CHANNEL_SELECT: V,
          CHANNEL_STATUSES: function (e) {
            return G.clearGuildId(e.guildId);
          },
          CHANNEL_UPDATES: function (e) {
            let { channels: n } = e,
              t = !1;
            return (
              r()(n)
                .map((e) => e.guild_id)
                .uniq()
                .forEach((e) => {
                  G.clearGuildId(e) && (t = !0);
                }),
              t
            );
          },
          CONNECTION_OPEN_SUPPLEMENTAL: x,
          CONNECTION_OPEN: m,
          CURRENT_USER_UPDATE: m,
          DECAY_READ_STATES: m,
          DEV_TOOLS_DESIGN_TOGGLE_SET: m,
          DISABLE_AUTOMATIC_ACK: H,
          DISMISS_FAVORITE_SUGGESTION: function (e) {
            let { channelId: n } = e;
            return G.nonPositionalChannelIdUpdate(n);
          },
          DRAWER_CLOSE: w,
          DRAWER_OPEN: w,
          EMBEDDED_ACTIVITY_UPDATE_V2: function (e) {
            let { location: n } = e;
            return G.updateSubtitles(n.guild_id, n.channel_id);
          },
          EMBEDDED_ACTIVITY_LAUNCH_START: function (e) {
            x();
          },
          EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: x,
          ENABLE_AUTOMATIC_ACK: H,
          FETCH_GUILD_EVENTS_FOR_GUILD: function (e) {
            let { guildId: n } = e;
            return G.updateSubtitles(n);
          },
          GAMES_DATABASE_FETCH_FAIL: x,
          GAMES_DATABASE_FETCH: x,
          GAMES_DATABASE_UPDATE: x,
          GUILD_APPLICATIONS_FETCH_SUCCESS: x,
          GUILD_CREATE: v,
          GUILD_DELETE: v,
          GUILD_MEMBER_UPDATE: function (e) {
            let { guildId: n, user: t } = e;
            return I.default.getId() === t.id && G.clearGuildId(n);
          },
          GUILD_MUTE_EXPIRED: M,
          GUILD_ROLE_CREATE: M,
          GUILD_ROLE_DELETE: M,
          GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: M,
          GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS: M,
          GUILD_ROLE_UPDATE: M,
          GUILD_SCHEDULED_EVENT_CREATE: W,
          GUILD_SCHEDULED_EVENT_DELETE: W,
          GUILD_SCHEDULED_EVENT_UPDATE: W,
          GUILD_TOGGLE_COLLAPSE_MUTED: M,
          GUILD_UPDATE: v,
          IMPERSONATE_STOP: M,
          IMPERSONATE_UPDATE: M,
          LOAD_CHANNELS: function (e) {
            e.channels.forEach((e) => {
              let { guildId: n } = e;
              return G.clearGuildId(n);
            });
          },
          LOAD_MESSAGES_SUCCESS: H,
          MESSAGE_ACK: H,
          MESSAGE_CREATE: function (e) {
            let { channelId: n } = e;
            return G.nonPositionalChannelIdUpdate(n);
          },
          MESSAGE_DELETE_BULK: H,
          MESSAGE_DELETE: H,
          NOTIFICATION_SETTINGS_UPDATE: m,
          OVERLAY_INITIALIZE: m,
          PASSIVE_UPDATE_V2: function (e) {
            return G.clearGuildId(e.guildId);
          },
          RECOMPUTE_READ_STATES: m,
          RESORT_THREADS: H,
          SET_RECENTLY_ACTIVE_COLLAPSED: m,
          THREAD_CREATE: F,
          THREAD_DELETE: function (e) {
            let { channel: n } = e;
            return G.nonPositionalChannelUpdate(n);
          },
          THREAD_LIST_SYNC: M,
          THREAD_MEMBER_UPDATE: K,
          THREAD_MEMBERS_UPDATE: K,
          THREAD_UPDATE: F,
          TRY_ACK: H,
          UPDATE_CHANNEL_DIMENSIONS: H,
          UPDATE_CHANNEL_LIST_SUBTITLES: function (e) {
            let { guildId: n } = e;
            G.updateSubtitles(n);
          },
          USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: M,
          USER_GUILD_SETTINGS_CHANNEL_UPDATE: M,
          USER_GUILD_SETTINGS_FULL_UPDATE: function (e) {
            let { userGuildSettings: n } = e;
            n.forEach((e) => {
              let { guild_id: n } = e;
              return G.clearGuildId(n);
            });
          },
          USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: M,
          USER_GUILD_SETTINGS_GUILD_UPDATE: M,
          USER_SETTINGS_PROTO_UPDATE: function (e) {
            var n;
            let { settings: t } = e;
            if (t.type !== b.yP.PRELOADED_USER_SETTINGS) return !1;
            let l =
                null === (n = t.proto.guilds) || void 0 === n
                  ? void 0
                  : n.guilds,
              i = !1;
            return (
              null != l &&
                O.default.keys(l).forEach((e) => {
                  null != l[e].guildRecentsDismissedAt &&
                    (i = G.updateRecentsCategory(e) || i);
                }),
              i
            );
          },
          VOICE_CATEGORY_COLLAPSE: k,
          VOICE_CATEGORY_EXPAND: k,
          VOICE_CHANNEL_SELECT: V,
          VOICE_CHANNEL_STATUS_UPDATE: function (e) {
            return G.nonPositionalChannelIdUpdate(e.id);
          },
          VOICE_STATE_UPDATES: function (e) {
            let { voiceStates: n } = e,
              t = V(),
              l = new Set();
            for (let { channelId: e, oldChannelId: i } of n)
              null != i &&
                !l.has(i) &&
                (G.nonPositionalChannelIdUpdate(i) && (t = !0), l.add(i)),
                null != e &&
                  !l.has(e) &&
                  (G.nonPositionalChannelIdUpdate(e) && (t = !0), l.add(e));
            return t;
          },
          WINDOW_FOCUS: w,
        }));
    },
    854444: function (e, n, t) {
      t.d(n, {
        o: function () {
          return O;
        },
        t: function () {
          return R;
        },
      }),
        t(47120),
        t(653041);
      var l = t(192379),
        i = t(392711),
        o = t.n(i),
        a = t(524437),
        u = t(317381),
        r = t(853856),
        d = t(846787),
        c = t(924301),
        s = t(601070),
        E = t(569471),
        C = t(131704),
        _ = t(680089),
        h = t(592125),
        S = t(58468),
        I = t(77498),
        A = t(496675),
        T = t(306680),
        f = t(944486),
        L = t(9156),
        g = t(823379),
        Z = t(540126),
        p = t(647086),
        P = t(231338);
      let N =
        12633 == t.j
          ? [u.ZP, r.Z, c.ZP, s.Z, E.Z, _.Z, h.Z, I.Z, A.Z, T.ZP, f.Z, L.ZP]
          : null;
      function O() {
        let [e, n] = l.useState(() => R());
        return (
          l.useEffect(() => {
            let e = o().throttle(() => n(R()), 100);
            return (
              N.forEach((n) => n.addChangeListener(e)),
              () => N.forEach((n) => n.removeChangeListener(e))
            );
          }, []),
          e
        );
      }
      function R() {
        let e = r.Z.getFavoriteChannels(),
          n = L.ZP.isGuildCollapsed(p._),
          t = f.Z.getChannelId(),
          l = h.Z.getChannel(t),
          i = f.Z.getVoiceChannelId(),
          u = [],
          c = {};
        for (let n in e) {
          let t = e[n],
            l = h.Z.getChannel(t.id);
          if (null == l || t.type === a.Dd.CATEGORY) continue;
          let i = (0, d.r)(e, t, l);
          if (null == t.parentId || !(t.parentId in e)) {
            u.push(i);
            continue;
          }
          !(t.parentId in c) && (c[t.parentId] = []), c[t.parentId].push(i);
        }
        function E(t, a) {
          let { isCollapsed: u, isMuted: r } = a;
          return o()(t)
            .map((t) => {
              var d;
              if (!t.isPrivate() && !A.Z.can(P.Pl.VIEW_CHANNEL, t)) return null;
              let c = null != l && (l.id === t.id || i === t.id),
                E = null != l && l.isThread() && l.parent_id === t.id,
                _ =
                  null !==
                    (d =
                      c || E || !u
                        ? s.Z.getActiveJoinedRelevantThreadsForParent(
                            t.guild_id,
                            t.id,
                          )
                        : s.Z.getActiveJoinedUnreadThreadsForParent(
                            t.guild_id,
                            t.id,
                          )) && void 0 !== d
                    ? d
                    : {},
                h = (0, Z.zR)(t, _, l, i, n),
                I = S.Z.isCollapsed(t.id),
                f = L.ZP.isChannelMuted(t.guild_id, t.id),
                g = {
                  id: t.id,
                  record: t,
                  category: a,
                  position: e[t.id].order,
                  threadIds: h,
                  threadCount: o().size(h),
                  isCollapsed: I,
                  isMuted: f,
                  isFirstVoiceChannel: !1,
                  subtitle: (0, Z.Bz)(t, I, !1),
                };
              return c || E || T.ZP.getMentionCount(t.id) > 0
                ? g
                : (n && f) ||
                    (u &&
                      (f ||
                        r ||
                        (0, C.vd)(t.type) ||
                        ((0, C.vc)(t.type) && !1 === T.ZP.hasUnread(t.id))))
                  ? null
                  : g;
            })
            .filter(g.lm)
            .sortBy((e) => {
              let { record: n } = e;
              return n.isGuildVocal() ? n.position + 1e4 : n.position;
            })
            .value();
        }
        let I = null,
          N = {
            isMuted: !1,
            isCollapsed: !1,
            position: 0,
            getChannelRecords: () => u,
            getShownChannelIds: () => u.map((e) => e.id),
            getShownChannelAndThreadIds: () => u.map((e) => e.id),
            isEmpty: () => 0 === u.length,
            get channelList() {
              return null == I && (I = E(u, this)), I;
            },
          },
          O = o()(e)
            .values()
            .filter((e) => e.type === a.Dd.CATEGORY)
            .sortBy((e) => e.order)
            .map((e) => {
              var n;
              let { id: t, order: l } = e,
                i = r.Z.getCategoryRecord(t),
                o = null !== (n = c[t]) && void 0 !== n ? n : [],
                a = L.ZP.isChannelMuted(p._, t),
                u = _.Z.isCollapsed(t),
                d = null;
              return {
                isMuted: a,
                isCollapsed: u,
                record: i,
                id: t,
                position: l,
                getChannelRecords: () => o,
                getShownChannelIds: () => o.map((e) => e.id),
                getShownChannelAndThreadIds: () => o.map((e) => e.id),
                isEmpty: () => 0 === o.length,
                get channelList() {
                  return null == d && (d = E(o, this)), d;
                },
              };
            })
            .value(),
          R = { isEmpty: () => !0, getRows: () => [], getRow: () => null },
          b = { isEmpty: () => !0, getRows: () => [], getRow: () => null };
        return {
          id: p._,
          hideMutedChannels: n,
          favoritesSectionNumber: 1,
          recentsSectionNumber: 2,
          voiceChannelsSectionNumber: -999,
          getSections() {
            let e = [];
            (e[Z.Fq] = 0),
              (e[Z.wZ] = 0),
              (e[Z.p2] = 0),
              (e[Z.PB] = 0),
              (e[Z.wd] = N.channelList.length);
            for (let n = 0; n < O.length; n++)
              e[Z.wF + n] = Math.max(1, O[n].channelList.length);
            return e;
          },
          isPlaceholderRow: (e, n) =>
            !(e < Z.wF) && 0 === n && 0 === O[e - Z.wF].channelList.length,
          getCategoryFromSection: (e) => (e === Z.wd ? N : O[e - Z.wF]),
          getNamedCategoryFromSection: (e) => O[e - Z.wF],
          getChannelFromSectionRow(e, n) {
            let t = this.getCategoryFromSection(e);
            return null == t || null == t.channelList[n]
              ? null
              : { category: t, channel: t.channelList[n] };
          },
          getGuildActionSection: () => R,
          getChannelNoticeSection: () => b,
          getFirstVoiceChannel: () => null,
          getSectionRowsFromChannel(e) {
            let n = [N, ...O];
            for (let t = 0; t < n.length; t++)
              for (let l = 0; l < n[t].channelList.length; l++)
                if (n[t].channelList[l].id === e)
                  return [{ section: t + Z.wd, row: l }];
            return [];
          },
          forEachShownChannel(e) {
            for (let n of [N, ...O])
              for (let t of n.channelList)
                for (let n of (e(t.record), t.threadIds)) {
                  let t = h.Z.getChannel(n);
                  null != t && e(t);
                }
          },
          forEachChannel(e) {
            for (let n of [N, ...O]) for (let t of n.getChannelRecords()) e(t);
          },
          getSlicedChannels: (e) => [[], e, []],
          getChannels: () => [],
        };
      }
    },
    191980: function (e, n, t) {
      t.d(n, {
        $: function () {
          return i;
        },
        C: function () {
          return o;
        },
      });
      var l = t(570140);
      function i() {
        l.Z.dispatch({ type: "SHOW_KEYBOARD_SHORTCUTS" });
      }
      function o() {
        l.Z.dispatch({ type: "HIDE_KEYBOARD_SHORTCUTS" });
      }
    },
    285371: function (e, n, t) {
      t.d(n, {
        J: function () {
          return l;
        },
      });
      let l = "KEYBOARD_SHORTCUT_MODAL_KEY";
    },
    51596: function (e, n, t) {
      t.d(n, {
        $Z: function () {
          return R;
        },
        Cp: function () {
          return b;
        },
        F_: function () {
          return P;
        },
        Se: function () {
          return G;
        },
        tF: function () {
          return U;
        },
        yC: function () {
          return D;
        },
      }),
        t(757143),
        t(47120);
      var l = t(570140),
        i = t(493683),
        o = t(475179),
        a = t(925549),
        u = t(287734),
        r = t(212819),
        d = t(336197),
        c = t(359110),
        s = t(769654),
        E = t(131704),
        C = t(592125),
        _ = t(283595),
        h = t(944486),
        S = t(914010),
        I = t(626135),
        A = t(777754),
        T = t(823385),
        f = t(981631),
        L = t(176505);
      let g = () => Promise.resolve();
      g = t(346329).playApplication;
      let Z = Object.freeze({
          [r.xQ.USER]: r.h8.USER,
          [r.xQ.TEXT_CHANNEL]: r.h8.TEXT_CHANNEL,
          [r.xQ.VOICE_CHANNEL]: r.h8.VOICE_CHANNEL,
          [r.xQ.GUILD]: r.h8.GUILD,
          [r.xQ.APPLICATION]: r.h8.APPLICATION,
        }),
        p = new RegExp(
          "^"
            .concat(r.xQ.USER, "|")
            .concat(r.xQ.TEXT_CHANNEL, "|")
            .concat(r.xQ.VOICE_CHANNEL, "|\\")
            .concat(r.xQ.GUILD, "|\\")
            .concat(r.xQ.APPLICATION),
        );
      function P(e) {
        var n, t;
        let l;
        let [i, o] =
          ((l = null !== (t = Z[(n = e).charAt(0)]) && void 0 !== t ? t : null),
          [n.replace(p, ""), l]);
        return { query: i, queryMode: o };
      }
      function N(e, n) {
        let {
            results: t,
            queryMode: l,
            query: i,
            maxQueryLength: o,
          } = T.Z.getProps(),
          a = S.Z.getGuildId(),
          u = h.Z.getChannelId(a),
          d = t[(0, r.gJ)(r.a8.DOWN, -1, t)],
          c = A.Z.isEmail(i),
          s = A.Z.isPhoneNumber(i),
          _ = A.Z.isUserTagLike(i),
          f = null != u && (0, L.AB)(u),
          g = (e) =>
            null == e
              ? null
              : e.type === r.h8.IN_APP_NAVIGATION
                ? e.type + "_" + e.record.type
                : e.type,
          Z = {
            current_channel_id: f ? void 0 : u,
            current_channel_static_route: f ? u : void 0,
            current_guild_id: a,
            query_mode: null != l ? l : "GENERAL",
            query_length: i.length,
            max_query_length: o,
            is_email_like: c,
            is_phone_like: s,
            is_username_like: _,
            query: c || s || _ ? null : i,
            top_result_type: g(d),
            top_result_score: null != d ? d.score : null,
            num_results_total: T.Z.getResultTotals(),
            num_results_users: T.Z.getResultTotals(r.h8.USER),
            num_results_text_channels: T.Z.getResultTotals(r.h8.TEXT_CHANNEL),
            num_results_voice_channels: T.Z.getResultTotals(r.h8.VOICE_CHANNEL),
            num_results_guilds: T.Z.getResultTotals(r.h8.GUILD),
            num_results_group_dms: T.Z.getResultTotals(r.h8.GROUP_DM),
          };
        if (null != u) {
          let e = C.Z.getChannel(u);
          Z.current_channel_type = null != e ? e.type : null;
        }
        if (null != n) {
          let { type: e, score: l, record: i } = n;
          switch (
            ((Z.selected_type = g(n)),
            (Z.selected_score = l),
            (Z.selected_index = t.indexOf(n)),
            e)
          ) {
            case r.h8.GUILD:
              Z.selected_guild_id = i.id;
              break;
            case r.h8.TEXT_CHANNEL:
            case r.h8.VOICE_CHANNEL:
              i instanceof E.Sf &&
                (Z.selected_guild_id = null != i.guild_id ? i.guild_id : null),
                (Z.selected_channel_id = i.id);
              break;
            case r.h8.GROUP_DM:
              Z.selected_channel_id = i.id;
              break;
            case r.h8.USER:
              Z.selected_user_id = i.id;
          }
        }
        I.default.track(e, Z);
      }
      function O() {
        l.Z.dispatch({ type: "QUICKSWITCHER_HIDE" });
      }
      function R() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "KEYBIND",
          n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        !(function (e) {
          let n;
          if (T.Z.isOpen()) return;
          let t = S.Z.getGuildId(),
            l = h.Z.getChannelId(t);
          if (null != l) {
            let e = C.Z.getChannel(l);
            n = null != e ? e.type : null;
          }
          I.default.track(f.rMx.QUICKSWITCHER_OPENED, {
            source: e,
            current_guild_id: t,
            current_channel_id: l,
            current_channel_type: n,
          });
        })(e),
          l.Z.dispatch({ type: "QUICKSWITCHER_SHOW", ...P(n) });
      }
      function b() {
        N(f.rMx.QUICKSWITCHER_CLOSED), O();
      }
      function D(e) {
        l.Z.dispatch({ type: "QUICKSWITCHER_SEARCH", ...P(e) });
      }
      function U(e) {
        l.Z.dispatch({ type: "QUICKSWITCHER_SELECT", selectedIndex: e });
      }
      function G(e) {
        let n,
          t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        O(), N(f.rMx.QUICKSWITCHER_RESULT_SELECTED, e);
        let { type: E, record: h } = e,
          S = { page: f.ZY5.QUICK_SWITCHER };
        switch (E) {
          case r.h8.GUILD:
            (0, s.X)(h.id, { navigationReplace: !0 });
            break;
          case r.h8.TEXT_CHANNEL:
            null != (n = C.Z.getChannel(h.id)) &&
              (0, c.Kh)(n.id, {
                state: { analyticsSource: S },
                navigationReplace: !0,
              });
            break;
          case r.h8.VOICE_CHANNEL:
            null != (n = C.Z.getChannel(h.id)) &&
              (t
                ? o.Z.updateChatOpen(h.id, !0)
                : u.default.selectVoiceChannel(h.id),
              (0, c.Kh)(n.id, {
                state: { analyticsSource: S },
                navigationReplace: !0,
              }));
            break;
          case r.h8.USER:
            i.Z.openPrivateChannel([h.id], !1, !1, "Quickswitcher"),
              a.Z.channelListScrollTo(f.ME, C.Z.getDMFromUserId(h.id));
            break;
          case r.h8.GROUP_DM:
            (0, c.Kh)(h.id, { navigationReplace: !0 }),
              a.Z.channelListScrollTo(f.ME, h.id);
            break;
          case r.h8.APPLICATION:
            let I = _.Z.getActiveLibraryApplication(h.id);
            g(h.id, I, {
              analyticsParams: {
                source: f.Sbl.QUICK_SWITCHER,
                location: f.Sbl.QUICK_SWITCHER,
              },
            });
            break;
          case r.h8.LINK:
            (0, d.Z)(h.path, { navigationReplace: !0 });
            break;
          case r.h8.IN_APP_NAVIGATION:
            (0, d.Z)(h.path, { navigationReplace: !0 });
        }
        l.Z.dispatch({ type: "QUICKSWITCHER_SWITCH_TO", result: e });
      }
    },
    923834: function (e, n, t) {
      t(411104);
      var l,
        i,
        o,
        a,
        u = t(442837),
        r = t(570140);
      let d = null;
      class c extends (l = u.ZP.Store) {
        getCurrentPath() {
          return null != d ? d.pathname : null;
        }
        getCurrentRoute() {
          return (function (e) {
            let n = null != e && null != e.search ? e.search : "";
            return null != e ? "".concat(e.pathname).concat(n) : null;
          })(d);
        }
        reset() {
          throw Error(
            "Should not reset the store this way outside of a test environment",
          );
        }
      }
      (a = "ApplicationStoreLocationStore"),
        (o = "displayName") in (i = c)
          ? Object.defineProperty(i, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (i[o] = a),
        (n.Z = new c(r.Z, {
          APPLICATION_STORE_LOCATION_CHANGE: function (e) {
            let { location: n } = e;
            d = { ...n };
          },
          APPLICATION_STORE_RESET_NAVIGATION: function () {
            d = null;
          },
        }));
    },
    774343: function (e, n, t) {
      var l,
        i,
        o,
        a,
        u,
        r,
        d,
        c = t(442837),
        s = t(570140),
        E = t(592125),
        C = t(896797),
        _ = t(430824),
        h = t(944486),
        S = t(55589),
        I = t(981631);
      let A = (null !==
        (r =
          null === (u = window) || void 0 === u
            ? void 0
            : null === (a = u.location) || void 0 === a
              ? void 0
              : a.pathname) && void 0 !== r
        ? r
        : ""
      ).startsWith(I.Z5c.ACTIVITIES)
        ? I.Z5c.ACTIVITIES
        : null;
      function T(e) {
        let { link: n } = e;
        if (A === n) return !1;
        A = n;
      }
      class f extends (d = c.ZP.Store) {
        initialize() {
          this.waitFor(C.Z, S.Z, h.Z, _.Z, E.Z);
        }
        getHomeLink() {
          return null != A ? A : C.Z.fallbackRoute;
        }
      }
      (o = "AppViewStore"),
        (i = "displayName") in (l = f)
          ? Object.defineProperty(l, i, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (l[i] = o),
        (n.Z = new f(s.Z, {
          OVERLAY_INITIALIZE: function () {
            let e = S.Z.getPrivateChannelIds(),
              n = h.Z.getChannelId(I.ME);
            (null != n || null != e[0]) &&
              (A = I.Z5c.CHANNEL(I.ME, null != n ? n : e[0]));
          },
          APP_VIEW_SET_HOME_LINK: T,
          APPLICATION_STORE_LOCATION_CHANGE: function (e) {
            let { location: n } = e;
            T({ link: n.pathname, type: "APP_VIEW_SET_HOME_LINK" });
          },
          APPLICATION_STORE_RESET_NAVIGATION: function () {
            if (null == A || !A.startsWith(I.Z5c.APPLICATION_STORE)) return !1;
            A = I.Z5c.APPLICATION_STORE;
          },
          CHANNEL_SELECT: function (e) {
            let { guildId: n, channelId: t } = e;
            if (null == n && null != t) {
              let e = I.Z5c.CHANNEL(I.ME, t);
              if (e !== A) return (A = e), !0;
            }
            return !1;
          },
          CHANNEL_DELETE: function (e) {
            let { channel: n } = e;
            null == n.guild_id &&
              null != n.id &&
              null != A &&
              A === I.Z5c.CHANNEL(I.ME, n.id) &&
              (A = null);
          },
        }));
    },
  },
]);
//# sourceMappingURL=e7fbd46345ff940ccc58.js.map
