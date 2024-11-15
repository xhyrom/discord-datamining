"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["18101"],
  {
    816782: function (n, t, e) {
      var i = e(570140);
      t.Z = {
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
    186070: function (n, t, e) {
      e.d(t, {
        FI: function () {
          return r;
        },
        IL: function () {
          return o;
        },
      });
      var i = e(585483),
        l = e(981631);
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
          action(n) {
            if (i.S.hasSubscribers(l.CkL.CALL_START))
              return i.S.dispatch(l.CkL.CALL_START, n), !1;
          },
        };
    },
    185514: function (n, t, e) {
      e.d(t, {
        $c: function () {
          return _;
        },
        Nx: function () {
          return C;
        },
        On: function () {
          return A;
        },
        tQ: function () {
          return s;
        },
        x5: function () {
          return c;
        },
      });
      var i = e(14626),
        l = e(475468),
        o = e(703656),
        r = e(769654),
        u = e(944486),
        a = e(914010),
        d = e(358085),
        E = e(981631);
      let s = {
          binds: ["alt+down"],
          comboKeysBindGlobal: !0,
          action: () => ((0, i.Z)(), !1),
        },
        c = {
          binds: ["alt+up"],
          comboKeysBindGlobal: !0,
          action: () => ((0, i.Z)(-1), !1),
        },
        _ = {
          binds: ["mod+alt+right"],
          comboKeysBindGlobal: !0,
          action() {
            let n;
            if (null != a.Z.getGuildId()) n = E.ME;
            else {
              let t = a.Z.getLastSelectedGuildId();
              null != t && ((n = t), (0, l.K)(t, u.Z.getChannelId(t)));
            }
            return null != n && (0, r.X)(n), !1;
          },
        },
        C = {
          binds: (0, d.isMac)() ? ["mod+["] : ["alt+left"],
          comboKeysBindGlobal: !0,
          action: () => ((0, o.op)(), !1),
        },
        A = {
          binds: (0, d.isMac)() ? ["mod+]"] : ["alt+right"],
          comboKeysBindGlobal: !0,
          action: () => ((0, o.eH)(), !1),
        };
    },
    395878: function (n, t, e) {
      e.d(t, {
        K: function () {
          return u;
        },
      });
      var i = e(475468),
        l = e(914010),
        o = e(585483),
        r = e(981631);
      let u = {
        binds: ["mod+shift+t"],
        comboKeysBindGlobal: !0,
        action: () => (
          null != l.Z.getGuildId() && (0, i.K)(r.ME),
          o.S.safeDispatch(r.CkL.TOGGLE_DM_CREATE),
          !1
        ),
      };
    },
    321697: function (n, t, e) {
      e.d(t, {
        r: function () {
          return r;
        },
      });
      var i = e(481060),
        l = e(560067),
        o = e(675999);
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
    775774: function (n, t, e) {
      e.d(t, {
        p: function () {
          return l;
        },
      });
      var i = e(358085);
      let l = {
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
          return o;
        },
      });
      var i = e(585483),
        l = e(981631);
      let o = {
        binds: ["mod+f"],
        comboKeysBindGlobal: !0,
        action(n) {
          n.preventDefault(),
            n.stopPropagation(),
            i.S.dispatch(l.CkL.FOCUS_SEARCH, { prefillCurrentChannel: !0 });
        },
      };
    },
    438846: function (n, t, e) {
      e.d(t, {
        K: function () {
          return r;
        },
      });
      var i = e(475468),
        l = e(19780),
        o = e(981631);
      let r = {
        binds: ["mod+shift+alt+v"],
        comboKeysBindGlobal: !0,
        action(n) {
          n.preventDefault(), n.stopPropagation();
          let t = l.Z.getGuildId(),
            e = l.Z.getChannelId();
          return null != e && (0, i.K)(null != t ? t : o.ME, e), !1;
        },
      };
    },
    175724: function (n, t, e) {
      e.d(t, {
        f: function () {
          return R;
        },
      });
      var i = e(374470),
        l = e(475179),
        o = e(904245),
        r = e(45114),
        u = e(40851),
        a = e(358221),
        d = e(623292),
        E = e(807092),
        s = e(6025),
        c = e(897473),
        _ = e(913663),
        C = e(268350),
        A = e(433355),
        S = e(592125),
        I = e(703558),
        T = e(323873),
        L = e(375954),
        h = e(306680),
        g = e(944486),
        f = e(914010),
        p = e(574254),
        O = e(451478),
        N = e(585483),
        b = e(981631);
      let R = {
        binds: ["esc", "shift+pagedown"],
        comboKeysBindGlobal: !0,
        action(n) {
          if (O.Z.isElementFullScreen()) return !1;
          if (N.S.hasSubscribers(b.CkL.CALL_DECLINE))
            return N.S.dispatch(b.CkL.CALL_DECLINE), !1;
          if (p.Z.close()) return !1;
          if (N.S.hasSubscribers(b.CkL.MEDIA_MODAL_CLOSE))
            return N.S.dispatch(b.CkL.MEDIA_MODAL_CLOSE), !1;
          if ((0, i.k)(n.target)) {
            let t = (0, u.J5)(n.target);
            if (null == t ? void 0 : t.hasSubscribers(b.CkL.POPOUT_CLOSE))
              return t.dispatch(b.CkL.POPOUT_CLOSE), !1;
          }
          if (N.S.hasSubscribers(b.CkL.CLOSE_GIF_PICKER))
            return N.S.dispatch(b.CkL.CLOSE_GIF_PICKER), !1;
          if (N.S.hasSubscribers(b.CkL.MODAL_CLOSE))
            return N.S.dispatch(b.CkL.MODAL_CLOSE), !1;
          if (N.S.hasSubscribers(b.CkL.SEARCH_RESULTS_CLOSE))
            return N.S.dispatch(b.CkL.SEARCH_RESULTS_CLOSE), !1;
          let t = f.Z.getGuildId(),
            e = g.Z.getChannelId(t),
            o = S.Z.getChannel(e),
            r =
              A.ZP.getSection(e, null == o ? void 0 : o.isDM()) ===
              b.ULH.SIDEBAR_CHAT
                ? A.ZP.getSidebarState(e)
                : null,
            d =
              (null == r ? void 0 : r.type) === c.tI.VIEW_THREAD ||
              (null == r ? void 0 : r.type) === c.tI.VIEW_CHANNEL
                ? r.channelId
                : null;
          if (!1 === G(e) || !1 === G(d)) return !1;
          if (null != e && (null == r ? void 0 : r.type) === c.tI.CREATE_THREAD)
            return s.Z.closeChannelSidebar(e), !1;
          let E = Z(e),
            _ = Z(d);
          return null == e || E || _ || null == r
            ? null != e && !E && a.Z.getChatOpen(e)
              ? (l.Z.updateChatOpen(e, !1), !1)
              : (N.S.dispatch(b.CkL.SCROLLTO_PRESENT), !1)
            : (s.Z.closeChannelSidebar(e), !1);
        },
      };
      function G(n) {
        if (null != n) {
          if (T.Z.isEditingAny(n)) return o.Z.endEditMessage(n), !1;
          if (null != E.Z.getPendingReply(n)) return (0, d.A6)(n), !1;
          if (null != _.Z.getStickerPreview(n, I.d.ChannelMessage))
            return (0, C.qB)(n, I.d.ChannelMessage), !1;
        }
      }
      function Z(n) {
        if (null == n) return !1;
        let t = !1;
        return (
          L.Z.getMessages(n).hasMoreAfter &&
            (o.Z.jumpToPresent(n, b.AQB), (t = !0)),
          h.ZP.hasUnread(n) && ((0, r.In)(n), (t = !0)),
          (0, r.iV)(n),
          t
        );
      }
    },
    705371: function (n, t, e) {
      e.d(t, {
        l: function () {
          return s;
        },
      });
      var i = e(904245),
        l = e(181945),
        o = e(888369),
        r = e(375954),
        u = e(944486),
        a = e(914010),
        d = e(585483),
        E = e(981631);
      let s = {
        binds: ["shift+esc"],
        comboKeysBindGlobal: !0,
        action() {
          let n = a.Z.getGuildId();
          if (null == n || !o.default.getGuildHasUnreadIgnoreMuted(n)) return;
          (0, l.Z)([n]);
          let t = u.Z.getChannelId(n);
          if (null != t)
            r.Z.getMessages(t).hasMoreAfter
              ? i.Z.jumpToPresent(t, E.AQB)
              : d.S.dispatch(E.CkL.SCROLLTO_PRESENT);
        },
      };
    },
    138976: function (n, t, e) {
      e.d(t, {
        O: function () {
          return r;
        },
      });
      var i = e(904245),
        l = e(306680),
        o = e(944486);
      let r = {
        binds: ["shift+pageup"],
        comboKeysBindGlobal: !0,
        action() {
          let n = o.Z.getChannelId();
          if (null != n) {
            let t = l.ZP.ackMessageId(n);
            null != t &&
              l.ZP.getOldestUnreadTimestamp(n) > 0 &&
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
          return r;
        },
      });
      var i = e(132871),
        l = e(147890),
        o = e(914010);
      let r = {
        binds: ["mod+ctrl+a"],
        comboKeysBindGlobal: !0,
        action() {
          var n;
          let t = null !== (n = o.Z.getGuildId()) && void 0 !== n ? n : void 0;
          (0, l.goToAppDirectory)({
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
          return o;
        },
      });
      var i = e(51596),
        l = e(819640);
      let o = {
        binds: ["mod+k", "mod+t"],
        comboKeysBindGlobal: !0,
        action: () => (!l.Z.hasLayers() && (0, i.$Z)(), !1),
      };
    },
    239748: function (n, t, e) {
      e.d(t, {
        F: function () {
          return a;
        },
      });
      var i = e(925549),
        l = e(475468),
        o = e(19780),
        r = e(944486),
        u = e(981631);
      let a = {
        binds: ["mod+alt+left"],
        comboKeysBindGlobal: !0,
        action() {
          var n;
          if (!o.Z.isConnected()) return !1;
          let t = null !== (n = o.Z.getGuildId()) && void 0 !== n ? n : u.ME,
            e = r.Z.getChannelId(t);
          return (
            (0, l.K)(t, e), i.Z.channelListScrollTo(t, o.Z.getChannelId()), !1
          );
        },
      };
    },
    337482: function (n, t, e) {
      e.d(t, {
        B2: function () {
          return o;
        },
        gN: function () {
          return r;
        },
      });
      var i = e(585483),
        l = e(981631);
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
    679080: function (n, t, e) {
      e.d(t, {
        S: function () {
          return u;
        },
      });
      var i = e(130402),
        l = e(585483),
        o = e(981631),
        r = e(185923);
      let u = {
        binds: ["mod+e"],
        comboKeysBindGlobal: !0,
        action: () => (
          (0, i.x)(r.qR.SearchEmojiKeybindPressed),
          l.S.dispatchToLastSubscribed(o.CkL.TOGGLE_EMOJI_POPOUT),
          !1
        ),
      };
    },
    777019: function (n, t, e) {
      e.d(t, {
        O: function () {
          return o;
        },
      });
      var i = e(585483),
        l = e(981631);
      let o = {
        binds: ["mod+g"],
        comboKeysBindGlobal: !0,
        action: () => (
          i.S.dispatchToLastSubscribed(l.CkL.TOGGLE_GIF_PICKER), !1
        ),
      };
    },
    523147: function (n, t, e) {
      var i = e(585483),
        l = e(981631);
      t.Z = {
        binds: ["mod+shift+b"],
        comboKeysBindGlobal: !0,
        action: () => (i.S.dispatch(l.CkL.TOGGLE_SOUNDBOARD), !1),
      };
    },
    400332: function (n, t, e) {
      e.d(t, {
        U: function () {
          return o;
        },
      });
      var i = e(585483),
        l = e(981631);
      let o = {
        binds: ["mod+s"],
        comboKeysBindGlobal: !0,
        action: () => (
          i.S.dispatchToLastSubscribed(l.CkL.TOGGLE_STICKER_PICKER), !1
        ),
      };
    },
    510761: function (n, t, e) {
      e.d(t, {
        X3: function () {
          return o;
        },
        nq: function () {
          return l;
        },
      });
      var i = e(452913);
      let l = {
          binds: ["mod+alt+down", "mod+shift+]", "ctrl+tab"],
          comboKeysBindGlobal: !0,
          action: (n) => (
            n.preventDefault(), n.stopPropagation(), (0, i.Z)(), !1
          ),
        },
        o = {
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
          return r;
        },
      });
      var i = e(607070),
        l = e(585483),
        o = e(981631);
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
    673553: function (n, t, e) {
      e.d(t, {
        U: function () {
          return S;
        },
      }),
        e(47120);
      var i = e(610521),
        l = e(607070),
        o = e(819640),
        r = e(131951),
        u = e(19780),
        a = e(585483),
        d = e(5967),
        E = e(13140),
        s = e(981631);
      let c = new Set([
          "PageDown",
          "PageUp",
          "Home",
          "End",
          "ArrowUp",
          "ArrowDown",
          "ArrowLeft",
          "ArrowRight",
        ]),
        _ = new Set([
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
              null === (e = (0, d.uB)(n)) || void 0 === e
                ? void 0
                : e.activeElement;
            if (
              (0, d.VG)(S) ||
              i.fC.isActive() ||
              _.has(t) ||
              C.has(t) ||
              A.has(t)
            )
              return !1;
            let I = null != S && "BODY" === S.tagName;
            return (
              !(
                (l.Z.keyboardModeEnabled && !I && !/^[a-zA-Z0-9]$/.test(t)) ||
                a.S.hasSubscribers(s.CkL.MODAL_CLOSE) ||
                o.Z.hasLayers()
              ) &&
              ("Tab" === t &&
              a.S.hasSubscribers(s.CkL.TEXTAREA_FOCUS) &&
              null != document.querySelector('[data-can-focus="true"]')
                ? (n.preventDefault(), a.S.dispatch(s.CkL.TEXTAREA_FOCUS), !1)
                : !(
                    u.Z.isConnected() &&
                    r.Z.getMode() === s.pM4.PUSH_TO_TALK &&
                    !r.Z.isSelfMute() &&
                    Object.values(r.Z.getShortcuts())
                      .map(E.d2)
                      .some((t) => t.map((n) => n.keyCode).includes(n.keyCode))
                  ) &&
                  void (
                    !n.metaKey &&
                    !n.ctrlKey &&
                    !c.has(t) &&
                    a.S.dispatchToLastSubscribed(s.CkL.TEXTAREA_FOCUS)
                  ))
            );
          },
        };
    },
    280492: function (n, t, e) {
      e.d(t, {
        iN: function () {
          return l;
        },
        oV: function () {
          return o;
        },
      });
      var i = e(846027);
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
          return a;
        },
      });
      var i = e(211739),
        l = e(680089),
        o = e(984933),
        r = e(914010),
        u = e(981631);
      let a = {
        binds: ["mod+shift+a"],
        comboKeysBindGlobal: !0,
        action() {
          let n = r.Z.getGuildId();
          return (
            null != n &&
            (o.ZP.getChannels(n)[u.d4z.GUILD_CATEGORY].some((n) => {
              let { channel: t } = n;
              return "null" !== t.id && !l.Z.isCollapsed(t.id);
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
          return o;
        },
      });
      var i = e(585483),
        l = e(981631);
      let o = {
        binds: ["mod+p"],
        comboKeysBindGlobal: !0,
        action: () => (i.S.dispatch(l.CkL.TOGGLE_CHANNEL_PINS), !1),
      };
    },
    89028: function (n, t, e) {
      e.d(t, {
        f: function () {
          return r;
        },
      });
      var i = e(2818),
        l = e(585483),
        o = e(981631);
      let r = {
        binds: ["mod+l"],
        comboKeysBindGlobal: !0,
        action() {
          let { enabled: n, inInbox: t } = i.Z.getCurrentConfig(
            { location: "keybinds" },
            { autoTrackExposure: !1 },
          );
          if (n && !t) return l.S.dispatch(o.CkL.TOGGLE_FOR_LATER), !1;
        },
      };
    },
    300644: function (n, t, e) {
      e.d(t, {
        O: function () {
          return l;
        },
      });
      var i = e(63063);
      let l = {
        binds: ["mod+shift+h", "f1"],
        comboKeysBindGlobal: !0,
        action: () => (window.open(i.w), !1),
      };
    },
    717747: function (n, t, e) {
      e.d(t, {
        _: function () {
          return r;
        },
      });
      var i = e(481060),
        l = e(191980),
        o = e(285371);
      let r = {
        binds: ["mod+/", "mod+shift+/"],
        comboKeysBindGlobal: !0,
        action: () => ((0, i.hasModalOpen)(o.J) ? l.C() : l.$(), !1),
      };
    },
    207234: function (n, t, e) {
      e.d(t, {
        M: function () {
          return a;
        },
        a: function () {
          return u;
        },
      });
      var i = e(392711),
        l = e.n(i),
        o = e(585483),
        r = e(981631);
      let u = {
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
    997292: function (n, t, e) {
      e.d(t, {
        r: function () {
          return C;
        },
      });
      var i = e(106351),
        l = e(475179),
        o = e(816782),
        r = e(358221),
        u = e(221292),
        a = e(687158),
        d = e(433355),
        E = e(592125),
        s = e(944486),
        c = e(914010),
        _ = e(981631);
      let C = {
        binds: ["mod+u"],
        comboKeysBindGlobal: !0,
        action() {
          let n = c.Z.getGuildId(),
            t = s.Z.getChannelId(n),
            e = E.Z.getChannel(t);
          if (null != t && null != e && e.type === i.d.GUILD_VOICE)
            return l.Z.updateChatOpen(t, !r.Z.getChatOpen(t)), !1;
          if (null != t && null != e && e.type === i.d.DM) {
            let n = d.ZP.getSection(t, null == e ? void 0 : e.isDM()),
              i = (0, a.Of)(e.getRecipientId()),
              l = n === _.ULH.PROFILE;
            return (
              (0, u.TY)({ displayProfile: i, isProfileOpen: !l }),
              o.Z.toggleProfilePanelSection(),
              !1
            );
          }
          return o.Z.toggleMembersSection(), !1;
        },
      };
    },
    743810: function (n, t, e) {
      e.d(t, {
        Nv: function () {
          return L;
        },
        pd: function () {
          return S;
        },
        uX: function () {
          return h;
        },
        wk: function () {
          return I;
        },
      });
      var i = e(350483),
        l = e(220444),
        o = e(905423),
        r = e(131704),
        u = e(592125),
        a = e(306680),
        d = e(944486),
        E = e(9156),
        s = e(981631),
        c = e(490897);
      let _ = (n, t) => {
          let e = u.Z.getChannel(t);
          return (
            null != e &&
            ((0, r.hv)(e.type) || s.TPd.GUILD_VOCAL.has(e.type)
              ? a.ZP.getMentionCount(t) > 0 || d.Z.getVoiceChannelId() === t
              : (!E.ZP.isChannelMuted(n, t) || a.ZP.getMentionCount(t) > 0) &&
                (0, l.d)(e))
          );
        },
        C = (n, t) => {
          if (t === c.W.GUILD_EVENT)
            return (
              !E.ZP.isMuteScheduledEventsEnabled(n) && a.ZP.hasUnread(n, t)
            );
          return a.ZP.hasUnread(n, t);
        },
        A = (n, t) => {
          let e = u.Z.getChannel(t);
          return (
            !!(null != e && s.TPd.GUILD_VOCAL.has(e.type)) &&
            (!!(a.ZP.getMentionCount(t) > 0) ||
              (d.Z.getVoiceChannelId() === t && a.ZP.getUnreadCount(t) > 0))
          );
        },
        S = {
          binds: ["alt+shift+down"],
          comboKeysBindGlobal: !0,
          action() {
            var n;
            let t =
              null !== (n = o.Z.getState().guildId) && void 0 !== n ? n : s.ME;
            return (
              (0, i.Z)(1, {
                channelPredicate: _,
                guildPredicate: (n) => n === t || !E.ZP.isMuted(n),
                guildFeaturePredicate: C,
                ensureChatIsVisible: A,
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
            var n;
            let t =
              null !== (n = o.Z.getState().guildId) && void 0 !== n ? n : s.ME;
            return (
              (0, i.Z)(-1, {
                channelPredicate: _,
                guildPredicate: (n) => n === t || !E.ZP.isMuted(n),
                guildFeaturePredicate: C,
                ensureChatIsVisible: A,
                withVoiceChannels: !0,
              }),
              !1
            );
          },
        },
        T = (n, t) => a.ZP.getMentionCount(t) > 0,
        L = {
          binds: ["mod+shift+alt+down"],
          comboKeysBindGlobal: !0,
          action: () => (
            (0, i.Z)(1, {
              channelPredicate: T,
              ensureChatIsVisible: A,
              withVoiceChannels: !0,
            }),
            !1
          ),
        },
        h = {
          binds: ["mod+shift+alt+up"],
          comboKeysBindGlobal: !0,
          action: () => (
            (0, i.Z)(-1, {
              channelPredicate: T,
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
          return u;
        },
      });
      var i = e(592125),
        l = e(944486),
        o = e(585483),
        r = e(981631);
      let u = {
        binds: ["mod+shift+u"],
        comboKeysBindGlobal: !0,
        action() {
          let n = i.Z.getChannel(l.Z.getChannelId());
          return (
            null != n && !n.isManaged() && o.S.dispatch(r.CkL.UPLOAD_FILE), !1
          );
        },
      };
    },
    188051: function (n, t, e) {
      e.d(t, {
        w: function () {
          return o;
        },
      });
      var i = e(481060),
        l = e(423932);
      let o = {
        binds: ["mod+alt+shift+w"],
        comboKeysBindGlobal: !0,
        action: () => ((0, l.Z)(i.closeAllModals), !1),
      };
    },
    547420: function (n, t, e) {
      e.d(t, {
        MY: function () {
          return d;
        },
        RC: function () {
          return a;
        },
        UF: function () {
          return u;
        },
      });
      var i = e(857595),
        l = e(607070),
        o = e(981631);
      function r(n) {
        return o.yqN.ZOOM_SCALES[
          Math.max(
            0,
            Math.min(
              o.yqN.ZOOM_SCALES.indexOf(l.Z.zoom) + n,
              o.yqN.ZOOM_SCALES.length - 1,
            ),
          )
        ];
      }
      let u = {
          binds: ["mod+plus"],
          comboKeysBindGlobal: !0,
          action: () => ((0, i.cq)(r(1)), !1),
        },
        a = {
          binds: ["mod+minus"],
          comboKeysBindGlobal: !0,
          action: () => ((0, i.cq)(r(-1)), !1),
        },
        d = {
          binds: ["mod+0"],
          comboKeysBindGlobal: !0,
          action: () => ((0, i.cq)(o.yqN.ZOOM_DEFAULT), !1),
        };
      t.ZP = 12633 == e.j ? { ZOOM_IN: u, ZOOM_OUT: a, ZOOM_RESET: d } : null;
    },
    612226: function (n, t, e) {
      e.d(t, {
        Q2: function () {
          return i;
        },
        Rv: function () {
          return X;
        },
        U6: function () {
          return x;
        },
        UD: function () {
          return w;
        },
        oT: function () {
          return Y;
        },
      }),
        e(411104),
        e(653041);
      var i,
        l,
        o = e(346610),
        r = e(2818),
        u = e(186070),
        a = e(185514),
        d = e(395878),
        E = e(321697),
        s = e(775774),
        c = e(570408),
        _ = e(438846),
        C = e(360038),
        A = e(175724),
        S = e(705371),
        I = e(138976),
        T = e(296805),
        L = e(561716),
        h = e(239748),
        g = e(337482),
        f = e(679080),
        p = e(777019),
        O = e(523147),
        N = e(400332),
        b = e(510761),
        R = e(189509),
        G = e(673553),
        Z = e(280492),
        P = e(746887),
        D = e(861007),
        H = e(89028),
        U = e(300644),
        M = e(717747),
        m = e(207234),
        k = e(997292),
        v = e(743810),
        y = e(620212),
        V = e(188051),
        K = e(547420),
        B = e(981631),
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
      function W() {
        for (var n = arguments.length, t = Array(n), e = 0; e < n; e++)
          t[e] = arguments[e];
        return t.map((n) => {
          let t = Y[n];
          if (null == t)
            throw Error("getBindsFor(...): No bind for ".concat(t));
          return t.binds[0];
        });
      }
      ((l = i || (i = {})).NAVIGATION = "NAVIGATION"),
        (l.CHAT = "CHAT"),
        (l.VOICE_AND_VIDEO = "VOICE_AND_VIDEO"),
        (l.MISCELLANEOUS = "MISCELLANEOUS"),
        (l.MESSAGE = "MESSAGE"),
        (l.DND = "DND");
      let Y = {
        [B.EkH.SERVER_NEXT]: b.nq,
        [B.EkH.SERVER_PREV]: b.X3,
        [B.EkH.CHANNEL_NEXT]: a.tQ,
        [B.EkH.CHANNEL_PREV]: a.x5,
        [B.EkH.NAVIGATE_BACK]: a.Nx,
        [B.EkH.NAVIGATE_FORWARD]: a.On,
        [B.EkH.UNREAD_NEXT]: v.pd,
        [B.EkH.UNREAD_PREV]: v.wk,
        [B.EkH.MENTION_CHANNEL_NEXT]: v.Nv,
        [B.EkH.MENTION_CHANNEL_PREV]: v.uX,
        [B.EkH.TOGGLE_PREVIOUS_GUILD]: a.$c,
        [B.EkH.JUMP_TO_GUILD]: C.u,
        [B.EkH.SUBMIT]: R.z,
        [B.EkH.TEXTAREA_FOCUS]: G.U,
        [B.EkH.MARK_CHANNEL_READ]: A.f,
        [B.EkH.MARK_SERVER_READ]: S.l,
        [B.EkH.TOGGLE_CHANNEL_PINS]: D.u,
        [B.EkH.TOGGLE_FOR_LATER]: H.f,
        [B.EkH.TOGGLE_INBOX]: m.a,
        [B.EkH.MARK_TOP_INBOX_CHANNEL_READ]: m.M,
        [B.EkH.TOGGLE_USERS]: k.r,
        [B.EkH.TOGGLE_HELP]: U.O,
        [B.EkH.VIBE_WITH_WUMPUS]: V.w,
        [B.EkH.TOGGLE_MUTE]: Z.iN,
        [B.EkH.TOGGLE_DEAFEN]: Z.oV,
        [B.EkH.TOGGLE_CATEGORY_COLLAPSED]: P.u,
        [B.EkH.SEARCH_SOUNDBOARD]: O.Z,
        [B.EkH.SCROLL_UP]: g.B2,
        [B.EkH.SCROLL_DOWN]: g.gN,
        [B.EkH.QUICKSWITCHER_SHOW]: L.$,
        [B.EkH.CREATE_DM_GROUP]: d.K,
        [B.EkH.SEARCH_EMOJIS]: f.S,
        [B.EkH.SEARCH_GIFS]: p.O,
        [B.EkH.SEARCH_STICKERS]: N.U,
        [B.EkH.TOGGLE_HOTKEYS]: M._,
        [B.EkH.JUMP_TO_FIRST_UNREAD]: I.O,
        [B.EkH.CREATE_GUILD]: E.r,
        [B.EkH.UPLOAD_FILE]: y.U,
        [B.EkH.RETURN_TO_AUDIO_CHANNEL]: h.F,
        [B.EkH.CALL_ACCEPT]: u.IL,
        [B.EkH.CALL_START]: u.FI,
        [B.EkH.FOCUS_SEARCH]: c.I,
        [B.EkH.JUMP_TO_CURRENT_CALL]: _.K,
        [B.EkH.ZOOM_IN]: K.UF,
        [B.EkH.ZOOM_OUT]: K.RC,
        [B.EkH.ZOOM_RESET]: K.MY,
        [B.EkH.OPEN_APP_DIRECTORY]: T.T,
        [B.EkH.BROWSER_DEVTOOLS]: s.p,
      };
      function X() {
        let n = [
          {
            description: F.intl.string(F.t.bx4Uy8),
            binds: W(B.EkH.SERVER_PREV, B.EkH.SERVER_NEXT),
            group: "NAVIGATION",
          },
          {
            description: F.intl.string(F.t["+Wem6u"]),
            binds: W(B.EkH.CHANNEL_PREV, B.EkH.CHANNEL_NEXT),
            group: "NAVIGATION",
          },
          {
            description: F.intl.string(F.t["+2fcd3"]),
            binds: W(B.EkH.NAVIGATE_BACK, B.EkH.NAVIGATE_FORWARD),
            group: "NAVIGATION",
          },
          {
            description: F.intl.string(F.t.eVmj1N),
            binds: W(B.EkH.UNREAD_PREV, B.EkH.UNREAD_NEXT),
            group: "NAVIGATION",
          },
          {
            description: F.intl.string(F.t.EcqS7e),
            binds: W(B.EkH.MENTION_CHANNEL_PREV, B.EkH.MENTION_CHANNEL_NEXT),
            group: "NAVIGATION",
          },
          {
            description: F.intl.string(F.t["4I3pwc"]),
            binds: W(B.EkH.JUMP_TO_CURRENT_CALL),
            group: "NAVIGATION",
          },
          {
            description: F.intl.string(F.t["Bqss7+"]),
            binds: W(B.EkH.TOGGLE_PREVIOUS_GUILD),
            group: "NAVIGATION",
          },
          {
            description: F.intl.string(F.t.yYsRlJ),
            binds: W(B.EkH.QUICKSWITCHER_SHOW),
            group: "NAVIGATION",
          },
          {
            description: F.intl.string(F.t.O7ouXF),
            binds: W(B.EkH.CREATE_GUILD),
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
            binds: W(B.EkH.MARK_SERVER_READ),
            group: "CHAT",
          },
          {
            description: F.intl.string(F.t["5X9vFh"]),
            binds: W(B.EkH.MARK_CHANNEL_READ),
            group: "CHAT",
          },
          {
            description: F.intl.string(F.t.wxQFsr),
            binds: W(B.EkH.CREATE_DM_GROUP),
            group: "CHAT",
          },
          {
            description: F.intl.string(F.t["C+XV7e"]),
            binds: W(B.EkH.TOGGLE_CHANNEL_PINS),
            group: "CHAT",
          },
          {
            description: F.intl.string(F.t["Q+YV/f"]),
            binds: W(B.EkH.TOGGLE_INBOX),
            group: "CHAT",
          },
          {
            description: F.intl.string(F.t["YEjV+f"]),
            binds: W(B.EkH.MARK_TOP_INBOX_CHANNEL_READ),
            group: "CHAT",
          },
          {
            description: F.intl.string(F.t.AcBI9f),
            binds: W(B.EkH.TOGGLE_USERS),
            group: "CHAT",
          },
          {
            description: F.intl.string(F.t.JoxNnp),
            binds: W(B.EkH.SEARCH_EMOJIS),
            group: "CHAT",
          },
          {
            description: F.intl.string(F.t["3PHxo6"]),
            binds: W(B.EkH.SEARCH_GIFS),
            group: "CHAT",
          },
          {
            description: F.intl.string(F.t.YFl7eX),
            binds: W(B.EkH.SEARCH_STICKERS),
            group: "CHAT",
          },
          {
            description: F.intl.string(F.t.L3RYYG),
            binds: W(B.EkH.SCROLL_UP, B.EkH.SCROLL_DOWN),
            group: "CHAT",
          },
          {
            description: F.intl.string(F.t["3HAurK"]),
            binds: W(B.EkH.JUMP_TO_FIRST_UNREAD),
            group: "CHAT",
          },
          {
            description: F.intl.string(F.t.rrYBEh),
            binds: W(B.EkH.TEXTAREA_FOCUS),
            group: "CHAT",
          },
          {
            description: F.intl.string(F.t.sUJlPD),
            binds: W(B.EkH.UPLOAD_FILE),
            group: "CHAT",
            groupEnd: !0,
          },
          {
            description: F.intl.string(F.t.tL6eVV),
            binds: W(B.EkH.TOGGLE_MUTE),
            group: "VOICE_AND_VIDEO",
          },
          {
            description: F.intl.string(F.t["QXe/7e"]),
            binds: W(B.EkH.TOGGLE_DEAFEN),
            group: "VOICE_AND_VIDEO",
          },
          {
            description: F.intl.string(F.t.d6UIio),
            binds: W(B.EkH.CALL_ACCEPT),
            group: "VOICE_AND_VIDEO",
          },
          {
            description: F.intl.string(F.t.IcEW09),
            binds: W(B.EkH.MARK_CHANNEL_READ),
            group: "VOICE_AND_VIDEO",
          },
          {
            description: F.intl.string(F.t.WN2dsb),
            binds: W(B.EkH.CALL_START),
            group: "VOICE_AND_VIDEO",
            groupEnd: !0,
          },
          {
            description: F.intl.string(F.t.rUK0kp),
            binds: W(B.EkH.SEARCH_SOUNDBOARD),
            group: "VOICE_AND_VIDEO",
          },
          {
            description: F.intl.string(F.t.vkGkSk),
            binds: W(B.EkH.TOGGLE_HELP),
            group: "MISCELLANEOUS",
          },
          {
            description: F.intl.string(F.t["FJvZ8/"]),
            binds: W(B.EkH.FOCUS_SEARCH),
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
            binds: W(B.EkH.VIBE_WITH_WUMPUS),
            group: "MISCELLANEOUS",
          },
        ];
        (0, o.WT)({ location: "keybinds" }, { autoTrackExposure: !1 })
          .canForwardMessages &&
          n.push({
            description: F.intl.string(F.t.zSyDdH),
            binds: ["f"],
            group: "MESSAGE",
          });
        let { enabled: t, inInbox: e } = r.Z.getCurrentConfig(
          { location: "keybinds" },
          { autoTrackExposure: !1 },
        );
        return (
          t &&
            !e &&
            n.push({
              description: F.intl.string(F.t.IWNSoK),
              binds: W(B.EkH.TOGGLE_FOR_LATER),
              group: "CHAT",
            }),
          n
        );
      }
      t.ZP = 12633 == e.j ? Y : null;
    },
    14626: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return T;
        },
      }),
        e(47120),
        e(733860);
      var i = e(718528),
        l = e(931261),
        o = e(355298),
        r = e(333984),
        u = e(905423),
        a = e(695346),
        d = e(283595),
        E = e(923834),
        s = e(55589),
        c = e(823379),
        _ = e(475468),
        C = e(981631),
        A = e(176505);
      let S = () => {
        let n =
          o.Z.getMessageRequestsCount() > 0 || r.Z.getSpamChannelsCount() > 0;
        return [
          C.Z5c.FRIENDS,
          d.Z.hasLibraryApplication() && !a.bm.getSetting()
            ? C.Z5c.APPLICATION_LIBRARY
            : null,
          C.Z5c.APPLICATION_STORE,
          n ? C.Z5c.MESSAGE_REQUESTS : null,
          C.Z5c.COLLECTIBLES_SHOP,
          a.Ex.getSetting() ? C.Z5c.FAMILY_CENTER : null,
        ].filter(c.lm);
      };
      function I(n, t) {
        (0, _.K)(n, t);
      }
      function T() {
        let n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          t = u.Z.getState().guildId;
        null == t
          ? !(function (n) {
              var t, e, i;
              let { channelId: l, path: o, basePath: r } = u.Z.getState(),
                a = s.Z.getPrivateChannelIds(),
                d = __OVERLAY__ ? a : [...S(), ...a];
              let c =
                (null == l
                  ? ((t = null != o ? o : r),
                    S().findIndex((n) => t.startsWith(n)))
                  : null != l
                    ? d.indexOf(l)
                    : 0) + n;
              c >= d.length ? (c = 0) : c < 0 && (c = d.length - 1);
              let A = d[c];
              if (S().includes(A))
                !(function (n) {
                  let t = E.Z.getCurrentRoute();
                  n === C.Z5c.APPLICATION_STORE && null != t
                    ? (0, _.z)(t)
                    : (0, _.z)(n);
                })(A);
              else {
                (e = C.ME), (i = A), (0, _.K)(e, i);
              }
            })(n)
          : !(function (n, t) {
              var e, o, r, a;
              let d = u.Z.getState().channelId,
                E = (0, i.Z)(t, { withCurrentVoiceChannel: !0 }).map(
                  (n) => n.id,
                );
              (0, l.s)(t) && E.unshift(A.oC.GUILD_HOME);
              let s =
                ((e = (null != d ? E.indexOf(d) : -1) + n),
                (o = E.length),
                e < 0 ? o - 1 : e >= o ? 0 : e);
              (r = t), (a = E[s]), (0, _.K)(r, a);
            })(n, t);
      }
    },
    452913: function (n, t, e) {
      var i = e(392711),
        l = e.n(i),
        o = e(853856),
        r = e(706590),
        u = e(905423),
        a = e(592125),
        d = e(496675),
        E = e(944486),
        s = e(771845),
        c = e(774343),
        _ = e(475468),
        C = e(981631);
      t.Z = l().throttle(function () {
        let n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          t = s.ZP.getFlattenedGuildIds(),
          e = (function (n) {
            let t = u.Z.getState().guildId;
            if (null == t) return -2;
            if (t === C.I_8) return -1;
            let e = n.indexOf(t);
            return -1 === e ? -2 : e;
          })(t);
        if (
          (-1 === (e += n) && !(0, r.z)(o.Z, a.Z, d.Z) && (e += n),
          -3 === e && (e = t.length - 1),
          e >= t.length || -2 === e)
        ) {
          (0, _.z)(c.Z.getHomeLink());
          return;
        }
        let i = -1 === e ? C.I_8 : t[e],
          l = E.Z.getChannelId(i);
        (0, _.K)(i, l === i ? null : l, !1);
      }, C.aZC);
    },
    350483: function (n, t, e) {
      e(47120);
      var i = e(200651);
      e(192379);
      var l = e(392711),
        o = e.n(l),
        r = e(481060),
        u = e(718528),
        a = e(905423),
        d = e(984933),
        E = e(914010),
        s = e(771845),
        c = e(55589),
        _ = e(585483),
        C = e(475468),
        A = e(981631),
        S = e(490897);
      function I(n, t) {
        var e, i;
        return [
          { resourceId: n, type: S.W.GUILD_EVENT },
          ...((e = n),
          (i = t),
          e === A.ME
            ? c.Z.getPrivateChannelIds()
            : (0, u.Z)(e, {
                withVoiceChannels: i,
                withCurrentVoiceChannel: !0,
              }).map((n) => n.id)),
        ];
      }
      t.Z = o().throttle(function (n, t) {
        var l, o;
        let u,
          {
            channelPredicate: c = () => !0,
            guildPredicate: S = () => !0,
            guildFeaturePredicate: T = () => !1,
            ensureChatIsVisible: L = () => !1,
            withVoiceChannels: h = !1,
          } = t,
          g = null !== (l = a.Z.getState().guildId) && void 0 !== l ? l : A.ME,
          f = a.Z.getState().channelId,
          p = (function (n, t) {
            let e = [A.ME, ...s.ZP.getFlattenedGuildIds()],
              i = e.indexOf(n);
            return t > 0
              ? e.slice(i).concat(e.slice(0, i), n)
              : (e.splice(i, 0, n), e.slice(i + 1).concat(e.slice(0, i + 1)));
          })(g, n),
          O = n > 0 ? 0 : p.length - 1,
          N = I(g, h),
          b = N.indexOf(f) + n;
        for (; null != g && "" !== g; ) {
          if (((u = N[b]), S(g)))
            for (; null != u && "" !== u; ) {
              if ("string" == typeof u) {
                if (c(g, u)) return (0, C.K)(g, u, !1, L(g, u));
              } else if ("object" == typeof u && T(u.resourceId, u.type))
                return (
                  g !== E.Z.getGuildId() &&
                    (0, C.K)(
                      g,
                      null === (o = d.ZP.getDefaultChannel(g)) || void 0 === o
                        ? void 0
                        : o.id,
                    ),
                  (0, r.openModalLazy)(async () => {
                    let { default: n } = await Promise.all([
                      e.e("18543"),
                      e.e("22347"),
                      e.e("56236"),
                      e.e("25152"),
                    ]).then(e.bind(e, 17671));
                    return (t) => (0, i.jsx)(n, { ...t, guildId: g });
                  })
                );
              (b += n), (u = N[b]);
            }
          if (((O += n), null == (g = p[O]) || "" === g)) break;
          (N = I(g, h)), (b = n < 0 ? N.length - 1 : 0);
        }
        _.S.dispatch(A.CkL.SHAKE_APP, { duration: 200, intensity: 2 });
      }, A.aZC);
    },
    475468: function (n, t, e) {
      e.d(t, {
        K: function () {
          return a;
        },
        z: function () {
          return d;
        },
      });
      var i = e(481060),
        l = e(475179),
        o = e(925549),
        r = e(905423),
        u = e(981631);
      function a(n, t) {
        let e =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
          a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!(0, i.hasAnyModalOpen)())
          e && o.Z.channelListScrollTo(n, t),
            a && null != t && l.Z.updateChatOpen(t, !0),
            r.Z.getState().updatePath(u.Z5c.CHANNEL(n, t));
      }
      function d(n) {
        if (!(0, i.hasAnyModalOpen)()) r.Z.getState().updatePath(n);
      }
    },
    718528: function (n, t, e) {
      e.d(t, {
        T: function () {
          return C;
        },
        Z: function () {
          return _;
        },
      }),
        e(653041);
      var i = e(192379),
        l = e(442837),
        o = e(734307),
        r = e(854444),
        u = e(131704),
        a = e(680089),
        d = e(888369),
        E = e(944486),
        s = e(981631),
        c = e(647086);
      function _(n) {
        let { withVoiceChannels: t = !1, withCurrentVoiceChannel: e = !1 } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          i = arguments.length > 2 ? arguments[2] : void 0;
        return A(
          n === c._ || n === s.I_8
            ? (0, r.t)()
            : o.Z.getGuildWithoutChangingGuildActionRows(n).guildChannels,
          {
            currentVoiceChannelId: E.Z.getVoiceChannelId(),
            selectedChannelId: E.Z.getChannelId(),
          },
          { withVoiceChannels: t, withCurrentVoiceChannel: e },
          i,
        );
      }
      function C(n, t, e) {
        let { withVoiceChannels: o = !1, withCurrentVoiceChannel: r = !1 } =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          u = arguments.length > 4 ? arguments[4] : void 0,
          s = (0, l.e7)([d.default], () => d.default.getGuildChangeSentinel(n)),
          c = (0, l.e7)([a.Z], () => a.Z.version),
          { currentVoiceChannelId: _, selectedChannelId: C } = (0, l.cj)(
            [E.Z],
            () => ({
              currentVoiceChannelId: E.Z.getVoiceChannelId(),
              selectedChannelId: E.Z.getChannelId(),
            }),
          );
        return (0, i.useMemo)(
          () =>
            A(
              t,
              { currentVoiceChannelId: _, selectedChannelId: C },
              { withVoiceChannels: o, withCurrentVoiceChannel: r },
              u,
            ).map((n) => n.id),
          [t, e, s, c],
        );
      }
      function A(n, t) {
        let { currentVoiceChannelId: e, selectedChannelId: i } = t,
          { withVoiceChannels: l, withCurrentVoiceChannel: o } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = arguments.length > 3 ? arguments[3] : void 0,
          a = [];
        return (
          n.forEachShownChannel((n) => {
            ((0, u.r8)(n.type) ||
              (l && (0, u.bw)(n.type)) ||
              (o && (n.id === e || n.id === i))) &&
              a.push(n);
          }, r),
          a
        );
      }
    },
    675999: function (n, t, e) {
      var i, l, o, r;
      e.d(t, {
        PU: function () {
          return u;
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
      let u = "create-guild";
    },
    734307: function (n, t, e) {
      e(47120);
      var i,
        l,
        o,
        r,
        u = e(392711),
        a = e.n(u),
        d = e(442837),
        E = e(570140),
        s = e(317381),
        c = e(430198),
        _ = e(924301),
        C = e(601070),
        A = e(569471),
        S = e(581883),
        I = e(314897),
        T = e(680089),
        L = e(592125),
        h = e(58468),
        g = e(77498),
        f = e(496675),
        p = e(306680),
        O = e(944486),
        N = e(9156),
        b = e(823379),
        R = e(709054),
        G = e(540126),
        Z = e(526761);
      let P = null,
        D = null,
        H = new G.ZP();
      function U() {
        let n = O.Z.getChannelId(),
          t = O.Z.getVoiceChannelId();
        return (P = n), (D = t), H.clear();
      }
      function M(n) {
        let {
          guild: { id: t },
        } = n;
        return H.clearGuildId(t);
      }
      function m(n) {
        let {
          channel: { guild_id: t },
        } = n;
        return H.clearGuildId(t);
      }
      function k(n) {
        let { guildId: t } = n;
        return H.clearGuildId(t);
      }
      function v(n) {
        let { channelId: t } = n;
        return H.nonPositionalChannelIdUpdate(t);
      }
      function y() {
        return null != P && H.nonPositionalChannelIdUpdate(P);
      }
      function V(n) {
        let { channel: t } = n;
        return H.nonPositionalChannelIdUpdate(t.id);
      }
      function K(n) {
        let { id: t } = n;
        return H.nonPositionalChannelIdUpdate(t);
      }
      function B() {
        let n = O.Z.getChannelId(),
          t = O.Z.getVoiceChannelId(),
          e = P !== n || D !== t;
        return (
          !!e &&
          (a()([P, D, n, t])
            .uniq()
            .forEach((n) => {
              null != n && H.nonPositionalChannelIdUpdate(n) && (e = !0);
            }),
          (P = n),
          (D = t),
          !0)
        );
      }
      function F(n) {
        let { id: t } = n,
          e = L.Z.getChannel(t);
        return null == e ? H.clearGuildId(t) : H.clearGuildId(e.guild_id);
      }
      function w(n) {
        let { guildId: t } = n;
        return H.clearGuildId(t);
      }
      function x() {
        return H.updateSubtitles();
      }
      function W(n) {
        let { guildScheduledEvent: t } = n;
        return H.updateSubtitles(t.guild_id);
      }
      class Y extends (i = d.ZP.Store) {
        initialize() {
          this.waitFor(
            C.Z,
            I.default,
            T.Z,
            L.Z,
            h.Z,
            s.ZP,
            g.Z,
            c.Z,
            _.ZP,
            A.Z,
            f.Z,
            p.ZP,
            O.Z,
            N.ZP,
            S.Z,
          );
        }
        getGuild(n, t) {
          var e, i;
          let l = H.getGuild(
            n,
            null !== (e = null == t ? void 0 : t.guildActionRows) &&
              void 0 !== e
              ? e
              : [],
            null !== (i = null == t ? void 0 : t.channelNoticeRows) &&
              void 0 !== i
              ? i
              : [],
          );
          return { guildChannelsVersion: l.version, guildChannels: l };
        }
        getGuildWithoutChangingGuildActionRows(n) {
          let t = H.getGuildChannelRowsOnly(n);
          return { guildChannelsVersion: t.version, guildChannels: t };
        }
        recentsChannelCount(n) {
          if (null == n) return 0;
          let t = H.getGuildChannelRowsOnly(n);
          return t
            .getCategoryFromSection(t.recentsSectionNumber)
            .getShownChannelIds().length;
        }
      }
      (r = "ChannelListStore"),
        (o = "displayName") in (l = Y)
          ? Object.defineProperty(l, o, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (l[o] = r),
        (t.Z = new Y(E.Z, {
          APPLICATION_FETCH_FAIL: x,
          APPLICATION_FETCH_SUCCESS: x,
          APPLICATION_FETCH: x,
          APPLICATIONS_FETCH_FAIL: x,
          APPLICATIONS_FETCH_SUCCESS: x,
          APPLICATIONS_FETCH: x,
          BACKGROUND_SYNC: U,
          BULK_ACK: function (n) {
            let { channels: t } = n,
              e = !1;
            return (
              a()(t)
                .map((n) => {
                  var t;
                  return null === (t = L.Z.getChannel(n.channelId)) ||
                    void 0 === t
                    ? void 0
                    : t.guild_id;
                })
                .filter(b.lm)
                .uniq()
                .forEach((n) => {
                  H.clearGuildId(n) && (e = !0);
                }),
              e
            );
          },
          BULK_CLEAR_RECENTS: k,
          CACHE_LOADED_LAZY: U,
          CATEGORY_COLLAPSE_ALL: k,
          CATEGORY_COLLAPSE: F,
          CATEGORY_EXPAND_ALL: k,
          CATEGORY_EXPAND: F,
          CHANNEL_ACK: v,
          CHANNEL_COLLAPSE: function (n) {
            var t;
            let { channelId: e } = n;
            return H.clearGuildId(
              null === (t = L.Z.getChannel(e)) || void 0 === t
                ? void 0
                : t.guild_id,
            );
          },
          CHANNEL_CREATE: m,
          CHANNEL_DELETE: m,
          CHANNEL_LOCAL_ACK: v,
          CHANNEL_MUTE_EXPIRED: k,
          CHANNEL_RTC_UPDATE_CHAT_OPEN: v,
          CHANNEL_SELECT: B,
          CHANNEL_STATUSES: function (n) {
            return H.clearGuildId(n.guildId);
          },
          CHANNEL_UPDATES: function (n) {
            let { channels: t } = n,
              e = !1;
            return (
              a()(t)
                .map((n) => n.guild_id)
                .uniq()
                .forEach((n) => {
                  H.clearGuildId(n) && (e = !0);
                }),
              e
            );
          },
          CONNECTION_OPEN_SUPPLEMENTAL: x,
          CONNECTION_OPEN: U,
          CURRENT_USER_UPDATE: U,
          DECAY_READ_STATES: U,
          DEV_TOOLS_DESIGN_TOGGLE_SET: U,
          DISABLE_AUTOMATIC_ACK: v,
          DISMISS_FAVORITE_SUGGESTION: function (n) {
            let { channelId: t } = n;
            return H.nonPositionalChannelIdUpdate(t);
          },
          DRAWER_CLOSE: y,
          DRAWER_OPEN: y,
          EMBEDDED_ACTIVITY_UPDATE_V2: function (n) {
            let { location: t } = n;
            return H.updateSubtitles(t.guild_id, t.channel_id);
          },
          EMBEDDED_ACTIVITY_LAUNCH_START: function (n) {
            x();
          },
          EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: x,
          ENABLE_AUTOMATIC_ACK: v,
          FETCH_GUILD_EVENTS_FOR_GUILD: function (n) {
            let { guildId: t } = n;
            return H.updateSubtitles(t);
          },
          GAMES_DATABASE_FETCH_FAIL: x,
          GAMES_DATABASE_FETCH: x,
          GAMES_DATABASE_UPDATE: x,
          GUILD_APPLICATIONS_FETCH_SUCCESS: x,
          GUILD_CREATE: M,
          GUILD_DELETE: M,
          GUILD_MEMBER_UPDATE: function (n) {
            let { guildId: t, user: e } = n;
            return I.default.getId() === e.id && H.clearGuildId(t);
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
          GUILD_UPDATE: M,
          IMPERSONATE_STOP: k,
          IMPERSONATE_UPDATE: k,
          LOAD_CHANNELS: function (n) {
            n.channels.forEach((n) => {
              let { guildId: t } = n;
              return H.clearGuildId(t);
            });
          },
          LOAD_MESSAGES_SUCCESS: v,
          MESSAGE_ACK: v,
          MESSAGE_CREATE: function (n) {
            let { channelId: t } = n;
            return H.nonPositionalChannelIdUpdate(t);
          },
          MESSAGE_DELETE_BULK: v,
          MESSAGE_DELETE: v,
          NOTIFICATION_SETTINGS_UPDATE: U,
          OVERLAY_INITIALIZE: U,
          PASSIVE_UPDATE_V2: function (n) {
            return H.clearGuildId(n.guildId);
          },
          RECOMPUTE_READ_STATES: U,
          RESORT_THREADS: v,
          SET_RECENTLY_ACTIVE_COLLAPSED: U,
          THREAD_CREATE: V,
          THREAD_DELETE: function (n) {
            let { channel: t } = n;
            return H.nonPositionalChannelUpdate(t);
          },
          THREAD_LIST_SYNC: k,
          THREAD_MEMBER_UPDATE: K,
          THREAD_MEMBERS_UPDATE: K,
          THREAD_UPDATE: V,
          TRY_ACK: v,
          UPDATE_CHANNEL_DIMENSIONS: v,
          UPDATE_CHANNEL_LIST_SUBTITLES: function (n) {
            let { guildId: t } = n;
            H.updateSubtitles(t);
          },
          USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: k,
          USER_GUILD_SETTINGS_CHANNEL_UPDATE: k,
          USER_GUILD_SETTINGS_FULL_UPDATE: function (n) {
            let { userGuildSettings: t } = n;
            t.forEach((n) => {
              let { guild_id: t } = n;
              return H.clearGuildId(t);
            });
          },
          USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: k,
          USER_GUILD_SETTINGS_GUILD_UPDATE: k,
          USER_SETTINGS_PROTO_UPDATE: function (n) {
            var t;
            let { settings: e } = n;
            if (e.type !== Z.yP.PRELOADED_USER_SETTINGS) return !1;
            let i =
                null === (t = e.proto.guilds) || void 0 === t
                  ? void 0
                  : t.guilds,
              l = !1;
            return (
              null != i &&
                R.default.keys(i).forEach((n) => {
                  null != i[n].guildRecentsDismissedAt &&
                    (l = H.updateRecentsCategory(n) || l);
                }),
              l
            );
          },
          VOICE_CATEGORY_COLLAPSE: w,
          VOICE_CATEGORY_EXPAND: w,
          VOICE_CHANNEL_SELECT: B,
          VOICE_CHANNEL_STATUS_UPDATE: function (n) {
            return H.nonPositionalChannelIdUpdate(n.id);
          },
          VOICE_STATE_UPDATES: function (n) {
            let { voiceStates: t } = n,
              e = B(),
              i = new Set();
            for (let { channelId: n, oldChannelId: l } of t)
              null != l &&
                !i.has(l) &&
                (H.nonPositionalChannelIdUpdate(l) && (e = !0), i.add(l)),
                null != n &&
                  !i.has(n) &&
                  (H.nonPositionalChannelIdUpdate(n) && (e = !0), i.add(n));
            return e;
          },
          WINDOW_FOCUS: y,
        }));
    },
    854444: function (n, t, e) {
      e.d(t, {
        o: function () {
          return R;
        },
        t: function () {
          return G;
        },
      }),
        e(47120),
        e(653041);
      var i = e(192379),
        l = e(392711),
        o = e.n(l),
        r = e(524437),
        u = e(317381),
        a = e(853856),
        d = e(846787),
        E = e(924301),
        s = e(601070),
        c = e(569471),
        _ = e(131704),
        C = e(680089),
        A = e(592125),
        S = e(58468),
        I = e(77498),
        T = e(496675),
        L = e(306680),
        h = e(944486),
        g = e(9156),
        f = e(823379),
        p = e(540126),
        O = e(647086),
        N = e(231338);
      let b =
        12633 == e.j
          ? [u.ZP, a.Z, E.ZP, s.Z, c.Z, C.Z, A.Z, I.Z, T.Z, L.ZP, h.Z, g.ZP]
          : null;
      function R() {
        let [n, t] = i.useState(() => G());
        return (
          i.useEffect(() => {
            let n = o().throttle(() => t(G()), 100);
            return (
              b.forEach((t) => t.addChangeListener(n)),
              () => b.forEach((t) => t.removeChangeListener(n))
            );
          }, []),
          n
        );
      }
      function G() {
        let n = a.Z.getFavoriteChannels(),
          t = g.ZP.isGuildCollapsed(O._),
          e = h.Z.getChannelId(),
          i = A.Z.getChannel(e),
          l = h.Z.getVoiceChannelId(),
          u = [],
          E = {};
        for (let t in n) {
          let e = n[t],
            i = A.Z.getChannel(e.id);
          if (null == i || e.type === r.Dd.CATEGORY) continue;
          let l = (0, d.r)(n, e, i);
          if (null == e.parentId || !(e.parentId in n)) {
            u.push(l);
            continue;
          }
          !(e.parentId in E) && (E[e.parentId] = []), E[e.parentId].push(l);
        }
        function c(e, r) {
          let { isCollapsed: u, isMuted: a } = r;
          return o()(e)
            .map((e) => {
              var d;
              if (!e.isPrivate() && !T.Z.can(N.Pl.VIEW_CHANNEL, e)) return null;
              let E = null != i && (i.id === e.id || l === e.id),
                c = null != i && i.isThread() && i.parent_id === e.id,
                C =
                  null !==
                    (d =
                      E || c || !u
                        ? s.Z.getActiveJoinedRelevantThreadsForParent(
                            e.guild_id,
                            e.id,
                          )
                        : s.Z.getActiveJoinedUnreadThreadsForParent(
                            e.guild_id,
                            e.id,
                          )) && void 0 !== d
                    ? d
                    : {},
                A = (0, p.zR)(e, C, i, l, t),
                I = S.Z.isCollapsed(e.id),
                h = g.ZP.isChannelMuted(e.guild_id, e.id),
                f = {
                  id: e.id,
                  record: e,
                  category: r,
                  position: n[e.id].order,
                  threadIds: A,
                  threadCount: o().size(A),
                  isCollapsed: I,
                  isMuted: h,
                  isFirstVoiceChannel: !1,
                  subtitle: (0, p.Bz)(e, I, !1),
                };
              return E || c || L.ZP.getMentionCount(e.id) > 0
                ? f
                : (t && h) ||
                    (u &&
                      (h ||
                        a ||
                        (0, _.vd)(e.type) ||
                        ((0, _.vc)(e.type) && !1 === L.ZP.hasUnread(e.id))))
                  ? null
                  : f;
            })
            .filter(f.lm)
            .sortBy((n) => {
              let { record: t } = n;
              return t.isGuildVocal() ? t.position + 1e4 : t.position;
            })
            .value();
        }
        let I = null,
          b = {
            isMuted: !1,
            isCollapsed: !1,
            position: 0,
            getChannelRecords: () => u,
            getShownChannelIds: () => u.map((n) => n.id),
            getShownChannelAndThreadIds: () => u.map((n) => n.id),
            isEmpty: () => 0 === u.length,
            get channelList() {
              return null == I && (I = c(u, this)), I;
            },
          },
          R = o()(n)
            .values()
            .filter((n) => n.type === r.Dd.CATEGORY)
            .sortBy((n) => n.order)
            .map((n) => {
              var t;
              let { id: e, order: i } = n,
                l = a.Z.getCategoryRecord(e),
                o = null !== (t = E[e]) && void 0 !== t ? t : [],
                r = g.ZP.isChannelMuted(O._, e),
                u = C.Z.isCollapsed(e),
                d = null;
              return {
                isMuted: r,
                isCollapsed: u,
                record: l,
                id: e,
                position: i,
                getChannelRecords: () => o,
                getShownChannelIds: () => o.map((n) => n.id),
                getShownChannelAndThreadIds: () => o.map((n) => n.id),
                isEmpty: () => 0 === o.length,
                get channelList() {
                  return null == d && (d = c(o, this)), d;
                },
              };
            })
            .value(),
          G = { isEmpty: () => !0, getRows: () => [], getRow: () => null },
          Z = { isEmpty: () => !0, getRows: () => [], getRow: () => null };
        return {
          id: O._,
          hideMutedChannels: t,
          favoritesSectionNumber: 1,
          recentsSectionNumber: 2,
          voiceChannelsSectionNumber: -999,
          getSections() {
            let n = [];
            (n[p.Fq] = 0),
              (n[p.wZ] = 0),
              (n[p.p2] = 0),
              (n[p.PB] = 0),
              (n[p.wd] = b.channelList.length);
            for (let t = 0; t < R.length; t++)
              n[p.wF + t] = Math.max(1, R[t].channelList.length);
            return n;
          },
          isPlaceholderRow: (n, t) =>
            !(n < p.wF) && 0 === t && 0 === R[n - p.wF].channelList.length,
          getCategoryFromSection: (n) => (n === p.wd ? b : R[n - p.wF]),
          getNamedCategoryFromSection: (n) => R[n - p.wF],
          getChannelFromSectionRow(n, t) {
            let e = this.getCategoryFromSection(n);
            return null == e || null == e.channelList[t]
              ? null
              : { category: e, channel: e.channelList[t] };
          },
          getGuildActionSection: () => G,
          getChannelNoticeSection: () => Z,
          getFirstVoiceChannel: () => null,
          getSectionRowsFromChannel(n) {
            let t = [b, ...R];
            for (let e = 0; e < t.length; e++)
              for (let i = 0; i < t[e].channelList.length; i++)
                if (t[e].channelList[i].id === n)
                  return [{ section: e + p.wd, row: i }];
            return [];
          },
          forEachShownChannel(n) {
            for (let t of [b, ...R])
              for (let e of t.channelList)
                for (let t of (n(e.record), e.threadIds)) {
                  let e = A.Z.getChannel(t);
                  null != e && n(e);
                }
          },
          forEachChannel(n) {
            for (let t of [b, ...R]) for (let e of t.getChannelRecords()) n(e);
          },
          getSlicedChannels: (n) => [[], n, []],
          getChannels: () => [],
        };
      }
    },
    191980: function (n, t, e) {
      e.d(t, {
        $: function () {
          return l;
        },
        C: function () {
          return o;
        },
      });
      var i = e(570140);
      function l() {
        i.Z.dispatch({ type: "SHOW_KEYBOARD_SHORTCUTS" });
      }
      function o() {
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
    51596: function (n, t, e) {
      e.d(t, {
        $Z: function () {
          return G;
        },
        Cp: function () {
          return Z;
        },
        F_: function () {
          return N;
        },
        Se: function () {
          return H;
        },
        tF: function () {
          return D;
        },
        yC: function () {
          return P;
        },
      }),
        e(757143),
        e(47120);
      var i = e(570140),
        l = e(493683),
        o = e(475179),
        r = e(925549),
        u = e(287734),
        a = e(212819),
        d = e(336197),
        E = e(359110),
        s = e(769654),
        c = e(131704),
        _ = e(592125),
        C = e(283595),
        A = e(944486),
        S = e(914010),
        I = e(626135),
        T = e(777754),
        L = e(823385),
        h = e(981631),
        g = e(176505);
      let f = () => Promise.resolve();
      f = e(346329).playApplication;
      let p = Object.freeze({
          [a.xQ.USER]: a.h8.USER,
          [a.xQ.TEXT_CHANNEL]: a.h8.TEXT_CHANNEL,
          [a.xQ.VOICE_CHANNEL]: a.h8.VOICE_CHANNEL,
          [a.xQ.GUILD]: a.h8.GUILD,
          [a.xQ.APPLICATION]: a.h8.APPLICATION,
        }),
        O = new RegExp(
          "^"
            .concat(a.xQ.USER, "|")
            .concat(a.xQ.TEXT_CHANNEL, "|")
            .concat(a.xQ.VOICE_CHANNEL, "|\\")
            .concat(a.xQ.GUILD, "|\\")
            .concat(a.xQ.APPLICATION),
        );
      function N(n) {
        var t, e;
        let i;
        let [l, o] =
          ((i = null !== (e = p[(t = n).charAt(0)]) && void 0 !== e ? e : null),
          [t.replace(O, ""), i]);
        return { query: l, queryMode: o };
      }
      function b(n, t) {
        let {
            results: e,
            queryMode: i,
            query: l,
            maxQueryLength: o,
          } = L.Z.getProps(),
          r = S.Z.getGuildId(),
          u = A.Z.getChannelId(r),
          d = e[(0, a.gJ)(a.a8.DOWN, -1, e)],
          E = T.Z.isEmail(l),
          s = T.Z.isPhoneNumber(l),
          C = T.Z.isUserTagLike(l),
          h = null != u && (0, g.AB)(u),
          f = (n) =>
            null == n
              ? null
              : n.type === a.h8.IN_APP_NAVIGATION
                ? n.type + "_" + n.record.type
                : n.type,
          p = {
            current_channel_id: h ? void 0 : u,
            current_channel_static_route: h ? u : void 0,
            current_guild_id: r,
            query_mode: null != i ? i : "GENERAL",
            query_length: l.length,
            max_query_length: o,
            is_email_like: E,
            is_phone_like: s,
            is_username_like: C,
            query: E || s || C ? null : l,
            top_result_type: f(d),
            top_result_score: null != d ? d.score : null,
            num_results_total: L.Z.getResultTotals(),
            num_results_users: L.Z.getResultTotals(a.h8.USER),
            num_results_text_channels: L.Z.getResultTotals(a.h8.TEXT_CHANNEL),
            num_results_voice_channels: L.Z.getResultTotals(a.h8.VOICE_CHANNEL),
            num_results_guilds: L.Z.getResultTotals(a.h8.GUILD),
            num_results_group_dms: L.Z.getResultTotals(a.h8.GROUP_DM),
          };
        if (null != u) {
          let n = _.Z.getChannel(u);
          p.current_channel_type = null != n ? n.type : null;
        }
        if (null != t) {
          let { type: n, score: i, record: l } = t;
          switch (
            ((p.selected_type = f(t)),
            (p.selected_score = i),
            (p.selected_index = e.indexOf(t)),
            n)
          ) {
            case a.h8.GUILD:
              p.selected_guild_id = l.id;
              break;
            case a.h8.TEXT_CHANNEL:
            case a.h8.VOICE_CHANNEL:
              l instanceof c.Sf &&
                (p.selected_guild_id = null != l.guild_id ? l.guild_id : null),
                (p.selected_channel_id = l.id);
              break;
            case a.h8.GROUP_DM:
              p.selected_channel_id = l.id;
              break;
            case a.h8.USER:
              p.selected_user_id = l.id;
          }
        }
        I.default.track(n, p);
      }
      function R() {
        i.Z.dispatch({ type: "QUICKSWITCHER_HIDE" });
      }
      function G() {
        let n =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "KEYBIND",
          t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        !(function (n) {
          let t;
          if (L.Z.isOpen()) return;
          let e = S.Z.getGuildId(),
            i = A.Z.getChannelId(e);
          if (null != i) {
            let n = _.Z.getChannel(i);
            t = null != n ? n.type : null;
          }
          I.default.track(h.rMx.QUICKSWITCHER_OPENED, {
            source: n,
            current_guild_id: e,
            current_channel_id: i,
            current_channel_type: t,
          });
        })(n),
          i.Z.dispatch({ type: "QUICKSWITCHER_SHOW", ...N(t) });
      }
      function Z() {
        b(h.rMx.QUICKSWITCHER_CLOSED), R();
      }
      function P(n) {
        i.Z.dispatch({ type: "QUICKSWITCHER_SEARCH", ...N(n) });
      }
      function D(n) {
        i.Z.dispatch({ type: "QUICKSWITCHER_SELECT", selectedIndex: n });
      }
      function H(n) {
        let t,
          e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        R(), b(h.rMx.QUICKSWITCHER_RESULT_SELECTED, n);
        let { type: c, record: A } = n,
          S = { page: h.ZY5.QUICK_SWITCHER };
        switch (c) {
          case a.h8.GUILD:
            (0, s.X)(A.id, { navigationReplace: !0 });
            break;
          case a.h8.TEXT_CHANNEL:
            null != (t = _.Z.getChannel(A.id)) &&
              (0, E.Kh)(t.id, {
                state: { analyticsSource: S },
                navigationReplace: !0,
              });
            break;
          case a.h8.VOICE_CHANNEL:
            null != (t = _.Z.getChannel(A.id)) &&
              (e
                ? o.Z.updateChatOpen(A.id, !0)
                : u.default.selectVoiceChannel(A.id),
              (0, E.Kh)(t.id, {
                state: { analyticsSource: S },
                navigationReplace: !0,
              }));
            break;
          case a.h8.USER:
            l.Z.openPrivateChannel([A.id], !1, !1, "Quickswitcher"),
              r.Z.channelListScrollTo(h.ME, _.Z.getDMFromUserId(A.id));
            break;
          case a.h8.GROUP_DM:
            (0, E.Kh)(A.id, { navigationReplace: !0 }),
              r.Z.channelListScrollTo(h.ME, A.id);
            break;
          case a.h8.APPLICATION:
            let I = C.Z.getActiveLibraryApplication(A.id);
            f(A.id, I, {
              analyticsParams: {
                source: h.Sbl.QUICK_SWITCHER,
                location: h.Sbl.QUICK_SWITCHER,
              },
            });
            break;
          case a.h8.LINK:
            (0, d.Z)(A.path, { navigationReplace: !0 });
            break;
          case a.h8.IN_APP_NAVIGATION:
            (0, d.Z)(A.path, { navigationReplace: !0 });
        }
        i.Z.dispatch({ type: "QUICKSWITCHER_SWITCH_TO", result: n });
      }
    },
    423932: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return o;
        },
      });
      var i = e(200651);
      e(192379);
      var l = e(481060);
      function o(n) {
        (0, l.openModalLazy)(
          async () => {
            let { default: n } = await e.e("76815").then(e.bind(e, 336977));
            return (t) => (0, i.jsx)(n, { ...t });
          },
          { onCloseCallback: n, backdropStyle: l.BackdropStyles.BLUR },
        );
      }
    },
    923834: function (n, t, e) {
      e(411104);
      var i,
        l,
        o,
        r,
        u = e(442837),
        a = e(570140);
      let d = null;
      class E extends (i = u.ZP.Store) {
        getCurrentPath() {
          return null != d ? d.pathname : null;
        }
        getCurrentRoute() {
          return (function (n) {
            let t = null != n && null != n.search ? n.search : "";
            return null != n ? "".concat(n.pathname).concat(t) : null;
          })(d);
        }
        reset() {
          throw Error(
            "Should not reset the store this way outside of a test environment",
          );
        }
      }
      (r = "ApplicationStoreLocationStore"),
        (o = "displayName") in (l = E)
          ? Object.defineProperty(l, o, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (l[o] = r),
        (t.Z = new E(a.Z, {
          APPLICATION_STORE_LOCATION_CHANGE: function (n) {
            let { location: t } = n;
            d = { ...t };
          },
          APPLICATION_STORE_RESET_NAVIGATION: function () {
            d = null;
          },
        }));
    },
    774343: function (n, t, e) {
      var i,
        l,
        o,
        r,
        u,
        a,
        d,
        E = e(442837),
        s = e(570140),
        c = e(592125),
        _ = e(896797),
        C = e(430824),
        A = e(944486),
        S = e(55589),
        I = e(981631);
      let T = (null !==
        (a =
          null === (u = window) || void 0 === u
            ? void 0
            : null === (r = u.location) || void 0 === r
              ? void 0
              : r.pathname) && void 0 !== a
        ? a
        : ""
      ).startsWith(I.Z5c.ACTIVITIES)
        ? I.Z5c.ACTIVITIES
        : null;
      function L(n) {
        let { link: t } = n;
        if (T === t) return !1;
        T = t;
      }
      class h extends (d = E.ZP.Store) {
        initialize() {
          this.waitFor(_.Z, S.Z, A.Z, C.Z, c.Z);
        }
        getHomeLink() {
          return null != T ? T : _.Z.fallbackRoute;
        }
      }
      (o = "AppViewStore"),
        (l = "displayName") in (i = h)
          ? Object.defineProperty(i, l, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (i[l] = o),
        (t.Z = new h(s.Z, {
          OVERLAY_INITIALIZE: function () {
            let n = S.Z.getPrivateChannelIds(),
              t = A.Z.getChannelId(I.ME);
            (null != t || null != n[0]) &&
              (T = I.Z5c.CHANNEL(I.ME, null != t ? t : n[0]));
          },
          APP_VIEW_SET_HOME_LINK: L,
          APPLICATION_STORE_LOCATION_CHANGE: function (n) {
            let { location: t } = n;
            L({ link: t.pathname, type: "APP_VIEW_SET_HOME_LINK" });
          },
          APPLICATION_STORE_RESET_NAVIGATION: function () {
            if (null == T || !T.startsWith(I.Z5c.APPLICATION_STORE)) return !1;
            T = I.Z5c.APPLICATION_STORE;
          },
          CHANNEL_SELECT: function (n) {
            let { guildId: t, channelId: e } = n;
            if (null == t && null != e) {
              let n = I.Z5c.CHANNEL(I.ME, e);
              if (n !== T) return (T = n), !0;
            }
            return !1;
          },
          CHANNEL_DELETE: function (n) {
            let { channel: t } = n;
            null == t.guild_id &&
              null != t.id &&
              null != T &&
              T === I.Z5c.CHANNEL(I.ME, t.id) &&
              (T = null);
          },
        }));
    },
  },
]);
//# sourceMappingURL=fe862feaacfefe9737ac.js.map
