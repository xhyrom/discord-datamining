"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["18101"],
  {
    186070: function (n, t, e) {
      e.d(t, {
        FI: function () {
          return l;
        },
        IL: function () {
          return r;
        },
      });
      var i = e(585483),
        o = e(981631);
      let r = {
          binds: ["mod+return"],
          comboKeysBindGlobal: !0,
          action() {
            if (i.S.hasSubscribers(o.CkL.CALL_ACCEPT))
              return i.S.dispatch(o.CkL.CALL_ACCEPT), !1;
          },
        },
        l = {
          binds: ["ctrl+'", "ctrl+shift+'"],
          comboKeysBindGlobal: !0,
          action(n) {
            if (i.S.hasSubscribers(o.CkL.CALL_START))
              return i.S.dispatch(o.CkL.CALL_START, n), !1;
          },
        };
    },
    185514: function (n, t, e) {
      e.d(t, {
        $c: function () {
          return C;
        },
        Nx: function () {
          return b;
        },
        On: function () {
          return A;
        },
        tQ: function () {
          return c;
        },
        x5: function () {
          return E;
        },
      });
      var i = e(140492),
        o = e(475468),
        r = e(703656),
        l = e(769654),
        d = e(944486),
        s = e(914010),
        u = e(358085),
        a = e(981631);
      let c = {
          binds: ["alt+down"],
          comboKeysBindGlobal: !0,
          action: () => ((0, i.Z)(), !1),
        },
        E = {
          binds: ["alt+up"],
          comboKeysBindGlobal: !0,
          action: () => ((0, i.Z)(-1), !1),
        },
        C = {
          binds: ["mod+alt+right"],
          comboKeysBindGlobal: !0,
          action() {
            let n;
            if (null != s.Z.getGuildId()) n = a.ME;
            else {
              let t = s.Z.getLastSelectedGuildId();
              null != t && ((n = t), (0, o.K)(t, d.Z.getChannelId(t)));
            }
            return null != n && (0, l.X)(n), !1;
          },
        },
        b = {
          binds: (0, u.isMac)() ? ["mod+["] : ["alt+left"],
          comboKeysBindGlobal: !0,
          action: () => ((0, r.op)(), !1),
        },
        A = {
          binds: (0, u.isMac)() ? ["mod+]"] : ["alt+right"],
          comboKeysBindGlobal: !0,
          action: () => ((0, r.eH)(), !1),
        };
    },
    395878: function (n, t, e) {
      e.d(t, {
        K: function () {
          return d;
        },
      });
      var i = e(475468),
        o = e(914010),
        r = e(585483),
        l = e(981631);
      let d = {
        binds: ["mod+shift+t"],
        comboKeysBindGlobal: !0,
        action: () => (
          null != o.Z.getGuildId() && (0, i.K)(l.ME),
          r.S.safeDispatch(l.CkL.TOGGLE_DM_CREATE),
          !1
        ),
      };
    },
    321697: function (n, t, e) {
      e.d(t, {
        r: function () {
          return l;
        },
      });
      var i = e(481060),
        o = e(560067),
        r = e(675999);
      let l = {
        binds: ["mod+shift+n"],
        comboKeysBindGlobal: !0,
        action() {
          (0, i.hasModalOpen)(r.PU)
            ? o.Z.updateCreateGuildModal({
                slide: r._m.JOIN_GUILD,
                location: "Keyboard Shortcut",
              })
            : o.Z.openCreateGuildModal({ location: "Keyboard Shortcut" });
        },
      };
    },
    775774: function (n, t, e) {
      e.d(t, {
        p: function () {
          return o;
        },
      });
      var i = e(358085);
      let o = {
        binds: ["mod+alt+i"],
        comboKeysBindGlobal: !0,
        action(n) {
          if ((0, i.isWeb)() && "discord.com" === location.host)
            return n.preventDefault(), n.stopPropagation(), !1;
        },
      };
    },
    570408: function (n, t, e) {
      e.d(t, {
        I: function () {
          return r;
        },
      });
      var i = e(585483),
        o = e(981631);
      let r = {
        binds: ["mod+f"],
        comboKeysBindGlobal: !0,
        action(n) {
          n.preventDefault(),
            n.stopPropagation(),
            i.S.dispatch(o.CkL.FOCUS_SEARCH, { prefillCurrentChannel: !0 });
        },
      };
    },
    438846: function (n, t, e) {
      e.d(t, {
        K: function () {
          return l;
        },
      });
      var i = e(475468),
        o = e(19780),
        r = e(981631);
      let l = {
        binds: ["mod+shift+alt+v"],
        comboKeysBindGlobal: !0,
        action(n) {
          n.preventDefault(), n.stopPropagation();
          let t = o.Z.getGuildId(),
            e = o.Z.getChannelId();
          return null != e && (0, i.K)(null != t ? t : r.ME, e), !1;
        },
      };
    },
    175724: function (n, t, e) {
      e.d(t, {
        f: function () {
          return G;
        },
      });
      var i = e(513431),
        o = e(475179),
        r = e(904245),
        l = e(45114),
        d = e(40851),
        s = e(358221),
        u = e(623292),
        a = e(807092),
        c = e(6025),
        E = e(897473),
        C = e(913663),
        b = e(268350),
        A = e(433355),
        S = e(592125),
        p = e(703558),
        g = e(323873),
        f = e(375954),
        _ = e(306680),
        L = e(944486),
        O = e(914010),
        I = e(574254),
        T = e(451478),
        h = e(585483),
        N = e(981631);
      let G = {
        binds: ["esc", "shift+pagedown"],
        comboKeysBindGlobal: !0,
        action(n) {
          if (T.Z.isElementFullScreen()) return !1;
          if (h.S.hasSubscribers(N.CkL.CALL_DECLINE))
            return h.S.dispatch(N.CkL.CALL_DECLINE), !1;
          if (I.Z.close()) return !1;
          if (h.S.hasSubscribers(N.CkL.MEDIA_MODAL_CLOSE))
            return h.S.dispatch(N.CkL.MEDIA_MODAL_CLOSE), !1;
          if ((0, i.k)(n.target)) {
            let t = (0, d.J5)(n.target);
            if (null == t ? void 0 : t.hasSubscribers(N.CkL.POPOUT_CLOSE))
              return t.dispatch(N.CkL.POPOUT_CLOSE), !1;
          }
          if (h.S.hasSubscribers(N.CkL.CLOSE_GIF_PICKER))
            return h.S.dispatch(N.CkL.CLOSE_GIF_PICKER), !1;
          if (h.S.hasSubscribers(N.CkL.MODAL_CLOSE))
            return h.S.dispatch(N.CkL.MODAL_CLOSE), !1;
          if (h.S.hasSubscribers(N.CkL.SEARCH_RESULTS_CLOSE))
            return h.S.dispatch(N.CkL.SEARCH_RESULTS_CLOSE), !1;
          let t = O.Z.getGuildId(),
            e = L.Z.getChannelId(t),
            r = S.Z.getChannel(e),
            l =
              A.ZP.getSection(e, null == r ? void 0 : r.isDM()) ===
              N.ULH.SIDEBAR_CHAT
                ? A.ZP.getSidebarState(e)
                : null,
            u =
              (null == l ? void 0 : l.type) === E.tI.VIEW_THREAD ||
              (null == l ? void 0 : l.type) === E.tI.VIEW_CHANNEL
                ? l.channelId
                : null;
          if (!1 === H(e) || !1 === H(u)) return !1;
          if (null != e && (null == l ? void 0 : l.type) === E.tI.CREATE_THREAD)
            return c.Z.closeChannelSidebar(e), !1;
          let a = R(e),
            C = R(u);
          return null == e || a || C || null == l
            ? null != e && !a && s.Z.getChatOpen(e)
              ? (o.Z.updateChatOpen(e, !1), !1)
              : (h.S.dispatch(N.CkL.SCROLLTO_PRESENT), !1)
            : (c.Z.closeChannelSidebar(e), !1);
        },
      };
      function H(n) {
        if (null != n) {
          if (g.Z.isEditingAny(n)) return r.Z.endEditMessage(n), !1;
          if (null != a.Z.getPendingReply(n)) return (0, u.A6)(n), !1;
          if (null != C.Z.getStickerPreview(n, p.d.ChannelMessage))
            return (0, b.qB)(n, p.d.ChannelMessage), !1;
        }
      }
      function R(n) {
        if (null == n) return !1;
        let t = !1;
        return (
          f.Z.getMessages(n).hasMoreAfter &&
            (r.Z.jumpToPresent(n, N.AQB), (t = !0)),
          _.ZP.hasUnread(n) && ((0, l.In)(n), (t = !0)),
          (0, l.iV)(n),
          t
        );
      }
    },
    705371: function (n, t, e) {
      e.d(t, {
        l: function () {
          return c;
        },
      });
      var i = e(904245),
        o = e(181945),
        r = e(888369),
        l = e(375954),
        d = e(944486),
        s = e(914010),
        u = e(585483),
        a = e(981631);
      let c = {
        binds: ["shift+esc"],
        comboKeysBindGlobal: !0,
        action() {
          let n = s.Z.getGuildId();
          if (null == n || !r.default.getGuildHasUnreadIgnoreMuted(n)) return;
          (0, o.Z)([n]);
          let t = d.Z.getChannelId(n);
          if (null != t)
            l.Z.getMessages(t).hasMoreAfter
              ? i.Z.jumpToPresent(t, a.AQB)
              : u.S.dispatch(a.CkL.SCROLLTO_PRESENT);
        },
      };
    },
    138976: function (n, t, e) {
      e.d(t, {
        O: function () {
          return l;
        },
      });
      var i = e(904245),
        o = e(306680),
        r = e(944486);
      let l = {
        binds: ["shift+pageup"],
        comboKeysBindGlobal: !0,
        action() {
          let n = r.Z.getChannelId();
          if (null != n) {
            let t = o.ZP.ackMessageId(n);
            null != t &&
              o.ZP.getOldestUnreadTimestamp(n) > 0 &&
              i.Z.jumpToMessage({
                channelId: n,
                messageId: t,
                offset: 1,
                context: "Keyboard Shortcut",
              });
          }
          return !1;
        },
      };
    },
    296805: function (n, t, e) {
      e.d(t, {
        T: function () {
          return l;
        },
      });
      var i = e(132871),
        o = e(147890),
        r = e(914010);
      let l = {
        binds: ["mod+ctrl+a"],
        comboKeysBindGlobal: !0,
        action() {
          var n;
          let t = null !== (n = r.Z.getGuildId()) && void 0 !== n ? n : void 0;
          (0, o.goToAppDirectory)({
            guildId: t,
            entrypoint: {
              name: i.ApplicationDirectoryEntrypointNames.KEYBOARD_SHORTCUT,
            },
          });
        },
      };
    },
    561716: function (n, t, e) {
      e.d(t, {
        $: function () {
          return r;
        },
      });
      var i = e(51596),
        o = e(819640);
      let r = {
        binds: ["mod+k", "mod+t"],
        comboKeysBindGlobal: !0,
        action: () => (!o.Z.hasLayers() && (0, i.$Z)(), !1),
      };
    },
    239748: function (n, t, e) {
      e.d(t, {
        F: function () {
          return s;
        },
      });
      var i = e(925549),
        o = e(475468),
        r = e(19780),
        l = e(944486),
        d = e(981631);
      let s = {
        binds: ["mod+alt+left"],
        comboKeysBindGlobal: !0,
        action() {
          var n;
          if (!r.Z.isConnected()) return !1;
          let t = null !== (n = r.Z.getGuildId()) && void 0 !== n ? n : d.ME,
            e = l.Z.getChannelId(t);
          return (
            (0, o.K)(t, e), i.Z.channelListScrollTo(t, r.Z.getChannelId()), !1
          );
        },
      };
    },
    337482: function (n, t, e) {
      e.d(t, {
        B2: function () {
          return r;
        },
        gN: function () {
          return l;
        },
      });
      var i = e(585483),
        o = e(981631);
      let r = {
          binds: ["pageup"],
          comboKeysBindGlobal: !0,
          action: () => (
            i.S.dispatchToLastSubscribed(o.CkL.SCROLL_PAGE_UP), !1
          ),
        },
        l = {
          binds: ["pagedown"],
          comboKeysBindGlobal: !0,
          action: () => (
            i.S.dispatchToLastSubscribed(o.CkL.SCROLL_PAGE_DOWN), !1
          ),
        };
    },
    679080: function (n, t, e) {
      e.d(t, {
        S: function () {
          return d;
        },
      });
      var i = e(255963),
        o = e(585483),
        r = e(981631),
        l = e(185923);
      let d = {
        binds: ["mod+e"],
        comboKeysBindGlobal: !0,
        action: () => (
          (0, i.x)(l.qR.SearchEmojiKeybindPressed),
          o.S.dispatchToLastSubscribed(r.CkL.TOGGLE_EMOJI_POPOUT),
          !1
        ),
      };
    },
    777019: function (n, t, e) {
      e.d(t, {
        O: function () {
          return r;
        },
      });
      var i = e(585483),
        o = e(981631);
      let r = {
        binds: ["mod+g"],
        comboKeysBindGlobal: !0,
        action: () => (
          i.S.dispatchToLastSubscribed(o.CkL.TOGGLE_GIF_PICKER), !1
        ),
      };
    },
    523147: function (n, t, e) {
      var i = e(585483),
        o = e(981631);
      t.Z = {
        binds: ["mod+shift+b"],
        comboKeysBindGlobal: !0,
        action: () => (i.S.dispatch(o.CkL.TOGGLE_SOUNDBOARD), !1),
      };
    },
    400332: function (n, t, e) {
      e.d(t, {
        U: function () {
          return r;
        },
      });
      var i = e(585483),
        o = e(981631);
      let r = {
        binds: ["mod+s"],
        comboKeysBindGlobal: !0,
        action: () => (
          i.S.dispatchToLastSubscribed(o.CkL.TOGGLE_STICKER_PICKER), !1
        ),
      };
    },
    510761: function (n, t, e) {
      e.d(t, {
        X3: function () {
          return r;
        },
        nq: function () {
          return o;
        },
      });
      var i = e(452913);
      let o = {
          binds: ["mod+alt+down", "mod+shift+]", "ctrl+tab"],
          comboKeysBindGlobal: !0,
          action: (n) => (
            n.preventDefault(), n.stopPropagation(), (0, i.Z)(), !1
          ),
        },
        r = {
          binds: ["mod+alt+up", "mod+shift+[", "ctrl+shift+tab"],
          comboKeysBindGlobal: !0,
          action: (n) => (
            n.preventDefault(), n.stopPropagation(), (0, i.Z)(-1), !1
          ),
        };
    },
    189509: function (n, t, e) {
      e.d(t, {
        z: function () {
          return l;
        },
      });
      var i = e(607070),
        o = e(585483),
        r = e(981631);
      let l = {
        binds: ["return"],
        action() {
          if (
            !i.Z.keyboardModeEnabled &&
            o.S.hasSubscribers(r.CkL.MODAL_SUBMIT)
          )
            return o.S.dispatch(r.CkL.MODAL_SUBMIT), !1;
        },
      };
    },
    673553: function (n, t, e) {
      e.d(t, {
        U: function () {
          return S;
        },
      }),
        e(47120);
      var i = e(610521),
        o = e(607070),
        r = e(819640),
        l = e(131951),
        d = e(19780),
        s = e(585483),
        u = e(5967),
        a = e(13140),
        c = e(981631);
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
        b = new Set([
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
        A = new Set([
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
          keydown(n, t) {
            var e;
            let S =
              null === (e = (0, u.uB)(n)) || void 0 === e
                ? void 0
                : e.activeElement;
            if (
              (0, u.VG)(S) ||
              i.fC.isActive() ||
              C.has(t) ||
              b.has(t) ||
              A.has(t)
            )
              return !1;
            let p = null != S && "BODY" === S.tagName;
            return (
              !(
                (o.Z.keyboardModeEnabled && !p && !/^[a-zA-Z0-9]$/.test(t)) ||
                s.S.hasSubscribers(c.CkL.MODAL_CLOSE) ||
                r.Z.hasLayers()
              ) &&
              ("Tab" === t &&
              s.S.hasSubscribers(c.CkL.TEXTAREA_FOCUS) &&
              null != document.querySelector('[data-can-focus="true"]')
                ? (n.preventDefault(), s.S.dispatch(c.CkL.TEXTAREA_FOCUS), !1)
                : !(
                    d.Z.isConnected() &&
                    l.Z.getMode() === c.pM4.PUSH_TO_TALK &&
                    !l.Z.isSelfMute() &&
                    Object.values(l.Z.getShortcuts())
                      .map(a.d2)
                      .some((t) => t.map((n) => n.keyCode).includes(n.keyCode))
                  ) &&
                  void (
                    !n.metaKey &&
                    !n.ctrlKey &&
                    !E.has(t) &&
                    s.S.dispatchToLastSubscribed(c.CkL.TEXTAREA_FOCUS)
                  ))
            );
          },
        };
    },
    280492: function (n, t, e) {
      e.d(t, {
        iN: function () {
          return o;
        },
        oV: function () {
          return r;
        },
      });
      var i = e(846027);
      let o = {
          binds: ["mod+shift+m"],
          comboKeysBindGlobal: !0,
          action: () => (
            i.Z.toggleSelfMute({
              usedKeybind: !0,
              location: "Default Keybind",
            }),
            !1
          ),
        },
        r = {
          binds: ["mod+shift+d"],
          comboKeysBindGlobal: !0,
          action: () => (
            i.Z.toggleSelfDeaf({
              usedKeybind: !0,
              location: "Default Keybind",
            }),
            !1
          ),
        };
    },
    746887: function (n, t, e) {
      e.d(t, {
        u: function () {
          return s;
        },
      });
      var i = e(211739),
        o = e(680089),
        r = e(984933),
        l = e(914010),
        d = e(981631);
      let s = {
        binds: ["mod+shift+a"],
        comboKeysBindGlobal: !0,
        action() {
          let n = l.Z.getGuildId();
          return (
            null != n &&
            (r.ZP.getChannels(n)[d.d4z.GUILD_CATEGORY].some((n) => {
              let { channel: t } = n;
              return "null" !== t.id && !o.Z.isCollapsed(t.id);
            })
              ? (0, i.N5)(n)
              : (0, i.lc)(n),
            !1)
          );
        },
      };
    },
    861007: function (n, t, e) {
      e.d(t, {
        u: function () {
          return r;
        },
      });
      var i = e(585483),
        o = e(981631);
      let r = {
        binds: ["mod+p"],
        comboKeysBindGlobal: !0,
        action: () => (i.S.dispatch(o.CkL.TOGGLE_CHANNEL_PINS), !1),
      };
    },
    89028: function (n, t, e) {
      e.d(t, {
        f: function () {
          return l;
        },
      });
      var i = e(2818),
        o = e(585483),
        r = e(981631);
      let l = {
        binds: ["mod+l"],
        comboKeysBindGlobal: !0,
        action() {
          let { enabled: n, inInbox: t } = i.Z.getCurrentConfig(
            { location: "keybinds" },
            { autoTrackExposure: !1 },
          );
          if (n && !t) return o.S.dispatch(r.CkL.TOGGLE_FOR_LATER), !1;
        },
      };
    },
    300644: function (n, t, e) {
      e.d(t, {
        O: function () {
          return o;
        },
      });
      var i = e(63063);
      let o = {
        binds: ["mod+shift+h", "f1"],
        comboKeysBindGlobal: !0,
        action: () => (window.open(i.w), !1),
      };
    },
    721383: function (n, t, e) {
      e.d(t, {
        _: function () {
          return l;
        },
      });
      var i = e(481060),
        o = e(191980),
        r = e(285371);
      let l = {
        binds: ["mod+/", "mod+shift+/"],
        comboKeysBindGlobal: !0,
        action: () => ((0, i.hasModalOpen)(r.J) ? o.C() : o.$(), !1),
      };
    },
    207234: function (n, t, e) {
      e.d(t, {
        M: function () {
          return s;
        },
        a: function () {
          return d;
        },
      });
      var i = e(392711),
        o = e.n(i),
        r = e(585483),
        l = e(981631);
      let d = {
          binds: ["mod+i"],
          comboKeysBindGlobal: !0,
          action: () => (r.S.dispatch(l.CkL.TOGGLE_INBOX), !1),
        },
        s = {
          binds: ["mod+shift+e"],
          comboKeysBindGlobal: !0,
          action: o().debounce(
            () => {
              if (r.S.hasSubscribers(l.CkL.MARK_TOP_INBOX_CHANNEL_READ))
                return r.S.dispatch(l.CkL.MARK_TOP_INBOX_CHANNEL_READ), !1;
            },
            100,
            { leading: !0 },
          ),
        };
    },
    997292: function (n, t, e) {
      e.d(t, {
        r: function () {
          return b;
        },
      });
      var i = e(106351),
        o = e(475179),
        r = e(816782),
        l = e(358221),
        d = e(221292),
        s = e(687158),
        u = e(433355),
        a = e(592125),
        c = e(944486),
        E = e(914010),
        C = e(981631);
      let b = {
        binds: ["mod+u"],
        comboKeysBindGlobal: !0,
        action() {
          let n = E.Z.getGuildId(),
            t = c.Z.getChannelId(n),
            e = a.Z.getChannel(t);
          if (null != t && null != e && e.type === i.d.GUILD_VOICE)
            return o.Z.updateChatOpen(t, !l.Z.getChatOpen(t)), !1;
          if (null != t && null != e && e.type === i.d.DM) {
            let n = u.ZP.getSection(t, null == e ? void 0 : e.isDM()),
              i = (0, s.Of)(e.getRecipientId()),
              o = n === C.ULH.PROFILE;
            return (
              (0, d.TY)({ displayProfile: i, isProfileOpen: !o }),
              r.Z.toggleProfilePanelSection(),
              !1
            );
          }
          return r.Z.toggleMembersSection(), !1;
        },
      };
    },
    743810: function (n, t, e) {
      e.d(t, {
        Nv: function () {
          return f;
        },
        pd: function () {
          return S;
        },
        uX: function () {
          return _;
        },
        wk: function () {
          return p;
        },
      });
      var i = e(350483),
        o = e(220444),
        r = e(905423),
        l = e(131704),
        d = e(592125),
        s = e(306680),
        u = e(944486),
        a = e(9156),
        c = e(981631),
        E = e(490897);
      let C = (n, t) => {
          let e = d.Z.getChannel(t);
          return (
            null != e &&
            ((0, l.hv)(e.type) || c.TPd.GUILD_VOCAL.has(e.type)
              ? s.ZP.getMentionCount(t) > 0 || u.Z.getVoiceChannelId() === t
              : (!a.ZP.isChannelMuted(n, t) || s.ZP.getMentionCount(t) > 0) &&
                (0, o.d)(e))
          );
        },
        b = (n, t) => {
          if (t === E.W.GUILD_EVENT)
            return (
              !a.ZP.isMuteScheduledEventsEnabled(n) && s.ZP.hasUnread(n, t)
            );
          return s.ZP.hasUnread(n, t);
        },
        A = (n, t) => {
          let e = d.Z.getChannel(t);
          return (
            !!(null != e && c.TPd.GUILD_VOCAL.has(e.type)) &&
            (!!(s.ZP.getMentionCount(t) > 0) ||
              (u.Z.getVoiceChannelId() === t && s.ZP.getUnreadCount(t) > 0))
          );
        },
        S = {
          binds: ["alt+shift+down"],
          comboKeysBindGlobal: !0,
          action() {
            var n;
            let t =
              null !== (n = r.Z.getState().guildId) && void 0 !== n ? n : c.ME;
            return (
              (0, i.Z)(1, {
                channelPredicate: C,
                guildPredicate: (n) => n === t || !a.ZP.isMuted(n),
                guildFeaturePredicate: b,
                ensureChatIsVisible: A,
                withVoiceChannels: !0,
              }),
              !1
            );
          },
        },
        p = {
          binds: ["alt+shift+up"],
          comboKeysBindGlobal: !0,
          action() {
            var n;
            let t =
              null !== (n = r.Z.getState().guildId) && void 0 !== n ? n : c.ME;
            return (
              (0, i.Z)(-1, {
                channelPredicate: C,
                guildPredicate: (n) => n === t || !a.ZP.isMuted(n),
                guildFeaturePredicate: b,
                ensureChatIsVisible: A,
                withVoiceChannels: !0,
              }),
              !1
            );
          },
        },
        g = (n, t) => s.ZP.getMentionCount(t) > 0,
        f = {
          binds: ["mod+shift+alt+down"],
          comboKeysBindGlobal: !0,
          action: () => (
            (0, i.Z)(1, {
              channelPredicate: g,
              ensureChatIsVisible: A,
              withVoiceChannels: !0,
            }),
            !1
          ),
        },
        _ = {
          binds: ["mod+shift+alt+up"],
          comboKeysBindGlobal: !0,
          action: () => (
            (0, i.Z)(-1, {
              channelPredicate: g,
              ensureChatIsVisible: A,
              withVoiceChannels: !0,
            }),
            !1
          ),
        };
    },
    620212: function (n, t, e) {
      e.d(t, {
        U: function () {
          return d;
        },
      });
      var i = e(592125),
        o = e(944486),
        r = e(585483),
        l = e(981631);
      let d = {
        binds: ["mod+shift+u"],
        comboKeysBindGlobal: !0,
        action() {
          let n = i.Z.getChannel(o.Z.getChannelId());
          return (
            null != n && !n.isManaged() && r.S.dispatch(l.CkL.UPLOAD_FILE), !1
          );
        },
      };
    },
    188051: function (n, t, e) {
      e.d(t, {
        w: function () {
          return r;
        },
      });
      var i = e(481060),
        o = e(423932);
      let r = {
        binds: ["mod+alt+shift+w"],
        comboKeysBindGlobal: !0,
        action: () => ((0, o.Z)(i.closeAllModals), !1),
      };
    },
    547420: function (n, t, e) {
      e.d(t, {
        MY: function () {
          return u;
        },
        RC: function () {
          return s;
        },
        UF: function () {
          return d;
        },
      });
      var i = e(857595),
        o = e(607070),
        r = e(981631);
      function l(n) {
        return r.yqN.ZOOM_SCALES[
          Math.max(
            0,
            Math.min(
              r.yqN.ZOOM_SCALES.indexOf(o.Z.zoom) + n,
              r.yqN.ZOOM_SCALES.length - 1,
            ),
          )
        ];
      }
      let d = {
          binds: ["mod+plus"],
          comboKeysBindGlobal: !0,
          action: () => ((0, i.cq)(l(1)), !1),
        },
        s = {
          binds: ["mod+minus"],
          comboKeysBindGlobal: !0,
          action: () => ((0, i.cq)(l(-1)), !1),
        },
        u = {
          binds: ["mod+0"],
          comboKeysBindGlobal: !0,
          action: () => ((0, i.cq)(r.yqN.ZOOM_DEFAULT), !1),
        };
      t.ZP = 12633 == e.j ? { ZOOM_IN: d, ZOOM_OUT: s, ZOOM_RESET: u } : null;
    },
    612226: function (n, t, e) {
      e.d(t, {
        Q2: function () {
          return i;
        },
        Rv: function () {
          return Y;
        },
        U6: function () {
          return x;
        },
        UD: function () {
          return w;
        },
        oT: function () {
          return W;
        },
      }),
        e(411104),
        e(653041);
      var i,
        o,
        r = e(346610),
        l = e(2818),
        d = e(186070),
        s = e(185514),
        u = e(395878),
        a = e(321697),
        c = e(775774),
        E = e(570408),
        C = e(438846),
        b = e(360038),
        A = e(175724),
        S = e(705371),
        p = e(138976),
        g = e(296805),
        f = e(561716),
        _ = e(239748),
        L = e(337482),
        O = e(679080),
        I = e(777019),
        T = e(523147),
        h = e(400332),
        N = e(510761),
        G = e(189509),
        H = e(673553),
        R = e(280492),
        k = e(746887),
        Z = e(861007),
        M = e(89028),
        m = e(300644),
        D = e(721383),
        P = e(207234),
        U = e(997292),
        y = e(743810),
        K = e(620212),
        B = e(188051),
        v = e(547420),
        V = e(981631),
        F = e(388032);
      function w(n) {
        switch (n) {
          case "NAVIGATION":
            return F.intl.string(F.t["yGE+jo"]);
          case "VOICE_AND_VIDEO":
            return F.intl.string(F.t.bI8F5u);
          case "CHAT":
            return F.intl.string(F.t.hDhbb2);
          case "MISCELLANEOUS":
            return F.intl.string(F.t.cBdwqq);
          case "MESSAGE":
            return F.intl.string(F.t["5fpmX1"]);
          case "DND":
            return F.intl.string(F.t["69j6+/"]);
        }
      }
      function x(n) {
        switch (n) {
          case "MESSAGE":
            return F.intl.string(F.t.iepGDg);
          case "DND":
            return F.intl.string(F.t.LBsB0d);
          default:
            return null;
        }
      }
      function X() {
        for (var n = arguments.length, t = Array(n), e = 0; e < n; e++)
          t[e] = arguments[e];
        return t.map((n) => {
          let t = W[n];
          if (null == t)
            throw Error("getBindsFor(...): No bind for ".concat(t));
          return t.binds[0];
        });
      }
      ((o = i || (i = {})).NAVIGATION = "NAVIGATION"),
        (o.CHAT = "CHAT"),
        (o.VOICE_AND_VIDEO = "VOICE_AND_VIDEO"),
        (o.MISCELLANEOUS = "MISCELLANEOUS"),
        (o.MESSAGE = "MESSAGE"),
        (o.DND = "DND");
      let W = {
        [V.EkH.SERVER_NEXT]: N.nq,
        [V.EkH.SERVER_PREV]: N.X3,
        [V.EkH.CHANNEL_NEXT]: s.tQ,
        [V.EkH.CHANNEL_PREV]: s.x5,
        [V.EkH.NAVIGATE_BACK]: s.Nx,
        [V.EkH.NAVIGATE_FORWARD]: s.On,
        [V.EkH.UNREAD_NEXT]: y.pd,
        [V.EkH.UNREAD_PREV]: y.wk,
        [V.EkH.MENTION_CHANNEL_NEXT]: y.Nv,
        [V.EkH.MENTION_CHANNEL_PREV]: y.uX,
        [V.EkH.TOGGLE_PREVIOUS_GUILD]: s.$c,
        [V.EkH.JUMP_TO_GUILD]: b.u,
        [V.EkH.SUBMIT]: G.z,
        [V.EkH.TEXTAREA_FOCUS]: H.U,
        [V.EkH.MARK_CHANNEL_READ]: A.f,
        [V.EkH.MARK_SERVER_READ]: S.l,
        [V.EkH.TOGGLE_CHANNEL_PINS]: Z.u,
        [V.EkH.TOGGLE_FOR_LATER]: M.f,
        [V.EkH.TOGGLE_INBOX]: P.a,
        [V.EkH.MARK_TOP_INBOX_CHANNEL_READ]: P.M,
        [V.EkH.TOGGLE_USERS]: U.r,
        [V.EkH.TOGGLE_HELP]: m.O,
        [V.EkH.VIBE_WITH_WUMPUS]: B.w,
        [V.EkH.TOGGLE_MUTE]: R.iN,
        [V.EkH.TOGGLE_DEAFEN]: R.oV,
        [V.EkH.TOGGLE_CATEGORY_COLLAPSED]: k.u,
        [V.EkH.SEARCH_SOUNDBOARD]: T.Z,
        [V.EkH.SCROLL_UP]: L.B2,
        [V.EkH.SCROLL_DOWN]: L.gN,
        [V.EkH.QUICKSWITCHER_SHOW]: f.$,
        [V.EkH.CREATE_DM_GROUP]: u.K,
        [V.EkH.SEARCH_EMOJIS]: O.S,
        [V.EkH.SEARCH_GIFS]: I.O,
        [V.EkH.SEARCH_STICKERS]: h.U,
        [V.EkH.TOGGLE_HOTKEYS]: D._,
        [V.EkH.JUMP_TO_FIRST_UNREAD]: p.O,
        [V.EkH.CREATE_GUILD]: a.r,
        [V.EkH.UPLOAD_FILE]: K.U,
        [V.EkH.RETURN_TO_AUDIO_CHANNEL]: _.F,
        [V.EkH.CALL_ACCEPT]: d.IL,
        [V.EkH.CALL_START]: d.FI,
        [V.EkH.FOCUS_SEARCH]: E.I,
        [V.EkH.JUMP_TO_CURRENT_CALL]: C.K,
        [V.EkH.ZOOM_IN]: v.UF,
        [V.EkH.ZOOM_OUT]: v.RC,
        [V.EkH.ZOOM_RESET]: v.MY,
        [V.EkH.OPEN_APP_DIRECTORY]: g.T,
        [V.EkH.BROWSER_DEVTOOLS]: c.p,
      };
      function Y() {
        let n = [
          {
            description: F.intl.string(F.t.bx4Uy8),
            binds: X(V.EkH.SERVER_PREV, V.EkH.SERVER_NEXT),
            group: "NAVIGATION",
          },
          {
            description: F.intl.string(F.t["+Wem6u"]),
            binds: X(V.EkH.CHANNEL_PREV, V.EkH.CHANNEL_NEXT),
            group: "NAVIGATION",
          },
          {
            description: F.intl.string(F.t["+2fcd3"]),
            binds: X(V.EkH.NAVIGATE_BACK, V.EkH.NAVIGATE_FORWARD),
            group: "NAVIGATION",
          },
          {
            description: F.intl.string(F.t.eVmj1N),
            binds: X(V.EkH.UNREAD_PREV, V.EkH.UNREAD_NEXT),
            group: "NAVIGATION",
          },
          {
            description: F.intl.string(F.t.EcqS7e),
            binds: X(V.EkH.MENTION_CHANNEL_PREV, V.EkH.MENTION_CHANNEL_NEXT),
            group: "NAVIGATION",
          },
          {
            description: F.intl.string(F.t["4I3pwc"]),
            binds: X(V.EkH.JUMP_TO_CURRENT_CALL),
            group: "NAVIGATION",
          },
          {
            description: F.intl.string(F.t["Bqss7+"]),
            binds: X(V.EkH.TOGGLE_PREVIOUS_GUILD),
            group: "NAVIGATION",
          },
          {
            description: F.intl.string(F.t.yYsRlJ),
            binds: X(V.EkH.QUICKSWITCHER_SHOW),
            group: "NAVIGATION",
          },
          {
            description: F.intl.string(F.t.O7ouXF),
            binds: X(V.EkH.CREATE_GUILD),
            group: "NAVIGATION",
            groupEnd: !0,
          },
          {
            description: F.intl.string(F.t.Lns0FR),
            binds: ["mod+d"],
            group: "DND",
          },
          {
            description: F.intl.string(F.t.dmMqa2),
            binds: ["up", "down"],
            group: "DND",
          },
          {
            description: F.intl.string(F.t["cs/HVF"]),
            binds: ["spacebar", "enter"],
            group: "DND",
          },
          {
            description: F.intl.string(F.t["1ioMJS"]),
            binds: ["esc"],
            group: "DND",
            groupEnd: !0,
          },
          {
            description: F.intl.string(F.t.UaXAPz),
            binds: X(V.EkH.MARK_SERVER_READ),
            group: "CHAT",
          },
          {
            description: F.intl.string(F.t["5X9vFh"]),
            binds: X(V.EkH.MARK_CHANNEL_READ),
            group: "CHAT",
          },
          {
            description: F.intl.string(F.t.wxQFsr),
            binds: X(V.EkH.CREATE_DM_GROUP),
            group: "CHAT",
          },
          {
            description: F.intl.string(F.t["C+XV7e"]),
            binds: X(V.EkH.TOGGLE_CHANNEL_PINS),
            group: "CHAT",
          },
          {
            description: F.intl.string(F.t["Q+YV/f"]),
            binds: X(V.EkH.TOGGLE_INBOX),
            group: "CHAT",
          },
          {
            description: F.intl.string(F.t["YEjV+f"]),
            binds: X(V.EkH.MARK_TOP_INBOX_CHANNEL_READ),
            group: "CHAT",
          },
          {
            description: F.intl.string(F.t.AcBI9f),
            binds: X(V.EkH.TOGGLE_USERS),
            group: "CHAT",
          },
          {
            description: F.intl.string(F.t.JoxNnp),
            binds: X(V.EkH.SEARCH_EMOJIS),
            group: "CHAT",
          },
          {
            description: F.intl.string(F.t["3PHxo6"]),
            binds: X(V.EkH.SEARCH_GIFS),
            group: "CHAT",
          },
          {
            description: F.intl.string(F.t.YFl7eX),
            binds: X(V.EkH.SEARCH_STICKERS),
            group: "CHAT",
          },
          {
            description: F.intl.string(F.t.L3RYYG),
            binds: X(V.EkH.SCROLL_UP, V.EkH.SCROLL_DOWN),
            group: "CHAT",
          },
          {
            description: F.intl.string(F.t["3HAurK"]),
            binds: X(V.EkH.JUMP_TO_FIRST_UNREAD),
            group: "CHAT",
          },
          {
            description: F.intl.string(F.t.rrYBEh),
            binds: X(V.EkH.TEXTAREA_FOCUS),
            group: "CHAT",
          },
          {
            description: F.intl.string(F.t.sUJlPD),
            binds: X(V.EkH.UPLOAD_FILE),
            group: "CHAT",
            groupEnd: !0,
          },
          {
            description: F.intl.string(F.t.tL6eVV),
            binds: X(V.EkH.TOGGLE_MUTE),
            group: "VOICE_AND_VIDEO",
          },
          {
            description: F.intl.string(F.t["QXe/7e"]),
            binds: X(V.EkH.TOGGLE_DEAFEN),
            group: "VOICE_AND_VIDEO",
          },
          {
            description: F.intl.string(F.t.d6UIio),
            binds: X(V.EkH.CALL_ACCEPT),
            group: "VOICE_AND_VIDEO",
          },
          {
            description: F.intl.string(F.t.IcEW09),
            binds: X(V.EkH.MARK_CHANNEL_READ),
            group: "VOICE_AND_VIDEO",
          },
          {
            description: F.intl.string(F.t.WN2dsb),
            binds: X(V.EkH.CALL_START),
            group: "VOICE_AND_VIDEO",
            groupEnd: !0,
          },
          {
            description: F.intl.string(F.t.rUK0kp),
            binds: X(V.EkH.SEARCH_SOUNDBOARD),
            group: "VOICE_AND_VIDEO",
          },
          {
            description: F.intl.string(F.t.vkGkSk),
            binds: X(V.EkH.TOGGLE_HELP),
            group: "MISCELLANEOUS",
          },
          {
            description: F.intl.string(F.t["FJvZ8/"]),
            binds: X(V.EkH.FOCUS_SEARCH),
            group: "MISCELLANEOUS",
          },
          {
            description: F.intl.string(F.t.HnNtEB),
            binds: ["h+h+right+n+k"],
            group: "MISCELLANEOUS",
            groupEnd: !0,
          },
          {
            description: F.intl.string(F.t.fsBWmZ),
            binds: ["e"],
            group: "MESSAGE",
          },
          {
            description: F.intl.string(F.t.xwMqDw),
            binds: ["backspace"],
            group: "MESSAGE",
          },
          {
            description: F.intl.string(F.t["CvQ18/"]),
            binds: ["p"],
            group: "MESSAGE",
          },
          {
            description: F.intl.string(F.t.lfIHs7),
            binds: ["plus"],
            group: "MESSAGE",
          },
          {
            description: F.intl.string(F.t["5IEsGx"]),
            binds: ["r"],
            group: "MESSAGE",
          },
          {
            description: F.intl.string(F.t.JrGD7O),
            binds: ["mod+c"],
            group: "MESSAGE",
          },
          {
            description: F.intl.string(F.t.RpE9k5),
            binds: ["alt+enter"],
            group: "MESSAGE",
          },
          {
            description: F.intl.string(F.t.rrYBEh),
            binds: ["escape"],
            group: "MESSAGE",
            groupEnd: !0,
          },
          {
            description: F.intl.string(F.t.z9c6mp),
            binds: X(V.EkH.VIBE_WITH_WUMPUS),
            group: "MISCELLANEOUS",
          },
        ];
        (0, r.WT)({ location: "keybinds" }, { autoTrackExposure: !1 })
          .canForwardMessages &&
          n.push({
            description: F.intl.string(F.t.zSyDdH),
            binds: ["f"],
            group: "MESSAGE",
          });
        let { enabled: t, inInbox: e } = l.Z.getCurrentConfig(
          { location: "keybinds" },
          { autoTrackExposure: !1 },
        );
        return (
          t &&
            !e &&
            n.push({
              description: F.intl.string(F.t.IWNSoK),
              binds: X(V.EkH.TOGGLE_FOR_LATER),
              group: "CHAT",
            }),
          n
        );
      }
      t.ZP = 12633 == e.j ? W : null;
    },
    140492: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return g;
        },
      }),
        e(47120),
        e(733860);
      var i = e(358230),
        o = e(931261),
        r = e(355298),
        l = e(333984),
        d = e(905423),
        s = e(695346),
        u = e(283595),
        a = e(923834),
        c = e(55589),
        E = e(823379),
        C = e(475468),
        b = e(981631),
        A = e(176505);
      let S = () => {
        let n =
          r.Z.getMessageRequestsCount() > 0 || l.Z.getSpamChannelsCount() > 0;
        return [
          b.Z5c.FRIENDS,
          u.Z.hasLibraryApplication() && !s.bm.getSetting()
            ? b.Z5c.APPLICATION_LIBRARY
            : null,
          b.Z5c.APPLICATION_STORE,
          n ? b.Z5c.MESSAGE_REQUESTS : null,
          b.Z5c.COLLECTIBLES_SHOP,
          s.Ex.getSetting() ? b.Z5c.FAMILY_CENTER : null,
        ].filter(E.lm);
      };
      function p(n, t) {
        (0, C.K)(n, t);
      }
      function g() {
        let n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          t = d.Z.getState().guildId;
        null == t
          ? !(function (n) {
              var t, e, i;
              let { channelId: o, path: r, basePath: l } = d.Z.getState(),
                s = c.Z.getPrivateChannelIds(),
                u = __OVERLAY__ ? s : [...S(), ...s];
              let E =
                (null == o
                  ? ((t = null != r ? r : l),
                    S().findIndex((n) => t.startsWith(n)))
                  : null != o
                    ? u.indexOf(o)
                    : 0) + n;
              E >= u.length ? (E = 0) : E < 0 && (E = u.length - 1);
              let A = u[E];
              if (S().includes(A))
                !(function (n) {
                  let t = a.Z.getCurrentRoute();
                  n === b.Z5c.APPLICATION_STORE && null != t
                    ? (0, C.z)(t)
                    : (0, C.z)(n);
                })(A);
              else {
                (e = b.ME), (i = A), (0, C.K)(e, i);
              }
            })(n)
          : !(function (n, t) {
              var e, r, l, s;
              let u = d.Z.getState().channelId,
                a = (0, i.Z)(t, { withCurrentVoiceChannel: !0 }).map(
                  (n) => n.id,
                );
              (0, o.s)(t) && a.unshift(A.oC.GUILD_HOME);
              let c =
                ((e = (null != u ? a.indexOf(u) : -1) + n),
                (r = a.length),
                e < 0 ? r - 1 : e >= r ? 0 : e);
              (l = t), (s = a[c]), (0, C.K)(l, s);
            })(n, t);
      }
    },
    452913: function (n, t, e) {
      var i = e(392711),
        o = e.n(i),
        r = e(853856),
        l = e(706590),
        d = e(905423),
        s = e(592125),
        u = e(496675),
        a = e(944486),
        c = e(771845),
        E = e(774343),
        C = e(475468),
        b = e(981631);
      t.Z = o().throttle(function () {
        let n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          t = c.ZP.getFlattenedGuildIds(),
          e = (function (n) {
            let t = d.Z.getState().guildId;
            if (null == t) return -2;
            if (t === b.I_8) return -1;
            let e = n.indexOf(t);
            return -1 === e ? -2 : e;
          })(t);
        if (
          (-1 === (e += n) && !(0, l.z)(r.Z, s.Z, u.Z) && (e += n),
          -3 === e && (e = t.length - 1),
          e >= t.length || -2 === e)
        ) {
          (0, C.z)(E.Z.getHomeLink());
          return;
        }
        let i = -1 === e ? b.I_8 : t[e],
          o = a.Z.getChannelId(i);
        (0, C.K)(i, o === i ? null : o, !1);
      }, b.aZC);
    },
    350483: function (n, t, e) {
      e(47120);
      var i = e(200651);
      e(192379);
      var o = e(392711),
        r = e.n(o),
        l = e(481060),
        d = e(358230),
        s = e(905423),
        u = e(984933),
        a = e(914010),
        c = e(771845),
        E = e(55589),
        C = e(585483),
        b = e(475468),
        A = e(981631),
        S = e(490897);
      function p(n, t) {
        var e, i;
        return [
          { resourceId: n, type: S.W.GUILD_EVENT },
          ...((e = n),
          (i = t),
          e === A.ME
            ? E.Z.getPrivateChannelIds()
            : (0, d.Z)(e, {
                withVoiceChannels: i,
                withCurrentVoiceChannel: !0,
              }).map((n) => n.id)),
        ];
      }
      t.Z = r().throttle(function (n, t) {
        var o, r;
        let d,
          {
            channelPredicate: E = () => !0,
            guildPredicate: S = () => !0,
            guildFeaturePredicate: g = () => !1,
            ensureChatIsVisible: f = () => !1,
            withVoiceChannels: _ = !1,
          } = t,
          L = null !== (o = s.Z.getState().guildId) && void 0 !== o ? o : A.ME,
          O = s.Z.getState().channelId,
          I = (function (n, t) {
            let e = [A.ME, ...c.ZP.getFlattenedGuildIds()],
              i = e.indexOf(n);
            return t > 0
              ? e.slice(i).concat(e.slice(0, i), n)
              : (e.splice(i, 0, n), e.slice(i + 1).concat(e.slice(0, i + 1)));
          })(L, n),
          T = n > 0 ? 0 : I.length - 1,
          h = p(L, _),
          N = h.indexOf(O) + n;
        for (; null != L && "" !== L; ) {
          if (((d = h[N]), S(L)))
            for (; null != d && "" !== d; ) {
              if ("string" == typeof d) {
                if (E(L, d)) return (0, b.K)(L, d, !1, f(L, d));
              } else if ("object" == typeof d && g(d.resourceId, d.type))
                return (
                  L !== a.Z.getGuildId() &&
                    (0, b.K)(
                      L,
                      null === (r = u.ZP.getDefaultChannel(L)) || void 0 === r
                        ? void 0
                        : r.id,
                    ),
                  (0, l.openModalLazy)(async () => {
                    let { default: n } = await Promise.all([
                      e.e("18543"),
                      e.e("22347"),
                      e.e("56236"),
                      e.e("89789"),
                    ]).then(e.bind(e, 17671));
                    return (t) => (0, i.jsx)(n, { ...t, guildId: L });
                  })
                );
              (N += n), (d = h[N]);
            }
          if (((T += n), null == (L = I[T]) || "" === L)) break;
          (h = p(L, _)), (N = n < 0 ? h.length - 1 : 0);
        }
        C.S.dispatch(A.CkL.SHAKE_APP, { duration: 200, intensity: 2 });
      }, A.aZC);
    },
    191980: function (n, t, e) {
      e.d(t, {
        $: function () {
          return o;
        },
        C: function () {
          return r;
        },
      });
      var i = e(570140);
      function o() {
        i.Z.dispatch({ type: "SHOW_KEYBOARD_SHORTCUTS" });
      }
      function r() {
        i.Z.dispatch({ type: "HIDE_KEYBOARD_SHORTCUTS" });
      }
    },
    285371: function (n, t, e) {
      e.d(t, {
        J: function () {
          return i;
        },
      });
      let i = "KEYBOARD_SHORTCUT_MODAL_KEY";
    },
    423932: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return r;
        },
      });
      var i = e(200651);
      e(192379);
      var o = e(481060);
      function r(n) {
        (0, o.openModalLazy)(
          async () => {
            let { default: n } = await e.e("76815").then(e.bind(e, 336977));
            return (t) => (0, i.jsx)(n, { ...t });
          },
          { onCloseCallback: n, backdropStyle: o.BackdropStyles.BLUR },
        );
      }
    },
    923834: function (n, t, e) {
      e(411104);
      var i,
        o,
        r,
        l,
        d = e(442837),
        s = e(570140);
      let u = null;
      class a extends (i = d.ZP.Store) {
        getCurrentPath() {
          return null != u ? u.pathname : null;
        }
        getCurrentRoute() {
          return (function (n) {
            let t = null != n && null != n.search ? n.search : "";
            return null != n ? "".concat(n.pathname).concat(t) : null;
          })(u);
        }
        reset() {
          throw Error(
            "Should not reset the store this way outside of a test environment",
          );
        }
      }
      (l = "ApplicationStoreLocationStore"),
        (r = "displayName") in (o = a)
          ? Object.defineProperty(o, r, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (o[r] = l),
        (t.Z = new a(s.Z, {
          APPLICATION_STORE_LOCATION_CHANGE: function (n) {
            let { location: t } = n;
            u = { ...t };
          },
          APPLICATION_STORE_RESET_NAVIGATION: function () {
            u = null;
          },
        }));
    },
  },
]);
//# sourceMappingURL=7d5fb88d5e0f7e19f0a3.js.map
