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
          return r;
        },
        IL: function () {
          return o;
        },
      });
      var i = t(585483),
        l = t(981631);
      let o = {
          binds: ["mod+return"],
          comboKeysBindGlobal: !0,
          action() {
            if (i.S.hasSubscribers(l.CkL.CALL_ACCEPT))
              return i.S.dispatch(l.CkL.CALL_ACCEPT), !1;
          },
        },
        r = {
          binds: ["ctrl+'", "ctrl+shift+'"],
          comboKeysBindGlobal: !0,
          action(e) {
            if (i.S.hasSubscribers(l.CkL.CALL_START))
              return i.S.dispatch(l.CkL.CALL_START, e), !1;
          },
        };
    },
    185514: function (e, n, t) {
      t.d(n, {
        $c: function () {
          return c;
        },
        Nx: function () {
          return C;
        },
        On: function () {
          return I;
        },
        tQ: function () {
          return d;
        },
        x5: function () {
          return _;
        },
      });
      var i = t(140492),
        l = t(475468),
        o = t(703656),
        r = t(769654),
        E = t(944486),
        a = t(914010),
        u = t(358085),
        s = t(981631);
      let d = {
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
            if (null != a.Z.getGuildId()) e = s.ME;
            else {
              let n = a.Z.getLastSelectedGuildId();
              null != n && ((e = n), (0, l.K)(n, E.Z.getChannelId(n)));
            }
            return null != e && (0, r.X)(e), !1;
          },
        },
        C = {
          binds: (0, u.isMac)() ? ["mod+["] : ["alt+left"],
          comboKeysBindGlobal: !0,
          action: () => ((0, o.op)(), !1),
        },
        I = {
          binds: (0, u.isMac)() ? ["mod+]"] : ["alt+right"],
          comboKeysBindGlobal: !0,
          action: () => ((0, o.eH)(), !1),
        };
    },
    395878: function (e, n, t) {
      t.d(n, {
        K: function () {
          return E;
        },
      });
      var i = t(475468),
        l = t(914010),
        o = t(585483),
        r = t(981631);
      let E = {
        binds: ["mod+shift+t"],
        comboKeysBindGlobal: !0,
        action: () => (
          null != l.Z.getGuildId() && (0, i.K)(r.ME),
          o.S.safeDispatch(r.CkL.TOGGLE_DM_CREATE),
          !1
        ),
      };
    },
    321697: function (e, n, t) {
      t.d(n, {
        r: function () {
          return r;
        },
      });
      var i = t(481060),
        l = t(560067),
        o = t(675999);
      let r = {
        binds: ["mod+shift+n"],
        comboKeysBindGlobal: !0,
        action() {
          (0, i.hasModalOpen)(o.PU)
            ? l.Z.updateCreateGuildModal({
                slide: o._m.JOIN_GUILD,
                location: "Keyboard Shortcut",
              })
            : l.Z.openCreateGuildModal({ location: "Keyboard Shortcut" });
        },
      };
    },
    775774: function (e, n, t) {
      t.d(n, {
        p: function () {
          return l;
        },
      });
      var i = t(358085);
      let l = {
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
          return o;
        },
      });
      var i = t(585483),
        l = t(981631);
      let o = {
        binds: ["mod+f"],
        comboKeysBindGlobal: !0,
        action(e) {
          e.preventDefault(),
            e.stopPropagation(),
            i.S.dispatch(l.CkL.FOCUS_SEARCH, { prefillCurrentChannel: !0 });
        },
      };
    },
    438846: function (e, n, t) {
      t.d(n, {
        K: function () {
          return r;
        },
      });
      var i = t(475468),
        l = t(19780),
        o = t(981631);
      let r = {
        binds: ["mod+shift+alt+v"],
        comboKeysBindGlobal: !0,
        action(e) {
          e.preventDefault(), e.stopPropagation();
          let n = l.Z.getGuildId(),
            t = l.Z.getChannelId();
          return null != t && (0, i.K)(null != n ? n : o.ME, t), !1;
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
        l = t(475179),
        o = t(904245),
        r = t(45114),
        E = t(40851),
        a = t(358221),
        u = t(623292),
        s = t(807092),
        d = t(6025),
        _ = t(897473),
        c = t(913663),
        C = t(268350),
        I = t(433355),
        A = t(592125),
        S = t(703558),
        T = t(323873),
        L = t(375954),
        N = t(306680),
        O = t(944486),
        g = t(914010),
        h = t(574254),
        D = t(451478),
        R = t(585483),
        f = t(981631);
      let p = {
        binds: ["esc", "shift+pagedown"],
        comboKeysBindGlobal: !0,
        action(e) {
          if (D.Z.isElementFullScreen()) return !1;
          if (R.S.hasSubscribers(f.CkL.CALL_DECLINE))
            return R.S.dispatch(f.CkL.CALL_DECLINE), !1;
          if (h.Z.close()) return !1;
          if (R.S.hasSubscribers(f.CkL.MEDIA_MODAL_CLOSE))
            return R.S.dispatch(f.CkL.MEDIA_MODAL_CLOSE), !1;
          if ((0, i.k)(e.target)) {
            let n = (0, E.J5)(e.target);
            if (null == n ? void 0 : n.hasSubscribers(f.CkL.POPOUT_CLOSE))
              return n.dispatch(f.CkL.POPOUT_CLOSE), !1;
          }
          if (R.S.hasSubscribers(f.CkL.CLOSE_GIF_PICKER))
            return R.S.dispatch(f.CkL.CLOSE_GIF_PICKER), !1;
          if (R.S.hasSubscribers(f.CkL.MODAL_CLOSE))
            return R.S.dispatch(f.CkL.MODAL_CLOSE), !1;
          if (R.S.hasSubscribers(f.CkL.SEARCH_RESULTS_CLOSE))
            return R.S.dispatch(f.CkL.SEARCH_RESULTS_CLOSE), !1;
          let n = g.Z.getGuildId(),
            t = O.Z.getChannelId(n),
            o = A.Z.getChannel(t),
            r =
              I.ZP.getSection(t, null == o ? void 0 : o.isDM()) ===
              f.ULH.SIDEBAR_CHAT
                ? I.ZP.getSidebarState(t)
                : null,
            u =
              (null == r ? void 0 : r.type) === _.tI.VIEW_THREAD ||
              (null == r ? void 0 : r.type) === _.tI.VIEW_CHANNEL
                ? r.channelId
                : null;
          if (!1 === P(t) || !1 === P(u)) return !1;
          if (null != t && (null == r ? void 0 : r.type) === _.tI.CREATE_THREAD)
            return d.Z.closeChannelSidebar(t), !1;
          let s = Z(t),
            c = Z(u);
          return null == t || s || c || null == r
            ? null != t && !s && a.Z.getChatOpen(t)
              ? (l.Z.updateChatOpen(t, !1), !1)
              : (R.S.dispatch(f.CkL.SCROLLTO_PRESENT), !1)
            : (d.Z.closeChannelSidebar(t), !1);
        },
      };
      function P(e) {
        if (null != e) {
          if (T.Z.isEditingAny(e)) return o.Z.endEditMessage(e), !1;
          if (null != s.Z.getPendingReply(e)) return (0, u.A6)(e), !1;
          if (null != c.Z.getStickerPreview(e, S.d.ChannelMessage))
            return (0, C.qB)(e, S.d.ChannelMessage), !1;
        }
      }
      function Z(e) {
        if (null == e) return !1;
        let n = !1;
        return (
          L.Z.getMessages(e).hasMoreAfter &&
            (o.Z.jumpToPresent(e, f.AQB), (n = !0)),
          N.ZP.hasUnread(e) && ((0, r.In)(e), (n = !0)),
          (0, r.iV)(e),
          n
        );
      }
    },
    705371: function (e, n, t) {
      t.d(n, {
        l: function () {
          return d;
        },
      });
      var i = t(904245),
        l = t(181945),
        o = t(888369),
        r = t(375954),
        E = t(944486),
        a = t(914010),
        u = t(585483),
        s = t(981631);
      let d = {
        binds: ["shift+esc"],
        comboKeysBindGlobal: !0,
        action() {
          let e = a.Z.getGuildId();
          if (null == e || !o.default.getGuildHasUnreadIgnoreMuted(e)) return;
          (0, l.Z)([e]);
          let n = E.Z.getChannelId(e);
          if (null != n)
            r.Z.getMessages(n).hasMoreAfter
              ? i.Z.jumpToPresent(n, s.AQB)
              : u.S.dispatch(s.CkL.SCROLLTO_PRESENT);
        },
      };
    },
    138976: function (e, n, t) {
      t.d(n, {
        O: function () {
          return r;
        },
      });
      var i = t(904245),
        l = t(306680),
        o = t(944486);
      let r = {
        binds: ["shift+pageup"],
        comboKeysBindGlobal: !0,
        action() {
          let e = o.Z.getChannelId();
          if (null != e) {
            let n = l.ZP.ackMessageId(e);
            null != n &&
              l.ZP.getOldestUnreadTimestamp(e) > 0 &&
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
          return r;
        },
      });
      var i = t(132871),
        l = t(147890),
        o = t(914010);
      let r = {
        binds: ["mod+ctrl+a"],
        comboKeysBindGlobal: !0,
        action() {
          var e;
          let n = null !== (e = o.Z.getGuildId()) && void 0 !== e ? e : void 0;
          (0, l.goToAppDirectory)({
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
          return o;
        },
      });
      var i = t(51596),
        l = t(819640);
      let o = {
        binds: ["mod+k", "mod+t"],
        comboKeysBindGlobal: !0,
        action: () => (!l.Z.hasLayers() && (0, i.$Z)(), !1),
      };
    },
    239748: function (e, n, t) {
      t.d(n, {
        F: function () {
          return a;
        },
      });
      var i = t(925549),
        l = t(475468),
        o = t(19780),
        r = t(944486),
        E = t(981631);
      let a = {
        binds: ["mod+alt+left"],
        comboKeysBindGlobal: !0,
        action() {
          var e;
          if (!o.Z.isConnected()) return !1;
          let n = null !== (e = o.Z.getGuildId()) && void 0 !== e ? e : E.ME,
            t = r.Z.getChannelId(n);
          return (
            (0, l.K)(n, t), i.Z.channelListScrollTo(n, o.Z.getChannelId()), !1
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
          return r;
        },
      });
      var i = t(585483),
        l = t(981631);
      let o = {
          binds: ["pageup"],
          comboKeysBindGlobal: !0,
          action: () => (
            i.S.dispatchToLastSubscribed(l.CkL.SCROLL_PAGE_UP), !1
          ),
        },
        r = {
          binds: ["pagedown"],
          comboKeysBindGlobal: !0,
          action: () => (
            i.S.dispatchToLastSubscribed(l.CkL.SCROLL_PAGE_DOWN), !1
          ),
        };
    },
    679080: function (e, n, t) {
      t.d(n, {
        S: function () {
          return E;
        },
      });
      var i = t(130402),
        l = t(585483),
        o = t(981631),
        r = t(185923);
      let E = {
        binds: ["mod+e"],
        comboKeysBindGlobal: !0,
        action: () => (
          (0, i.x)(r.qR.SearchEmojiKeybindPressed),
          l.S.dispatchToLastSubscribed(o.CkL.TOGGLE_EMOJI_POPOUT),
          !1
        ),
      };
    },
    777019: function (e, n, t) {
      t.d(n, {
        O: function () {
          return o;
        },
      });
      var i = t(585483),
        l = t(981631);
      let o = {
        binds: ["mod+g"],
        comboKeysBindGlobal: !0,
        action: () => (
          i.S.dispatchToLastSubscribed(l.CkL.TOGGLE_GIF_PICKER), !1
        ),
      };
    },
    523147: function (e, n, t) {
      var i = t(585483),
        l = t(981631);
      n.Z = {
        binds: ["mod+shift+b"],
        comboKeysBindGlobal: !0,
        action: () => (i.S.dispatch(l.CkL.TOGGLE_SOUNDBOARD), !1),
      };
    },
    400332: function (e, n, t) {
      t.d(n, {
        U: function () {
          return o;
        },
      });
      var i = t(585483),
        l = t(981631);
      let o = {
        binds: ["mod+s"],
        comboKeysBindGlobal: !0,
        action: () => (
          i.S.dispatchToLastSubscribed(l.CkL.TOGGLE_STICKER_PICKER), !1
        ),
      };
    },
    510761: function (e, n, t) {
      t.d(n, {
        X3: function () {
          return o;
        },
        nq: function () {
          return l;
        },
      });
      var i = t(452913);
      let l = {
          binds: ["mod+alt+down", "mod+shift+]", "ctrl+tab"],
          comboKeysBindGlobal: !0,
          action: (e) => (
            e.preventDefault(), e.stopPropagation(), (0, i.Z)(), !1
          ),
        },
        o = {
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
          return r;
        },
      });
      var i = t(607070),
        l = t(585483),
        o = t(981631);
      let r = {
        binds: ["return"],
        action() {
          if (
            !i.Z.keyboardModeEnabled &&
            l.S.hasSubscribers(o.CkL.MODAL_SUBMIT)
          )
            return l.S.dispatch(o.CkL.MODAL_SUBMIT), !1;
        },
      };
    },
    673553: function (e, n, t) {
      t.d(n, {
        U: function () {
          return A;
        },
      }),
        t(47120);
      var i = t(802498),
        l = t(607070),
        o = t(819640),
        r = t(131951),
        E = t(19780),
        a = t(585483),
        u = t(5967),
        s = t(13140),
        d = t(981631);
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
        C = new Set([
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
        I = new Set([
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
        A = {
          binds: ["any-character"],
          keydown(e, n) {
            var t;
            let A =
              null === (t = (0, u.uB)(e)) || void 0 === t
                ? void 0
                : t.activeElement;
            if (
              (0, u.VG)(A) ||
              i.fC.isActive() ||
              c.has(n) ||
              C.has(n) ||
              I.has(n)
            )
              return !1;
            let S = null != A && "BODY" === A.tagName;
            return (
              !(
                (l.Z.keyboardModeEnabled && !S && !/^[a-zA-Z0-9]$/.test(n)) ||
                a.S.hasSubscribers(d.CkL.MODAL_CLOSE) ||
                o.Z.hasLayers()
              ) &&
              ("Tab" === n &&
              a.S.hasSubscribers(d.CkL.TEXTAREA_FOCUS) &&
              null != document.querySelector('[data-can-focus="true"]')
                ? (e.preventDefault(), a.S.dispatch(d.CkL.TEXTAREA_FOCUS), !1)
                : !(
                    E.Z.isConnected() &&
                    r.Z.getMode() === d.pM4.PUSH_TO_TALK &&
                    !r.Z.isSelfMute() &&
                    Object.values(r.Z.getShortcuts())
                      .map(s.d2)
                      .some((n) => n.map((e) => e.keyCode).includes(e.keyCode))
                  ) &&
                  void (
                    !e.metaKey &&
                    !e.ctrlKey &&
                    !_.has(n) &&
                    a.S.dispatchToLastSubscribed(d.CkL.TEXTAREA_FOCUS)
                  ))
            );
          },
        };
    },
    280492: function (e, n, t) {
      t.d(n, {
        iN: function () {
          return l;
        },
        oV: function () {
          return o;
        },
      });
      var i = t(846027);
      let l = {
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
        o = {
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
        l = t(680089),
        o = t(984933),
        r = t(914010),
        E = t(981631);
      let a = {
        binds: ["mod+shift+a"],
        comboKeysBindGlobal: !0,
        action() {
          let e = r.Z.getGuildId();
          return (
            null != e &&
            (o.ZP.getChannels(e)[E.d4z.GUILD_CATEGORY].some((e) => {
              let { channel: n } = e;
              return "null" !== n.id && !l.Z.isCollapsed(n.id);
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
          return o;
        },
      });
      var i = t(585483),
        l = t(981631);
      let o = {
        binds: ["mod+p"],
        comboKeysBindGlobal: !0,
        action: () => (i.S.dispatch(l.CkL.TOGGLE_CHANNEL_PINS), !1),
      };
    },
    89028: function (e, n, t) {
      t.d(n, {
        f: function () {
          return r;
        },
      });
      var i = t(2818),
        l = t(585483),
        o = t(981631);
      let r = {
        binds: ["mod+l"],
        comboKeysBindGlobal: !0,
        action() {
          let { enabled: e, inInbox: n } = i.Z.getCurrentConfig(
            { location: "keybinds" },
            { autoTrackExposure: !1 },
          );
          if (e && !n) return l.S.dispatch(o.CkL.TOGGLE_FOR_LATER), !1;
        },
      };
    },
    300644: function (e, n, t) {
      t.d(n, {
        O: function () {
          return l;
        },
      });
      var i = t(63063);
      let l = {
        binds: ["mod+shift+h", "f1"],
        comboKeysBindGlobal: !0,
        action: () => (window.open(i.w), !1),
      };
    },
    721383: function (e, n, t) {
      t.d(n, {
        _: function () {
          return r;
        },
      });
      var i = t(481060),
        l = t(191980),
        o = t(285371);
      let r = {
        binds: ["mod+/", "mod+shift+/"],
        comboKeysBindGlobal: !0,
        action: () => ((0, i.hasModalOpen)(o.J) ? l.C() : l.$(), !1),
      };
    },
    207234: function (e, n, t) {
      t.d(n, {
        M: function () {
          return a;
        },
        a: function () {
          return E;
        },
      });
      var i = t(392711),
        l = t.n(i),
        o = t(585483),
        r = t(981631);
      let E = {
          binds: ["mod+i"],
          comboKeysBindGlobal: !0,
          action: () => (o.S.dispatch(r.CkL.TOGGLE_INBOX), !1),
        },
        a = {
          binds: ["mod+shift+e"],
          comboKeysBindGlobal: !0,
          action: l().debounce(
            () => {
              if (o.S.hasSubscribers(r.CkL.MARK_TOP_INBOX_CHANNEL_READ))
                return o.S.dispatch(r.CkL.MARK_TOP_INBOX_CHANNEL_READ), !1;
            },
            100,
            { leading: !0 },
          ),
        };
    },
    997292: function (e, n, t) {
      t.d(n, {
        r: function () {
          return C;
        },
      });
      var i = t(106351),
        l = t(475179),
        o = t(816782),
        r = t(358221),
        E = t(221292),
        a = t(687158),
        u = t(433355),
        s = t(592125),
        d = t(944486),
        _ = t(914010),
        c = t(981631);
      let C = {
        binds: ["mod+u"],
        comboKeysBindGlobal: !0,
        action() {
          let e = _.Z.getGuildId(),
            n = d.Z.getChannelId(e),
            t = s.Z.getChannel(n);
          if (null != n && null != t && t.type === i.d.GUILD_VOICE)
            return l.Z.updateChatOpen(n, !r.Z.getChatOpen(n)), !1;
          if (null != n && null != t && t.type === i.d.DM) {
            let e = u.ZP.getSection(n, null == t ? void 0 : t.isDM()),
              i = (0, a.Of)(t.getRecipientId()),
              l = e === c.ULH.PROFILE;
            return (
              (0, E.TY)({ displayProfile: i, isProfileOpen: !l }),
              o.Z.toggleProfilePanelSection(),
              !1
            );
          }
          return o.Z.toggleMembersSection(), !1;
        },
      };
    },
    743810: function (e, n, t) {
      t.d(n, {
        Nv: function () {
          return L;
        },
        pd: function () {
          return A;
        },
        uX: function () {
          return N;
        },
        wk: function () {
          return S;
        },
      });
      var i = t(350483),
        l = t(220444),
        o = t(905423),
        r = t(131704),
        E = t(592125),
        a = t(306680),
        u = t(944486),
        s = t(9156),
        d = t(981631),
        _ = t(490897);
      let c = (e, n) => {
          let t = E.Z.getChannel(n);
          return (
            null != t &&
            ((0, r.hv)(t.type) || d.TPd.GUILD_VOCAL.has(t.type)
              ? a.ZP.getMentionCount(n) > 0 || u.Z.getVoiceChannelId() === n
              : (!s.ZP.isChannelMuted(e, n) || a.ZP.getMentionCount(n) > 0) &&
                (0, l.d)(t))
          );
        },
        C = (e, n) => {
          if (n === _.W.GUILD_EVENT)
            return (
              !s.ZP.isMuteScheduledEventsEnabled(e) && a.ZP.hasUnread(e, n)
            );
          return a.ZP.hasUnread(e, n);
        },
        I = (e, n) => {
          let t = E.Z.getChannel(n);
          return (
            !!(null != t && d.TPd.GUILD_VOCAL.has(t.type)) &&
            (!!(a.ZP.getMentionCount(n) > 0) ||
              (u.Z.getVoiceChannelId() === n && a.ZP.getUnreadCount(n) > 0))
          );
        },
        A = {
          binds: ["alt+shift+down"],
          comboKeysBindGlobal: !0,
          action() {
            var e;
            let n =
              null !== (e = o.Z.getState().guildId) && void 0 !== e ? e : d.ME;
            return (
              (0, i.Z)(1, {
                channelPredicate: c,
                guildPredicate: (e) => e === n || !s.ZP.isMuted(e),
                guildFeaturePredicate: C,
                ensureChatIsVisible: I,
                withVoiceChannels: !0,
              }),
              !1
            );
          },
        },
        S = {
          binds: ["alt+shift+up"],
          comboKeysBindGlobal: !0,
          action() {
            var e;
            let n =
              null !== (e = o.Z.getState().guildId) && void 0 !== e ? e : d.ME;
            return (
              (0, i.Z)(-1, {
                channelPredicate: c,
                guildPredicate: (e) => e === n || !s.ZP.isMuted(e),
                guildFeaturePredicate: C,
                ensureChatIsVisible: I,
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
              ensureChatIsVisible: I,
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
              ensureChatIsVisible: I,
              withVoiceChannels: !0,
            }),
            !1
          ),
        };
    },
    620212: function (e, n, t) {
      t.d(n, {
        U: function () {
          return E;
        },
      });
      var i = t(592125),
        l = t(944486),
        o = t(585483),
        r = t(981631);
      let E = {
        binds: ["mod+shift+u"],
        comboKeysBindGlobal: !0,
        action() {
          let e = i.Z.getChannel(l.Z.getChannelId());
          return (
            null != e && !e.isManaged() && o.S.dispatch(r.CkL.UPLOAD_FILE), !1
          );
        },
      };
    },
    188051: function (e, n, t) {
      t.d(n, {
        w: function () {
          return o;
        },
      });
      var i = t(481060),
        l = t(423932);
      let o = {
        binds: ["mod+alt+shift+w"],
        comboKeysBindGlobal: !0,
        action: () => ((0, l.Z)(i.closeAllModals), !1),
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
          return E;
        },
      });
      var i = t(857595),
        l = t(607070),
        o = t(981631);
      function r(e) {
        return o.yqN.ZOOM_SCALES[
          Math.max(
            0,
            Math.min(
              o.yqN.ZOOM_SCALES.indexOf(l.Z.zoom) + e,
              o.yqN.ZOOM_SCALES.length - 1,
            ),
          )
        ];
      }
      let E = {
          binds: ["mod+plus"],
          comboKeysBindGlobal: !0,
          action: () => ((0, i.cq)(r(1)), !1),
        },
        a = {
          binds: ["mod+minus"],
          comboKeysBindGlobal: !0,
          action: () => ((0, i.cq)(r(-1)), !1),
        },
        u = {
          binds: ["mod+0"],
          comboKeysBindGlobal: !0,
          action: () => ((0, i.cq)(o.yqN.ZOOM_DEFAULT), !1),
        };
      n.ZP = 12633 == t.j ? { ZOOM_IN: E, ZOOM_OUT: a, ZOOM_RESET: u } : null;
    },
    612226: function (e, n, t) {
      t.d(n, {
        Q2: function () {
          return i;
        },
        Rv: function () {
          return X;
        },
        U6: function () {
          return Y;
        },
        UD: function () {
          return w;
        },
        oT: function () {
          return x;
        },
      }),
        t(411104),
        t(653041);
      var i,
        l,
        o = t(346610),
        r = t(2818),
        E = t(186070),
        a = t(185514),
        u = t(395878),
        s = t(321697),
        d = t(775774),
        _ = t(570408),
        c = t(438846),
        C = t(360038),
        I = t(175724),
        A = t(705371),
        S = t(138976),
        T = t(296805),
        L = t(561716),
        N = t(239748),
        O = t(337482),
        g = t(679080),
        h = t(777019),
        D = t(523147),
        R = t(400332),
        f = t(510761),
        p = t(189509),
        P = t(673553),
        Z = t(280492),
        G = t(746887),
        M = t(861007),
        b = t(89028),
        U = t(300644),
        H = t(721383),
        m = t(207234),
        k = t(997292),
        K = t(743810),
        v = t(620212),
        B = t(188051),
        y = t(547420),
        V = t(981631),
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
          let n = x[e];
          if (null == n)
            throw Error("getBindsFor(...): No bind for ".concat(n));
          return n.binds[0];
        });
      }
      ((l = i || (i = {})).NAVIGATION = "NAVIGATION"),
        (l.CHAT = "CHAT"),
        (l.VOICE_AND_VIDEO = "VOICE_AND_VIDEO"),
        (l.MISCELLANEOUS = "MISCELLANEOUS"),
        (l.MESSAGE = "MESSAGE"),
        (l.DND = "DND");
      let x = {
        [V.EkH.SERVER_NEXT]: f.nq,
        [V.EkH.SERVER_PREV]: f.X3,
        [V.EkH.CHANNEL_NEXT]: a.tQ,
        [V.EkH.CHANNEL_PREV]: a.x5,
        [V.EkH.NAVIGATE_BACK]: a.Nx,
        [V.EkH.NAVIGATE_FORWARD]: a.On,
        [V.EkH.UNREAD_NEXT]: K.pd,
        [V.EkH.UNREAD_PREV]: K.wk,
        [V.EkH.MENTION_CHANNEL_NEXT]: K.Nv,
        [V.EkH.MENTION_CHANNEL_PREV]: K.uX,
        [V.EkH.TOGGLE_PREVIOUS_GUILD]: a.$c,
        [V.EkH.JUMP_TO_GUILD]: C.u,
        [V.EkH.SUBMIT]: p.z,
        [V.EkH.TEXTAREA_FOCUS]: P.U,
        [V.EkH.MARK_CHANNEL_READ]: I.f,
        [V.EkH.MARK_SERVER_READ]: A.l,
        [V.EkH.TOGGLE_CHANNEL_PINS]: M.u,
        [V.EkH.TOGGLE_FOR_LATER]: b.f,
        [V.EkH.TOGGLE_INBOX]: m.a,
        [V.EkH.MARK_TOP_INBOX_CHANNEL_READ]: m.M,
        [V.EkH.TOGGLE_USERS]: k.r,
        [V.EkH.TOGGLE_HELP]: U.O,
        [V.EkH.VIBE_WITH_WUMPUS]: B.w,
        [V.EkH.TOGGLE_MUTE]: Z.iN,
        [V.EkH.TOGGLE_DEAFEN]: Z.oV,
        [V.EkH.TOGGLE_CATEGORY_COLLAPSED]: G.u,
        [V.EkH.SEARCH_SOUNDBOARD]: D.Z,
        [V.EkH.SCROLL_UP]: O.B2,
        [V.EkH.SCROLL_DOWN]: O.gN,
        [V.EkH.QUICKSWITCHER_SHOW]: L.$,
        [V.EkH.CREATE_DM_GROUP]: u.K,
        [V.EkH.SEARCH_EMOJIS]: g.S,
        [V.EkH.SEARCH_GIFS]: h.O,
        [V.EkH.SEARCH_STICKERS]: R.U,
        [V.EkH.TOGGLE_HOTKEYS]: H._,
        [V.EkH.JUMP_TO_FIRST_UNREAD]: S.O,
        [V.EkH.CREATE_GUILD]: s.r,
        [V.EkH.UPLOAD_FILE]: v.U,
        [V.EkH.RETURN_TO_AUDIO_CHANNEL]: N.F,
        [V.EkH.CALL_ACCEPT]: E.IL,
        [V.EkH.CALL_START]: E.FI,
        [V.EkH.FOCUS_SEARCH]: _.I,
        [V.EkH.JUMP_TO_CURRENT_CALL]: c.K,
        [V.EkH.ZOOM_IN]: y.UF,
        [V.EkH.ZOOM_OUT]: y.RC,
        [V.EkH.ZOOM_RESET]: y.MY,
        [V.EkH.OPEN_APP_DIRECTORY]: T.T,
        [V.EkH.BROWSER_DEVTOOLS]: d.p,
      };
      function X() {
        let e = [
          {
            description:
              F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_NAVIGATE_SERVERS,
            binds: W(V.EkH.SERVER_PREV, V.EkH.SERVER_NEXT),
            group: "NAVIGATION",
          },
          {
            description:
              F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_NAVIGATE_CHANNELS,
            binds: W(V.EkH.CHANNEL_PREV, V.EkH.CHANNEL_NEXT),
            group: "NAVIGATION",
          },
          {
            description:
              F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_NAVIGATE_BACK_FORWARD,
            binds: W(V.EkH.NAVIGATE_BACK, V.EkH.NAVIGATE_FORWARD),
            group: "NAVIGATION",
          },
          {
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_UNREAD_CHANNELS,
            binds: W(V.EkH.UNREAD_PREV, V.EkH.UNREAD_NEXT),
            group: "NAVIGATION",
          },
          {
            description:
              F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_UNREAD_MENTION_CHANNELS,
            binds: W(V.EkH.MENTION_CHANNEL_PREV, V.EkH.MENTION_CHANNEL_NEXT),
            group: "NAVIGATION",
          },
          {
            description:
              F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_NAVIGATE_TO_CALL,
            binds: W(V.EkH.JUMP_TO_CURRENT_CALL),
            group: "NAVIGATION",
          },
          {
            description:
              F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_PREVIOUS_GUILD,
            binds: W(V.EkH.TOGGLE_PREVIOUS_GUILD),
            group: "NAVIGATION",
          },
          {
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_QUICKSWITCHER,
            binds: W(V.EkH.QUICKSWITCHER_SHOW),
            group: "NAVIGATION",
          },
          {
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_CREATE_GUILD,
            binds: W(V.EkH.CREATE_GUILD),
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
            binds: W(V.EkH.MARK_SERVER_READ),
            group: "CHAT",
          },
          {
            description:
              F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_MARK_CHANNEL_READ,
            binds: W(V.EkH.MARK_CHANNEL_READ),
            group: "CHAT",
          },
          {
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_CREATE_DM_GROUP,
            binds: W(V.EkH.CREATE_DM_GROUP),
            group: "CHAT",
          },
          {
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_PINS,
            binds: W(V.EkH.TOGGLE_CHANNEL_PINS),
            group: "CHAT",
          },
          {
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_INBOX,
            binds: W(V.EkH.TOGGLE_INBOX),
            group: "CHAT",
          },
          {
            description:
              F.Z.Messages
                .KEYBIND_DESCRIPTION_MODAL_MARK_TOP_INBOX_CHANNEL_READ,
            binds: W(V.EkH.MARK_TOP_INBOX_CHANNEL_READ),
            group: "CHAT",
          },
          {
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_USERS,
            binds: W(V.EkH.TOGGLE_USERS),
            group: "CHAT",
          },
          {
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_SEARCH_EMOJIS,
            binds: W(V.EkH.SEARCH_EMOJIS),
            group: "CHAT",
          },
          {
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_SEARCH_GIFS,
            binds: W(V.EkH.SEARCH_GIFS),
            group: "CHAT",
          },
          {
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_SEARCH_STICKERS,
            binds: W(V.EkH.SEARCH_STICKERS),
            group: "CHAT",
          },
          {
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_SCROLL_CHAT,
            binds: W(V.EkH.SCROLL_UP, V.EkH.SCROLL_DOWN),
            group: "CHAT",
          },
          {
            description:
              F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_JUMP_TO_FIRST_UNREAD,
            binds: W(V.EkH.JUMP_TO_FIRST_UNREAD),
            group: "CHAT",
          },
          {
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_FOCUS_TEXT_AREA,
            binds: W(V.EkH.TEXTAREA_FOCUS),
            group: "CHAT",
          },
          {
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_UPLOAD_FILE,
            binds: W(V.EkH.UPLOAD_FILE),
            group: "CHAT",
            groupEnd: !0,
          },
          {
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_MUTE,
            binds: W(V.EkH.TOGGLE_MUTE),
            group: "VOICE_AND_VIDEO",
          },
          {
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_DEAFEN,
            binds: W(V.EkH.TOGGLE_DEAFEN),
            group: "VOICE_AND_VIDEO",
          },
          {
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_CALL_ACCEPT,
            binds: W(V.EkH.CALL_ACCEPT),
            group: "VOICE_AND_VIDEO",
          },
          {
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_CALL_DECLINE,
            binds: W(V.EkH.MARK_CHANNEL_READ),
            group: "VOICE_AND_VIDEO",
          },
          {
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_CALL_START,
            binds: W(V.EkH.CALL_START),
            group: "VOICE_AND_VIDEO",
            groupEnd: !0,
          },
          {
            description:
              F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_SEARCH_SOUNDBOARD,
            binds: W(V.EkH.SEARCH_SOUNDBOARD),
            group: "VOICE_AND_VIDEO",
          },
          {
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_HELP,
            binds: W(V.EkH.TOGGLE_HELP),
            group: "MISCELLANEOUS",
          },
          {
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_SEARCH,
            binds: W(V.EkH.FOCUS_SEARCH),
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
            binds: W(V.EkH.VIBE_WITH_WUMPUS),
            group: "MISCELLANEOUS",
          },
        ];
        (0, o.WT)({ location: "keybinds" }, { autoTrackExposure: !1 })
          .canForwardMessages &&
          e.push({
            description: F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_FORWARD_MESSAGE,
            binds: ["f"],
            group: "MESSAGE",
          });
        let { enabled: n, inInbox: t } = r.Z.getCurrentConfig(
          { location: "keybinds" },
          { autoTrackExposure: !1 },
        );
        return (
          n &&
            !t &&
            e.push({
              description:
                F.Z.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_FOR_LATER,
              binds: W(V.EkH.TOGGLE_FOR_LATER),
              group: "CHAT",
            }),
          e
        );
      }
      n.ZP = 12633 == t.j ? x : null;
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
        l = t(931261),
        o = t(355298),
        r = t(333984),
        E = t(905423),
        a = t(695346),
        u = t(283595),
        s = t(923834),
        d = t(55589),
        _ = t(823379),
        c = t(475468),
        C = t(981631),
        I = t(176505);
      let A = () => {
        let e =
          o.Z.getMessageRequestsCount() > 0 || r.Z.getSpamChannelsCount() > 0;
        return [
          C.Z5c.FRIENDS,
          u.Z.hasLibraryApplication() && !a.bm.getSetting()
            ? C.Z5c.APPLICATION_LIBRARY
            : null,
          C.Z5c.APPLICATION_STORE,
          e ? C.Z5c.MESSAGE_REQUESTS : null,
          C.Z5c.COLLECTIBLES_SHOP,
          a.Ex.getSetting() ? C.Z5c.FAMILY_CENTER : null,
        ].filter(_.lm);
      };
      function S(e, n) {
        (0, c.K)(e, n);
      }
      function T() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          n = E.Z.getState().guildId;
        null == n
          ? !(function (e) {
              var n, t, i;
              let { channelId: l, path: o, basePath: r } = E.Z.getState(),
                a = d.Z.getPrivateChannelIds(),
                u = __OVERLAY__ ? a : [...A(), ...a];
              let _ =
                (null == l
                  ? ((n = null != o ? o : r),
                    A().findIndex((e) => n.startsWith(e)))
                  : null != l
                    ? u.indexOf(l)
                    : 0) + e;
              _ >= u.length ? (_ = 0) : _ < 0 && (_ = u.length - 1);
              let I = u[_];
              if (A().includes(I))
                !(function (e) {
                  let n = s.Z.getCurrentRoute();
                  e === C.Z5c.APPLICATION_STORE && null != n
                    ? (0, c.z)(n)
                    : (0, c.z)(e);
                })(I);
              else {
                (t = C.ME), (i = I), (0, c.K)(t, i);
              }
            })(e)
          : !(function (e, n) {
              var t, o, r, a;
              let u = E.Z.getState().channelId,
                s = (0, i.Z)(n, { withCurrentVoiceChannel: !0 }).map(
                  (e) => e.id,
                );
              (0, l.s)(n) && s.unshift(I.oC.GUILD_HOME);
              let d =
                ((t = (null != u ? s.indexOf(u) : -1) + e),
                (o = s.length),
                t < 0 ? o - 1 : t >= o ? 0 : t);
              (r = n), (a = s[d]), (0, c.K)(r, a);
            })(e, n);
      }
    },
    452913: function (e, n, t) {
      var i = t(392711),
        l = t.n(i),
        o = t(853856),
        r = t(706590),
        E = t(905423),
        a = t(592125),
        u = t(496675),
        s = t(944486),
        d = t(771845),
        _ = t(774343),
        c = t(475468),
        C = t(981631);
      n.Z = l().throttle(function () {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          n = d.ZP.getFlattenedGuildIds(),
          t = (function (e) {
            let n = E.Z.getState().guildId;
            if (null == n) return -2;
            if (n === C.I_8) return -1;
            let t = e.indexOf(n);
            return -1 === t ? -2 : t;
          })(n);
        if (
          (-1 === (t += e) && !(0, r.z)(o.Z, a.Z, u.Z) && (t += e),
          -3 === t && (t = n.length - 1),
          t >= n.length || -2 === t)
        ) {
          (0, c.z)(_.Z.getHomeLink());
          return;
        }
        let i = -1 === t ? C.I_8 : n[t],
          l = s.Z.getChannelId(i);
        (0, c.K)(i, l === i ? null : l, !1);
      }, C.aZC);
    },
    350483: function (e, n, t) {
      t(47120);
      var i = t(735250);
      t(470079);
      var l = t(392711),
        o = t.n(l),
        r = t(481060),
        E = t(718528),
        a = t(905423),
        u = t(984933),
        s = t(914010),
        d = t(771845),
        _ = t(55589),
        c = t(585483),
        C = t(475468),
        I = t(981631),
        A = t(490897);
      function S(e, n) {
        var t, i;
        return [
          { resourceId: e, type: A.W.GUILD_EVENT },
          ...((t = e),
          (i = n),
          t === I.ME
            ? _.Z.getPrivateChannelIds()
            : (0, E.Z)(t, {
                withVoiceChannels: i,
                withCurrentVoiceChannel: !0,
              }).map((e) => e.id)),
        ];
      }
      n.Z = o().throttle(function (e, n) {
        var l, o;
        let E,
          {
            channelPredicate: _ = () => !0,
            guildPredicate: A = () => !0,
            guildFeaturePredicate: T = () => !1,
            ensureChatIsVisible: L = () => !1,
            withVoiceChannels: N = !1,
          } = n,
          O = null !== (l = a.Z.getState().guildId) && void 0 !== l ? l : I.ME,
          g = a.Z.getState().channelId,
          h = (function (e, n) {
            let t = [I.ME, ...d.ZP.getFlattenedGuildIds()],
              i = t.indexOf(e);
            return n > 0
              ? t.slice(i).concat(t.slice(0, i), e)
              : (t.splice(i, 0, e), t.slice(i + 1).concat(t.slice(0, i + 1)));
          })(O, e),
          D = e > 0 ? 0 : h.length - 1,
          R = S(O, N),
          f = R.indexOf(g) + e;
        for (; null != O && "" !== O; ) {
          if (((E = R[f]), A(O)))
            for (; null != E && "" !== E; ) {
              if ("string" == typeof E) {
                if (_(O, E)) return (0, C.K)(O, E, !1, L(O, E));
              } else if ("object" == typeof E && T(E.resourceId, E.type))
                return (
                  O !== s.Z.getGuildId() &&
                    (0, C.K)(
                      O,
                      null === (o = u.ZP.getDefaultChannel(O)) || void 0 === o
                        ? void 0
                        : o.id,
                    ),
                  (0, r.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([
                      t.e("18543"),
                      t.e("53115"),
                      t.e("22347"),
                      t.e("56236"),
                      t.e("76351"),
                    ]).then(t.bind(t, 17671));
                    return (n) => (0, i.jsx)(e, { ...n, guildId: O });
                  })
                );
              (f += e), (E = R[f]);
            }
          if (((D += e), null == (O = h[D]) || "" === O)) break;
          (R = S(O, N)), (f = e < 0 ? R.length - 1 : 0);
        }
        c.S.dispatch(I.CkL.SHAKE_APP, { duration: 200, intensity: 2 });
      }, I.aZC);
    },
    475468: function (e, n, t) {
      t.d(n, {
        K: function () {
          return a;
        },
        z: function () {
          return u;
        },
      });
      var i = t(481060),
        l = t(475179),
        o = t(925549),
        r = t(905423),
        E = t(981631);
      function a(e, n) {
        let t =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
          a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!(0, i.hasAnyModalOpen)())
          t && o.Z.channelListScrollTo(e, n),
            a && null != n && l.Z.updateChatOpen(n, !0),
            r.Z.getState().updatePath(E.Z5c.CHANNEL(e, n));
      }
      function u(e) {
        if (!(0, i.hasAnyModalOpen)()) r.Z.getState().updatePath(e);
      }
    },
    718528: function (e, n, t) {
      t.d(n, {
        T: function () {
          return C;
        },
        Z: function () {
          return c;
        },
      }),
        t(653041);
      var i = t(470079),
        l = t(442837),
        o = t(734307),
        r = t(854444),
        E = t(131704),
        a = t(680089),
        u = t(888369),
        s = t(944486),
        d = t(981631),
        _ = t(647086);
      function c(e) {
        let { withVoiceChannels: n = !1, withCurrentVoiceChannel: t = !1 } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          i = arguments.length > 2 ? arguments[2] : void 0;
        return I(
          e === _._ || e === d.I_8
            ? (0, r.t)()
            : o.Z.getGuildWithoutChangingGuildActionRows(e).guildChannels,
          {
            currentVoiceChannelId: s.Z.getVoiceChannelId(),
            selectedChannelId: s.Z.getChannelId(),
          },
          { withVoiceChannels: n, withCurrentVoiceChannel: t },
          i,
        );
      }
      function C(e, n, t) {
        let { withVoiceChannels: o = !1, withCurrentVoiceChannel: r = !1 } =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          E = arguments.length > 4 ? arguments[4] : void 0,
          d = (0, l.e7)([u.default], () => u.default.getGuildChangeSentinel(e)),
          _ = (0, l.e7)([a.Z], () => a.Z.version),
          { currentVoiceChannelId: c, selectedChannelId: C } = (0, l.cj)(
            [s.Z],
            () => ({
              currentVoiceChannelId: s.Z.getVoiceChannelId(),
              selectedChannelId: s.Z.getChannelId(),
            }),
          );
        return (0, i.useMemo)(
          () =>
            I(
              n,
              { currentVoiceChannelId: c, selectedChannelId: C },
              { withVoiceChannels: o, withCurrentVoiceChannel: r },
              E,
            ).map((e) => e.id),
          [n, t, d, _],
        );
      }
      function I(e, n) {
        let { currentVoiceChannelId: t, selectedChannelId: i } = n,
          { withVoiceChannels: l, withCurrentVoiceChannel: o } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = arguments.length > 3 ? arguments[3] : void 0,
          a = [];
        return (
          e.forEachShownChannel((e) => {
            ((0, E.r8)(e.type) ||
              (l && (0, E.bw)(e.type)) ||
              (o && (e.id === t || e.id === i))) &&
              a.push(e);
          }, r),
          a
        );
      }
    },
    675999: function (e, n, t) {
      var i, l, o, r;
      t.d(n, {
        PU: function () {
          return E;
        },
        _m: function () {
          return i;
        },
        lr: function () {
          return l;
        },
      }),
        ((o = i || (i = {})).GUILD_TEMPLATES = "guild-templates"),
        (o.CUSTOMIZE_GUILD = "customize-guild"),
        (o.CHANNEL_PROMPT = "channel-prompt"),
        (o.JOIN_GUILD = "join-guild"),
        (o.CREATION_INTENT = "creation-intent"),
        ((r = l || (l = {})).FRIENDS = "FRIENDS"),
        (r.COMMUNITY = "COMMUNITY"),
        (r.CLAN = "CLAN");
      let E = "create-guild";
    },
    734307: function (e, n, t) {
      t(47120);
      var i,
        l,
        o,
        r,
        E = t(392711),
        a = t.n(E),
        u = t(442837),
        s = t(570140),
        d = t(317381),
        _ = t(430198),
        c = t(924301),
        C = t(601070),
        I = t(569471),
        A = t(581883),
        S = t(314897),
        T = t(680089),
        L = t(592125),
        N = t(58468),
        O = t(77498),
        g = t(496675),
        h = t(306680),
        D = t(944486),
        R = t(9156),
        f = t(823379),
        p = t(709054),
        P = t(540126),
        Z = t(526761);
      let G = null,
        M = null,
        b = new P.ZP();
      function U() {
        let e = D.Z.getChannelId(),
          n = D.Z.getVoiceChannelId();
        return (G = e), (M = n), b.clear();
      }
      function H(e) {
        let {
          guild: { id: n },
        } = e;
        return b.clearGuildId(n);
      }
      function m(e) {
        let {
          channel: { guild_id: n },
        } = e;
        return b.clearGuildId(n);
      }
      function k(e) {
        let { guildId: n } = e;
        return b.clearGuildId(n);
      }
      function K(e) {
        let { channelId: n } = e;
        return b.nonPositionalChannelIdUpdate(n);
      }
      function v() {
        return null != G && b.nonPositionalChannelIdUpdate(G);
      }
      function B(e) {
        let { channel: n } = e;
        return b.nonPositionalChannelIdUpdate(n.id);
      }
      function y(e) {
        let { id: n } = e;
        return b.nonPositionalChannelIdUpdate(n);
      }
      function V() {
        let e = D.Z.getChannelId(),
          n = D.Z.getVoiceChannelId(),
          t = G !== e || M !== n;
        return (
          !!t &&
          (a()([G, M, e, n])
            .uniq()
            .forEach((e) => {
              null != e && b.nonPositionalChannelIdUpdate(e) && (t = !0);
            }),
          (G = e),
          (M = n),
          !0)
        );
      }
      function F(e) {
        let { id: n } = e,
          t = L.Z.getChannel(n);
        return null == t ? b.clearGuildId(n) : b.clearGuildId(t.guild_id);
      }
      function w(e) {
        let { guildId: n } = e;
        return b.clearGuildId(n);
      }
      function Y() {
        return b.updateSubtitles();
      }
      function W(e) {
        let { guildScheduledEvent: n } = e;
        return b.updateSubtitles(n.guild_id);
      }
      class x extends (i = u.ZP.Store) {
        initialize() {
          this.waitFor(
            C.Z,
            S.default,
            T.Z,
            L.Z,
            N.Z,
            d.ZP,
            O.Z,
            _.Z,
            c.ZP,
            I.Z,
            g.Z,
            h.ZP,
            D.Z,
            R.ZP,
            A.Z,
          );
        }
        getGuild(e, n) {
          var t, i;
          let l = b.getGuild(
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
          return { guildChannelsVersion: l.version, guildChannels: l };
        }
        getGuildWithoutChangingGuildActionRows(e) {
          let n = b.getGuildChannelRowsOnly(e);
          return { guildChannelsVersion: n.version, guildChannels: n };
        }
        recentsChannelCount(e) {
          if (null == e) return 0;
          let n = b.getGuildChannelRowsOnly(e);
          return n
            .getCategoryFromSection(n.recentsSectionNumber)
            .getShownChannelIds().length;
        }
      }
      (r = "ChannelListStore"),
        (o = "displayName") in (l = x)
          ? Object.defineProperty(l, o, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (l[o] = r),
        (n.Z = new x(s.Z, {
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
                .filter(f.lm)
                .uniq()
                .forEach((e) => {
                  b.clearGuildId(e) && (t = !0);
                }),
              t
            );
          },
          BULK_CLEAR_RECENTS: k,
          CACHE_LOADED_LAZY: U,
          CATEGORY_COLLAPSE_ALL: k,
          CATEGORY_COLLAPSE: F,
          CATEGORY_EXPAND_ALL: k,
          CATEGORY_EXPAND: F,
          CHANNEL_ACK: K,
          CHANNEL_COLLAPSE: function (e) {
            var n;
            let { channelId: t } = e;
            return b.clearGuildId(
              null === (n = L.Z.getChannel(t)) || void 0 === n
                ? void 0
                : n.guild_id,
            );
          },
          CHANNEL_CREATE: m,
          CHANNEL_DELETE: m,
          CHANNEL_LOCAL_ACK: K,
          CHANNEL_MUTE_EXPIRED: k,
          CHANNEL_RTC_UPDATE_CHAT_OPEN: K,
          CHANNEL_SELECT: V,
          CHANNEL_STATUSES: function (e) {
            return b.clearGuildId(e.guildId);
          },
          CHANNEL_UPDATES: function (e) {
            let { channels: n } = e,
              t = !1;
            return (
              a()(n)
                .map((e) => e.guild_id)
                .uniq()
                .forEach((e) => {
                  b.clearGuildId(e) && (t = !0);
                }),
              t
            );
          },
          CONNECTION_OPEN_SUPPLEMENTAL: Y,
          CONNECTION_OPEN: U,
          CURRENT_USER_UPDATE: U,
          DECAY_READ_STATES: U,
          DEV_TOOLS_DESIGN_TOGGLE_SET: U,
          DISABLE_AUTOMATIC_ACK: K,
          DISMISS_FAVORITE_SUGGESTION: function (e) {
            let { channelId: n } = e;
            return b.nonPositionalChannelIdUpdate(n);
          },
          DRAWER_CLOSE: v,
          DRAWER_OPEN: v,
          EMBEDDED_ACTIVITY_UPDATE_V2: function (e) {
            let { location: n } = e;
            return b.updateSubtitles(n.guild_id, n.channel_id);
          },
          EMBEDDED_ACTIVITY_LAUNCH_START: function (e) {
            Y();
          },
          EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: Y,
          ENABLE_AUTOMATIC_ACK: K,
          FETCH_GUILD_EVENTS_FOR_GUILD: function (e) {
            let { guildId: n } = e;
            return b.updateSubtitles(n);
          },
          GAMES_DATABASE_FETCH_FAIL: Y,
          GAMES_DATABASE_FETCH: Y,
          GAMES_DATABASE_UPDATE: Y,
          GUILD_APPLICATIONS_FETCH_SUCCESS: Y,
          GUILD_CREATE: H,
          GUILD_DELETE: H,
          GUILD_MEMBER_UPDATE: function (e) {
            let { guildId: n, user: t } = e;
            return S.default.getId() === t.id && b.clearGuildId(n);
          },
          GUILD_MUTE_EXPIRED: k,
          GUILD_ROLE_CREATE: k,
          GUILD_ROLE_DELETE: k,
          GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: k,
          GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS: k,
          GUILD_ROLE_UPDATE: k,
          GUILD_SCHEDULED_EVENT_CREATE: W,
          GUILD_SCHEDULED_EVENT_DELETE: W,
          GUILD_SCHEDULED_EVENT_UPDATE: W,
          GUILD_TOGGLE_COLLAPSE_MUTED: k,
          GUILD_UPDATE: H,
          IMPERSONATE_STOP: k,
          IMPERSONATE_UPDATE: k,
          LOAD_CHANNELS: function (e) {
            e.channels.forEach((e) => {
              let { guildId: n } = e;
              return b.clearGuildId(n);
            });
          },
          LOAD_MESSAGES_SUCCESS: K,
          MESSAGE_ACK: K,
          MESSAGE_CREATE: function (e) {
            let { channelId: n } = e;
            return b.nonPositionalChannelIdUpdate(n);
          },
          MESSAGE_DELETE_BULK: K,
          MESSAGE_DELETE: K,
          NOTIFICATION_SETTINGS_UPDATE: U,
          OVERLAY_INITIALIZE: U,
          PASSIVE_UPDATE_V2: function (e) {
            return b.clearGuildId(e.guildId);
          },
          RECOMPUTE_READ_STATES: U,
          RESORT_THREADS: K,
          SET_RECENTLY_ACTIVE_COLLAPSED: U,
          THREAD_CREATE: B,
          THREAD_DELETE: function (e) {
            let { channel: n } = e;
            return b.nonPositionalChannelUpdate(n);
          },
          THREAD_LIST_SYNC: k,
          THREAD_MEMBER_UPDATE: y,
          THREAD_MEMBERS_UPDATE: y,
          THREAD_UPDATE: B,
          TRY_ACK: K,
          UPDATE_CHANNEL_DIMENSIONS: K,
          UPDATE_CHANNEL_LIST_SUBTITLES: function (e) {
            let { guildId: n } = e;
            b.updateSubtitles(n);
          },
          USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: k,
          USER_GUILD_SETTINGS_CHANNEL_UPDATE: k,
          USER_GUILD_SETTINGS_FULL_UPDATE: function (e) {
            let { userGuildSettings: n } = e;
            n.forEach((e) => {
              let { guild_id: n } = e;
              return b.clearGuildId(n);
            });
          },
          USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: k,
          USER_GUILD_SETTINGS_GUILD_UPDATE: k,
          USER_SETTINGS_PROTO_UPDATE: function (e) {
            var n;
            let { settings: t } = e;
            if (t.type !== Z.yP.PRELOADED_USER_SETTINGS) return !1;
            let i =
                null === (n = t.proto.guilds) || void 0 === n
                  ? void 0
                  : n.guilds,
              l = !1;
            return (
              null != i &&
                p.default.keys(i).forEach((e) => {
                  null != i[e].guildRecentsDismissedAt &&
                    (l = b.updateRecentsCategory(e) || l);
                }),
              l
            );
          },
          VOICE_CATEGORY_COLLAPSE: w,
          VOICE_CATEGORY_EXPAND: w,
          VOICE_CHANNEL_SELECT: V,
          VOICE_CHANNEL_STATUS_UPDATE: function (e) {
            return b.nonPositionalChannelIdUpdate(e.id);
          },
          VOICE_STATE_UPDATES: function (e) {
            let { voiceStates: n } = e,
              t = V(),
              i = new Set();
            for (let { channelId: e, oldChannelId: l } of n)
              null != l &&
                !i.has(l) &&
                (b.nonPositionalChannelIdUpdate(l) && (t = !0), i.add(l)),
                null != e &&
                  !i.has(e) &&
                  (b.nonPositionalChannelIdUpdate(e) && (t = !0), i.add(e));
            return t;
          },
          WINDOW_FOCUS: v,
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
        l = t(392711),
        o = t.n(l),
        r = t(524437),
        E = t(317381),
        a = t(853856),
        u = t(846787),
        s = t(924301),
        d = t(601070),
        _ = t(569471),
        c = t(131704),
        C = t(680089),
        I = t(592125),
        A = t(58468),
        S = t(77498),
        T = t(496675),
        L = t(306680),
        N = t(944486),
        O = t(9156),
        g = t(823379),
        h = t(540126),
        D = t(647086),
        R = t(231338);
      let f =
        12633 == t.j
          ? [E.ZP, a.Z, s.ZP, d.Z, _.Z, C.Z, I.Z, S.Z, T.Z, L.ZP, N.Z, O.ZP]
          : null;
      function p() {
        let [e, n] = i.useState(() => P());
        return (
          i.useEffect(() => {
            let e = o().throttle(() => n(P()), 100);
            return (
              f.forEach((n) => n.addChangeListener(e)),
              () => f.forEach((n) => n.removeChangeListener(e))
            );
          }, []),
          e
        );
      }
      function P() {
        let e = a.Z.getFavoriteChannels(),
          n = O.ZP.isGuildCollapsed(D._),
          t = N.Z.getChannelId(),
          i = I.Z.getChannel(t),
          l = N.Z.getVoiceChannelId(),
          E = [],
          s = {};
        for (let n in e) {
          let t = e[n],
            i = I.Z.getChannel(t.id);
          if (null == i || t.type === r.Dd.CATEGORY) continue;
          let l = (0, u.r)(e, t, i);
          if (null == t.parentId || !(t.parentId in e)) {
            E.push(l);
            continue;
          }
          !(t.parentId in s) && (s[t.parentId] = []), s[t.parentId].push(l);
        }
        function _(t, r) {
          let { isCollapsed: E, isMuted: a } = r;
          return o()(t)
            .map((t) => {
              var u;
              if (!t.isPrivate() && !T.Z.can(R.Pl.VIEW_CHANNEL, t)) return null;
              let s = null != i && (i.id === t.id || l === t.id),
                _ = null != i && i.isThread() && i.parent_id === t.id,
                C =
                  null !==
                    (u =
                      s || _ || !E
                        ? d.Z.getActiveJoinedRelevantThreadsForParent(
                            t.guild_id,
                            t.id,
                          )
                        : d.Z.getActiveJoinedUnreadThreadsForParent(
                            t.guild_id,
                            t.id,
                          )) && void 0 !== u
                    ? u
                    : {},
                I = (0, h.zR)(t, C, i, l, n),
                S = A.Z.isCollapsed(t.id),
                N = O.ZP.isChannelMuted(t.guild_id, t.id),
                g = {
                  id: t.id,
                  record: t,
                  category: r,
                  position: e[t.id].order,
                  threadIds: I,
                  threadCount: o().size(I),
                  isCollapsed: S,
                  isMuted: N,
                  isFirstVoiceChannel: !1,
                  subtitle: (0, h.Bz)(t, S, !1),
                };
              return s || _ || L.ZP.getMentionCount(t.id) > 0
                ? g
                : (n && N) ||
                    (E &&
                      (N ||
                        a ||
                        (0, c.vd)(t.type) ||
                        ((0, c.vc)(t.type) && !1 === L.ZP.hasUnread(t.id))))
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
        let S = null,
          f = {
            isMuted: !1,
            isCollapsed: !1,
            position: 0,
            getChannelRecords: () => E,
            getShownChannelIds: () => E.map((e) => e.id),
            getShownChannelAndThreadIds: () => E.map((e) => e.id),
            isEmpty: () => 0 === E.length,
            get channelList() {
              return null == S && (S = _(E, this)), S;
            },
          },
          p = o()(e)
            .values()
            .filter((e) => e.type === r.Dd.CATEGORY)
            .sortBy((e) => e.order)
            .map((e) => {
              var n;
              let { id: t, order: i } = e,
                l = a.Z.getCategoryRecord(t),
                o = null !== (n = s[t]) && void 0 !== n ? n : [],
                r = O.ZP.isChannelMuted(D._, t),
                E = C.Z.isCollapsed(t),
                u = null;
              return {
                isMuted: r,
                isCollapsed: E,
                record: l,
                id: t,
                position: i,
                getChannelRecords: () => o,
                getShownChannelIds: () => o.map((e) => e.id),
                getShownChannelAndThreadIds: () => o.map((e) => e.id),
                isEmpty: () => 0 === o.length,
                get channelList() {
                  return null == u && (u = _(o, this)), u;
                },
              };
            })
            .value(),
          P = { isEmpty: () => !0, getRows: () => [], getRow: () => null },
          Z = { isEmpty: () => !0, getRows: () => [], getRow: () => null };
        return {
          id: D._,
          hideMutedChannels: n,
          favoritesSectionNumber: 1,
          recentsSectionNumber: 2,
          voiceChannelsSectionNumber: -999,
          getSections() {
            let e = [];
            (e[h.Fq] = 0),
              (e[h.wZ] = 0),
              (e[h.p2] = 0),
              (e[h.PB] = 0),
              (e[h.wd] = f.channelList.length);
            for (let n = 0; n < p.length; n++)
              e[h.wF + n] = Math.max(1, p[n].channelList.length);
            return e;
          },
          isPlaceholderRow: (e, n) =>
            !(e < h.wF) && 0 === n && 0 === p[e - h.wF].channelList.length,
          getCategoryFromSection: (e) => (e === h.wd ? f : p[e - h.wF]),
          getNamedCategoryFromSection: (e) => p[e - h.wF],
          getChannelFromSectionRow(e, n) {
            let t = this.getCategoryFromSection(e);
            return null == t || null == t.channelList[n]
              ? null
              : { category: t, channel: t.channelList[n] };
          },
          getGuildActionSection: () => P,
          getChannelNoticeSection: () => Z,
          getFirstVoiceChannel: () => null,
          getSectionRowsFromChannel(e) {
            let n = [f, ...p];
            for (let t = 0; t < n.length; t++)
              for (let i = 0; i < n[t].channelList.length; i++)
                if (n[t].channelList[i].id === e)
                  return [{ section: t + h.wd, row: i }];
            return [];
          },
          forEachShownChannel(e) {
            for (let n of [f, ...p])
              for (let t of n.channelList)
                for (let n of (e(t.record), t.threadIds)) {
                  let t = I.Z.getChannel(n);
                  null != t && e(t);
                }
          },
          forEachChannel(e) {
            for (let n of [f, ...p]) for (let t of n.getChannelRecords()) e(t);
          },
          getSlicedChannels: (e) => [[], e, []],
          getChannels: () => [],
        };
      }
    },
    191980: function (e, n, t) {
      t.d(n, {
        $: function () {
          return l;
        },
        C: function () {
          return o;
        },
      });
      var i = t(570140);
      function l() {
        i.Z.dispatch({ type: "SHOW_KEYBOARD_SHORTCUTS" });
      }
      function o() {
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
    51596: function (e, n, t) {
      t.d(n, {
        $Z: function () {
          return P;
        },
        Cp: function () {
          return Z;
        },
        F_: function () {
          return R;
        },
        Se: function () {
          return b;
        },
        tF: function () {
          return M;
        },
        yC: function () {
          return G;
        },
      }),
        t(757143),
        t(47120);
      var i = t(570140),
        l = t(493683),
        o = t(475179),
        r = t(925549),
        E = t(287734),
        a = t(212819),
        u = t(336197),
        s = t(359110),
        d = t(769654),
        _ = t(131704),
        c = t(592125),
        C = t(283595),
        I = t(944486),
        A = t(914010),
        S = t(626135),
        T = t(777754),
        L = t(823385),
        N = t(981631),
        O = t(176505);
      let g = () => Promise.resolve();
      g = t(346329).playApplication;
      let h = Object.freeze({
          [a.xQ.USER]: a.h8.USER,
          [a.xQ.TEXT_CHANNEL]: a.h8.TEXT_CHANNEL,
          [a.xQ.VOICE_CHANNEL]: a.h8.VOICE_CHANNEL,
          [a.xQ.GUILD]: a.h8.GUILD,
          [a.xQ.APPLICATION]: a.h8.APPLICATION,
        }),
        D = new RegExp(
          "^"
            .concat(a.xQ.USER, "|")
            .concat(a.xQ.TEXT_CHANNEL, "|")
            .concat(a.xQ.VOICE_CHANNEL, "|\\")
            .concat(a.xQ.GUILD, "|\\")
            .concat(a.xQ.APPLICATION),
        );
      function R(e) {
        var n, t;
        let i;
        let [l, o] =
          ((i = null !== (t = h[(n = e).charAt(0)]) && void 0 !== t ? t : null),
          [n.replace(D, ""), i]);
        return { query: l, queryMode: o };
      }
      function f(e, n) {
        let {
            results: t,
            queryMode: i,
            query: l,
            maxQueryLength: o,
          } = L.Z.getProps(),
          r = A.Z.getGuildId(),
          E = I.Z.getChannelId(r),
          u = t[(0, a.gJ)(a.a8.DOWN, -1, t)],
          s = T.Z.isEmail(l),
          d = T.Z.isPhoneNumber(l),
          C = T.Z.isUserTagLike(l),
          N = null != E && (0, O.AB)(E),
          g = (e) =>
            null == e
              ? null
              : e.type === a.h8.IN_APP_NAVIGATION
                ? e.type + "_" + e.record.type
                : e.type,
          h = {
            current_channel_id: N ? void 0 : E,
            current_channel_static_route: N ? E : void 0,
            current_guild_id: r,
            query_mode: null != i ? i : "GENERAL",
            query_length: l.length,
            max_query_length: o,
            is_email_like: s,
            is_phone_like: d,
            is_username_like: C,
            query: s || d || C ? null : l,
            top_result_type: g(u),
            top_result_score: null != u ? u.score : null,
            num_results_total: L.Z.getResultTotals(),
            num_results_users: L.Z.getResultTotals(a.h8.USER),
            num_results_text_channels: L.Z.getResultTotals(a.h8.TEXT_CHANNEL),
            num_results_voice_channels: L.Z.getResultTotals(a.h8.VOICE_CHANNEL),
            num_results_guilds: L.Z.getResultTotals(a.h8.GUILD),
            num_results_group_dms: L.Z.getResultTotals(a.h8.GROUP_DM),
          };
        if (null != E) {
          let e = c.Z.getChannel(E);
          h.current_channel_type = null != e ? e.type : null;
        }
        if (null != n) {
          let { type: e, score: i, record: l } = n;
          switch (
            ((h.selected_type = g(n)),
            (h.selected_score = i),
            (h.selected_index = t.indexOf(n)),
            e)
          ) {
            case a.h8.GUILD:
              h.selected_guild_id = l.id;
              break;
            case a.h8.TEXT_CHANNEL:
            case a.h8.VOICE_CHANNEL:
              l instanceof _.Sf &&
                (h.selected_guild_id = null != l.guild_id ? l.guild_id : null),
                (h.selected_channel_id = l.id);
              break;
            case a.h8.GROUP_DM:
              h.selected_channel_id = l.id;
              break;
            case a.h8.USER:
              h.selected_user_id = l.id;
          }
        }
        S.default.track(e, h);
      }
      function p() {
        i.Z.dispatch({ type: "QUICKSWITCHER_HIDE" });
      }
      function P() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "KEYBIND",
          n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        !(function (e) {
          let n;
          if (L.Z.isOpen()) return;
          let t = A.Z.getGuildId(),
            i = I.Z.getChannelId(t);
          if (null != i) {
            let e = c.Z.getChannel(i);
            n = null != e ? e.type : null;
          }
          S.default.track(N.rMx.QUICKSWITCHER_OPENED, {
            source: e,
            current_guild_id: t,
            current_channel_id: i,
            current_channel_type: n,
          });
        })(e),
          i.Z.dispatch({ type: "QUICKSWITCHER_SHOW", ...R(n) });
      }
      function Z() {
        f(N.rMx.QUICKSWITCHER_CLOSED), p();
      }
      function G(e) {
        i.Z.dispatch({ type: "QUICKSWITCHER_SEARCH", ...R(e) });
      }
      function M(e) {
        i.Z.dispatch({ type: "QUICKSWITCHER_SELECT", selectedIndex: e });
      }
      function b(e) {
        let n,
          t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        p(), f(N.rMx.QUICKSWITCHER_RESULT_SELECTED, e);
        let { type: _, record: I } = e,
          A = { page: N.ZY5.QUICK_SWITCHER };
        switch (_) {
          case a.h8.GUILD:
            (0, d.X)(I.id, { navigationReplace: !0 });
            break;
          case a.h8.TEXT_CHANNEL:
            null != (n = c.Z.getChannel(I.id)) &&
              (0, s.Kh)(n.id, {
                state: { analyticsSource: A },
                navigationReplace: !0,
              });
            break;
          case a.h8.VOICE_CHANNEL:
            null != (n = c.Z.getChannel(I.id)) &&
              (t
                ? o.Z.updateChatOpen(I.id, !0)
                : E.default.selectVoiceChannel(I.id),
              (0, s.Kh)(n.id, {
                state: { analyticsSource: A },
                navigationReplace: !0,
              }));
            break;
          case a.h8.USER:
            l.Z.openPrivateChannel([I.id], !1, !1, "Quickswitcher"),
              r.Z.channelListScrollTo(N.ME, c.Z.getDMFromUserId(I.id));
            break;
          case a.h8.GROUP_DM:
            (0, s.Kh)(I.id, { navigationReplace: !0 }),
              r.Z.channelListScrollTo(N.ME, I.id);
            break;
          case a.h8.APPLICATION:
            let S = C.Z.getActiveLibraryApplication(I.id);
            g(I.id, S, {
              analyticsParams: {
                source: N.Sbl.QUICK_SWITCHER,
                location: N.Sbl.QUICK_SWITCHER,
              },
            });
            break;
          case a.h8.LINK:
            (0, u.Z)(I.path, { navigationReplace: !0 });
            break;
          case a.h8.IN_APP_NAVIGATION:
            (0, u.Z)(I.path, { navigationReplace: !0 });
        }
        i.Z.dispatch({ type: "QUICKSWITCHER_SWITCH_TO", result: e });
      }
    },
    423932: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return o;
        },
      });
      var i = t(735250);
      t(470079);
      var l = t(481060);
      function o(e) {
        (0, l.openModalLazy)(
          async () => {
            let { default: e } = await t.e("76815").then(t.bind(t, 336977));
            return (n) => (0, i.jsx)(e, { ...n });
          },
          { onCloseCallback: e, backdropStyle: l.BackdropStyles.BLUR },
        );
      }
    },
    896797: function (e, n, t) {
      var i,
        l = t(442837),
        o = t(433517),
        r = t(570140),
        E = t(981631);
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
        s = u,
        d = "LAST_VIEWED_PATH";
      class _ extends (i = l.ZP.PersistedStore) {
        initialize() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u;
          s = null != e ? e : u;
        }
        get defaultRoute() {
          return E.Z5c.ME;
        }
        get lastNonVoiceRoute() {
          var e;
          return null !== (e = s.lastViewedNonVoicePath) && void 0 !== e
            ? e
            : E.Z5c.ME;
        }
        get fallbackRoute() {
          return E.Z5c.ME;
        }
        getState() {
          return s;
        }
      }
      a(_, "displayName", "DefaultRouteStore"),
        a(_, "persistKey", "DefaultRouteStore"),
        a(_, "migrations", [
          () => {
            let e = o.K.get(d, null);
            return o.K.remove(d), { lastViewedPath: e };
          },
        ]),
        (n.Z = new _(r.Z, {
          SAVE_LAST_ROUTE: function (e) {
            let { path: n } = e;
            return (s.lastViewedPath = n), !0;
          },
          SAVE_LAST_NON_VOICE_ROUTE: function (e) {
            let { path: n } = e;
            return (s.lastViewedNonVoicePath = n), !0;
          },
        }));
    },
    923834: function (e, n, t) {
      t(411104);
      var i,
        l,
        o,
        r,
        E = t(442837),
        a = t(570140);
      let u = null;
      class s extends (i = E.ZP.Store) {
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
      (r = "ApplicationStoreLocationStore"),
        (o = "displayName") in (l = s)
          ? Object.defineProperty(l, o, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (l[o] = r),
        (n.Z = new s(a.Z, {
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
        l,
        o,
        r,
        E,
        a,
        u,
        s = t(442837),
        d = t(570140),
        _ = t(592125),
        c = t(896797),
        C = t(430824),
        I = t(944486),
        A = t(55589),
        S = t(981631);
      let T = (null !==
        (a =
          null === (E = window) || void 0 === E
            ? void 0
            : null === (r = E.location) || void 0 === r
              ? void 0
              : r.pathname) && void 0 !== a
        ? a
        : ""
      ).startsWith(S.Z5c.ACTIVITIES)
        ? S.Z5c.ACTIVITIES
        : null;
      function L(e) {
        let { link: n } = e;
        if (T === n) return !1;
        T = n;
      }
      class N extends (u = s.ZP.Store) {
        initialize() {
          this.waitFor(c.Z, A.Z, I.Z, C.Z, _.Z);
        }
        getHomeLink() {
          return null != T ? T : c.Z.fallbackRoute;
        }
      }
      (o = "AppViewStore"),
        (l = "displayName") in (i = N)
          ? Object.defineProperty(i, l, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (i[l] = o),
        (n.Z = new N(d.Z, {
          OVERLAY_INITIALIZE: function () {
            let e = A.Z.getPrivateChannelIds(),
              n = I.Z.getChannelId(S.ME);
            (null != n || null != e[0]) &&
              (T = S.Z5c.CHANNEL(S.ME, null != n ? n : e[0]));
          },
          APP_VIEW_SET_HOME_LINK: L,
          APPLICATION_STORE_LOCATION_CHANGE: function (e) {
            let { location: n } = e;
            L({ link: n.pathname, type: "APP_VIEW_SET_HOME_LINK" });
          },
          APPLICATION_STORE_RESET_NAVIGATION: function () {
            if (null == T || !T.startsWith(S.Z5c.APPLICATION_STORE)) return !1;
            T = S.Z5c.APPLICATION_STORE;
          },
          CHANNEL_SELECT: function (e) {
            let { guildId: n, channelId: t } = e;
            if (null == n && null != t) {
              let e = S.Z5c.CHANNEL(S.ME, t);
              if (e !== T) return (T = e), !0;
            }
            return !1;
          },
          CHANNEL_DELETE: function (e) {
            let { channel: n } = e;
            null == n.guild_id &&
              null != n.id &&
              null != T &&
              T === S.Z5c.CHANNEL(S.ME, n.id) &&
              (T = null);
          },
        }));
    },
  },
]);
//# sourceMappingURL=ba28fead58089dd1f0aa.js.map
