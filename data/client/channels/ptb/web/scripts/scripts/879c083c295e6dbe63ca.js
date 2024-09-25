"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["18101"],
  {
    816782: function (e, n, t) {
      var i = t(570140);
      n.Z = {
        toggleMembersSection() {
          i.Z.dispatch({ type: "CHANNEL_TOGGLE_MEMBERS_SECTION" });
        },
        toggleProfilePanelSection() {
          i.Z.dispatch({ type: "PROFILE_PANEL_TOGGLE_SECTION" });
        },
        toggleSummariesSection() {
          i.Z.dispatch({ type: "CHANNEL_TOGGLE_SUMMARIES_SECTION" });
        },
      };
    },
    186070: function (e, n, t) {
      t.d(n, {
        FI: function () {
          return E;
        },
        IL: function () {
          return l;
        },
      });
      var i = t(585483),
        o = t(981631);
      let l = {
          binds: ["mod+return"],
          comboKeysBindGlobal: !0,
          action() {
            if (i.S.hasSubscribers(o.CkL.CALL_ACCEPT))
              return i.S.dispatch(o.CkL.CALL_ACCEPT), !1;
          },
        },
        E = {
          binds: ["ctrl+'", "ctrl+shift+'"],
          comboKeysBindGlobal: !0,
          action(e) {
            if (i.S.hasSubscribers(o.CkL.CALL_START))
              return i.S.dispatch(o.CkL.CALL_START, e), !1;
          },
        };
    },
    185514: function (e, n, t) {
      t.d(n, {
        $c: function () {
          return c;
        },
        Nx: function () {
          return A;
        },
        On: function () {
          return C;
        },
        tQ: function () {
          return s;
        },
        x5: function () {
          return _;
        },
      });
      var i = t(140492),
        o = t(475468),
        l = t(703656),
        E = t(769654),
        r = t(944486),
        a = t(914010),
        u = t(358085),
        d = t(981631);
      let s = {
          binds: ["alt+down"],
          comboKeysBindGlobal: !0,
          action: () => ((0, i.Z)(), !1),
        },
        _ = {
          binds: ["alt+up"],
          comboKeysBindGlobal: !0,
          action: () => ((0, i.Z)(-1), !1),
        },
        c = {
          binds: ["mod+alt+right"],
          comboKeysBindGlobal: !0,
          action() {
            let e;
            if (null != a.Z.getGuildId()) e = d.ME;
            else {
              let n = a.Z.getLastSelectedGuildId();
              null != n && ((e = n), (0, o.K)(n, r.Z.getChannelId(n)));
            }
            return null != e && (0, E.X)(e), !1;
          },
        },
        A = {
          binds: (0, u.isMac)() ? ["mod+["] : ["alt+left"],
          comboKeysBindGlobal: !0,
          action: () => ((0, l.op)(), !1),
        },
        C = {
          binds: (0, u.isMac)() ? ["mod+]"] : ["alt+right"],
          comboKeysBindGlobal: !0,
          action: () => ((0, l.eH)(), !1),
        };
    },
    395878: function (e, n, t) {
      t.d(n, {
        K: function () {
          return r;
        },
      });
      var i = t(475468),
        o = t(914010),
        l = t(585483),
        E = t(981631);
      let r = {
        binds: ["mod+shift+t"],
        comboKeysBindGlobal: !0,
        action: () => (
          null != o.Z.getGuildId() && (0, i.K)(E.ME),
          l.S.safeDispatch(E.CkL.TOGGLE_DM_CREATE),
          !1
        ),
      };
    },
    321697: function (e, n, t) {
      t.d(n, {
        r: function () {
          return E;
        },
      });
      var i = t(481060),
        o = t(560067),
        l = t(675999);
      let E = {
        binds: ["mod+shift+n"],
        comboKeysBindGlobal: !0,
        action() {
          (0, i.hasModalOpen)(l.PU)
            ? o.Z.updateCreateGuildModal({
                slide: l._m.JOIN_GUILD,
                location: "Keyboard Shortcut",
              })
            : o.Z.openCreateGuildModal({ location: "Keyboard Shortcut" });
        },
      };
    },
    775774: function (e, n, t) {
      t.d(n, {
        p: function () {
          return o;
        },
      });
      var i = t(358085);
      let o = {
        binds: ["mod+alt+i"],
        comboKeysBindGlobal: !0,
        action(e) {
          if ((0, i.isWeb)() && "discord.com" === location.host)
            return e.preventDefault(), e.stopPropagation(), !1;
        },
      };
    },
    570408: function (e, n, t) {
      t.d(n, {
        I: function () {
          return l;
        },
      });
      var i = t(585483),
        o = t(981631);
      let l = {
        binds: ["mod+f"],
        comboKeysBindGlobal: !0,
        action(e) {
          e.preventDefault(),
            e.stopPropagation(),
            i.S.dispatch(o.CkL.FOCUS_SEARCH, { prefillCurrentChannel: !0 });
        },
      };
    },
    438846: function (e, n, t) {
      t.d(n, {
        K: function () {
          return E;
        },
      });
      var i = t(475468),
        o = t(19780),
        l = t(981631);
      let E = {
        binds: ["mod+shift+alt+v"],
        comboKeysBindGlobal: !0,
        action(e) {
          e.preventDefault(), e.stopPropagation();
          let n = o.Z.getGuildId(),
            t = o.Z.getChannelId();
          return null != t && (0, i.K)(null != n ? n : l.ME, t), !1;
        },
      };
    },
    175724: function (e, n, t) {
      t.d(n, {
        f: function () {
          return p;
        },
      });
      var i = t(374470),
        o = t(475179),
        l = t(904245),
        E = t(45114),
        r = t(40851),
        a = t(358221),
        u = t(623292),
        d = t(807092),
        s = t(6025),
        _ = t(897473),
        c = t(913663),
        A = t(268350),
        C = t(433355),
        S = t(592125),
        I = t(703558),
        T = t(323873),
        L = t(375954),
        N = t(306680),
        O = t(944486),
        D = t(914010),
        g = t(574254),
        R = t(451478),
        f = t(585483),
        h = t(981631);
      let p = {
        binds: ["esc", "shift+pagedown"],
        comboKeysBindGlobal: !0,
        action(e) {
          if (R.Z.isElementFullScreen()) return !1;
          if (f.S.hasSubscribers(h.CkL.CALL_DECLINE))
            return f.S.dispatch(h.CkL.CALL_DECLINE), !1;
          if (g.Z.close()) return !1;
          if (f.S.hasSubscribers(h.CkL.MEDIA_MODAL_CLOSE))
            return f.S.dispatch(h.CkL.MEDIA_MODAL_CLOSE), !1;
          if ((0, i.k)(e.target)) {
            let n = (0, r.J5)(e.target);
            if (null == n ? void 0 : n.hasSubscribers(h.CkL.POPOUT_CLOSE))
              return n.dispatch(h.CkL.POPOUT_CLOSE), !1;
          }
          if (f.S.hasSubscribers(h.CkL.CLOSE_GIF_PICKER))
            return f.S.dispatch(h.CkL.CLOSE_GIF_PICKER), !1;
          if (f.S.hasSubscribers(h.CkL.MODAL_CLOSE))
            return f.S.dispatch(h.CkL.MODAL_CLOSE), !1;
          if (f.S.hasSubscribers(h.CkL.SEARCH_RESULTS_CLOSE))
            return f.S.dispatch(h.CkL.SEARCH_RESULTS_CLOSE), !1;
          let n = D.Z.getGuildId(),
            t = O.Z.getChannelId(n),
            l = S.Z.getChannel(t),
            E =
              C.ZP.getSection(t, null == l ? void 0 : l.isDM()) ===
              h.ULH.SIDEBAR_CHAT
                ? C.ZP.getSidebarState(t)
                : null,
            u =
              (null == E ? void 0 : E.type) === _.tI.VIEW_THREAD ||
              (null == E ? void 0 : E.type) === _.tI.VIEW_CHANNEL
                ? E.channelId
                : null;
          if (!1 === P(t) || !1 === P(u)) return !1;
          if (null != t && (null == E ? void 0 : E.type) === _.tI.CREATE_THREAD)
            return s.Z.closeChannelSidebar(t), !1;
          let d = G(t),
            c = G(u);
          return null == t || d || c || null == E
            ? null != t && !d && a.Z.getChatOpen(t)
              ? (o.Z.updateChatOpen(t, !1), !1)
              : (f.S.dispatch(h.CkL.SCROLLTO_PRESENT), !1)
            : (s.Z.closeChannelSidebar(t), !1);
        },
      };
      function P(e) {
        if (null != e) {
          if (T.Z.isEditingAny(e)) return l.Z.endEditMessage(e), !1;
          if (null != d.Z.getPendingReply(e)) return (0, u.A6)(e), !1;
          if (null != c.Z.getStickerPreview(e, I.d.ChannelMessage))
            return (0, A.qB)(e, I.d.ChannelMessage), !1;
        }
      }
      function G(e) {
        if (null == e) return !1;
        let n = !1;
        return (
          L.Z.getMessages(e).hasMoreAfter &&
            (l.Z.jumpToPresent(e, h.AQB), (n = !0)),
          N.ZP.hasUnread(e) && ((0, E.In)(e), (n = !0)),
          (0, E.iV)(e),
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
      var i = t(904245),
        o = t(181945),
        l = t(888369),
        E = t(375954),
        r = t(944486),
        a = t(914010),
        u = t(585483),
        d = t(981631);
      let s = {
        binds: ["shift+esc"],
        comboKeysBindGlobal: !0,
        action() {
          let e = a.Z.getGuildId();
          if (null == e || !l.default.getGuildHasUnreadIgnoreMuted(e)) return;
          (0, o.Z)([e]);
          let n = r.Z.getChannelId(e);
          if (null != n)
            E.Z.getMessages(n).hasMoreAfter
              ? i.Z.jumpToPresent(n, d.AQB)
              : u.S.dispatch(d.CkL.SCROLLTO_PRESENT);
        },
      };
    },
    138976: function (e, n, t) {
      t.d(n, {
        O: function () {
          return E;
        },
      });
      var i = t(904245),
        o = t(306680),
        l = t(944486);
      let E = {
        binds: ["shift+pageup"],
        comboKeysBindGlobal: !0,
        action() {
          let e = l.Z.getChannelId();
          if (null != e) {
            let n = o.ZP.ackMessageId(e);
            null != n &&
              o.ZP.getOldestUnreadTimestamp(e) > 0 &&
              i.Z.jumpToMessage({
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
    296805: function (e, n, t) {
      t.d(n, {
        T: function () {
          return E;
        },
      });
      var i = t(132871),
        o = t(147890),
        l = t(914010);
      let E = {
        binds: ["mod+ctrl+a"],
        comboKeysBindGlobal: !0,
        action() {
          var e;
          let n = null !== (e = l.Z.getGuildId()) && void 0 !== e ? e : void 0;
          (0, o.goToAppDirectory)({
            guildId: n,
            entrypoint: {
              name: i.ApplicationDirectoryEntrypointNames.KEYBOARD_SHORTCUT,
            },
          });
        },
      };
    },
    561716: function (e, n, t) {
      t.d(n, {
        $: function () {
          return l;
        },
      });
      var i = t(51596),
        o = t(819640);
      let l = {
        binds: ["mod+k", "mod+t"],
        comboKeysBindGlobal: !0,
        action: () => (!o.Z.hasLayers() && (0, i.$Z)(), !1),
      };
    },
    239748: function (e, n, t) {
      t.d(n, {
        F: function () {
          return a;
        },
      });
      var i = t(925549),
        o = t(475468),
        l = t(19780),
        E = t(944486),
        r = t(981631);
      let a = {
        binds: ["mod+alt+left"],
        comboKeysBindGlobal: !0,
        action() {
          var e;
          if (!l.Z.isConnected()) return !1;
          let n = null !== (e = l.Z.getGuildId()) && void 0 !== e ? e : r.ME,
            t = E.Z.getChannelId(n);
          return (
            (0, o.K)(n, t), i.Z.channelListScrollTo(n, l.Z.getChannelId()), !1
          );
        },
      };
    },
    337482: function (e, n, t) {
      t.d(n, {
        B2: function () {
          return l;
        },
        gN: function () {
          return E;
        },
      });
      var i = t(585483),
        o = t(981631);
      let l = {
          binds: ["pageup"],
          comboKeysBindGlobal: !0,
          action: () => (
            i.S.dispatchToLastSubscribed(o.CkL.SCROLL_PAGE_UP), !1
          ),
        },
        E = {
          binds: ["pagedown"],
          comboKeysBindGlobal: !0,
          action: () => (
            i.S.dispatchToLastSubscribed(o.CkL.SCROLL_PAGE_DOWN), !1
          ),
        };
    },
    679080: function (e, n, t) {
      t.d(n, {
        S: function () {
          return r;
        },
      });
      var i = t(130402),
        o = t(585483),
        l = t(981631),
        E = t(185923);
      let r = {
        binds: ["mod+e"],
        comboKeysBindGlobal: !0,
        action: () => (
          (0, i.x)(E.qR.SearchEmojiKeybindPressed),
          o.S.dispatchToLastSubscribed(l.CkL.TOGGLE_EMOJI_POPOUT),
          !1
        ),
      };
    },
    777019: function (e, n, t) {
      t.d(n, {
        O: function () {
          return l;
        },
      });
      var i = t(585483),
        o = t(981631);
      let l = {
        binds: ["mod+g"],
        comboKeysBindGlobal: !0,
        action: () => (
          i.S.dispatchToLastSubscribed(o.CkL.TOGGLE_GIF_PICKER), !1
        ),
      };
    },
    523147: function (e, n, t) {
      var i = t(585483),
        o = t(981631);
      n.Z = {
        binds: ["mod+shift+b"],
        comboKeysBindGlobal: !0,
        action: () => (i.S.dispatch(o.CkL.TOGGLE_SOUNDBOARD), !1),
      };
    },
    400332: function (e, n, t) {
      t.d(n, {
        U: function () {
          return l;
        },
      });
      var i = t(585483),
        o = t(981631);
      let l = {
        binds: ["mod+s"],
        comboKeysBindGlobal: !0,
        action: () => (
          i.S.dispatchToLastSubscribed(o.CkL.TOGGLE_STICKER_PICKER), !1
        ),
      };
    },
    510761: function (e, n, t) {
      t.d(n, {
        X3: function () {
          return l;
        },
        nq: function () {
          return o;
        },
      });
      var i = t(452913);
      let o = {
          binds: ["mod+alt+down", "mod+shift+]", "ctrl+tab"],
          comboKeysBindGlobal: !0,
          action: (e) => (
            e.preventDefault(), e.stopPropagation(), (0, i.Z)(), !1
          ),
        },
        l = {
          binds: ["mod+alt+up", "mod+shift+[", "ctrl+shift+tab"],
          comboKeysBindGlobal: !0,
          action: (e) => (
            e.preventDefault(), e.stopPropagation(), (0, i.Z)(-1), !1
          ),
        };
    },
    189509: function (e, n, t) {
      t.d(n, {
        z: function () {
          return E;
        },
      });
      var i = t(607070),
        o = t(585483),
        l = t(981631);
      let E = {
        binds: ["return"],
        action() {
          if (
            !i.Z.keyboardModeEnabled &&
            o.S.hasSubscribers(l.CkL.MODAL_SUBMIT)
          )
            return o.S.dispatch(l.CkL.MODAL_SUBMIT), !1;
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
      var i = t(802498),
        o = t(607070),
        l = t(819640),
        E = t(131951),
        r = t(19780),
        a = t(585483),
        u = t(5967),
        d = t(13140),
        s = t(981631);
      let _ = new Set([
          "PageDown",
          "PageUp",
          "Home",
          "End",
          "ArrowUp",
          "ArrowDown",
          "ArrowLeft",
          "ArrowRight",
        ]),
        c = new Set([
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
        C = new Set([
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
              null === (t = (0, u.uB)(e)) || void 0 === t
                ? void 0
                : t.activeElement;
            if (
              (0, u.VG)(S) ||
              i.fC.isActive() ||
              c.has(n) ||
              A.has(n) ||
              C.has(n)
            )
              return !1;
            let I = null != S && "BODY" === S.tagName;
            return (
              !(
                (o.Z.keyboardModeEnabled && !I && !/^[a-zA-Z0-9]$/.test(n)) ||
                a.S.hasSubscribers(s.CkL.MODAL_CLOSE) ||
                l.Z.hasLayers()
              ) &&
              ("Tab" === n &&
              a.S.hasSubscribers(s.CkL.TEXTAREA_FOCUS) &&
              null != document.querySelector('[data-can-focus="true"]')
                ? (e.preventDefault(), a.S.dispatch(s.CkL.TEXTAREA_FOCUS), !1)
                : !(
                    r.Z.isConnected() &&
                    E.Z.getMode() === s.pM4.PUSH_TO_TALK &&
                    !E.Z.isSelfMute() &&
                    Object.values(E.Z.getShortcuts())
                      .map(d.d2)
                      .some((n) => n.map((e) => e.keyCode).includes(e.keyCode))
                  ) &&
                  void (
                    !e.metaKey &&
                    !e.ctrlKey &&
                    !_.has(n) &&
                    a.S.dispatchToLastSubscribed(s.CkL.TEXTAREA_FOCUS)
                  ))
            );
          },
        };
    },
    280492: function (e, n, t) {
      t.d(n, {
        iN: function () {
          return o;
        },
        oV: function () {
          return l;
        },
      });
      var i = t(846027);
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
        l = {
          binds: ["mod+shift+d"],
          comboKeysBindGlobal: !0,
          action: () => (i.Z.toggleSelfDeaf(), !1),
        };
    },
    746887: function (e, n, t) {
      t.d(n, {
        u: function () {
          return a;
        },
      });
      var i = t(211739),
        o = t(680089),
        l = t(984933),
        E = t(914010),
        r = t(981631);
      let a = {
        binds: ["mod+shift+a"],
        comboKeysBindGlobal: !0,
        action() {
          let e = E.Z.getGuildId();
          return (
            null != e &&
            (l.ZP.getChannels(e)[r.d4z.GUILD_CATEGORY].some((e) => {
              let { channel: n } = e;
              return "null" !== n.id && !o.Z.isCollapsed(n.id);
            })
              ? (0, i.N5)(e)
              : (0, i.lc)(e),
            !1)
          );
        },
      };
    },
    861007: function (e, n, t) {
      t.d(n, {
        u: function () {
          return l;
        },
      });
      var i = t(585483),
        o = t(981631);
      let l = {
        binds: ["mod+p"],
        comboKeysBindGlobal: !0,
        action: () => (i.S.dispatch(o.CkL.TOGGLE_CHANNEL_PINS), !1),
      };
    },
    89028: function (e, n, t) {
      t.d(n, {
        f: function () {
          return E;
        },
      });
      var i = t(2818),
        o = t(585483),
        l = t(981631);
      let E = {
        binds: ["mod+l"],
        comboKeysBindGlobal: !0,
        action() {
          let { enabled: e, inInbox: n } = i.Z.getCurrentConfig(
            { location: "keybinds" },
            { autoTrackExposure: !1 },
          );
          if (e && !n) return o.S.dispatch(l.CkL.TOGGLE_FOR_LATER), !1;
        },
      };
    },
    300644: function (e, n, t) {
      t.d(n, {
        O: function () {
          return o;
        },
      });
      var i = t(63063);
      let o = {
        binds: ["mod+shift+h", "f1"],
        comboKeysBindGlobal: !0,
        action: () => (window.open(i.w), !1),
      };
    },
    721383: function (e, n, t) {
      t.d(n, {
        _: function () {
          return E;
        },
      });
      var i = t(481060),
        o = t(191980),
        l = t(285371);
      let E = {
        binds: ["mod+/", "mod+shift+/"],
        comboKeysBindGlobal: !0,
        action: () => ((0, i.hasModalOpen)(l.J) ? o.C() : o.$(), !1),
      };
    },
    207234: function (e, n, t) {
      t.d(n, {
        M: function () {
          return a;
        },
        a: function () {
          return r;
        },
      });
      var i = t(392711),
        o = t.n(i),
        l = t(585483),
        E = t(981631);
      let r = {
          binds: ["mod+i"],
          comboKeysBindGlobal: !0,
          action: () => (l.S.dispatch(E.CkL.TOGGLE_INBOX), !1),
        },
        a = {
          binds: ["mod+shift+e"],
          comboKeysBindGlobal: !0,
          action: o().debounce(
            () => {
              if (l.S.hasSubscribers(E.CkL.MARK_TOP_INBOX_CHANNEL_READ))
                return l.S.dispatch(E.CkL.MARK_TOP_INBOX_CHANNEL_READ), !1;
            },
            100,
            { leading: !0 },
          ),
        };
    },
    997292: function (e, n, t) {
      t.d(n, {
        r: function () {
          return A;
        },
      });
      var i = t(106351),
        o = t(475179),
        l = t(816782),
        E = t(358221),
        r = t(221292),
        a = t(687158),
        u = t(433355),
        d = t(592125),
        s = t(944486),
        _ = t(914010),
        c = t(981631);
      let A = {
        binds: ["mod+u"],
        comboKeysBindGlobal: !0,
        action() {
          let e = _.Z.getGuildId(),
            n = s.Z.getChannelId(e),
            t = d.Z.getChannel(n);
          if (null != n && null != t && t.type === i.d.GUILD_VOICE)
            return o.Z.updateChatOpen(n, !E.Z.getChatOpen(n)), !1;
          if (null != n && null != t && t.type === i.d.DM) {
            let e = u.ZP.getSection(n, null == t ? void 0 : t.isDM()),
              i = (0, a.Of)(t.getRecipientId()),
              o = e === c.ULH.PROFILE;
            return (
              (0, r.TY)({ displayProfile: i, isProfileOpen: !o }),
              l.Z.toggleProfilePanelSection(),
              !1
            );
          }
          return l.Z.toggleMembersSection(), !1;
        },
      };
    },
    743810: function (e, n, t) {
      t.d(n, {
        Nv: function () {
          return L;
        },
        pd: function () {
          return S;
        },
        uX: function () {
          return N;
        },
        wk: function () {
          return I;
        },
      });
      var i = t(350483),
        o = t(220444),
        l = t(905423),
        E = t(131704),
        r = t(592125),
        a = t(306680),
        u = t(944486),
        d = t(9156),
        s = t(981631),
        _ = t(490897);
      let c = (e, n) => {
          let t = r.Z.getChannel(n);
          return (
            null != t &&
            ((0, E.hv)(t.type) || s.TPd.GUILD_VOCAL.has(t.type)
              ? a.ZP.getMentionCount(n) > 0 || u.Z.getVoiceChannelId() === n
              : (!d.ZP.isChannelMuted(e, n) || a.ZP.getMentionCount(n) > 0) &&
                (0, o.d)(t))
          );
        },
        A = (e, n) => {
          if (n === _.W.GUILD_EVENT)
            return (
              !d.ZP.isMuteScheduledEventsEnabled(e) && a.ZP.hasUnread(e, n)
            );
          return a.ZP.hasUnread(e, n);
        },
        C = (e, n) => {
          let t = r.Z.getChannel(n);
          return (
            !!(null != t && s.TPd.GUILD_VOCAL.has(t.type)) &&
            (!!(a.ZP.getMentionCount(n) > 0) ||
              (u.Z.getVoiceChannelId() === n && a.ZP.getUnreadCount(n) > 0))
          );
        },
        S = {
          binds: ["alt+shift+down"],
          comboKeysBindGlobal: !0,
          action() {
            var e;
            let n =
              null !== (e = l.Z.getState().guildId) && void 0 !== e ? e : s.ME;
            return (
              (0, i.Z)(1, {
                channelPredicate: c,
                guildPredicate: (e) => e === n || !d.ZP.isMuted(e),
                guildFeaturePredicate: A,
                ensureChatIsVisible: C,
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
              null !== (e = l.Z.getState().guildId) && void 0 !== e ? e : s.ME;
            return (
              (0, i.Z)(-1, {
                channelPredicate: c,
                guildPredicate: (e) => e === n || !d.ZP.isMuted(e),
                guildFeaturePredicate: A,
                ensureChatIsVisible: C,
                withVoiceChannels: !0,
              }),
              !1
            );
          },
        },
        T = (e, n) => a.ZP.getMentionCount(n) > 0,
        L = {
          binds: ["mod+shift+alt+down"],
          comboKeysBindGlobal: !0,
          action: () => (
            (0, i.Z)(1, {
              channelPredicate: T,
              ensureChatIsVisible: C,
              withVoiceChannels: !0,
            }),
            !1
          ),
        },
        N = {
          binds: ["mod+shift+alt+up"],
          comboKeysBindGlobal: !0,
          action: () => (
            (0, i.Z)(-1, {
              channelPredicate: T,
              ensureChatIsVisible: C,
              withVoiceChannels: !0,
            }),
            !1
          ),
        };
    },
    620212: function (e, n, t) {
      t.d(n, {
        U: function () {
          return r;
        },
      });
      var i = t(592125),
        o = t(944486),
        l = t(585483),
        E = t(981631);
      let r = {
        binds: ["mod+shift+u"],
        comboKeysBindGlobal: !0,
        action() {
          let e = i.Z.getChannel(o.Z.getChannelId());
          return (
            null != e && !e.isManaged() && l.S.dispatch(E.CkL.UPLOAD_FILE), !1
          );
        },
      };
    },
    188051: function (e, n, t) {
      t.d(n, {
        w: function () {
          return l;
        },
      });
      var i = t(481060),
        o = t(423932);
      let l = {
        binds: ["mod+alt+shift+w"],
        comboKeysBindGlobal: !0,
        action: () => ((0, o.Z)(i.closeAllModals), !1),
      };
    },
    547420: function (e, n, t) {
      t.d(n, {
        MY: function () {
          return u;
        },
        RC: function () {
          return a;
        },
        UF: function () {
          return r;
        },
      });
      var i = t(857595),
        o = t(607070),
        l = t(981631);
      function E(e) {
        return l.yqN.ZOOM_SCALES[
          Math.max(
            0,
            Math.min(
              l.yqN.ZOOM_SCALES.indexOf(o.Z.zoom) + e,
              l.yqN.ZOOM_SCALES.length - 1,
            ),
          )
        ];
      }
      let r = {
          binds: ["mod+plus"],
          comboKeysBindGlobal: !0,
          action: () => ((0, i.cq)(E(1)), !1),
        },
        a = {
          binds: ["mod+minus"],
          comboKeysBindGlobal: !0,
          action: () => ((0, i.cq)(E(-1)), !1),
        },
        u = {
          binds: ["mod+0"],
          comboKeysBindGlobal: !0,
          action: () => ((0, i.cq)(l.yqN.ZOOM_DEFAULT), !1),
        };
      n.ZP = 12633 == t.j ? { ZOOM_IN: r, ZOOM_OUT: a, ZOOM_RESET: u } : null;
    },
    612226: function (e, n, t) {
      t.d(n, {
        Q2: function () {
          return i;
        },
        Rv: function () {
          return x;
        },
        U6: function () {
          return Y;
        },
        UD: function () {
          return w;
        },
        oT: function () {
          return X;
        },
      }),
        t(411104),
        t(653041);
      var i,
        o,
        l = t(346610),
        E = t(2818),
        r = t(186070),
        a = t(185514),
        u = t(395878),
        d = t(321697),
        s = t(775774),
        _ = t(570408),
        c = t(438846),
        A = t(360038),
        C = t(175724),
        S = t(705371),
        I = t(138976),
        T = t(296805),
        L = t(561716),
        N = t(239748),
        O = t(337482),
        D = t(679080),
        g = t(777019),
        R = t(523147),
        f = t(400332),
        h = t(510761),
        p = t(189509),
        P = t(673553),
        G = t(280492),
        M = t(746887),
        b = t(861007),
        Z = t(89028),
        U = t(300644),
        H = t(721383),
        m = t(207234),
        B = t(997292),
        k = t(743810),
        K = t(620212),
        v = t(188051),
        V = t(547420),
        y = t(981631),
        F = t(689938);
      function w(e) {
        switch (e) {
          case "NAVIGATION":
            return F.Z.Messages.USER_SETTINGS_KEYBINDS_NAVIGATION_SECTION_TITLE;
          case "VOICE_AND_VIDEO":
            return F.Z.Messages
              .USER_SETTINGS_KEYBINDS_VOICE_AND_VIDEO_SECTION_TITLE;
          case "CHAT":
            return F.Z.Messages.USER_SETTINGS_KEYBINDS_CHAT_SECTION_TITLE;
          case "MISCELLANEOUS":
            return F.Z.Messages
              .USER_SETTINGS_KEYBINDS_MISCELLANEOUS_SECTION_TITLE;
          case "MESSAGE":
            return F.Z.Messages.USER_SETTINGS_KEYBINDS_MESSAGE_SECTION_TITLE;
          case "DND":
            return F.Z.Messages.USER_SETTINGS_KEYBINDS_DND_SECTION_TITLE;
        }
      }
      function Y(e) {
        switch (e) {
          case "MESSAGE":
            return F.Z.Messages.USER_SETTINGS_KEYBINDS_MESSAGE_DESCRIPTION;
          case "DND":
            return F.Z.Messages.USER_SETTINGS_KEYBINDS_DND_DESCRIPTION;
          default:
            return null;
        }
      }
      function W() {
        for (var e = arguments.length, n = Array(e), t = 0; t < e; t++)
          n[t] = arguments[t];
        return n.map((e) => {
          let n = X[e];
          if (null == n)
            throw Error("getBindsFor(...): No bind for ".concat(n));
          return n.binds[0];
        });
      }
      ((o = i || (i = {})).NAVIGATION = "NAVIGATION"),
        (o.CHAT = "CHAT"),
        (o.VOICE_AND_VIDEO = "VOICE_AND_VIDEO"),
        (o.MISCELLANEOUS = "MISCELLANEOUS"),
        (o.MESSAGE = "MESSAGE"),
        (o.DND = "DND");
      let X = {
        [y.EkH.SERVER_NEXT]: h.nq,
        [y.EkH.SERVER_PREV]: h.X3,
        [y.EkH.CHANNEL_NEXT]: a.tQ,
        [y.EkH.CHANNEL_PREV]: a.x5,
        [y.EkH.NAVIGATE_BACK]: a.Nx,
        [y.EkH.NAVIGATE_FORWARD]: a.On,
        [y.EkH.UNREAD_NEXT]: k.pd,
        [y.EkH.UNREAD_PREV]: k.wk,
        [y.EkH.MENTION_CHANNEL_NEXT]: k.Nv,
        [y.EkH.MENTION_CHANNEL_PREV]: k.uX,
        [y.EkH.TOGGLE_PREVIOUS_GUILD]: a.$c,
        [y.EkH.JUMP_TO_GUILD]: A.u,
        [y.EkH.SUBMIT]: p.z,
        [y.EkH.TEXTAREA_FOCUS]: P.U,
        [y.EkH.MARK_CHANNEL_READ]: C.f,
        [y.EkH.MARK_SERVER_READ]: S.l,
        [y.EkH.TOGGLE_CHANNEL_PINS]: b.u,
        [y.EkH.TOGGLE_FOR_LATER]: Z.f,
        [y.EkH.TOGGLE_INBOX]: m.a,
        [y.EkH.MARK_TOP_INBOX_CHANNEL_READ]: m.M,
        [y.EkH.TOGGLE_USERS]: B.r,
        [y.EkH.TOGGLE_HELP]: U.O,
        [y.EkH.VIBE_WITH_WUMPUS]: v.w,
        [y.EkH.TOGGLE_MUTE]: G.iN,
        [y.EkH.TOGGLE_DEAFEN]: G.oV,
        [y.EkH.TOGGLE_CATEGORY_COLLAPSED]: M.u,
        [y.EkH.SEARCH_SOUNDBOARD]: R.Z,
        [y.EkH.SCROLL_UP]: O.B2,
        [y.EkH.SCROLL_DOWN]: O.gN,
        [y.EkH.QUICKSWITCHER_SHOW]: L.$,
        [y.EkH.CREATE_DM_GROUP]: u.K,
        [y.EkH.SEARCH_EMOJIS]: D.S,
        [y.EkH.SEARCH_GIFS]: g.O,
        [y.EkH.SEARCH_STICKERS]: f.U,
        [y.EkH.TOGGLE_HOTKEYS]: H._,
        [y.EkH.JUMP_TO_FIRST_UNREAD]: I.O,
        [y.EkH.CREATE_GUILD]: d.r,
        [y.EkH.UPLOAD_FILE]: K.U,
        [y.EkH.RETURN_TO_AUDIO_CHANNEL]: N.F,
        [y.EkH.CALL_ACCEPT]: r.IL,
        [y.EkH.CALL_START]: r.FI,
        [y.EkH.FOCUS_SEARCH]: _.I,
        [y.EkH.JUMP_TO_CURRENT_CALL]: c.K,
        [y.EkH.ZOOM_IN]: V.UF,
        [y.EkH.ZOOM_OUT]: V.RC,
        [y.EkH.ZOOM_RESET]: V.MY,
        [y.EkH.OPEN_APP_DIRECTORY]: T.T,
        [y.EkH.BROWSER_DEVTOOLS]: s.p,
      };
      function x() {
        let e = [
          {
            description:
              F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_NAVIGATE_SERVERS,
            binds: W(y.EkH.SERVER_PREV, y.EkH.SERVER_NEXT),
            group: "NAVIGATION",
          },
          {
            description:
              F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_NAVIGATE_CHANNELS,
            binds: W(y.EkH.CHANNEL_PREV, y.EkH.CHANNEL_NEXT),
            group: "NAVIGATION",
          },
          {
            description:
              F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_NAVIGATE_BACK_FORWARD,
            binds: W(y.EkH.NAVIGATE_BACK, y.EkH.NAVIGATE_FORWARD),
            group: "NAVIGATION",
          },
          {
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_UNREAD_CHANNELS,
            binds: W(y.EkH.UNREAD_PREV, y.EkH.UNREAD_NEXT),
            group: "NAVIGATION",
          },
          {
            description:
              F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_UNREAD_MENTION_CHANNELS,
            binds: W(y.EkH.MENTION_CHANNEL_PREV, y.EkH.MENTION_CHANNEL_NEXT),
            group: "NAVIGATION",
          },
          {
            description:
              F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_NAVIGATE_TO_CALL,
            binds: W(y.EkH.JUMP_TO_CURRENT_CALL),
            group: "NAVIGATION",
          },
          {
            description:
              F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_PREVIOUS_GUILD,
            binds: W(y.EkH.TOGGLE_PREVIOUS_GUILD),
            group: "NAVIGATION",
          },
          {
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_QUICKSWITCHER,
            binds: W(y.EkH.QUICKSWITCHER_SHOW),
            group: "NAVIGATION",
          },
          {
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_CREATE_GUILD,
            binds: W(y.EkH.CREATE_GUILD),
            group: "NAVIGATION",
            groupEnd: !0,
          },
          {
            description: F.Z.Messages.DND_OPERATION_LABEL_START,
            binds: ["mod+d"],
            group: "DND",
          },
          {
            description: F.Z.Messages.DND_OPERATION_LABEL_MOVE,
            binds: ["up", "down"],
            group: "DND",
          },
          {
            description: F.Z.Messages.DND_OPERATION_LABEL_DROP,
            binds: ["spacebar", "enter"],
            group: "DND",
          },
          {
            description: F.Z.Messages.DND_OPERATION_LABEL_CANCEL,
            binds: ["esc"],
            group: "DND",
            groupEnd: !0,
          },
          {
            description:
              F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_MARK_SERVER_READ,
            binds: W(y.EkH.MARK_SERVER_READ),
            group: "CHAT",
          },
          {
            description:
              F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_MARK_CHANNEL_READ,
            binds: W(y.EkH.MARK_CHANNEL_READ),
            group: "CHAT",
          },
          {
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_CREATE_DM_GROUP,
            binds: W(y.EkH.CREATE_DM_GROUP),
            group: "CHAT",
          },
          {
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_PINS,
            binds: W(y.EkH.TOGGLE_CHANNEL_PINS),
            group: "CHAT",
          },
          {
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_INBOX,
            binds: W(y.EkH.TOGGLE_INBOX),
            group: "CHAT",
          },
          {
            description:
              F.Z.Messages
                .KEYBIND_DESCRIPTION_MODAL_MARK_TOP_INBOX_CHANNEL_READ,
            binds: W(y.EkH.MARK_TOP_INBOX_CHANNEL_READ),
            group: "CHAT",
          },
          {
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_USERS,
            binds: W(y.EkH.TOGGLE_USERS),
            group: "CHAT",
          },
          {
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_SEARCH_EMOJIS,
            binds: W(y.EkH.SEARCH_EMOJIS),
            group: "CHAT",
          },
          {
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_SEARCH_GIFS,
            binds: W(y.EkH.SEARCH_GIFS),
            group: "CHAT",
          },
          {
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_SEARCH_STICKERS,
            binds: W(y.EkH.SEARCH_STICKERS),
            group: "CHAT",
          },
          {
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_SCROLL_CHAT,
            binds: W(y.EkH.SCROLL_UP, y.EkH.SCROLL_DOWN),
            group: "CHAT",
          },
          {
            description:
              F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_JUMP_TO_FIRST_UNREAD,
            binds: W(y.EkH.JUMP_TO_FIRST_UNREAD),
            group: "CHAT",
          },
          {
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_FOCUS_TEXT_AREA,
            binds: W(y.EkH.TEXTAREA_FOCUS),
            group: "CHAT",
          },
          {
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_UPLOAD_FILE,
            binds: W(y.EkH.UPLOAD_FILE),
            group: "CHAT",
            groupEnd: !0,
          },
          {
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_MUTE,
            binds: W(y.EkH.TOGGLE_MUTE),
            group: "VOICE_AND_VIDEO",
          },
          {
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_DEAFEN,
            binds: W(y.EkH.TOGGLE_DEAFEN),
            group: "VOICE_AND_VIDEO",
          },
          {
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_CALL_ACCEPT,
            binds: W(y.EkH.CALL_ACCEPT),
            group: "VOICE_AND_VIDEO",
          },
          {
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_CALL_DECLINE,
            binds: W(y.EkH.MARK_CHANNEL_READ),
            group: "VOICE_AND_VIDEO",
          },
          {
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_CALL_START,
            binds: W(y.EkH.CALL_START),
            group: "VOICE_AND_VIDEO",
            groupEnd: !0,
          },
          {
            description:
              F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_SEARCH_SOUNDBOARD,
            binds: W(y.EkH.SEARCH_SOUNDBOARD),
            group: "VOICE_AND_VIDEO",
          },
          {
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_HELP,
            binds: W(y.EkH.TOGGLE_HELP),
            group: "MISCELLANEOUS",
          },
          {
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_SEARCH,
            binds: W(y.EkH.FOCUS_SEARCH),
            group: "MISCELLANEOUS",
          },
          {
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_EASTER_EGG,
            binds: ["h+h+right+n+k"],
            group: "MISCELLANEOUS",
            groupEnd: !0,
          },
          {
            description: F.Z.Messages.EDIT_MESSAGE,
            binds: ["e"],
            group: "MESSAGE",
          },
          {
            description: F.Z.Messages.DELETE_MESSAGE,
            binds: ["backspace"],
            group: "MESSAGE",
          },
          {
            description: F.Z.Messages.PIN_MESSAGE,
            binds: ["p"],
            group: "MESSAGE",
          },
          {
            description: F.Z.Messages.ADD_REACTION,
            binds: ["plus"],
            group: "MESSAGE",
          },
          {
            description: F.Z.Messages.MESSAGE_ACTION_REPLY,
            binds: ["r"],
            group: "MESSAGE",
          },
          {
            description: F.Z.Messages.COPY_TEXT,
            binds: ["mod+c"],
            group: "MESSAGE",
          },
          {
            description: F.Z.Messages.MARK_UNREAD,
            binds: ["alt+enter"],
            group: "MESSAGE",
          },
          {
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_FOCUS_TEXT_AREA,
            binds: ["escape"],
            group: "MESSAGE",
            groupEnd: !0,
          },
          {
            description:
              F.Z.Messages.USER_SETTINGS_KEYBIND_VIBE_WITH_WUMPUS_DESCRIPTION,
            binds: W(y.EkH.VIBE_WITH_WUMPUS),
            group: "MISCELLANEOUS",
          },
        ];
        (0, l.WT)({ location: "keybinds" }, { autoTrackExposure: !1 })
          .canForwardMessages &&
          e.push({
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_FORWARD_MESSAGE,
            binds: ["f"],
            group: "MESSAGE",
          });
        let { enabled: n, inInbox: t } = E.Z.getCurrentConfig(
          { location: "keybinds" },
          { autoTrackExposure: !1 },
        );
        return (
          n &&
            !t &&
            e.push({
              description:
                F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_FOR_LATER,
              binds: W(y.EkH.TOGGLE_FOR_LATER),
              group: "CHAT",
            }),
          e
        );
      }
      n.ZP = 12633 == t.j ? X : null;
    },
    140492: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return T;
        },
      }),
        t(47120),
        t(733860);
      var i = t(718528),
        o = t(931261),
        l = t(355298),
        E = t(333984),
        r = t(905423),
        a = t(695346),
        u = t(283595),
        d = t(923834),
        s = t(55589),
        _ = t(823379),
        c = t(475468),
        A = t(981631),
        C = t(176505);
      let S = () => {
        let e =
          l.Z.getMessageRequestsCount() > 0 || E.Z.getSpamChannelsCount() > 0;
        return [
          A.Z5c.FRIENDS,
          u.Z.hasLibraryApplication() && !a.bm.getSetting()
            ? A.Z5c.APPLICATION_LIBRARY
            : null,
          A.Z5c.APPLICATION_STORE,
          e ? A.Z5c.MESSAGE_REQUESTS : null,
          A.Z5c.COLLECTIBLES_SHOP,
          a.Ex.getSetting() ? A.Z5c.FAMILY_CENTER : null,
        ].filter(_.lm);
      };
      function I(e, n) {
        (0, c.K)(e, n);
      }
      function T() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          n = r.Z.getState().guildId;
        null == n
          ? !(function (e) {
              var n, t, i;
              let { channelId: o, path: l, basePath: E } = r.Z.getState(),
                a = s.Z.getPrivateChannelIds(),
                u = __OVERLAY__ ? a : [...S(), ...a];
              let _ =
                (null == o
                  ? ((n = null != l ? l : E),
                    S().findIndex((e) => n.startsWith(e)))
                  : null != o
                    ? u.indexOf(o)
                    : 0) + e;
              _ >= u.length ? (_ = 0) : _ < 0 && (_ = u.length - 1);
              let C = u[_];
              if (S().includes(C))
                !(function (e) {
                  let n = d.Z.getCurrentRoute();
                  e === A.Z5c.APPLICATION_STORE && null != n
                    ? (0, c.z)(n)
                    : (0, c.z)(e);
                })(C);
              else {
                (t = A.ME), (i = C), (0, c.K)(t, i);
              }
            })(e)
          : !(function (e, n) {
              var t, l, E, a;
              let u = r.Z.getState().channelId,
                d = (0, i.Z)(n, { withCurrentVoiceChannel: !0 }).map(
                  (e) => e.id,
                );
              (0, o.s)(n) && d.unshift(C.oC.GUILD_HOME);
              let s =
                ((t = (null != u ? d.indexOf(u) : -1) + e),
                (l = d.length),
                t < 0 ? l - 1 : t >= l ? 0 : t);
              (E = n), (a = d[s]), (0, c.K)(E, a);
            })(e, n);
      }
    },
    452913: function (e, n, t) {
      var i = t(392711),
        o = t.n(i),
        l = t(853856),
        E = t(706590),
        r = t(905423),
        a = t(592125),
        u = t(496675),
        d = t(944486),
        s = t(771845),
        _ = t(774343),
        c = t(475468),
        A = t(981631);
      n.Z = o().throttle(function () {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          n = s.ZP.getFlattenedGuildIds(),
          t = (function (e) {
            let n = r.Z.getState().guildId;
            if (null == n) return -2;
            if (n === A.I_8) return -1;
            let t = e.indexOf(n);
            return -1 === t ? -2 : t;
          })(n);
        if (
          (-1 === (t += e) && !(0, E.z)(l.Z, a.Z, u.Z) && (t += e),
          -3 === t && (t = n.length - 1),
          t >= n.length || -2 === t)
        ) {
          (0, c.z)(_.Z.getHomeLink());
          return;
        }
        let i = -1 === t ? A.I_8 : n[t],
          o = d.Z.getChannelId(i);
        (0, c.K)(i, o === i ? null : o, !1);
      }, A.aZC);
    },
    350483: function (e, n, t) {
      t(47120);
      var i = t(735250);
      t(470079);
      var o = t(392711),
        l = t.n(o),
        E = t(481060),
        r = t(718528),
        a = t(905423),
        u = t(984933),
        d = t(914010),
        s = t(771845),
        _ = t(55589),
        c = t(585483),
        A = t(475468),
        C = t(981631),
        S = t(490897);
      function I(e, n) {
        var t, i;
        return [
          { resourceId: e, type: S.W.GUILD_EVENT },
          ...((t = e),
          (i = n),
          t === C.ME
            ? _.Z.getPrivateChannelIds()
            : (0, r.Z)(t, {
                withVoiceChannels: i,
                withCurrentVoiceChannel: !0,
              }).map((e) => e.id)),
        ];
      }
      n.Z = l().throttle(function (e, n) {
        var o, l;
        let r,
          {
            channelPredicate: _ = () => !0,
            guildPredicate: S = () => !0,
            guildFeaturePredicate: T = () => !1,
            ensureChatIsVisible: L = () => !1,
            withVoiceChannels: N = !1,
          } = n,
          O = null !== (o = a.Z.getState().guildId) && void 0 !== o ? o : C.ME,
          D = a.Z.getState().channelId,
          g = (function (e, n) {
            let t = [C.ME, ...s.ZP.getFlattenedGuildIds()],
              i = t.indexOf(e);
            return n > 0
              ? t.slice(i).concat(t.slice(0, i), e)
              : (t.splice(i, 0, e), t.slice(i + 1).concat(t.slice(0, i + 1)));
          })(O, e),
          R = e > 0 ? 0 : g.length - 1,
          f = I(O, N),
          h = f.indexOf(D) + e;
        for (; null != O && "" !== O; ) {
          if (((r = f[h]), S(O)))
            for (; null != r && "" !== r; ) {
              if ("string" == typeof r) {
                if (_(O, r)) return (0, A.K)(O, r, !1, L(O, r));
              } else if ("object" == typeof r && T(r.resourceId, r.type))
                return (
                  O !== d.Z.getGuildId() &&
                    (0, A.K)(
                      O,
                      null === (l = u.ZP.getDefaultChannel(O)) || void 0 === l
                        ? void 0
                        : l.id,
                    ),
                  (0, E.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([
                      t.e("53115"),
                      t.e("22347"),
                      t.e("56236"),
                      t.e("39273"),
                    ]).then(t.bind(t, 17671));
                    return (n) => (0, i.jsx)(e, { ...n, guildId: O });
                  })
                );
              (h += e), (r = f[h]);
            }
          if (((R += e), null == (O = g[R]) || "" === O)) break;
          (f = I(O, N)), (h = e < 0 ? f.length - 1 : 0);
        }
        c.S.dispatch(C.CkL.SHAKE_APP, { duration: 200, intensity: 2 });
      }, C.aZC);
    },
    718528: function (e, n, t) {
      t.d(n, {
        T: function () {
          return A;
        },
        Z: function () {
          return c;
        },
      }),
        t(653041);
      var i = t(470079),
        o = t(442837),
        l = t(734307),
        E = t(854444),
        r = t(131704),
        a = t(680089),
        u = t(888369),
        d = t(944486),
        s = t(981631),
        _ = t(647086);
      function c(e) {
        let { withVoiceChannels: n = !1, withCurrentVoiceChannel: t = !1 } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          i = arguments.length > 2 ? arguments[2] : void 0;
        return C(
          e === _._ || e === s.I_8
            ? (0, E.t)()
            : l.Z.getGuildWithoutChangingGuildActionRows(e).guildChannels,
          {
            currentVoiceChannelId: d.Z.getVoiceChannelId(),
            selectedChannelId: d.Z.getChannelId(),
          },
          { withVoiceChannels: n, withCurrentVoiceChannel: t },
          i,
        );
      }
      function A(e, n, t) {
        let { withVoiceChannels: l = !1, withCurrentVoiceChannel: E = !1 } =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          r = arguments.length > 4 ? arguments[4] : void 0,
          s = (0, o.e7)([u.default], () => u.default.getGuildChangeSentinel(e)),
          _ = (0, o.e7)([a.Z], () => a.Z.version),
          { currentVoiceChannelId: c, selectedChannelId: A } = (0, o.cj)(
            [d.Z],
            () => ({
              currentVoiceChannelId: d.Z.getVoiceChannelId(),
              selectedChannelId: d.Z.getChannelId(),
            }),
          );
        return (0, i.useMemo)(
          () =>
            C(
              n,
              { currentVoiceChannelId: c, selectedChannelId: A },
              { withVoiceChannels: l, withCurrentVoiceChannel: E },
              r,
            ).map((e) => e.id),
          [n, t, s, _],
        );
      }
      function C(e, n) {
        let { currentVoiceChannelId: t, selectedChannelId: i } = n,
          { withVoiceChannels: o, withCurrentVoiceChannel: l } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          E = arguments.length > 3 ? arguments[3] : void 0,
          a = [];
        return (
          e.forEachShownChannel((e) => {
            ((0, r.r8)(e.type) ||
              (o && (0, r.bw)(e.type)) ||
              (l && (e.id === t || e.id === i))) &&
              a.push(e);
          }, E),
          a
        );
      }
    },
    675999: function (e, n, t) {
      var i, o, l, E;
      t.d(n, {
        PU: function () {
          return r;
        },
        _m: function () {
          return i;
        },
        lr: function () {
          return o;
        },
      }),
        ((l = i || (i = {})).GUILD_TEMPLATES = "guild-templates"),
        (l.CUSTOMIZE_GUILD = "customize-guild"),
        (l.CHANNEL_PROMPT = "channel-prompt"),
        (l.JOIN_GUILD = "join-guild"),
        (l.CREATION_INTENT = "creation-intent"),
        ((E = o || (o = {})).FRIENDS = "FRIENDS"),
        (E.COMMUNITY = "COMMUNITY"),
        (E.CLAN = "CLAN");
      let r = "create-guild";
    },
    734307: function (e, n, t) {
      t(47120);
      var i,
        o,
        l,
        E,
        r = t(392711),
        a = t.n(r),
        u = t(442837),
        d = t(570140),
        s = t(317381),
        _ = t(430198),
        c = t(924301),
        A = t(601070),
        C = t(569471),
        S = t(581883),
        I = t(314897),
        T = t(680089),
        L = t(592125),
        N = t(58468),
        O = t(77498),
        D = t(496675),
        g = t(306680),
        R = t(944486),
        f = t(9156),
        h = t(823379),
        p = t(709054),
        P = t(540126),
        G = t(526761);
      let M = null,
        b = null,
        Z = new P.ZP();
      function U() {
        let e = R.Z.getChannelId(),
          n = R.Z.getVoiceChannelId();
        return (M = e), (b = n), Z.clear();
      }
      function H(e) {
        let {
          guild: { id: n },
        } = e;
        return Z.clearGuildId(n);
      }
      function m(e) {
        let {
          channel: { guild_id: n },
        } = e;
        return Z.clearGuildId(n);
      }
      function B(e) {
        let { guildId: n } = e;
        return Z.clearGuildId(n);
      }
      function k(e) {
        let { channelId: n } = e;
        return Z.nonPositionalChannelIdUpdate(n);
      }
      function K() {
        return null != M && Z.nonPositionalChannelIdUpdate(M);
      }
      function v(e) {
        let { channel: n } = e;
        return Z.nonPositionalChannelIdUpdate(n.id);
      }
      function V(e) {
        let { id: n } = e;
        return Z.nonPositionalChannelIdUpdate(n);
      }
      function y() {
        let e = R.Z.getChannelId(),
          n = R.Z.getVoiceChannelId(),
          t = M !== e || b !== n;
        return (
          !!t &&
          (a()([M, b, e, n])
            .uniq()
            .forEach((e) => {
              null != e && Z.nonPositionalChannelIdUpdate(e) && (t = !0);
            }),
          (M = e),
          (b = n),
          !0)
        );
      }
      function F(e) {
        let { id: n } = e,
          t = L.Z.getChannel(n);
        return null == t ? Z.clearGuildId(n) : Z.clearGuildId(t.guild_id);
      }
      function w(e) {
        let { guildId: n } = e;
        return Z.clearGuildId(n);
      }
      function Y() {
        return Z.updateSubtitles();
      }
      function W(e) {
        let { guildScheduledEvent: n } = e;
        return Z.updateSubtitles(n.guild_id);
      }
      class X extends (i = u.ZP.Store) {
        initialize() {
          this.waitFor(
            A.Z,
            I.default,
            T.Z,
            L.Z,
            N.Z,
            s.ZP,
            O.Z,
            _.Z,
            c.ZP,
            C.Z,
            D.Z,
            g.ZP,
            R.Z,
            f.ZP,
            S.Z,
          );
        }
        getGuild(e, n) {
          var t, i;
          let o = Z.getGuild(
            e,
            null !== (t = null == n ? void 0 : n.guildActionRows) &&
              void 0 !== t
              ? t
              : [],
            null !== (i = null == n ? void 0 : n.channelNoticeRows) &&
              void 0 !== i
              ? i
              : [],
          );
          return { guildChannelsVersion: o.version, guildChannels: o };
        }
        getGuildWithoutChangingGuildActionRows(e) {
          let n = Z.getGuildChannelRowsOnly(e);
          return { guildChannelsVersion: n.version, guildChannels: n };
        }
        recentsChannelCount(e) {
          if (null == e) return 0;
          let n = Z.getGuildChannelRowsOnly(e);
          return n
            .getCategoryFromSection(n.recentsSectionNumber)
            .getShownChannelIds().length;
        }
      }
      (E = "ChannelListStore"),
        (l = "displayName") in (o = X)
          ? Object.defineProperty(o, l, {
              value: E,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (o[l] = E),
        (n.Z = new X(d.Z, {
          APPLICATION_FETCH_FAIL: Y,
          APPLICATION_FETCH_SUCCESS: Y,
          APPLICATION_FETCH: Y,
          APPLICATIONS_FETCH_FAIL: Y,
          APPLICATIONS_FETCH_SUCCESS: Y,
          APPLICATIONS_FETCH: Y,
          BACKGROUND_SYNC: U,
          BULK_ACK: function (e) {
            let { channels: n } = e,
              t = !1;
            return (
              a()(n)
                .map((e) => {
                  var n;
                  return null === (n = L.Z.getChannel(e.channelId)) ||
                    void 0 === n
                    ? void 0
                    : n.guild_id;
                })
                .filter(h.lm)
                .uniq()
                .forEach((e) => {
                  Z.clearGuildId(e) && (t = !0);
                }),
              t
            );
          },
          BULK_CLEAR_RECENTS: B,
          CACHE_LOADED_LAZY: U,
          CATEGORY_COLLAPSE_ALL: B,
          CATEGORY_COLLAPSE: F,
          CATEGORY_EXPAND_ALL: B,
          CATEGORY_EXPAND: F,
          CHANNEL_ACK: k,
          CHANNEL_COLLAPSE: function (e) {
            var n;
            let { channelId: t } = e;
            return Z.clearGuildId(
              null === (n = L.Z.getChannel(t)) || void 0 === n
                ? void 0
                : n.guild_id,
            );
          },
          CHANNEL_CREATE: m,
          CHANNEL_DELETE: m,
          CHANNEL_LOCAL_ACK: k,
          CHANNEL_MUTE_EXPIRED: B,
          CHANNEL_RTC_UPDATE_CHAT_OPEN: k,
          CHANNEL_SELECT: y,
          CHANNEL_STATUSES: function (e) {
            return Z.clearGuildId(e.guildId);
          },
          CHANNEL_UPDATES: function (e) {
            let { channels: n } = e,
              t = !1;
            return (
              a()(n)
                .map((e) => e.guild_id)
                .uniq()
                .forEach((e) => {
                  Z.clearGuildId(e) && (t = !0);
                }),
              t
            );
          },
          CONNECTION_OPEN_SUPPLEMENTAL: Y,
          CONNECTION_OPEN: U,
          CURRENT_USER_UPDATE: U,
          DECAY_READ_STATES: U,
          DEV_TOOLS_DESIGN_TOGGLE_SET: U,
          DISABLE_AUTOMATIC_ACK: k,
          DISMISS_FAVORITE_SUGGESTION: function (e) {
            let { channelId: n } = e;
            return Z.nonPositionalChannelIdUpdate(n);
          },
          DRAWER_CLOSE: K,
          DRAWER_OPEN: K,
          EMBEDDED_ACTIVITY_UPDATE_V2: function (e) {
            let { location: n } = e;
            return Z.updateSubtitles(n.guild_id, n.channel_id);
          },
          EMBEDDED_ACTIVITY_LAUNCH_START: function (e) {
            Y();
          },
          EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: Y,
          ENABLE_AUTOMATIC_ACK: k,
          FETCH_GUILD_EVENTS_FOR_GUILD: function (e) {
            let { guildId: n } = e;
            return Z.updateSubtitles(n);
          },
          GAMES_DATABASE_FETCH_FAIL: Y,
          GAMES_DATABASE_FETCH: Y,
          GAMES_DATABASE_UPDATE: Y,
          GUILD_APPLICATIONS_FETCH_SUCCESS: Y,
          GUILD_CREATE: H,
          GUILD_DELETE: H,
          GUILD_MEMBER_UPDATE: function (e) {
            let { guildId: n, user: t } = e;
            return I.default.getId() === t.id && Z.clearGuildId(n);
          },
          GUILD_MUTE_EXPIRED: B,
          GUILD_ROLE_CREATE: B,
          GUILD_ROLE_DELETE: B,
          GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: B,
          GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS: B,
          GUILD_ROLE_UPDATE: B,
          GUILD_SCHEDULED_EVENT_CREATE: W,
          GUILD_SCHEDULED_EVENT_DELETE: W,
          GUILD_SCHEDULED_EVENT_UPDATE: W,
          GUILD_TOGGLE_COLLAPSE_MUTED: B,
          GUILD_UPDATE: H,
          IMPERSONATE_STOP: B,
          IMPERSONATE_UPDATE: B,
          LOAD_CHANNELS: function (e) {
            e.channels.forEach((e) => {
              let { guildId: n } = e;
              return Z.clearGuildId(n);
            });
          },
          LOAD_MESSAGES_SUCCESS: k,
          MESSAGE_ACK: k,
          MESSAGE_CREATE: function (e) {
            let { channelId: n } = e;
            return Z.nonPositionalChannelIdUpdate(n);
          },
          MESSAGE_DELETE_BULK: k,
          MESSAGE_DELETE: k,
          NOTIFICATION_SETTINGS_UPDATE: U,
          OVERLAY_INITIALIZE: U,
          PASSIVE_UPDATE_V2: function (e) {
            return Z.clearGuildId(e.guildId);
          },
          RECOMPUTE_READ_STATES: U,
          RESORT_THREADS: k,
          SET_RECENTLY_ACTIVE_COLLAPSED: U,
          THREAD_CREATE: v,
          THREAD_DELETE: function (e) {
            let { channel: n } = e;
            return Z.nonPositionalChannelUpdate(n);
          },
          THREAD_LIST_SYNC: B,
          THREAD_MEMBER_UPDATE: V,
          THREAD_MEMBERS_UPDATE: V,
          THREAD_UPDATE: v,
          TRY_ACK: k,
          UPDATE_CHANNEL_DIMENSIONS: k,
          UPDATE_CHANNEL_LIST_SUBTITLES: function (e) {
            let { guildId: n } = e;
            Z.updateSubtitles(n);
          },
          USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: B,
          USER_GUILD_SETTINGS_CHANNEL_UPDATE: B,
          USER_GUILD_SETTINGS_FULL_UPDATE: function (e) {
            let { userGuildSettings: n } = e;
            n.forEach((e) => {
              let { guild_id: n } = e;
              return Z.clearGuildId(n);
            });
          },
          USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: B,
          USER_GUILD_SETTINGS_GUILD_UPDATE: B,
          USER_SETTINGS_PROTO_UPDATE: function (e) {
            var n;
            let { settings: t } = e;
            if (t.type !== G.yP.PRELOADED_USER_SETTINGS) return !1;
            let i =
                null === (n = t.proto.guilds) || void 0 === n
                  ? void 0
                  : n.guilds,
              o = !1;
            return (
              null != i &&
                p.default.keys(i).forEach((e) => {
                  null != i[e].guildRecentsDismissedAt &&
                    (o = Z.updateRecentsCategory(e) || o);
                }),
              o
            );
          },
          VOICE_CATEGORY_COLLAPSE: w,
          VOICE_CATEGORY_EXPAND: w,
          VOICE_CHANNEL_SELECT: y,
          VOICE_CHANNEL_STATUS_UPDATE: function (e) {
            return Z.nonPositionalChannelIdUpdate(e.id);
          },
          VOICE_STATE_UPDATES: function (e) {
            let { voiceStates: n } = e,
              t = y(),
              i = new Set();
            for (let { channelId: e, oldChannelId: o } of n)
              null != o &&
                !i.has(o) &&
                (Z.nonPositionalChannelIdUpdate(o) && (t = !0), i.add(o)),
                null != e &&
                  !i.has(e) &&
                  (Z.nonPositionalChannelIdUpdate(e) && (t = !0), i.add(e));
            return t;
          },
          WINDOW_FOCUS: K,
        }));
    },
    854444: function (e, n, t) {
      t.d(n, {
        o: function () {
          return p;
        },
        t: function () {
          return P;
        },
      }),
        t(47120),
        t(653041);
      var i = t(470079),
        o = t(392711),
        l = t.n(o),
        E = t(524437),
        r = t(317381),
        a = t(853856),
        u = t(846787),
        d = t(924301),
        s = t(601070),
        _ = t(569471),
        c = t(131704),
        A = t(680089),
        C = t(592125),
        S = t(58468),
        I = t(77498),
        T = t(496675),
        L = t(306680),
        N = t(944486),
        O = t(9156),
        D = t(823379),
        g = t(540126),
        R = t(647086),
        f = t(231338);
      let h =
        12633 == t.j
          ? [r.ZP, a.Z, d.ZP, s.Z, _.Z, A.Z, C.Z, I.Z, T.Z, L.ZP, N.Z, O.ZP]
          : null;
      function p() {
        let [e, n] = i.useState(() => P());
        return (
          i.useEffect(() => {
            let e = l().throttle(() => n(P()), 100);
            return (
              h.forEach((n) => n.addChangeListener(e)),
              () => h.forEach((n) => n.removeChangeListener(e))
            );
          }, []),
          e
        );
      }
      function P() {
        let e = a.Z.getFavoriteChannels(),
          n = O.ZP.isGuildCollapsed(R._),
          t = N.Z.getChannelId(),
          i = C.Z.getChannel(t),
          o = N.Z.getVoiceChannelId(),
          r = [],
          d = {};
        for (let n in e) {
          let t = e[n],
            i = C.Z.getChannel(t.id);
          if (null == i || t.type === E.Dd.CATEGORY) continue;
          let o = (0, u.r)(e, t, i);
          if (null == t.parentId || !(t.parentId in e)) {
            r.push(o);
            continue;
          }
          !(t.parentId in d) && (d[t.parentId] = []), d[t.parentId].push(o);
        }
        function _(t, E) {
          let { isCollapsed: r, isMuted: a } = E;
          return l()(t)
            .map((t) => {
              var u;
              if (!t.isPrivate() && !T.Z.can(f.Pl.VIEW_CHANNEL, t)) return null;
              let d = null != i && (i.id === t.id || o === t.id),
                _ = null != i && i.isThread() && i.parent_id === t.id,
                A =
                  null !==
                    (u =
                      d || _ || !r
                        ? s.Z.getActiveJoinedRelevantThreadsForParent(
                            t.guild_id,
                            t.id,
                          )
                        : s.Z.getActiveJoinedUnreadThreadsForParent(
                            t.guild_id,
                            t.id,
                          )) && void 0 !== u
                    ? u
                    : {},
                C = (0, g.zR)(t, A, i, o, n),
                I = S.Z.isCollapsed(t.id),
                N = O.ZP.isChannelMuted(t.guild_id, t.id),
                D = {
                  id: t.id,
                  record: t,
                  category: E,
                  position: e[t.id].order,
                  threadIds: C,
                  threadCount: l().size(C),
                  isCollapsed: I,
                  isMuted: N,
                  isFirstVoiceChannel: !1,
                  subtitle: (0, g.Bz)(t, I, !1),
                };
              return d || _ || L.ZP.getMentionCount(t.id) > 0
                ? D
                : (n && N) ||
                    (r &&
                      (N ||
                        a ||
                        (0, c.vd)(t.type) ||
                        ((0, c.vc)(t.type) && !1 === L.ZP.hasUnread(t.id))))
                  ? null
                  : D;
            })
            .filter(D.lm)
            .sortBy((e) => {
              let { record: n } = e;
              return n.isGuildVocal() ? n.position + 1e4 : n.position;
            })
            .value();
        }
        let I = null,
          h = {
            isMuted: !1,
            isCollapsed: !1,
            position: 0,
            getChannelRecords: () => r,
            getShownChannelIds: () => r.map((e) => e.id),
            getShownChannelAndThreadIds: () => r.map((e) => e.id),
            isEmpty: () => 0 === r.length,
            get channelList() {
              return null == I && (I = _(r, this)), I;
            },
          },
          p = l()(e)
            .values()
            .filter((e) => e.type === E.Dd.CATEGORY)
            .sortBy((e) => e.order)
            .map((e) => {
              var n;
              let { id: t, order: i } = e,
                o = a.Z.getCategoryRecord(t),
                l = null !== (n = d[t]) && void 0 !== n ? n : [],
                E = O.ZP.isChannelMuted(R._, t),
                r = A.Z.isCollapsed(t),
                u = null;
              return {
                isMuted: E,
                isCollapsed: r,
                record: o,
                id: t,
                position: i,
                getChannelRecords: () => l,
                getShownChannelIds: () => l.map((e) => e.id),
                getShownChannelAndThreadIds: () => l.map((e) => e.id),
                isEmpty: () => 0 === l.length,
                get channelList() {
                  return null == u && (u = _(l, this)), u;
                },
              };
            })
            .value(),
          P = { isEmpty: () => !0, getRows: () => [], getRow: () => null },
          G = { isEmpty: () => !0, getRows: () => [], getRow: () => null };
        return {
          id: R._,
          hideMutedChannels: n,
          favoritesSectionNumber: 1,
          recentsSectionNumber: 2,
          voiceChannelsSectionNumber: -999,
          getSections() {
            let e = [];
            (e[g.Fq] = 0),
              (e[g.wZ] = 0),
              (e[g.p2] = 0),
              (e[g.PB] = 0),
              (e[g.wd] = h.channelList.length);
            for (let n = 0; n < p.length; n++)
              e[g.wF + n] = Math.max(1, p[n].channelList.length);
            return e;
          },
          isPlaceholderRow: (e, n) =>
            !(e < g.wF) && 0 === n && 0 === p[e - g.wF].channelList.length,
          getCategoryFromSection: (e) => (e === g.wd ? h : p[e - g.wF]),
          getNamedCategoryFromSection: (e) => p[e - g.wF],
          getChannelFromSectionRow(e, n) {
            let t = this.getCategoryFromSection(e);
            return null == t || null == t.channelList[n]
              ? null
              : { category: t, channel: t.channelList[n] };
          },
          getGuildActionSection: () => P,
          getChannelNoticeSection: () => G,
          getFirstVoiceChannel: () => null,
          getSectionRowsFromChannel(e) {
            let n = [h, ...p];
            for (let t = 0; t < n.length; t++)
              for (let i = 0; i < n[t].channelList.length; i++)
                if (n[t].channelList[i].id === e)
                  return [{ section: t + g.wd, row: i }];
            return [];
          },
          forEachShownChannel(e) {
            for (let n of [h, ...p])
              for (let t of n.channelList)
                for (let n of (e(t.record), t.threadIds)) {
                  let t = C.Z.getChannel(n);
                  null != t && e(t);
                }
          },
          forEachChannel(e) {
            for (let n of [h, ...p]) for (let t of n.getChannelRecords()) e(t);
          },
          getSlicedChannels: (e) => [[], e, []],
          getChannels: () => [],
        };
      }
    },
    191980: function (e, n, t) {
      t.d(n, {
        $: function () {
          return o;
        },
        C: function () {
          return l;
        },
      });
      var i = t(570140);
      function o() {
        i.Z.dispatch({ type: "SHOW_KEYBOARD_SHORTCUTS" });
      }
      function l() {
        i.Z.dispatch({ type: "HIDE_KEYBOARD_SHORTCUTS" });
      }
    },
    285371: function (e, n, t) {
      t.d(n, {
        J: function () {
          return i;
        },
      });
      let i = "KEYBOARD_SHORTCUT_MODAL_KEY";
    },
    423932: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return l;
        },
      });
      var i = t(735250);
      t(470079);
      var o = t(481060);
      function l(e) {
        (0, o.openModalLazy)(
          async () => {
            let { default: e } = await t.e("76815").then(t.bind(t, 336977));
            return (n) => (0, i.jsx)(e, { ...n });
          },
          { onCloseCallback: e, backdropStyle: o.BackdropStyles.BLUR },
        );
      }
    },
    896797: function (e, n, t) {
      var i,
        o = t(442837),
        l = t(433517),
        E = t(570140),
        r = t(981631);
      function a(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        );
      }
      let u = { lastViewedPath: null, lastViewedNonVoicePath: null },
        d = u,
        s = "LAST_VIEWED_PATH";
      class _ extends (i = o.ZP.PersistedStore) {
        initialize() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u;
          d = null != e ? e : u;
        }
        get defaultRoute() {
          return r.Z5c.ME;
        }
        get lastNonVoiceRoute() {
          var e;
          return null !== (e = d.lastViewedNonVoicePath) && void 0 !== e
            ? e
            : r.Z5c.ME;
        }
        get fallbackRoute() {
          return r.Z5c.ME;
        }
        getState() {
          return d;
        }
      }
      a(_, "displayName", "DefaultRouteStore"),
        a(_, "persistKey", "DefaultRouteStore"),
        a(_, "migrations", [
          () => {
            let e = l.K.get(s, null);
            return l.K.remove(s), { lastViewedPath: e };
          },
        ]),
        (n.Z = new _(E.Z, {
          SAVE_LAST_ROUTE: function (e) {
            let { path: n } = e;
            return (d.lastViewedPath = n), !0;
          },
          SAVE_LAST_NON_VOICE_ROUTE: function (e) {
            let { path: n } = e;
            return (d.lastViewedNonVoicePath = n), !0;
          },
        }));
    },
    923834: function (e, n, t) {
      t(411104);
      var i,
        o,
        l,
        E,
        r = t(442837),
        a = t(570140);
      let u = null;
      class d extends (i = r.ZP.Store) {
        getCurrentPath() {
          return null != u ? u.pathname : null;
        }
        getCurrentRoute() {
          return (function (e) {
            let n = null != e && null != e.search ? e.search : "";
            return null != e ? "".concat(e.pathname).concat(n) : null;
          })(u);
        }
        reset() {
          throw Error(
            "Should not reset the store this way outside of a test environment",
          );
        }
      }
      (E = "ApplicationStoreLocationStore"),
        (l = "displayName") in (o = d)
          ? Object.defineProperty(o, l, {
              value: E,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (o[l] = E),
        (n.Z = new d(a.Z, {
          APPLICATION_STORE_LOCATION_CHANGE: function (e) {
            let { location: n } = e;
            u = { ...n };
          },
          APPLICATION_STORE_RESET_NAVIGATION: function () {
            u = null;
          },
        }));
    },
    774343: function (e, n, t) {
      var i,
        o,
        l,
        E,
        r,
        a,
        u,
        d = t(442837),
        s = t(570140),
        _ = t(592125),
        c = t(896797),
        A = t(430824),
        C = t(944486),
        S = t(55589),
        I = t(981631);
      let T = (null !==
        (a =
          null === (r = window) || void 0 === r
            ? void 0
            : null === (E = r.location) || void 0 === E
              ? void 0
              : E.pathname) && void 0 !== a
        ? a
        : ""
      ).startsWith(I.Z5c.ACTIVITIES)
        ? I.Z5c.ACTIVITIES
        : null;
      function L(e) {
        let { link: n } = e;
        if (T === n) return !1;
        T = n;
      }
      class N extends (u = d.ZP.Store) {
        initialize() {
          this.waitFor(c.Z, S.Z, C.Z, A.Z, _.Z);
        }
        getHomeLink() {
          return null != T ? T : c.Z.fallbackRoute;
        }
      }
      (l = "AppViewStore"),
        (o = "displayName") in (i = N)
          ? Object.defineProperty(i, o, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (i[o] = l),
        (n.Z = new N(s.Z, {
          OVERLAY_INITIALIZE: function () {
            let e = S.Z.getPrivateChannelIds(),
              n = C.Z.getChannelId(I.ME);
            (null != n || null != e[0]) &&
              (T = I.Z5c.CHANNEL(I.ME, null != n ? n : e[0]));
          },
          APP_VIEW_SET_HOME_LINK: L,
          APPLICATION_STORE_LOCATION_CHANGE: function (e) {
            let { location: n } = e;
            L({ link: n.pathname, type: "APP_VIEW_SET_HOME_LINK" });
          },
          APPLICATION_STORE_RESET_NAVIGATION: function () {
            if (null == T || !T.startsWith(I.Z5c.APPLICATION_STORE)) return !1;
            T = I.Z5c.APPLICATION_STORE;
          },
          CHANNEL_SELECT: function (e) {
            let { guildId: n, channelId: t } = e;
            if (null == n && null != t) {
              let e = I.Z5c.CHANNEL(I.ME, t);
              if (e !== T) return (T = e), !0;
            }
            return !1;
          },
          CHANNEL_DELETE: function (e) {
            let { channel: n } = e;
            null == n.guild_id &&
              null != n.id &&
              null != T &&
              T === I.Z5c.CHANNEL(I.ME, n.id) &&
              (T = null);
          },
        }));
    },
  },
]);
//# sourceMappingURL=879c083c295e6dbe63ca.js.map
