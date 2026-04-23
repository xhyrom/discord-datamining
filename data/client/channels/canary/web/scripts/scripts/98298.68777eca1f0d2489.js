"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["98298"],
  {
    356645(e, t, n) {
      n.d(t, { n: () => T });
      var i = n(636537),
        r = n(499979),
        a = n(451988),
        l = n(228366),
        s = n(773669),
        o = n(189081),
        u = n(645243),
        _ = n(927813),
        E = n(652215);
      let A = 10 * _.A.Millis.MINUTE,
        c = 10 * _.A.Millis.MINUTE,
        d = +_.A.Millis.MINUTE,
        I = {};
      async function T(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          _ = s.default.locale;
        return (
          l.h.dispatch({
            type: "APPLICATION_BUILD_FETCH_START",
            applicationId: e,
            branchId: t,
            locale: _,
          }),
          n && (await (0, r.yy)(Math.random() * d)),
          i.Bo.get({
            url: E.Rsh.APPLICATION_LIVE_BUILD(e, t),
            query: { platform: (0, u.O)(), locale: _ },
            oldFormErrors: !0,
            rejectWithError: !1,
          }).then(
            (n) => {
              let i = n.body;
              0 === i.manifests.length
                ? l.h.dispatch({
                    type: "APPLICATION_BUILD_NOT_FOUND",
                    applicationId: e,
                    branchId: t,
                  })
                : l.h.dispatch({
                    type: "APPLICATION_BUILD_FETCH_SUCCESS",
                    applicationId: e,
                    branchId: t,
                    locale: _,
                    build: i,
                  });
            },
            (n) => {
              let { status: i } = n;
              if (404 === i)
                l.h.dispatch({
                  type: "APPLICATION_BUILD_NOT_FOUND",
                  applicationId: e,
                  branchId: t,
                });
              else
                null == I[t] && (I[t] = new a.Ep()),
                  I[t].start(A + Math.random() * c, () => {
                    null != o.A.getLibraryApplication(e, t) && T(e, t);
                  });
            },
          )
        );
      }
    },
    6981(e, t, n) {
      n.d(t, {
        J0: () => s,
        Qh: () => l,
        ST: () => r,
        mZ: () => a,
        uA: () => o,
      });
      var i = n(228366);
      function r() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e4;
        i.h.dispatch({ type: "BROWSER_HANDOFF_BEGIN", timeout: e });
      }
      function a(e, t) {
        i.h.dispatch({
          type: "BROWSER_HANDOFF_END",
          handoffToken: e,
          fingerprint: t,
        });
      }
      function l(e) {
        let {
          handoffKey: t,
          handoffToken: n,
          handoffSource: r,
          timeout: a = 1e4,
        } = e;
        i.h.dispatch({
          type: "BROWSER_HANDOFF_FROM_APP",
          handoffKey: t,
          handoffToken: n,
          handoffSource: r,
          timeout: a,
        });
      }
      function s() {
        i.h.dispatch({ type: "BROWSER_HANDOFF_UNAVAILABLE" });
      }
      function o(e) {
        i.h.dispatch({ type: "BROWSER_HANDOFF_SET_USER", user: e });
      }
    },
    912851(e, t, n) {
      n.d(t, { A: () => r });
      var i = n(228366);
      let r = {
        show(e, t, n, r, a) {
          i.h.dispatch({
            type: "NOTICE_SHOW",
            notice: { id: a, type: e, message: t, buttonText: n, callback: r },
          });
        },
        dismiss(e) {
          i.h.dispatch({ type: "NOTICE_DISMISS", ...e });
        },
      };
    },
    907125(e, t, n) {
      n.d(t, { x: () => M });
      var i = n(132500),
        r = n(192308),
        a = n(228366),
        l = n(890615),
        s = n(51758),
        o = n(776781),
        u = n(96566),
        _ = n(413339),
        E = n(58149),
        A = n(329551),
        c = n(912630),
        d = n(965162),
        I = n(734057),
        T = n(969341),
        N = n(763827),
        S = n(309010),
        p = n(287809),
        O = n(34135),
        C = n(71393),
        g = n(834942),
        R = n(576705),
        m = n(977997),
        h = n(147036);
      let M = function (e, t) {
        let M = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          f = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          { lockVoiceStateForResume: L = !1, bypassIdleUpdate: y = !1 } =
            arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
          D = I.A.getChannel(e),
          U = m.A.getCurrentClientVoiceChannelId(t ?? null) === e,
          P = null != D ? g.A.getCheck(D.guild_id) : null;
        if (
          !(null != t && (0, s.V)(t)) &&
          (null == P || P.canChat || (0, o.pC)(D))
        ) {
          if (null != D && !U) {
            let e = (0, h.Pd)(D, m.A, C.A);
            if (e && D.isGuildStageVoice() && (0, u.xn)(D.id))
              return void (0, r.openModalLazy)(async () => {
                let { default: e } = await n.e("43568").then(n.bind(n, 717523));
                return (t) => e({ channel: D, ...t });
              });
            if (e)
              return void (0, r.openModalLazy)(async () => {
                let { default: e } = await n.e("54207").then(n.bind(n, 361698));
                return (t) => e(t);
              });
            if (!(0, l.A)(D, R.A)) return;
          }
          M && (0, _.PX)(),
            (function (e, t, n) {
              let i = S.A.getVoiceChannelId(),
                r = I.A.getChannel(i);
              if (null == t && null != i && null != r) {
                let t,
                  i,
                  l =
                    ((t = N.A.getRTCConnection()),
                    (i = t?.getVoiceDurationStats()),
                    {
                      channel_id: r.id,
                      channel_type: r.type,
                      guild_id: r.getGuildId(),
                      rtc_connection_id: N.A.getRTCConnectionId(),
                      duration: N.A.getDuration(),
                      media_session_id: N.A.getMediaSessionId(),
                      ...(0, E.JK)(N.A.getGuildId(), N.A.getChannelId(), n),
                      duration_muted_ms: i?.duration_muted_ms ?? null,
                      output_audio_route_type: O.A.getCurrentRouteType(),
                    });
                if ((e(), c.A.hasUsedBackgroundInCall)) {
                  let e,
                    t = {
                      ...l,
                      ...((e = (0, A.i)(p.default.getCurrentUser())),
                      {
                        video_device_name:
                          T.Ay.getVideoDevices()[T.Ay.getVideoDeviceId()]?.name,
                        video_hardware_scaling_enabled:
                          T.Ay.getHardwareEncoding(),
                        video_effect_type: (0, d.wC)(e),
                        video_effect_detail: (0, d._V)(e),
                      }),
                    };
                  a.h.dispatch({
                    type: "VIDEO_BACKGROUND_SHOW_FEEDBACK",
                    analyticsData: t,
                  });
                } else
                  a.h.dispatch({
                    type: "VOICE_CHANNEL_SHOW_FEEDBACK",
                    analyticsData: l,
                  });
              } else e();
            })(
              function () {
                let n = (0, i.A)();
                a.h.dispatch({
                  type: "VOICE_CHANNEL_SELECT",
                  guildId: t,
                  channelId: e,
                  currentVoiceChannelId: S.A.getVoiceChannelId(),
                  video: M,
                  stream: f,
                  lockVoiceStateForResume: L,
                  joinVoiceId: n,
                  bypassIdleUpdate: y,
                });
              },
              e,
              M,
            );
        }
      };
    },
    511347(e, t, n) {
      n.d(t, { A: () => r });
      var i = n(64700);
      function r(e) {
        let t = i.useRef(null),
          n = i.useCallback(
            (n) => {
              null != e &&
                ("function" == typeof e ? e(n) : (e.current = n),
                (t.current = n));
            },
            [e],
          );
        return [t, n];
      }
    },
    884384(e, t, n) {
      n.d(t, { AZ: () => g, Ay: () => f, Qn: () => R, cR: () => m }), n(321073);
      var i,
        r = n(284009),
        a = n.n(r),
        l = n(636537),
        s = n(155718),
        o = n(58149),
        u = n(626584),
        _ = n(865116),
        E = n(322683),
        A = n(794691),
        c = n(495544),
        d = n(544180),
        I = n(927813),
        T = n(453771),
        N = n(513391),
        S = n(292348),
        p = n(743445),
        O = n(652215),
        C = n(381941),
        g =
          (((i = {})[(i.SEND = 0)] = "SEND"),
          (i[(i.EDIT = 1)] = "EDIT"),
          (i[(i.COMMAND = 2)] = "COMMAND"),
          (i[(i.SEND_ANNOUNCEMENT = 3)] = "SEND_ANNOUNCEMENT"),
          i);
      let R = (e) => 1 === e.type,
        m = (e) =>
          0 === e.type || 3 === e.type
            ? e.message.nonce
            : R(e)
              ? e.message.messageId
              : e.message.data.id,
        h = [+I.A.Millis.MINUTE, 5 * I.A.Millis.MINUTE];
      class M extends N.A {
        maxSize;
        requests = new Map();
        analyticsTimeouts = new Map();
        constructor(e = 5) {
          super(new u.A("MessageQueue")), (this.maxSize = e);
        }
        isFull() {
          return this.queue.length >= this.maxSize;
        }
        drain(e, t) {
          switch (
            (this.logger.log("Draining Message Queue with: ", e.type), e.type)
          ) {
            case 0:
              this.handleSend(e.message, t);
              break;
            case 3:
              this.handleSendAnnouncement(e.message, t);
              break;
            case 1:
              this.handleEdit(e.message, t);
              break;
            case 2:
              this.handleCommand(e.message, t);
          }
        }
        cancelRequest(e) {
          this.logger.log("Cancel message send: ", e),
            this.requests.get(e)?.abort(),
            this.requests.delete(e),
            this.cancelQueueMetricTimers(e);
        }
        cancelPendingSendRequests(e) {
          let t = [],
            n = [];
          for (; this.queue.length > 0; ) {
            let i = this.queue.shift(),
              { message: r } = i;
            0 === r.type && r.message.channelId === e
              ? t.push(r.message)
              : n.push(i);
          }
          return (
            this.queue.push(...n),
            this.logger.log("Cancel pending send requests", t.length),
            t
          );
        }
        startQueueMetricTimers(e) {
          let t = h.map((e) =>
            setTimeout(() => {
              (0, o.zV)(O.HAw.SEND_MESSAGE_QUEUED, { queued_duration_ms: e });
            }, e),
          );
          this.analyticsTimeouts.set(e, t);
        }
        cancelQueueMetricTimers(e) {
          this.analyticsTimeouts.get(e)?.forEach(clearTimeout),
            this.analyticsTimeouts.delete(e);
        }
        createResponseHandler(e, t) {
          return (n) => {
            if (
              (null != e &&
                (this.requests.delete(e), this.cancelQueueMetricTimers(e)),
              n.hasErr)
            )
              return t(null, n);
            if (
              null != n.body &&
              (n.body.code === O.t02.SLOWMODE_RATE_LIMITED ||
                n.body.code === O.t02.CHANNEL_FOLLOWING_EDIT_RATE_LIMITED)
            )
              t(null, n);
            else if (429 === n.status) {
              let e = parseInt(n.headers["retry-after"]);
              isNaN(e) ? t(null, n) : t({ retryAfter: e * I.A.Millis.SECOND });
            } else t(null, n);
          };
        }
        handleSend(e, t) {
          let { channelId: n, analyticsLocation: i, ...r } = e,
            a = (0, A.A)() ?? i,
            s = (0, E.O)(),
            o = {
              mobile_network_type: d.A.getType(),
              ...r,
              ...(null != s && { signal_strength: s }),
            };
          if (_.Ay.get("send_fail_100")) {
            this.logger.log(
              "Skipping message send because send_fail_100 is enabled",
            ),
              t(null, {
                ok: !1,
                hasErr: !1,
                status: 500,
                headers: {},
                body: "{}",
                text: "Simulated failure",
              });
            return;
          }
          let u = this.createResponseHandler(e.nonce, t),
            c = new AbortController();
          this.startQueueMetricTimers(e.nonce),
            l.Bo.post(
              {
                url: O.Rsh.MESSAGES(n),
                body: o,
                context: null != a ? { location: a } : void 0,
                oldFormErrors: !0,
                ...C.ZG,
                signal: c.signal,
                rejectWithError: !0,
                onRequestCreated: () => {
                  null != e.nonce && this.requests.set(e.nonce, c);
                },
              },
              u,
            );
        }
        handleSendAnnouncement(e, t) {
          let { channelId: n, analyticsLocation: i, ...r } = e,
            a = (0, A.A)() ?? i,
            s = (0, E.O)(),
            o = {
              mobile_network_type: d.A.getType(),
              ...r,
              ...(null != s && { signal_strength: s }),
            };
          if (_.Ay.get("send_fail_100")) {
            this.logger.log(
              "Skipping message send because send_fail_100 is enabled",
            ),
              t(null, {
                ok: !1,
                hasErr: !1,
                status: 500,
                headers: {},
                body: "{}",
                text: "Simulated failure",
              });
            return;
          }
          let u = this.createResponseHandler(e.nonce, t),
            c = new AbortController();
          this.startQueueMetricTimers(e.nonce),
            l.Bo.post(
              {
                url: O.Rsh.MESSAGES_ANNOUNCEMENT(n),
                body: o,
                context: null != a ? { location: a } : void 0,
                oldFormErrors: !0,
                ...C.ZG,
                signal: c.signal,
                rejectWithError: !0,
                onRequestCreated: () => {
                  null != e.nonce && this.requests.set(e.nonce, c);
                },
              },
              u,
            );
        }
        handleEdit = (e, t) => {
          let { channelId: n, messageId: i, isCrossposted: r, ...a } = e,
            s = new AbortController(),
            o = this.createResponseHandler(i, t),
            u = {
              url: O.Rsh.MESSAGE(n, i),
              body: a,
              retries: 1,
              oldFormErrors: !0,
              signal: s.signal,
              rejectWithError: !0,
              onRequestCreated: () => {
                this.requests.set(i, s);
              },
            };
          r && (u.failImmediatelyWhenRateLimited = !0), l.Bo.patch(u, o);
        };
        handleCommand(e, t) {
          let {
              applicationId: n,
              guildId: i,
              channelId: r,
              data: o,
              nonce: u,
              attachments: _,
              maxSizeCallback: E,
              analytics_location: A,
              sectionName: d,
              source: I,
            } = e,
            N = {
              type: s.G4.APPLICATION_COMMAND,
              application_id: n,
              guild_id: i,
              channel_id: r,
              session_id: c.default.getSessionId(),
              data: o,
              nonce: u,
              analytics_location: A,
              section_name: d,
              source: I,
            };
          null != _ &&
            (N.data.attachments = _.map(
              (e, t) => (
                a()(
                  e.status === p.jP.COMPLETED,
                  "Uploads must be staged before trying to send a message",
                ),
                (0, S.OW)(e, t)
              ),
            ));
          let C = new AbortController();
          l.Bo.post(
            {
              url: O.Rsh.INTERACTIONS,
              body: N,
              signal: C.signal,
              rejectWithError: !0,
              onRequestCreated: (e) => {
                this.requests.set(u, C),
                  e.on("progress", (e) => {
                    let { total: t } = e,
                      n = (0, T.o2)(i);
                    null != t && t > n && (this.cancelRequest(u), E?.(n));
                  });
              },
            },
            this.createResponseHandler(u, t),
          );
        }
      }
      let f = new M();
    },
    425059(e, t, n) {
      n.d(t, { A: () => s });
      var i = n(743445),
        r = n(407876),
        a = n(358579),
        l = n(381941);
      class s extends r.A {
        async uploadFiles(e) {
          super.upload(e);
          let t = new Promise((e, t) => {
              this.once("error", (e, n, i, r) => {
                t({ file: e, code: n, responseBody: i, reason: r });
              }),
                this.once("complete", () => {
                  this._errored || e(this.files);
                });
            }),
            n = new AbortController();
          try {
            if (
              ((this.files = e),
              this._aborted ||
                (this._handleStart(() => n.abort()),
                !(await this.compressAndCheckFileSize())))
            )
              return t;
            this.setUploadingTextForUI(),
              await (0, a.A)(
                this.files,
                !0,
                this._recomputeProgress.bind(this),
              );
          } catch (a) {
            let e = this.files.find((e) => e.status === i.jP.ERROR),
              t = e?.error,
              n = a instanceof Error ? a.message : String(a),
              r = { type: l.ty.ERROR_SOURCE_UNKNOWN, msg: n };
            throw (
              (this._handleError({ code: t, reason: r }),
              { file: this._file, code: t, reason: r })
            );
          }
          return this._handleComplete(), this.files;
        }
      }
    },
    955572(e, t, n) {
      n.d(t, {
        AC: () => E,
        Bm: () => d,
        D3: () => C,
        Dm: () => f,
        Er: () => N,
        FU: () => P,
        Gm: () => U,
        HU: () => p,
        IX: () => M,
        Jb: () => R,
        LO: () => T,
        M1: () => y,
        Qp: () => A,
        RI: () => g,
        RJ: () => S,
        XS: () => _,
        Xt: () => L,
        YV: () => I,
        kI: () => m,
        qz: () => O,
        ts: () => h,
        uS: () => c,
        uh: () => D,
      });
      var i = n(228366),
        r = n(817281),
        a = n(954571),
        l = n(775602),
        s = n(652215),
        o = n(823894),
        u = n(355097);
      function _(e) {
        i.h.dispatch({ type: "ACCESSIBILITY_SET_FONT_SIZE", fontSize: e });
      }
      function E() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        i.h.dispatch({
          type: "ACCESSIBILITY_SET_MESSAGE_GROUP_SPACING",
          messageGroupSpacing: e,
        });
      }
      function A(e) {
        i.h.dispatch({ type: "ACCESSIBILITY_SET_ZOOM", zoom: e });
      }
      function c() {
        i.h.dispatch({ type: "ACCESSIBILITY_KEYBOARD_MODE_ENABLE" }),
          a.default.track(s.HAw.KEYBOARD_MODE_TOGGLED, { enabled: !0 });
      }
      function d() {
        i.h.dispatch({ type: "ACCESSIBILITY_KEYBOARD_MODE_DISABLE" }),
          a.default.track(s.HAw.KEYBOARD_MODE_TOGGLED, { enabled: !1 });
      }
      function I() {
        i.h.dispatch({ type: "ACCESSIBILITY_DESATURATE_ROLES_TOGGLE" });
      }
      function T() {
        i.h.dispatch({ type: "ACCESSIBILITY_DARK_SIDEBAR_TOGGLE" });
      }
      function N() {
        i.h.dispatch({ type: "KEYBOARD_NAVIGATION_EXPLAINER_MODAL_SEEN" });
      }
      function S(e) {
        i.h.dispatch({
          type: "ACCESSIBILITY_SYSTEM_PREFERS_REDUCED_MOTION_CHANGED",
          systemPrefersReducedMotion: e,
        });
      }
      function p(e) {
        i.h.dispatch({ type: "ACCESSIBILITY_SET_SATURATION", saturation: e });
      }
      function O(e) {
        let t = l.A.useReducedMotion;
        i.h.dispatch({
          type: "ACCESSIBILITY_SET_PREFERS_REDUCED_MOTION",
          prefersReducedMotion: e,
        });
        let n = l.A.useReducedMotion;
        !t && n
          ? r.Ay.applySettingsOverride({
              gifAutoPlay: { value: !1, reasonKey: u._A.REDUCED_MOTION },
              animateEmoji: { value: !1, reasonKey: u._A.REDUCED_MOTION },
              animateStickers: {
                value: o.BJ.ANIMATE_ON_INTERACTION,
                reasonKey: u._A.REDUCED_MOTION_STICKERS,
              },
            })
          : t &&
            !n &&
            r.Ay.clearSettingsOverride(
              "gifAutoPlay",
              "animateEmoji",
              "animateStickers",
            );
      }
      function C(e) {
        i.h.dispatch({
          type: "ACCESSIBILITY_SET_SYNC_FORCED_COLORS",
          syncForcedColors: e,
        });
      }
      function g(e) {
        i.h.dispatch({
          type: "ACCESSIBILITY_SYSTEM_COLOR_PREFERENCES_CHANGED",
          systemForcedColors: e,
        });
      }
      function R(e) {
        i.h.dispatch({
          type: "ACCESSIBILITY_SYSTEM_PREFERS_CONTRAST_CHANGED",
          systemPrefersContrast: e,
        });
      }
      function m(e) {
        i.h.dispatch({
          type: "ACCESSIBILITY_SET_ALWAYS_SHOW_LINK_DECORATIONS",
          alwaysShowLinkDecorations: e,
        });
      }
      function h(e) {
        i.h.dispatch({
          type: "ACCESSIBILITY_SET_ENABLE_CUSTOM_CURSOR",
          enableCustomCursor: e,
        });
      }
      function M(e) {
        i.h.dispatch({ type: "ACCESSIBILITY_SET_ROLE_STYLE", roleStyle: e }),
          a.default.track(s.HAw.ROLE_STYLE_SETTING_UPDATED, { role_style: e });
      }
      function f(e) {
        i.h.dispatch({
          type: "ACCESSIBILITY_SET_DISPLAY_NAME_STYLES_ENABLED",
          enabled: e,
        });
      }
      function L() {
        i.h.dispatch({ type: "ACCESSIBILITY_SUBMIT_BUTTON_TOGGLE" });
      }
      function y() {
        i.h.dispatch({
          type: "ACCESSIBILITY_SYNC_PROFILE_THEME_WITH_USER_THEME_TOGGLE",
        });
      }
      function D(e) {
        i.h.dispatch({
          type: "ACCESSIBILITY_SET_CONTRAST_MODE",
          contrastMode: e,
        });
      }
      function U(e) {
        i.h.dispatch({
          type: "ACCESSIBILITY_SET_SWITCH_ICONS_ENABLED",
          switchIconsEnabled: e,
        });
      }
      function P(e) {
        i.h.dispatch({
          type: "UNSYNCED_USER_SETTINGS_UPDATE",
          settings: { hdrDynamicRange: e },
        });
      }
    },
    956549(e, t, n) {
      n.d(t, { A: () => _ });
      var i = n(734057),
        r = n(287809),
        a = n(646865),
        l = n(909206),
        s = n(795816),
        o = n(817636),
        u = n(574152);
      async function _(e) {
        let t;
        if (null == e.targetApplicationId) return !1;
        let n = !1;
        try {
          (t = await (0, o.A)(e.targetApplicationId, e.channelId)),
            (n = (0, a.f)());
        } catch {
          return !1;
        }
        return (0, a.w)(n, () => E({ ...e, targetApplication: t }));
      }
      async function E(e) {
        let {
            targetApplication: t,
            locationObject: n,
            channelId: a,
            analyticsLocations: o,
            componentId: _,
            commandOrigin: E,
            sectionName: A,
            source: c,
            onExecutedCallback: d,
            referrerId: I,
            customId: T,
            inviterUserId: N,
            onConfirmActivityLaunchChecksAlertOpen: S,
          } = e,
          p = (0, u.A)(),
          O = r.default.getCurrentUser();
        return (
          null != a &&
          null != i.A.getChannel(a) &&
          null != O &&
          null != t &&
          (l.MJ(t.id),
          await (0, s.su)({
            channelId: a,
            applicationId: t.id,
            isStart: !0,
            embeddedActivitiesManager: p,
            componentId: _,
            commandOrigin: E,
            sectionName: A,
            locationObject: n,
            analyticsLocations: o,
            source: c,
            onExecutedCallback: d,
            referrerId: I,
            customId: T,
            inviterUserId: N,
            onConfirmActivityLaunchChecksAlertOpen: S,
          }))
        );
      }
    },
    435582(e, t, n) {
      n.d(t, { A: () => r });
      var i = n(652215);
      function r(e, t) {
        let n = window.GLOBAL_ENV.CDN_HOST,
          r = window.GLOBAL_ENV.API_ENDPOINT;
        return null != n
          ? `https://${n}/app-assets/${e}/store/${t}.mp4`
          : `${location.protocol}${r}${i.Rsh.STORE_ASSET(e, t, "mp4")}`;
      }
    },
    166352(e, t, n) {
      n.d(t, { A: () => a });
      var i = n(155718),
        r = n(723702);
      function a(e) {
        let t;
        return (
          (t = (0, r.isIOS)()
            ? i.Yl.IOS
            : (0, r.isAndroid)()
              ? i.Yl.ANDROID
              : i.Yl.WEB),
          e?.includes(t) ?? !1
        );
      }
    },
    748975(e, t, n) {
      n.d(t, { A: () => I });
      var i = n(367513),
        r = n(587895),
        a = n(568598),
        l = n(709055),
        s = n(976860),
        o = n(795816),
        u = n(933958),
        _ = n(851907),
        E = n(969151),
        A = n(108959),
        c = n(5867),
        d = n(652215);
      function I(e, t) {
        let n = u.Ay.getSelfEmbeddedActivityForLocation(t);
        if (null == n) return;
        let I = r.A.getApplication(n.applicationId),
          T = (0, E.H)(n.location),
          N = (0, _.Ay)({ application: I, channelId: T });
        null != N
          ? (0, l.A)(N)
          : null != T &&
            ((0, s.pX)(d.BVt.CHANNEL(e, T)),
            (0, A.A)(T)
              ? (i.A.selectParticipant(
                  T,
                  (0, a.Qt)({
                    applicationId: n.applicationId,
                    instanceId: n?.compositeInstanceId,
                  }),
                ),
                i.A.updateLayout(T, d.DUB.NO_CHAT))
              : (0, o.gk)(c.Gd.PANEL));
      }
    },
    859007(e, t, n) {
      n.d(t, { y: () => l });
      var i = n(587895),
        r = n(625180),
        a = n(375802);
      function l(e) {
        let { applicationId: t } = e,
          n = i.A.getApplication(t);
        return (
          !!(null != n && (0, a.x)(n)) &&
          (r.A.launchFrame({ applicationId: t }), !0)
        );
      }
    },
    902439(e, t, n) {
      n.d(t, { A: () => a });
      var i = n(17928),
        r = n(933958);
      function a() {
        return (0, i.bG)([r.Ay], () => r.Ay.getCurrentEmbeddedActivity());
      }
    },
    620148(e, t, n) {
      n.d(t, { A: () => a });
      var i = n(429913),
        r = n(902439);
      function a() {
        let { fetchesApplication: e = !0 } =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = (0, r.A)(),
          [n] = (0, i.A)(null == t ? [] : [t.applicationId], e);
        return n ?? void 0;
      }
    },
    283488(e, t, n) {
      n.d(t, { A: () => l });
      var i = n(64700),
        r = n(970928);
      let a = ["embedded_cover", "embedded_background"];
      function l(e) {
        let { applicationId: t, size: n, names: l = a, format: s = "png" } = e,
          [o, u] = i.useState(null),
          [_, E] = i.useState(!0),
          A = (0, r.uD)(t, o, n, s),
          c = i.useRef(l);
        return (
          i.useEffect(() => {
            c.current = l;
          }),
          i.useEffect(() => {
            let { current: e } = c;
            null != t &&
              (0, r.Y)(t).then((t) => {
                for (let [n, i] of (E(!1), Object.entries(t)))
                  if (null != i && "" !== i.id && e.includes(i.name))
                    return void u(i.id);
              });
          }, [t]),
          { url: A, state: _ ? "loading" : null != A ? "fetched" : "not-found" }
        );
      }
    },
    787389(e, t, n) {
      n.d(t, { A: () => c });
      var i = n(64700),
        r = n(17928),
        a = n(522305),
        l = n(627363),
        s = n(625180),
        o = n(91242),
        u = n(375802),
        _ = n(933958),
        E = n(748975),
        A = n(165610);
      function c(e) {
        let {
            applicationId: t,
            analyticsLocations: n,
            runBeforeLaunchAttempt: c,
            runAfterLaunchAttempt: d,
          } = e,
          { data: I } = (0, l.YY)(t),
          T = (0, r.bG)([_.Ay], () => _.Ay.getCurrentEmbeddedActivity()),
          N = (0, r.bG)([o.A], () => o.A.getConnectedFrame()),
          S = (0, u.e)(I);
        return i.useCallback(async () => {
          if (null == t || null == I) return;
          let e = null != T && T.applicationId === t;
          if (null != N && N.applicationId === t)
            return void s.A.updateFrameLayoutMode({
              applicationId: N.applicationId,
              layoutMode: A.y.FOCUSED,
            });
          if (e) {
            let e = T.location;
            (0, E.A)("guild_id" in e ? e.guild_id : null, e);
            return;
          }
          c?.();
          try {
            S
              ? await s.A.launchFrame({ applicationId: t })
              : I?.bot?.id != null &&
                (await (0, a.Q)({
                  appId: t,
                  botId: I?.bot?.id,
                  analyticsLocations: n ?? [],
                }));
          } catch (e) {}
          d?.();
        }, [n, I, t, S, T, N, d, c]);
      }
    },
    204925(e, t, n) {
      n.d(t, {
        AM: () => _,
        Qx: () => u,
        Uy: () => a,
        bm: () => i,
        jc: () => r,
        w_: () => o,
      });
      let i = 2 * n(927813).A.Millis.HOUR,
        r = "new-user-age-gate-modal",
        a = "existing-user-age-gate-modal";
      var l,
        s,
        o =
          (((l = {}).AUTH = "Register Age Gate"),
          (l.NEW_USER_FLOW = "NUF"),
          (l.CLAIM_ACCOUNT = "Claim Age Gate"),
          (l.NSFW_CHANNEL = "NSFW Channel"),
          (l.NSFW_SERVER = "NSFW Server"),
          (l.NSFW_SERVER_INVITE = "NSFW Server Invite"),
          (l.NSFW_SERVER_INVITE_EMBED = "NSFW Server Invite Embed"),
          (l.NSFW_VOICE_CHANNEL = "NSFW Voice Channel"),
          (l.LARGE_GUILD = "Large Guild"),
          (l.ACCESS_LARGE_GUILD_UNDERAGE =
            "Access Large Guild Access Underage"),
          (l.JOIN_LARGE_GUILD_UNDERAGE = "Join Large Guild Underage"),
          (l.FAMILY_CENTER = "Family Center"),
          (l.REGISTER = "Register"),
          (l.DEEP_LINK_PROMPT = "Deep Link Prompt"),
          (l.UNSPECIFIED = "Unspecified"),
          l);
      let u = new Set(["NSFW Channel", "NSFW Voice Channel", "NSFW Server"]);
      var _ =
        (((s = {}).AGE_GATE_OPEN = "AGE_GATE_OPEN"),
        (s.AGE_GATE_CLOSE = "AGE_GATE_CLOSE"),
        (s.AGE_GATE_SUBMITTED = "AGE_GATE_SUBMITTED"),
        (s.AGE_GATE_SUCCESS = "AGE_GATE_SUCCESS"),
        (s.AGE_GATE_FAILURE = "AGE_GATE_FAILURE"),
        (s.AGE_GATE_UNDERAGE = "AGE_GATE_UNDERAGE"),
        (s.AGE_GATE_PREVENT_UNDERAGE_REGISTRATION =
          "AGE_GATE_PREVENT_UNDERAGE_REGISTRATION"),
        (s.AGE_GATE_LOGOUT_UNDERAGE_NEW_USER =
          "AGE_GATE_LOGOUT_UNDERAGE_NEW_USER"),
        s);
    },
    85277(e, t, n) {
      n.d(t, { z: () => r });
      var i = n(652215);
      function r(e, t) {
        let n = new Date();
        switch (e) {
          case i.HAw.GUILD_VIEWED_CLICKSTREAM:
            return {
              time_minus: t.map((e) => n.getTime() - e.timestamp.getTime()),
              rtc_states: t.map((e) => e.rtc_state),
              guild_ids: t.map((e) => e.guild_id),
            };
          case i.HAw.FRIENDS_LIST_VIEWED_CLICKSTREAM:
            return {
              time_minus: t.map((e) => n.getTime() - e.timestamp.getTime()),
              rtc_states: t.map((e) => e.rtc_state),
              tab_opened: t.map((e) => e.tab_opened),
              num_friends: t.map((e) => e.num_friends),
              now_playing_visible: t.map((e) => e.now_playing_visible),
              now_playing_num_cards: t.map((e) => e.now_playing_num_cards),
            };
          case i.HAw.CHANNEL_OPENED_CLICKSTREAM:
            return {
              time_minus: t.map((e) => n.getTime() - e.timestamp.getTime()),
              rtc_states: t.map((e) => e.rtc_state),
              channel_ids: t.map((e) => e.channel_id),
              channel_types: t.map((e) => e.channel_type),
            };
          case i.HAw.CHANNEL_LATEST_MESSAGES_LOADED_CLICKSTREAM:
            return {
              time_minus: t.map((e) => n.getTime() - e.timestamp.getTime()),
              rtc_states: t.map((e) => e.rtc_state),
              load_duration_ms: t.map((e) => e.load_duration_ms),
              were_messages_cached: t.map((e) => e.were_messages_cached),
              is_first_load: t.map((e) => e.is_first_load),
            };
          default:
            throw Error(`getClickstreamDrainEvent: Unknown event: ${e}`);
        }
      }
    },
    615807(e, t, n) {
      n.d(t, { G: () => a });
      var i = n(64700),
        r = n(849269);
      function a(e) {
        let [t, n] = i.useState(e);
        return (
          i.useLayoutEffect(() => {
            if (e === r.o6.LEAVE) {
              let t = setTimeout(() => n(e), 100);
              return () => clearTimeout(t);
            }
            n(e);
          }, [e]),
          t
        );
      }
    },
    522305(e, t, n) {
      n.d(t, { Q: () => l });
      var i = n(308528),
        r = n(956549),
        a = n(859007);
      async function l(e) {
        let {
          appId: t,
          botId: n,
          analyticsLocations: l,
          customId: s,
          referrerId: o,
          commandOrigin: u,
        } = e;
        if ((0, a.y)({ applicationId: t })) return Promise.resolve(!0);
        let _ = await i.A.openPrivateChannel({ recipientIds: n });
        return await (0, r.A)({
          targetApplicationId: t,
          channelId: _,
          analyticsLocations: l,
          customId: s,
          referrerId: o,
          commandOrigin: u,
        });
      }
    },
    549699(e, t, n) {
      n.d(t, { Q: () => a }), n(323874), n(14289), n(35956);
      var i = n(636537),
        r = n(776231);
      function a(e, t, n) {
        let a = new URL(
          null != window.GLOBAL_ENV.CDN_HOST
            ? `${location.protocol}//${window.GLOBAL_ENV.CDN_HOST}/app-assets/${e}/${t.asset_id}.webp`
            : `${(0, i.TP)()}/applications/${e}/app-assets/${t.asset_id}.webp`,
        );
        return (
          null != n && a.searchParams.set("size", (0, r.kr)(n).toString()),
          t.metadata.is_animated && a.searchParams.set("animated", "true"),
          a.toString()
        );
      }
    },
    29496(e, t, n) {
      n.d(t, { A: () => u });
      var i = n(17928),
        r = n(228366);
      let a = new Map();
      function l(e) {
        let t = !1;
        return (
          [...Map.groupBy(e, (e) => e.application_id).entries()]
            .map((e) => {
              let [t, n] = e;
              return [
                t,
                n
                  .flatMap((e) => e.resolved_assets ?? [])
                  .filter((e) => {
                    let n;
                    return (
                      null == (n = a.get(t)?.[e.key]) ||
                      new Date(e.updated_at) > new Date(n.updated_at)
                    );
                  }),
              ];
            })
            .filter((e) => {
              let [t, n] = e;
              return n.length > 0;
            })
            .forEach((e) => {
              let [n, i] = e;
              return (
                (t = !0),
                a.set(n, {
                  ...a.get(n),
                  ...Object.fromEntries(i.map((e) => [e.key, e])),
                })
              );
            }),
          t
        );
      }
      function s(e) {
        return l(Object.values(e.configs).flat());
      }
      class o extends i.Ay.Store {
        static displayName = "ApplicationAssetsV2Store";
        getAssets(e) {
          return a.get(e);
        }
      }
      let u = new o(r.h, {
        LOGOUT: function () {
          a.clear();
        },
        APPLICATION_WIDGET_CONFIG_FETCH_SUCCESS: function (e) {
          return l(e.configs);
        },
        APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_SUCCESS: s,
        APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_SUCCESS: s,
      });
    },
    827785(e, t, n) {
      n.d(t, { Ez: () => b, gZ: () => G });
      var i = n(284009),
        r = n.n(i),
        a = n(989349),
        l = n.n(a),
        s = n(478437),
        o = n(715943),
        u = n(308528),
        _ = n(686956),
        E = n(720149),
        A = n(155718),
        c = n(838111),
        d = n(451909),
        I = n(135621),
        T = n(268761),
        N = n(393309),
        S = n(406704),
        p = n(253932),
        O = n(734057),
        C = n(576705),
        g = n(287809),
        R = n(927813),
        m = n(427262),
        h = n(392054),
        M = n(73510),
        f = n(652215),
        L = n(200700),
        y = n(381941),
        D = n(985018);
      let U = n(743361).A,
        P = (e, t) => e.find((e) => e.name === t)?.value,
        G = {
          [M.Ik.BUILT_IN]: {
            id: M.Ik.BUILT_IN,
            type: h.Hf.BUILT_IN,
            get name() {
              return D.intl.string(D.t.fI5MTa);
            },
          },
          [M.Ik.FRECENCY]: {
            id: M.Ik.FRECENCY,
            type: h.Hf.BUILT_IN,
            get name() {
              return D.intl.string(D.t["+cGVV6"]);
            },
          },
        },
        v = [
          ...U,
          {
            id: "-1",
            untranslatedName: "shrug",
            displayName: "shrug",
            type: A.kc.CHAT,
            inputType: h.y$.BUILT_IN_TEXT,
            applicationId: M.Ik.BUILT_IN,
            get untranslatedDescription() {
              return D.intl.string(D.t.j5xUSW);
            },
            get displayDescription() {
              return D.intl.string(D.t.j5xUSW);
            },
            options: [
              {
                name: "message",
                displayName: "message",
                type: A.n4.STRING,
                get description() {
                  return D.intl.string(D.t.JewOrS);
                },
                get displayDescription() {
                  return D.intl.string(D.t.JewOrS);
                },
              },
            ],
            execute: (e) => {
              let t = P(e, "message") ?? "";
              return { content: `${t} \xaf\\_(ツ)_/\xaf`.trim() };
            },
          },
          {
            id: "-2",
            untranslatedName: "tableflip",
            displayName: "tableflip",
            type: A.kc.CHAT,
            inputType: h.y$.BUILT_IN_TEXT,
            applicationId: M.Ik.BUILT_IN,
            get untranslatedDescription() {
              return D.intl.string(D.t.nrQRce);
            },
            get displayDescription() {
              return D.intl.string(D.t.nrQRce);
            },
            options: [
              {
                name: "message",
                displayName: "message",
                type: A.n4.STRING,
                get description() {
                  return D.intl.string(D.t.EI80tw);
                },
                get displayDescription() {
                  return D.intl.string(D.t.EI80tw);
                },
              },
            ],
            execute: (e) => {
              let t = P(e, "message") ?? "";
              return { content: `${t} (╯\xb0□\xb0)╯︵ ┻━┻`.trim() };
            },
          },
          {
            id: "-3",
            untranslatedName: "unflip",
            displayName: "unflip",
            type: A.kc.CHAT,
            inputType: h.y$.BUILT_IN_TEXT,
            applicationId: M.Ik.BUILT_IN,
            get untranslatedDescription() {
              return D.intl.string(D.t.pnnn8e);
            },
            get displayDescription() {
              return D.intl.string(D.t.pnnn8e);
            },
            options: [
              {
                name: "message",
                displayName: "message",
                type: A.n4.STRING,
                get description() {
                  return D.intl.string(D.t.ETs6go);
                },
                get displayDescription() {
                  return D.intl.string(D.t.ETs6go);
                },
              },
            ],
            execute: (e) => {
              let t = P(e, "message") ?? "";
              return { content: `${t} ┬─┬ノ( \xba _ \xbaノ)`.trim() };
            },
          },
          {
            id: "-4",
            untranslatedName: "tts",
            displayName: "tts",
            type: A.kc.CHAT,
            inputType: h.y$.BUILT_IN_TEXT,
            applicationId: M.Ik.BUILT_IN,
            get untranslatedDescription() {
              return D.intl.string(D.t.jZcIid);
            },
            get displayDescription() {
              return D.intl.string(D.t.jZcIid);
            },
            options: [
              {
                name: "message",
                displayName: "message",
                type: A.n4.STRING,
                get description() {
                  return D.intl.string(D.t["k+sw9g"]);
                },
                get displayDescription() {
                  return D.intl.string(D.t["k+sw9g"]);
                },
                required: !0,
              },
            ],
            predicate: (e) => {
              let { channel: t } = e;
              return (
                null != t &&
                !t.isPrivate() &&
                p.on.getSetting() &&
                C.A.can(f.xBc.SEND_TTS_MESSAGES, t)
              );
            },
            execute: (e) => ({ content: P(e, "message") ?? "", tts: !0 }),
          },
          {
            id: "-5",
            untranslatedName: "me",
            displayName: "me",
            type: A.kc.CHAT,
            inputType: h.y$.BUILT_IN_TEXT,
            applicationId: M.Ik.BUILT_IN,
            get untranslatedDescription() {
              return D.intl.string(D.t.UGO8fU);
            },
            get displayDescription() {
              return D.intl.string(D.t.UGO8fU);
            },
            options: [
              {
                name: "message",
                displayName: "message",
                type: A.n4.STRING,
                get description() {
                  return D.intl.string(D.t.RWTgNd);
                },
                get displayDescription() {
                  return D.intl.string(D.t.RWTgNd);
                },
                required: !0,
              },
            ],
            execute: (e) => {
              let t = P(e, "message") ?? "";
              return { content: `_${t}_` };
            },
          },
          {
            id: "-6",
            untranslatedName: "spoiler",
            displayName: "spoiler",
            type: A.kc.CHAT,
            inputType: h.y$.BUILT_IN_TEXT,
            applicationId: M.Ik.BUILT_IN,
            get untranslatedDescription() {
              return D.intl.string(D.t.v0eDdV);
            },
            get displayDescription() {
              return D.intl.string(D.t.v0eDdV);
            },
            options: [
              {
                name: "message",
                displayName: "message",
                type: A.n4.STRING,
                get description() {
                  return D.intl.string(D.t.D13pbc);
                },
                get displayDescription() {
                  return D.intl.string(D.t.D13pbc);
                },
                required: !0,
              },
            ],
            execute: (e) => {
              let t = P(e, "message") ?? "";
              return { content: (0, f.ZGg)(t).trim() };
            },
          },
          {
            id: "-7",
            untranslatedName: "nick",
            displayName: "nick",
            type: A.kc.CHAT,
            inputType: h.y$.BUILT_IN,
            applicationId: M.Ik.BUILT_IN,
            get untranslatedDescription() {
              return D.intl.string(D.t["jiHfS/"]);
            },
            get displayDescription() {
              return D.intl.string(D.t["jiHfS/"]);
            },
            options: [
              {
                name: "new_nick",
                displayName: "new_nick",
                type: A.n4.STRING,
                get description() {
                  return D.intl.string(D.t.WTSzVu);
                },
                get displayDescription() {
                  return D.intl.string(D.t.WTSzVu);
                },
                maxLength: f.zzC,
              },
            ],
            predicate: (e) => {
              let { channel: t } = e;
              return (
                null != t &&
                !t.isPrivate() &&
                (C.A.can(f.xBc.CHANGE_NICKNAME, t) ||
                  C.A.can(f.xBc.MANAGE_NICKNAMES, t))
              );
            },
            execute: (e, t) => {
              let { guild: n, channel: i } = t;
              if (null == n || null == i) return;
              let r = P(e, "new_nick") ?? "";
              o.A.changeNickname(n.id, i.id, f.ME, r || "");
            },
          },
          {
            id: "-10",
            untranslatedName: "thread",
            displayName: "thread",
            type: A.kc.CHAT,
            inputType: h.y$.BUILT_IN,
            applicationId: M.Ik.BUILT_IN,
            get untranslatedDescription() {
              return D.intl.string(D.t.t6ZAS0);
            },
            get displayDescription() {
              return D.intl.string(D.t.t6ZAS0);
            },
            options: [
              {
                name: "name",
                displayName: "name",
                type: A.n4.STRING,
                get description() {
                  return D.intl.string(D.t.TffOfY);
                },
                get displayDescription() {
                  return D.intl.string(D.t.TffOfY);
                },
                required: !0,
                maxLength: f.Ign,
              },
              {
                name: "message",
                displayName: "message",
                type: A.n4.STRING,
                get description() {
                  return D.intl.string(D.t.QXfSfU);
                },
                get displayDescription() {
                  return D.intl.string(D.t.QXfSfU);
                },
                get maxLength() {
                  return (0, I.a)();
                },
                required: !0,
              },
            ],
            predicate: (e) => {
              let { channel: t } = e;
              return null != t && (0, S.D1)(t);
            },
            execute: async (e, t) => {
              let { channel: n } = t,
                i = P(e, "name") ?? "",
                r = P(e, "message") ?? "",
                a = await (0, N.Nw)(
                  n,
                  i,
                  s.r.PUBLIC_THREAD,
                  (0, T.Gl)(n, null),
                  "Slash Command",
                );
              E.A.sendMessage(a.id, d.Ay.parse(a, r), !0, {
                location: y.Hx.THREAD_CREATION,
              });
            },
          },
          {
            id: "-11",
            untranslatedName: "kick",
            displayName: "kick",
            type: A.kc.CHAT,
            inputType: h.y$.BUILT_IN,
            applicationId: M.Ik.BUILT_IN,
            get untranslatedDescription() {
              return D.intl.string(D.t["03N0UL"]);
            },
            get displayDescription() {
              return D.intl.string(D.t["03N0UL"]);
            },
            options: [
              {
                name: "user",
                displayName: "user",
                type: A.n4.USER,
                get description() {
                  return D.intl.string(D.t.gF8IpD);
                },
                get displayDescription() {
                  return D.intl.string(D.t.gF8IpD);
                },
                required: !0,
              },
              {
                name: "reason",
                displayName: "reason",
                type: A.n4.STRING,
                get description() {
                  return D.intl.string(D.t.QWldgj);
                },
                get displayDescription() {
                  return D.intl.string(D.t.QWldgj);
                },
                required: !1,
              },
            ],
            predicate: (e) => {
              let { guild: t } = e;
              return C.A.can(f.xBc.KICK_MEMBERS, t);
            },
            execute: (e, t) => {
              let { guild: n, channel: i } = t;
              if (null == n || null == i) return;
              let r = P(e, "user") ?? "";
              C.A.canManageUser(f.xBc.KICK_MEMBERS, r, n)
                ? (async () => {
                    let t = g.default.getUser(r);
                    if (null == t) throw Error();
                    await _.A.kickUser(n.id, r, P(e, "reason") ?? ""),
                      E.A.sendBotMessage(
                        i.id,
                        D.intl.formatToPlainString(D.t["9wzHDV"], {
                          user: m.Ay.getUserTag(t),
                        }),
                      );
                  })().catch(() => {
                    E.A.sendBotMessage(i.id, D.intl.string(D.t.l0gNlp));
                  })
                : E.A.sendBotMessage(i.id, D.intl.string(D.t["6RIwPI"]));
            },
          },
          {
            id: "-12",
            untranslatedName: "ban",
            displayName: "ban",
            type: A.kc.CHAT,
            inputType: h.y$.BUILT_IN,
            applicationId: M.Ik.BUILT_IN,
            get untranslatedDescription() {
              return D.intl.string(D.t.HWuskv);
            },
            get displayDescription() {
              return D.intl.string(D.t.HWuskv);
            },
            options: [
              {
                name: "user",
                displayName: "user",
                type: A.n4.USER,
                get description() {
                  return D.intl.string(D.t.z3XPjr);
                },
                get displayDescription() {
                  return D.intl.string(D.t.z3XPjr);
                },
                required: !0,
              },
              {
                name: "delete_messages",
                displayName: "delete_messages",
                type: A.n4.INTEGER,
                get description() {
                  return D.intl.string(D.t.smrvA6);
                },
                get displayDescription() {
                  return D.intl.string(D.t.smrvA6);
                },
                required: !0,
                get choices() {
                  return [
                    {
                      name: D.intl.string(D.t["4obaMS"]),
                      displayName: D.intl.string(D.t["4obaMS"]),
                      value: 0,
                    },
                    {
                      name: D.intl.string(D.t.RKpitY),
                      displayName: D.intl.string(D.t.RKpitY),
                      value: R.A.Seconds.HOUR,
                    },
                    {
                      name: D.intl.string(D.t["8WfJZ8"]),
                      displayName: D.intl.string(D.t["8WfJZ8"]),
                      value: 6 * R.A.Seconds.HOUR,
                    },
                    {
                      name: D.intl.string(D.t.p1up7u),
                      displayName: D.intl.string(D.t.p1up7u),
                      value: 12 * R.A.Seconds.HOUR,
                    },
                    {
                      name: D.intl.string(D.t.XuVkkD),
                      displayName: D.intl.string(D.t.XuVkkD),
                      value: R.A.Seconds.DAY,
                    },
                    {
                      name: D.intl.string(D.t["gMcDS+"]),
                      displayName: D.intl.string(D.t["gMcDS+"]),
                      value: 3 * R.A.Seconds.DAY,
                    },
                    {
                      name: D.intl.string(D.t.FA7IUk),
                      displayName: D.intl.string(D.t.FA7IUk),
                      value: 7 * R.A.Seconds.DAY,
                    },
                  ];
                },
              },
              {
                name: "reason",
                displayName: "reason",
                type: A.n4.STRING,
                get description() {
                  return D.intl.string(D.t.dG4noU);
                },
                get displayDescription() {
                  return D.intl.string(D.t.dG4noU);
                },
                required: !1,
              },
            ],
            predicate: (e) => {
              let { guild: t } = e;
              return C.A.can(f.xBc.BAN_MEMBERS, t);
            },
            execute: (e, t) => {
              let { guild: n, channel: i } = t;
              if (null == n || null == i) return;
              let r = P(e, "user") ?? "";
              C.A.canManageUser(f.xBc.BAN_MEMBERS, r, n)
                ? (async () => {
                    if ("" === r) throw Error();
                    let t = P(e, "delete_messages") ?? 0,
                      a = P(e, "reason") ?? "",
                      l = g.default.getUser(r);
                    await _.A.banUser(n.id, r, t, a),
                      E.A.sendBotMessage(
                        i.id,
                        D.intl.formatToPlainString(D.t.YflWdM, {
                          user: null != l ? m.Ay.getUserTag(l) : r,
                        }),
                      );
                  })().catch(() => {
                    E.A.sendBotMessage(i.id, D.intl.string(D.t.w2J6Qs));
                  })
                : E.A.sendBotMessage(i.id, D.intl.string(D.t.R27LJl));
            },
          },
          {
            id: "-13",
            untranslatedName: "timeout",
            displayName: "timeout",
            type: A.kc.CHAT,
            inputType: h.y$.BUILT_IN,
            applicationId: M.Ik.BUILT_IN,
            get untranslatedDescription() {
              return D.intl.string(D.t.KkPcep);
            },
            get displayDescription() {
              return D.intl.string(D.t.KkPcep);
            },
            options: [
              {
                name: "user",
                displayName: "user",
                type: A.n4.USER,
                get description() {
                  return D.intl.string(D.t.UU3VRm);
                },
                get displayDescription() {
                  return D.intl.string(D.t.UU3VRm);
                },
                required: !0,
              },
              {
                name: "duration",
                displayName: "duration",
                type: A.n4.INTEGER,
                get description() {
                  return D.intl.string(D.t.SNqN1e);
                },
                get displayDescription() {
                  return D.intl.string(D.t.SNqN1e);
                },
                required: !0,
                get choices() {
                  return (0, L.ny)().map((e) => ({
                    ...e,
                    name: e.label,
                    displayName: e.label,
                  }));
                },
              },
              {
                name: "reason",
                displayName: "reason",
                type: A.n4.STRING,
                get description() {
                  return D.intl.string(D.t.akHScA);
                },
                get displayDescription() {
                  return D.intl.string(D.t.akHScA);
                },
                required: !1,
              },
            ],
            predicate: (e) => {
              let { guild: t } = e;
              return C.A.can(f.xBc.MODERATE_MEMBERS, t);
            },
            execute: (e, t) => {
              let { guild: n, channel: i } = t;
              if (null == n || null == i) return;
              let r = P(e, "user");
              (0, c.b)(n.id, r)
                ? (async () => {
                    let t = P(e, "duration") ?? "",
                      a = P(e, "reason") ?? "",
                      s = g.default.getUser(r);
                    if (null == s) throw Error();
                    await _.A.setCommunicationDisabledUntil({
                      guildId: n.id,
                      userId: r,
                      communicationDisabledUntilTimestamp: l()()
                        .add(t, "s")
                        .toISOString(),
                      duration: t,
                      reason: a,
                    }),
                      E.A.sendBotMessage(
                        i.id,
                        D.intl.formatToPlainString(D.t.BbRV6o, {
                          user: m.Ay.getUserTag(s),
                          duration: t,
                        }),
                      );
                  })().catch(() => {
                    E.A.sendBotMessage(i.id, D.intl.string(D.t["+mWyVq"]));
                  })
                : E.A.sendBotMessage(i.id, D.intl.string(D.t.F5pqSf));
            },
          },
          {
            id: "-14",
            untranslatedName: "msg",
            displayName: "msg",
            type: A.kc.CHAT,
            inputType: h.y$.BUILT_IN,
            applicationId: M.Ik.BUILT_IN,
            get untranslatedDescription() {
              return D.intl.string(D.t.Dg8XZw);
            },
            get displayDescription() {
              return D.intl.string(D.t.Dg8XZw);
            },
            options: [
              {
                name: "user",
                displayName: "user",
                type: A.n4.USER,
                get description() {
                  return D.intl.string(D.t["KmVq/D"]);
                },
                get displayDescription() {
                  return D.intl.string(D.t["KmVq/D"]);
                },
                required: !0,
              },
              {
                name: "message",
                displayName: "message",
                type: A.n4.STRING,
                get description() {
                  return D.intl.string(D.t.oGUuOJ);
                },
                get displayDescription() {
                  return D.intl.string(D.t.oGUuOJ);
                },
                required: !0,
                get maxLength() {
                  return (0, I.a)();
                },
              },
            ],
            execute: (e, t) => {
              let { channel: n } = t;
              if (null == n) return;
              let i = P(e, "user"),
                a = P(e, "message") ?? "";
              (async () => {
                await u.A.openPrivateChannel({ recipientIds: i }).then((e) => {
                  let t = O.A.getChannel(e);
                  r()(null != t, "Newly created PrivateChannel is null"),
                    E.A.sendMessage(t.id, d.Ay.parse(t, a), !0, {
                      location: y.Hx.PRIVATE_MESSAGE_COMMAND,
                    });
                });
              })().catch(() => {
                E.A.sendBotMessage(n.id, D.intl.string(D.t["3XaE95"]));
              });
            },
          },
        ],
        B = v.filter((e) =>
          [
            "gif",
            "tenor",
            "tts",
            "me",
            "tableflip",
            "unflip",
            "shrug",
            "spoiler",
            "nick",
          ].includes(e.untranslatedName),
        ),
        b = (e, t, n) => {
          let i = t ? v : B;
          return i.filter(
            (t) =>
              e.includes(t.type) &&
              (!n ||
                t.inputType === h.y$.BUILT_IN_TEXT ||
                t.inputType === h.y$.BUILT_IN_INTEGRATION),
          );
        };
    },
    188951(e, t, n) {
      n.d(t, { A: () => u });
      var i = n(64700),
        r = n(17928),
        a = n(253932),
        l = n(403362),
        s = n(382483),
        o = n(385113);
      function u(e) {
        let t = a.Q_.useSetting(),
          n = (0, r.bG)([o.A], () => o.A.getFeaturedFetchState()),
          u = (0, r.bG)([o.A], () => o.A.getDeveloperFetchState()),
          _ = (0, r.yK)([o.A], () =>
            e.filter((e) => o.A.getFetchState(e) === o.e.NOT_FETCHED),
          ),
          E = (0, r.yK)([o.A], () =>
            e.map((e) => o.A.getConfig(e)).filter(l.Vq),
          );
        return (
          i.useEffect(() => {
            (0, s.Wq)();
          }, []),
          i.useEffect(() => {
            t && (0, s.i$)();
          }, [t]),
          i.useEffect(() => {
            if (
              n !== o.e.NOT_FETCHED &&
              n !== o.e.FETCHING &&
              (!t || (u !== o.e.NOT_FETCHED && u !== o.e.FETCHING))
            )
              for (let e of _) (0, s.un)(e);
          }, [u, n, _, t]),
          E
        );
      }
    },
    934337(e, t, n) {
      n.d(t, { Bw: () => s, mZ: () => o, tq: () => l });
      var i = n(353640),
        r = n(121894);
      let a = (0, i.v)(() => ({ required: !1, checked: !1, preChecked: !1 })),
        l = (e) => {
          (0, r.r)(() => a.setState(e));
        },
        s = (e) => {
          (0, r.r)(() => a.setState({ checked: e }));
        },
        o = a;
    },
    551639(e, t, n) {
      n.d(t, { az: () => i });
      function i(e) {
        return null == e || 0 === e.length ? e : "⁨" + e + "⁩";
      }
    },
    90575(e, t, n) {
      n.d(t, { A: () => i });
      function i(e, t) {
        return `${e.toLowerCase().padEnd(32, "!")}${t.id}`;
      }
    },
    898461(e, t, n) {
      n.d(t, { A: () => l, T: () => a });
      var i = n(575593),
        r = n(149807);
      let a = (e) => e instanceof l;
      class l extends r.A {
        asset;
        label;
        constructor(e) {
          super(e),
            (this.type = i.R.AVATAR_DECORATION),
            (this.asset = e.asset),
            (this.label = e.label);
        }
        static fromServer(e) {
          return new l({ ...super.fromServer(e), ...e });
        }
      }
    },
    203632(e, t, n) {
      n.d(t, { Ay: () => o, C3: () => s, HL: () => l });
      var i,
        r = n(575593),
        a = n(149807),
        l = (((i = {}).FromLoop = "fromLoop"), (i.FromStart = "fromStart"), i);
      let s = (e) => e instanceof o;
      class o extends a.A {
        title;
        description;
        accessibilityLabel;
        reducedMotionSrc;
        thumbnailPreviewSrc;
        effects;
        animationType;
        staticFrameSrc;
        constructor(e) {
          super(e),
            (this.type = r.R.PROFILE_EFFECT),
            (this.title = e.title),
            (this.description = e.description),
            (this.accessibilityLabel = e.accessibilityLabel),
            (this.reducedMotionSrc = e.reducedMotionSrc),
            (this.thumbnailPreviewSrc = e.thumbnailPreviewSrc),
            (this.effects = e.effects),
            (this.animationType = e.animationType),
            (this.staticFrameSrc = e.staticFrameSrc);
        }
        static fromServer(e) {
          return new o({ ...super.fromServer(e), ...e });
        }
      }
    },
    892118(e, t, n) {
      n.d(t, { A: () => l, s: () => a });
      var i = n(575593),
        r = n(149807);
      let a = (e) => e instanceof l;
      class l extends r.A {
        label;
        layers;
        constructor(e) {
          super(e),
            (this.type = i.R.PROFILE_FRAME),
            (this.label = e.label),
            (this.layers = e.layers);
        }
        static fromServer(e) {
          return new l({ ...super.fromServer(e), ...e });
        }
      }
    },
    945041(e, t, n) {
      n.d(t, { Uq: () => i });
      let i = (0, n(353640).v)(() => ({ isEnabled: !1, settings: {} }));
    },
    21161(e, t, n) {
      n.d(t, { k: () => E, x: () => _ });
      var i = n(627968),
        r = n(64700),
        a = n(106778),
        l = n(702841),
        s = n(775602),
        o = n(652215);
      let u = {
          confettiCanvas: null,
          cannon: null,
          createConfetti: () => void 0,
          createConfettiAt: () => void 0,
          createMultipleConfetti: () => [],
          createMultipleConfettiAt: () => [],
          addClickListener: () => o.tEg,
          removeClickListener: o.tEg,
        },
        _ = r.createContext(u);
      function E(e) {
        let {
            children: t,
            confettiCanvas: n,
            spriteCanvas: o,
            baseConfig: E,
            addClickListener: A,
            removeClickListener: c,
          } = e,
          d = (0, a.f9)(n, o),
          I = (0, l.bG)([s.A], () => s.A.useReducedMotion),
          T = r.useMemo(
            () =>
              I
                ? u
                : {
                    confettiCanvas: n,
                    cannon: d,
                    createConfetti: (e, t) =>
                      d.createConfetti({ ...E, ...e }, t),
                    createConfettiAt: (e, t, n, i) =>
                      d.createConfetti(
                        {
                          ...E,
                          position: { type: "static", value: { x: e, y: t } },
                          ...n,
                        },
                        i,
                      ),
                    createMultipleConfetti: function (e) {
                      let t =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : 20,
                        n = arguments.length > 2 ? arguments[2] : void 0;
                      return d.createMultipleConfetti({ ...E, ...e }, t, n);
                    },
                    createMultipleConfettiAt: function (e, t, n) {
                      let i =
                          arguments.length > 3 && void 0 !== arguments[3]
                            ? arguments[3]
                            : 20,
                        r = arguments.length > 4 ? arguments[4] : void 0;
                      return d.createMultipleConfetti(
                        {
                          ...E,
                          position: { type: "static", value: { x: e, y: t } },
                          ...n,
                        },
                        i,
                        r,
                      );
                    },
                    addClickListener: A,
                    removeClickListener: c,
                  },
            [A, E, d, n, I, c],
          );
        return (0, i.jsx)(_.Provider, { value: T, children: t });
      }
    },
    851110(e, t, n) {
      n.d(t, {
        Mw: () => o,
        XA: () => u,
        _t: () => a,
        dR: () => r,
        uI: () => l,
        wn: () => s,
      });
      var i = n(106778);
      let r = n(316892),
        a = [
          "#FF73FA",
          "#FFC0FF",
          "#FFD836",
          "#FF9A15",
          "#A5F7DE",
          "#51BC9D",
          "#AEC7FF",
          "#3E70DD",
        ],
        l = [
          n(816231),
          r,
          n(308048),
          n(788657),
          n(465572),
          n(829495),
          n(569883),
          { src: n(762068), colorize: !1 },
        ],
        s = 28,
        o = {
          velocity: {
            type: "static-random",
            minValue: { x: 30, y: -80 },
            maxValue: { x: -30, y: -180 },
          },
          rotation: {
            type: "linear-random",
            minValue: 0,
            maxValue: 360,
            minAddValue: -25,
            maxAddValue: 25,
          },
          size: { type: "static-random", minValue: 14, maxValue: 28 },
        },
        u = new i.OH();
    },
    902811(e, t, n) {
      n.d(t, { A: () => m }), n(667532);
      var i = n(627968),
        r = n(64700),
        a = n(462887),
        l = n(38021),
        s = n(844222),
        o = n(552122),
        u = n(676279),
        _ = n(607470),
        E = n(652215),
        A = n(40180),
        c = n(770359),
        d = n(986208),
        I = n(609069),
        T = n(460860),
        N = n(734607),
        S = n(724875),
        p = n(540085);
      function O(e) {
        let {
            movDark: t = A,
            movLight: n = T,
            mp4Dark: r = c,
            mp4Light: a = N,
            pngDark: l = d,
            pngLight: s = S,
            webmDark: o = I,
            webmLight: _ = p,
          } = e,
          O = (0, u.Z5)(),
          C = [
            (0, i.jsx)("source", { src: r, type: "video/mp4" }, "mp4"),
            (0, i.jsx)("img", { alt: "", src: l }, "png"),
          ],
          g = [
            (0, i.jsx)("source", { src: a, type: "video/mp4" }, "mp4"),
            (0, i.jsx)("img", { alt: "", src: s }, "png"),
          ];
        return (
          (O > 52 || -1 === O) &&
            (C.unshift(
              (0, i.jsx)("source", { src: o, type: "video/webm" }, "webm"),
            ),
            g.unshift(
              (0, i.jsx)("source", { src: _, type: "video/webm" }, "webm"),
            )),
          (0, u.TM)() &&
            (C.unshift(
              (0, i.jsx)("source", { src: t, type: "video/mp4" }, "hevc"),
            ),
            g.unshift(
              (0, i.jsx)("source", { src: n, type: "video/mp4" }, "hevc"),
            )),
          { [E.NJ8.DARK]: C, [E.NJ8.LIGHT]: g }
        );
      }
      let C = o.A.getAppSpinnerSources(),
        g = null != C ? O(C) : null,
        R = O({}),
        m = (e) => {
          let {
              loop: t = !0,
              autoPlay: n = !0,
              setRef: o,
              className: u,
              onReady: A,
            } = e,
            { theme: c } = (0, l.wR)(),
            { reducedMotion: d } = r.useContext(s.C),
            I = R;
          null != g && (I = g);
          let T = I[(0, a.M)(c) ? E.NJ8.DARK : E.NJ8.LIGHT] ?? I[E.NJ8.DARK];
          return (0, i.jsx)(
            _.A,
            {
              ref: o,
              onLoadedData: A,
              className: u,
              loop: !d.enabled && t,
              autoPlay: !d.enabled && n,
              playsInline: !0,
              "data-testid": "app-spinner",
              children: T,
            },
            c,
          );
        };
    },
    298063(e, t, n) {
      n.d(t, { Y: () => r });
      let i = (0, n(945810).mj)({
        name: "2025-11-mana-context-menu",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
      });
      function r(e) {
        return i.useConfig({ location: e }).enabled;
      }
    },
    787925(e, t, n) {
      n.d(t, { C: () => r });
      var i = n(554146);
      let r = new Set([
        i.M.APPLICATION_COMMAND_TOOLTIP,
        i.M.NOW_PLAYING_CONSENT_CARD,
        i.M.GUILD_INSIGHTS_ACCESS_RATE_NEW,
        i.M.FORUM_CHANNEL_UPSELL_MODAL,
        i.M.FORUM_CHANNEL_HELPER_CARD,
        i.M.COMMANDS_MIGRATION_UPSELL_MODAL,
        i.M.CHANNEL_BROWSER_NUX,
        i.M.BLACK_FRIDAY_2022_BOGO_ANNOUNCEMENT_MODAL,
        i.M.GG_ANNOUNCEMENT,
        i.M.GUILD_ONBOARDING_UPSELL_MODAL,
        i.M.CLIENT_THEMES_SETTINGS_BADGE,
        i.M.CLIENT_THEMES_SPARKLE_PREVIEW,
        i.M.CLIENT_THEMES_APPEARANCE_SETTINGS_NEW_BADGE,
        i.M.QUEST_1_COMPLETION_TOOLTIP,
        i.M.GUEST_VOICE_INVITES_MENU_ITEM_NEW_BADGE,
        i.M.CUSTOM_CALL_SOUNDS_PICKER_UPSELL,
        i.M.CLIPS_ONBOARDING_CLIP_BUTTON_COACHMARK,
        i.M.CUSTOM_APP_ICONS_NEW_BADGE,
        i.M.DEKSTOP_CUSTOM_APP_ICON_BADGE,
        i.M.RECURRING_CONTACT_SYNC_PROMPT,
        i.M.NUX_GUILD_CHANNEL_EXPLAINER,
        i.M.SUPER_REACTION_TOGGLE_EDUCATION_MOBILE,
        i.M.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP,
        i.M.FRIEND_FINDER_CONTACTS_IN_NOTIFICATIONS,
        i.M.VOICE_CALL_BG_PICKER_NEW_BADGE,
        i.M.WHATS_NEW_TENURE_BADGE_REWARD,
        i.M.APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER,
        i.M.APP_LAUNCHER_ONBOARDING_APPS_BANNER,
        i.M.APP_LAUNCHER_ONBOARDING_BOTS_BANNER,
        i.M.CHANNEL_LIST_CLAN_ADMIN_UPSELL,
        i.M.GUILD_LIST_CLAN_ADMIN_UPSELL,
        i.M.BRAND_REFRESH_NEW_BADGE,
        i.M.BRAND_REFRESH_CLIENT_THEME_BADGE,
        i.M.APP_LAUNCHER_USER_APP_BETA_NOTICE,
        i.M.QUEST_HOME_FRIENDS_LIST_NEW_BADGE,
        i.M.QUEST_HOME_ENTRYPOINT_TAKEOVER_BADGE,
        i.M.WHATS_NEW_APP_STYLES_JUNE_2024_FLIP,
        i.M.WHATS_NEW_REFERRAL_PROGRAM_FLIP,
        i.M.WHATS_NEW_APP_STYLES_JUNE_2024_NITRO_BADGE,
        i.M.WHATS_NEW_REFERRAL_PROGRAM_NITRO_BADGE,
        i.M.WHATS_NEW_SERVER_PROFILE_FLIP,
        i.M.WHATS_NEW_SERVER_PROFILE_BADGE,
        i.M.ICYMI_ALPHA_UPSELL,
        i.M.PASSWORDLESS_UPSELL,
        i.M.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP,
        i.M.REVERSE_TRIAL_NITRO_TAB_BADGE,
        i.M.REVERSE_TRIAL_STREAM_POPOUT,
        i.M.REVERSE_TRIAL_EMOJI_BUTTON,
        i.M.REVERSE_TRIAL_EMOJI_PICKER,
        i.M.TRIAL_FOR_ALL_INITIAL_UPSELL,
        i.M.TRIAL_FOR_ALL_MOBILE_SETTINGS_NOTICE,
        i.M.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS,
        i.M.FRACTIONAL_NITRO_DURATION_LEFT_PILL,
        i.M.RESTRICTED_ACCOUNTS_SETTING_NOTICE,
        i.M.SOUNDMOJI_BADGE,
        i.M.TRIAL_NUX_EMOJI_BUTTON,
        i.M.TRIAL_NUX_EMOJI_PICKER,
        i.M.TRIAL_NUX_STREAM_COACH_MARK,
        i.M.VIRTUAL_CURRENCY_ONBOARDING_ANNOUNCEMENT_MODAL,
        i.M.VIRTUAL_CURRENCY_DISCOVERY_ONBOARDING_COACHMARK,
        i.M.VIRTUAL_CURRENCY_SHOP_ONBOARDING_COACHMARK,
        i.M.GUILD_POWERUPS_OVERVIEW_SIDEBAR_COACHMARK,
        i.M.GUILD_POWERUPS_OVERVIEW_SIDEBAR_VIDEO_CARD,
        i.M.RECENT_AVATARS_SETTINGS_PROFILE_PAGE_NEW_BADGE,
        i.M.REPORT_TO_MOD_NEW_TAG,
        i.M.VIRTUAL_CURRENCY_MOBILE_ONBOARDING_PILL,
        i.M.OVERLAY_OOP_SETTINGS_NUX,
        i.M.OVERLAY_OOP_WELCOME_BACKGROUND_NUX,
        i.M.OVERLAY_OOP_WELCOME_BACKGROUND_SWITCH_FROM_IP_NUX,
        i.M.OVERLAY_OOP_WELCOME_NUX,
        i.M.OVERLAY_OOP_WELCOME_SWITCH_FROM_IP_NUX,
        i.M.REVERSE_TRIAL_NITRO_TAB_BADGE_V2,
        i.M.ML_REVERSE_TRIAL_UPSELL_MODAL,
        i.M.ML_REVERSE_TRIAL_FOLLOWUP_UPSELL_MODAL,
        i.M.RING_USER_TO_VC_NEW_BADGE,
        i.M.DESKTOP_REFRESH_ONBOARDING_MODAL,
        i.M.CUSTOM_THEME_ENTRYPOINT_NEW_BADGE,
        i.M.CUSTOM_THEME_ENTRYPOINT_GRADIENT,
        i.M.MOBILE_BOGO_PROMOTION_ACTION_SHEET,
        i.M.GOOGLE_PLAY_PRICE_CHANGE_ACTION_SHEET,
        i.M.FAMILY_CENTER_NEW_BADGE,
        i.M.RECENT_AVATARS_SETTINGS_MENU_NEW_BADGE,
        i.M.DISPLAY_NAME_STYLES_MOBILE_NEW_BADGE,
        i.M.NEW_CRUNCHYROLL_CONNECTION,
        i.M.BOGO_2025_NITRO_TAB_BADGE,
        i.M.BOGO_2025_ANNOUNCEMENT_MODAL,
        i.M.COLLECTIBLES_SHOP_ENTRY_MARKETING,
        i.M.NAGBAR_NOTICE_OFFER_EXPIRING,
        i.M.CLOUD_PLAY_NEW_BADGE,
        i.M.VANITY_URL_POWERUP_ROLLBACK_NOTIFICATION,
        i.M.CUSTOM_THEMES_NITRO_HOME_TILE,
        i.M.CHURN_DISCOUNT_PREMIUM_TAB_BADGE,
        i.M.CHURN_DISCOUNT_PREMIUM_TAB_COACHMARK,
        i.M.DOUBLE_TAP_TO_REACT_UPSELL,
        i.M.WISHLIST_NUX_TOOLTIP_AND_MODAL,
        i.M.WISHLIST_MOBILE_NUX_ACTION_SHEET,
        i.M.ACCOUNT_LINK_INVITE_FRIENDS,
        i.M.POST_ACCOUNT_CONNECTION_RTC_POPOVER,
        i.M.GAME_SERVER_HOSTING_PORTKEY_TOS,
        i.M.GAME_SERVER_HOSTING_NEW_BADGE,
        i.M.GAME_SERVER_GAME_DETECTION_UPSELL_NEW_BADGE,
        i.M.APPLICATION_WIDGET_EDIT_PROFILE_NEW_BADGE,
        i.M.APPLICATION_WIDGET_EMPTY_STATE_CARD_CONNECT,
        i.M.APPLICATION_WIDGET_EMPTY_STATE_CARD_ADD_WIDGET,
        i.M.APPLICATION_WIDGET_WUWA_SUGGESTED_WIDGET,
        i.M.NITRO_TAB_BADGE_OFFER_REMINDER,
        i.M.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE,
        i.M.CHECKPOINT_2025_BOTTOM_SHEET,
        i.M.DISCOUNT_OFFER_ACTION_SHEET,
        i.M.MOBILE_PREMIUM_TRIAL_OFFER_ACTION_SHEET,
        i.M.COLLECTIBLES_SHOP_WIDE_BANNER,
        i.M.CHECKPOINT_2025_DESKTOP_UPSELL,
        i.M.GAME_SHOP_NEW_BADGE,
        i.M.GAME_SHOP_RTC_GIFTING_NEW_BADGE,
        i.M.ORB_RENTAL_NEW_BADGE,
        i.M.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL,
        i.M.TRIAL_FOR_ALL_2026_SETTINGS_BADGE,
        i.M.GAME_SHOP_ORBS_REWARD_BANNER,
        i.M.SLAYER_STOREFRONT_ORBS_REWARD_WISHLIST_UPSELL,
        i.M.SLAYER_STOREFRONT_VC_GIFTING_STREAM_HEADER_NEW_BADGE,
        i.M.SLAYER_STOREFRONT_VC_GIFTING_PANEL_APP_WIDGET_CTA,
        i.M.FAVORITES_SERVER_ONBOARDING_INTRO,
        i.M.FAVORITES_GUILD_NEW_BADGE,
        i.M.GIFT_INTENT_MESSAGE,
        i.M.EMPTY_GAME_SERVER_TAB,
        i.M.USER_PROFILE_WISHLIST_RECOMMENDATIONS,
        i.M.QUEST_ACTIVITY_HEADER_INTRO,
        i.M.FIRST_BOOSTER_UPSELL_OVERSEER,
        i.M.MOBILE_MULTI_GUILD_CREATE_UPSELL_ANIMATION,
        i.M.APRIL_FOOLS_2026_COACHMARK,
        i.M.PRIVATE_PROFILE_INLINE_NOTICE,
        i.M.QUEST_HOME_NEW_QUEST_BADGE,
        i.M.PREMIUM_MARKETING_MOMENT_USER_SETTINGS_OFFER_BADGE,
        i.M.PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL,
        i.M.PIN_CHANNEL_NEW_BADGE,
        i.M.COLLECTIBLES_PROFILE_FRAMES_ANNOUNCEMENT,
      ]);
    },
    625180(e, t, n) {
      n.d(t, { A: () => _ });
      var i = n(523527),
        r = n(267102),
        a = n(567249),
        l = n(574172),
        s = n(494126),
        o = n(652215);
      async function u(e) {
        let t = (0, r.zd)();
        a.A.getWindowOpen(o.MLl.ACTIVITY_POPOUT) &&
          (0, l.close)(o.MLl.ACTIVITY_POPOUT),
          await s.launchFrame(e),
          t === o.BRT.POPOUT && (0, i.A)();
      }
      let _ = { ...s, launchFrame: u };
    },
    165610(e, t, n) {
      n.d(t, { y: () => r });
      var i,
        r =
          (((i = {})[(i.FOCUSED = 0)] = "FOCUSED"),
          (i[(i.PIP = 1)] = "PIP"),
          i);
    },
    91242(e, t, n) {
      n.d(t, { A: () => d });
      var i = n(17928),
        r = n(228366),
        a = n(956518),
        l = n(165610),
        s = n(5867);
      let o = null,
        u = new Map(),
        _ = new Map(),
        E = new Map(),
        A = new Map();
      class c extends i.Ay.Store {
        static displayName = "FramesStore";
        getConnectedFrame() {
          return o;
        }
        getFrameLayoutMode() {
          return o?.layoutMode;
        }
        getActivityPanelMode() {
          return o?.activityPanelMode ?? s.Gd.DISCONNECTED;
        }
        isFrameActive() {
          return null != o;
        }
        isLaunchingFrame(e) {
          return null != e ? (u.get(e) ?? !1) : u.size > 0;
        }
        isProxyTicketRefreshing(e) {
          return _.has(e);
        }
        getOrientationLockStateForApp(e) {
          return E.get(e);
        }
        getPipOrientationLockStateForApp(e) {
          return A.get(e) ?? this.getOrientationLockStateForApp(e);
        }
      }
      let d = new c(r.h, {
        FRAME_LAUNCH_START: function (e) {
          let { applicationId: t } = e;
          u.set(t, !0);
        },
        FRAME_LAUNCH: function (e) {
          let { applicationId: t, proxyTicket: n } = e,
            i = (0, a.Ay)(t);
          null == i
            ? u.delete(t)
            : (u.delete(t),
              (o = {
                applicationId: t,
                url: i,
                connectedSince: Date.now(),
                layoutMode: l.y.FOCUSED,
                activityPanelMode: s.Gd.PANEL,
                proxyTicket: n,
              }));
        },
        FRAME_LAUNCH_FAIL: function (e) {
          let { applicationId: t } = e;
          u.delete(t);
        },
        FRAME_STOP: function (e) {
          let { applicationId: t } = e;
          o?.applicationId === t && (o = null);
        },
        FRAME_UPDATE_LAYOUT_MODE: function (e) {
          let { applicationId: t, layoutMode: n } = e;
          o?.applicationId === t && (o = { ...o, layoutMode: n });
        },
        FRAME_SET_PANEL_MODE: function (e) {
          let { activityPanelMode: t } = e;
          null != o && (o = { ...o, activityPanelMode: t });
        },
        FRAME_SET_ORIENTATION_LOCK_STATE: function (e) {
          let {
            applicationId: t,
            lockState: n,
            pictureInPictureLockState: i,
          } = e;
          null == n ? E.delete(t) : E.set(t, n),
            null === i ? A.delete(t) : void 0 !== i && A.set(t, i);
        },
        FRAME_SET_PROXY_TICKET_REFRESHING: function (e) {
          let { applicationId: t, refreshing: n } = e;
          n ? _.set(t, !0) : _.delete(t);
        },
        FRAME_UPDATE_PROXY_TICKET: function (e) {
          let { applicationId: t, proxyTicket: n } = e;
          o?.applicationId === t && (o = { ...o, proxyTicket: n });
        },
        CHANNEL_SELECT: function (e) {
          return (
            null != o &&
            o.layoutMode !== l.y.PIP &&
            ((o = { ...o, layoutMode: l.y.PIP }), !0)
          );
        },
      });
    },
    108713(e, t, n) {
      n.d(t, {
        Fc: () => g,
        JS: () => C,
        Jm: () => M,
        Uc: () => h,
        VP: () => y,
        VR: () => R,
        ZG: () => p,
        m9: () => O,
      }),
        n(321073);
      var i = n(216348),
        r = n(213270),
        a = n(636537),
        l = n(228366),
        s = n(157559),
        o = n(409826),
        u = n(763827),
        _ = n(528767),
        E = n(954571),
        A = n(38405),
        c = n(124697),
        d = n(643501),
        I = n(350701),
        T = n(652215),
        N = n(985018);
      function S(e, t) {
        E.default.track(T.HAw.REMOTE_COMMAND_SENT, {
          command_type: e,
          remote_platform: _.A.getSessionById(t)?.clientInfo?.os,
        });
      }
      async function p() {
        var e;
        let t = d.default.getAwaitingRemoteSessionInfo(),
          n = t?.nonce;
        l.h.dispatch({ type: "REMOTE_SESSION_DISCONNECT" });
        let i = [];
        (t?.type === T.fg2.PLAYSTATION ||
          t?.type === T.fg2.PLAYSTATION_STAGING) &&
          t?.commandId != null &&
          t?.deviceId != null &&
          i.push(L(t.type, t.deviceId, t.commandId)),
          null != n &&
            i.push(
              ((e = n),
              a.Bo.del({ url: T.Rsh.CONNECT_REQUEST(e), rejectWithError: !1 })),
            );
        try {
          await Promise.all(i);
        } catch (e) {
          s.A.show({
            title: N.intl.string(N.t.LNhXcL),
            body: N.intl.string(N.t.QnKxtP),
          });
        }
      }
      function O(e) {
        l.h.dispatch({ type: "REMOTE_SESSION_CONNECT", sessionId: e });
      }
      function C(e, t) {
        let { selfMute: n, selfDeaf: i } = t;
        l.h.dispatch({
          type: "REMOTE_COMMAND",
          sessionId: e,
          payload: { type: "VOICE_STATE_UPDATE", self_mute: n, self_deaf: i },
        }),
          S("VOICE_STATE_UPDATE", e);
      }
      function g(e) {
        l.h.dispatch({
          type: "REMOTE_COMMAND",
          sessionId: e,
          payload: { type: "DISCONNECT" },
        }),
          S("DISCONNECT", e),
          p();
      }
      function R(e, t, n, i) {
        let r = (0, o.o)(n);
        null != r &&
          (l.h.dispatch({
            type: "REMOTE_COMMAND",
            sessionId: e,
            payload: { type: "AUDIO_SETTINGS_UPDATE", context: r, id: t, ...i },
          }),
          S("AUDIO_SETTINGS_UPDATE", e));
      }
      async function m() {
        let e;
        try {
          let t =
            null != u.A.getRTCConnectionId()
              ? r.g.TRANSFER_EXISTING_CALL
              : r.g.CREATE_NEW_CALL;
          e = (
            await a.Bo.post({
              url: T.Rsh.CONNECT_REQUEST_CREATE,
              body: { analytics_properties: { handoff_type: t } },
              rejectWithError: !1,
            })
          ).body.nonce;
        } catch (e) {
          A.A.captureException(e);
        }
        return e;
      }
      async function h(e) {
        let t;
        l.h.dispatch({ type: "GAME_CONSOLE_FETCH_DEVICES_START", platform: e });
        try {
          t = await a.Bo.get({
            url: T.Rsh.CONSOLES_DEVICES(e),
            rejectWithError: !1,
          });
        } catch (t) {
          throw (
            (l.h.dispatch({
              type: "GAME_CONSOLE_FETCH_DEVICES_FAIL",
              platform: e,
              error: t,
            }),
            t)
          );
        }
        let n = t.body.devices;
        return (
          l.h.dispatch({
            type: "GAME_CONSOLE_FETCH_DEVICES_SUCCESS",
            platform: e,
            devices: n,
          }),
          n
        );
      }
      function M(e, t) {
        l.h.dispatch({
          type: "GAME_CONSOLE_SELECT_DEVICE",
          platform: e,
          deviceId: t,
        });
      }
      async function f(e, t, n, r) {
        let s;
        l.h.dispatch({
          type: "GAME_CONSOLE_DEVICE_SEND_COMMAND_START",
          platform: e,
        });
        try {
          s = await a.Bo.post({
            url: T.Rsh.CONSOLES_DEVICES_COMMANDS(e, t),
            body: {
              command: i.O.CONNECT_VOICE,
              channel_id: n.id,
              guild_id: n.guild_id,
              nonce: r,
            },
            rejectWithError: !1,
          });
        } catch (t) {
          throw (
            (l.h.dispatch({
              type: "GAME_CONSOLE_DEVICE_SEND_COMMAND_FAIL",
              platform: e,
              error: t,
            }),
            t)
          );
        }
        let o = s.body.id;
        return (
          l.h.dispatch({
            type: "WAIT_FOR_REMOTE_SESSION",
            sessionType: e,
            nonce: r,
            channelId: n.id,
            deviceId: t,
            commandId: o,
          }),
          o
        );
      }
      async function L(e, t, n) {
        l.h.dispatch({
          type: "GAME_CONSOLE_DEVICE_CANCEL_COMMAND_START",
          platform: e,
          deviceId: t,
          commandId: n,
        });
        try {
          await a.Bo.del({
            url: T.Rsh.CONSOLES_DEVICES_COMMAND(e, t, n),
            rejectWithError: !1,
          });
        } catch (i) {
          throw (
            (l.h.dispatch({
              type: "GAME_CONSOLE_DEVICE_CANCEL_COMMAND_FAIL",
              platform: e,
              deviceId: t,
              commandId: n,
              error: i,
            }),
            i)
          );
        }
        l.h.dispatch({
          type: "GAME_CONSOLE_DEVICE_CANCEL_COMMAND_SUCCESS",
          platform: e,
          deviceId: t,
          commandId: n,
        });
      }
      async function y(e, t, n) {
        await c.A.maybeShowPTTAlert(e), await p();
        let i = await m();
        await f(e, t, n, i), (0, I.A)(n.id, e);
      }
    },
    973522(e, t, n) {
      n.d(t, { Ic: () => s, PQ: () => u, wH: () => o });
      var i = n(871633),
        r = n(760751),
        a = n(723702);
      function l(e) {
        return (e = e.toLowerCase()).endsWith("/") && (e = e.slice(0, -1)), e;
      }
      function s(e) {
        return l(e).split("/").slice(-2).join("/");
      }
      function o(e) {
        if (null == e)
          return {
            gameName: void 0,
            gameId: void 0,
            exe: void 0,
            distributor: void 0,
            sku: void 0,
            gameMetadata: void 0,
            rawExePath: void 0,
          };
        let t = "exePath" in e ? e.exePath : e.exe,
          n = {
            id: e.id ?? void 0,
            name: e.name ?? void 0,
            exePath: t ?? "",
            cmdLine: t ?? "",
            lastFocused: 0,
          },
          a = r.A.findGame(n);
        return {
          gameName: e.name ?? void 0,
          gameId: e.id ?? a?.id ?? void 0,
          exe: null != t ? s(t) : void 0,
          distributor: e.distributor ?? void 0,
          sku: e.sku ?? void 0,
          gameMetadata: null != e ? (0, i.MT)(e) : void 0,
          rawExePath: t,
        };
      }
      function u(e, t) {
        if (null == e || null == t) return !1;
        let n = l(e),
          i = (0, a.getPlatformName)();
        return t.some((e) => e.os === i && n?.endsWith(e.name));
      }
    },
    316031(e, t, n) {
      function i(e) {
        return null != e && new Date(e) > new Date();
      }
      function r(e) {
        return i(e?.communicationDisabledUntil);
      }
      n.d(t, { Z: () => r, n: () => i });
    },
    942075(e, t, n) {
      n.d(t, {
        WC: () => E,
        eb: () => d,
        g6: () => I,
        gw: () => _,
        xH: () => T,
        y4: () => N,
      });
      var i = n(58149),
        r = n(936555),
        a = n(71393),
        l = n(287809);
      n(935208), n(226139);
      var s = n(652215),
        o = n(985018);
      function u(e) {
        return e;
      }
      function _(e) {
        let {
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: i,
            guildId: r,
            roleSubscriptionData: a,
          } = e,
          { content: l, formatParams: s } = c({
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: i,
            guildId: r,
            roleSubscriptionData: a,
          });
        return o.intl.format(l, s);
      }
      function E(e) {
        let {
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: i,
            guildId: r,
            roleSubscriptionData: a,
          } = e,
          { content: l, formatParams: s } = c({
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: i,
            guildId: r,
            roleSubscriptionData: a,
          });
        return o.intl.formatToParts(l, s);
      }
      function A(e, t) {
        let n = a.A.getGuild(e),
          i = t?.total_months_subscribed ?? 0;
        return {
          guild: n,
          totalMonthsSubscribed: i,
          showWithDuration: i > 0,
          isRenewal: t?.is_renewal ?? !1,
        };
      }
      function c(e) {
        let {
            username: t,
            usernameOnClickHandler: n = u,
            roleSubscriptionOnClickHandler: i = s.tEg,
            guildId: r,
            roleSubscriptionData: a,
          } = e,
          {
            guild: l,
            totalMonthsSubscribed: _,
            showWithDuration: E,
            isRenewal: c,
          } = A(r, a);
        return {
          content: E
            ? c
              ? o.t.Iy66M7
              : o.t.eCgb2W
            : c
              ? o.t.mPTTdv
              : o.t.mYjFFx,
          formatParams: {
            username: t,
            usernameHook: n,
            guildName: l?.name,
            handleGuildNameClick: i,
            tierName: a?.tier_name,
            months: _,
          },
        };
      }
      function d(e) {
        let t,
          {
            username: n,
            usernameOnClickHandler: i = u,
            roleSubscriptionOnClickHandler: r = s.tEg,
            guildId: a,
            roleSubscriptionData: l,
          } = e,
          {
            guild: _,
            totalMonthsSubscribed: E,
            showWithDuration: c,
            isRenewal: d,
          } = A(a, l);
        return (
          (t = c
            ? d
              ? o.t.OQ0OUy
              : o.t["+N9bxq"]
            : d
              ? o.t.OxP1NC
              : o.t["6Z1E+7"]),
          o.intl.formatToParts(t, {
            guildName: _?.name,
            tierName: l?.tier_name,
            username: n,
            usernameOnClick: i,
            roleSubscriptionOnClick: r,
            months: E,
          })
        );
      }
      function I(e) {
        return (0, r.w)(e);
      }
      function T(e, t, n, r) {
        i.Ay.trackWithMetadata(
          s.HAw.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CLICKED,
          {
            guild_id: e,
            user_id: l.default.getCurrentUser()?.id,
            channel_id: t,
            message_id: n,
            role_subscription_listing_id: r,
          },
        );
      }
      function N(e, t) {
        return {
          guild_id: e.guild_id,
          sender: l.default.getCurrentUser()?.id,
          target_user: t.author.id,
          channel_id: e.id,
          message_id: t.id,
        };
      }
    },
    200662(e, t, n) {
      n.d(t, { Eu: () => a, UZ: () => l, p6: () => r });
      var i = n(155718);
      function r(e, t) {
        return e === i.kc.CHAT ? "/" + t : t;
      }
      function a(e, t) {
        return `${e}:${t}`;
      }
      function l(e) {
        return Object.fromEntries(e.map((e) => [a(e.id, e.type), e]));
      }
      n(392054);
    },
    415666(e, t, n) {
      n.d(t, { wE: () => v, Xq: () => b, q6: () => F });
      var i = n(627968),
        r = n(64700),
        a = n(17928),
        l = n(775602),
        s = n(7584),
        o = n(267102),
        u = n(232835),
        _ = n(417146),
        E = n(552122),
        A = n(401266),
        c = n(106778),
        d = n(21161),
        I = n(531301),
        T = n(652215);
      let N = 1e3 / 60,
        S = {
          velocity: {
            type: "static-random",
            minValue: { x: 8, y: 0 },
            maxValue: { x: 50, y: 0 },
          },
          rotation: {
            type: "linear-random",
            minValue: { x: 0, y: 0, z: 0 },
            maxValue: { x: 0, y: 0, z: 360 },
            minAddValue: { x: 0, y: 0, z: -5 },
            maxAddValue: { x: 0, y: 0, z: 5 },
          },
          size: {
            type: "static-random",
            minValue: 2,
            maxValue: 24,
            uniformVectorValues: !0,
          },
          dragCoefficient: { type: "static", value: 0.8 },
          opacity: { type: "static-random", minValue: 0.7, maxValue: 0.5 },
        },
        p = ["#FFFFFF"],
        O = [n(426560), ...(0, I.A)(["snowflake"])];
      function C(e) {
        let { children: t } = e,
          [n, a] = r.useState(!1),
          l = (0, o.Us)(),
          [s, u] = r.useState(null),
          { confettiCanvas: _ } = r.useContext(d.x),
          E = (0, c.f9)(_, s),
          A = r.useMemo(
            () => ({
              triggerAnimation: () => a(!0),
              untriggerAnimation: () => a(!1),
            }),
            [],
          ),
          I = r.useCallback(() => {
            let e = _?.getCanvas();
            if (null == e) return;
            let t = e.getBoundingClientRect();
            E.createConfetti({
              ...S,
              position: {
                type: "static-random",
                minValue: { x: -t.width / 2, y: -24 },
                maxValue: { x: t.width, y: -24 },
              },
            });
          }, [E, _]);
        return (r.useEffect(() => {
          let e = n ? setInterval(I, N) : null;
          return () => clearInterval(e);
        }, [n, I]),
        l === T.BRT.OVERLAY)
          ? t
          : (0, i.jsxs)(v.Provider, {
              value: A,
              children: [
                t,
                (0, i.jsx)(c.K_, {
                  ref: u,
                  colors: p,
                  sprites: O,
                  spriteWidth: 24,
                  spriteHeight: 24,
                }),
              ],
            });
      }
      var g = n(544048),
        R = n(513609),
        m = n(851110),
        h = n(490114);
      let M = [],
        f = new Set(["jack_o_lantern", "nose"]),
        L = {
          jack_o_lantern: {
            sprites: (0, I.A)(["chocolate_bar", "lollipop", "candy"]),
          },
          nose: { sprites: (0, I.A)(["foot"]) },
        },
        y = {
          enter: { BEG: 0, END: 22 },
          confetti: { BEG: 23, END: 119 },
          exit: { BEG: 164, END: 200 },
        };
      function D() {
        return n
          .e("98150")
          .then(n.t.bind(n, 633343, 19))
          .then((e) => {
            let { default: t } = e;
            return t;
          });
      }
      let U = r.forwardRef(function (e, t) {
        let { sprites: n } = e,
          [a, l] = r.useState(null),
          { confettiCanvas: s } = r.useContext(d.x),
          o = (0, c.f9)(s, a);
        return (
          r.useImperativeHandle(
            t,
            () => ({
              fireConfetti: (e, t) => {
                o.createMultipleConfetti(
                  {
                    ...m.Mw,
                    position: { type: "static", value: { x: e, y: t } },
                    velocity: {
                      type: "static-random",
                      minValue: { x: -5, y: -40 },
                      maxValue: { x: -40, y: -100 },
                    },
                    size: { type: "static-random", minValue: 12, maxValue: 48 },
                    dragCoefficient: { type: "static", value: 0.01 },
                  },
                  20,
                );
              },
            }),
            [o],
          ),
          (0, i.jsx)(c.K_, {
            ref: l,
            colors: M,
            sprites: n,
            spriteWidth: 48,
            spriteHeight: 48,
          })
        );
      });
      function P(e) {
        let { children: t } = e,
          n = r.useRef({}),
          [a, l] = r.useState(null),
          s = (function (e) {
            if (null == e) return "enter";
            switch (e) {
              case "enter":
                return "confetti";
              case "confetti":
                return "exit";
              case "exit":
                return "enter";
            }
          })(a),
          u = r.useRef(null),
          [_, E] = r.useState(!1),
          A = r.useRef("jack_o_lantern"),
          c = (0, o.Us)(),
          d = r.useCallback(
            (e) => {
              if (!_) {
                let t = (function (e) {
                  if (null == e) return null;
                  for (let t of f)
                    if (null != e.match(RegExp(`:${t}(_tone[1-9])?`))) return t;
                  return null;
                })(e);
                null != t && ((A.current = t), E(!0), l(null));
              }
            },
            [_],
          ),
          I = r.useMemo(
            () => ({ triggerAnimation: d, untriggerAnimation: () => {} }),
            [d],
          ),
          N = r.useCallback((e) => {
            l(e);
          }, []),
          S = r.useCallback((e) => {
            "exit" === e && E(!1);
          }, []),
          p = r.useCallback((e) => {
            u.current = e;
          }, []);
        return (r.useEffect(() => {
          if ("confetti" === a) {
            if (null == u.current) return;
            let e = u.current.getBoundingClientRect(),
              t = e.left - 11,
              i = e.top + 125,
              r = n.current[A.current];
            r?.fireConfetti(t, i);
          }
        }, [a]),
        c !== T.BRT.APP)
          ? t
          : (0, i.jsxs)(v.Provider, {
              value: I,
              children: [
                t,
                Object.keys(L).map((e) => {
                  let t = L[e];
                  return (0, i.jsx)(
                    U,
                    {
                      ref: (t) => {
                        null != t ? (n.current[e] = t) : delete n.current[e];
                      },
                      sprites: t.sprites,
                    },
                    e,
                  );
                }),
                _
                  ? (0, i.jsx)(R.Ay, {
                      children: (0, i.jsx)("div", {
                        className: h.k,
                        children: (0, i.jsx)(g.t, {
                          animationRef: p,
                          className: h.I,
                          nextScene: s,
                          sceneSegments: y,
                          onScenePlay: N,
                          onSceneComplete: S,
                          importData: D,
                          pauseWhileUnfocused: !1,
                        }),
                      }),
                    })
                  : null,
              ],
            });
      }
      function G(e) {
        if (null == e || null == _.A.emojiAnimationTriggers) return !1;
        for (let t of _.A.emojiAnimationTriggers) {
          let n = s.Ay.getByName(t);
          if (null != n) {
            if (`:${n.uniqueName}:` === e) return !0;
            for (let t in n.diversityChildren) {
              let i = n.diversityChildren[t];
              if (`:${i.uniqueName}:` === e) return !0;
            }
          }
        }
        return !1;
      }
      let v = r.createContext({
        triggerAnimation: () => {},
        untriggerAnimation: () => {},
      });
      function B(e) {
        let { children: t } = e,
          { triggerAnimation: n, untriggerAnimation: a } = r.useContext(v),
          l = (0, o.Us)(),
          s = r.useMemo(
            () => ({
              triggerAnimation: (e) => {
                l !== T.BRT.OVERLAY && G(e) && n(e);
              },
              untriggerAnimation: (e) => {
                l !== T.BRT.OVERLAY && G(e) && a(e);
              },
            }),
            [l, n, a],
          );
        return (0, i.jsx)(v.Provider, { value: s, children: t });
      }
      function b(e) {
        let { children: t } = e,
          n = E.A.useIsEligible(),
          a = r.useCallback((e, t) => {
            switch (t) {
              case _.n.THROW_EMOJI:
                return (0, i.jsx)(P, { children: e });
              case _.n.SNOW:
                return (0, i.jsx)(C, { children: e });
            }
          }, []);
        return n && null != _.A.emojiAnimationType
          ? a((0, i.jsx)(B, { children: t }), _.A.emojiAnimationType)
          : t;
      }
      function w(e) {
        let { emojiRef: t, channelId: n, messageId: i, emojiName: l } = e,
          s = (0, a.bG)([u.A], () => u.A.getMessage(n, i)),
          { triggerAnimation: o } = r.useContext(v);
        return (
          r.useEffect(() => {
            if (
              !_.A.triggerEmojiAnimationFromSentMessage ||
              s?.state !== T.cmJ.SENT ||
              (0, A.AI)(i)
            )
              return;
            let { top: e, bottom: n } = t.getBoundingClientRect();
            e >= 0 && n <= window.innerHeight && (o(l), (0, A.IL)(i));
          }, [l, t, s?.state, i, o]),
          null
        );
      }
      function F(e) {
        let {
            channelId: t,
            messageId: n,
            emojiName: r,
            disable: s,
            emojiRef: u,
          } = e,
          _ = (0, a.bG)([l.A], () => l.A.useReducedMotion),
          A = E.A.useIsEligible(),
          c = (0, o.Us)();
        return s ||
          c === T.BRT.OVERLAY ||
          !A ||
          null == n ||
          null == t ||
          _ ||
          null == u ||
          !G(r)
          ? null
          : (0, i.jsx)(w, {
              emojiRef: u,
              channelId: t,
              messageId: n,
              emojiName: r,
            });
      }
    },
    513609(e, t, n) {
      n.d(t, { Ay: () => o, di: () => s, lr: () => l });
      let {
          Layer: i,
          LayerContainer: r,
          LayerProvider: a,
        } = (0, n(83379).Ay)("Chat"),
        l = r,
        s = a,
        o = i;
    },
    465856(e, t, n) {
      n.d(t, { A: () => i });
      function i(e) {
        if (null != e.title && null != e.filename) {
          let t = e.filename.lastIndexOf("."),
            n = t > 0 ? e.filename.substr(t) : "";
          return e.title + n;
        }
        return e.filename;
      }
    },
    206885(e, t, n) {
      n.d(t, { O: () => a, e: () => r });
      var i = n(723702);
      let r = !1,
        a = i.isPlatformEmbedded && ((0, i.isWindows)() || r) && !0;
    },
    1193(e, t, n) {
      n.d(t, { A: () => W });
      var i = n(17928),
        r = n(713402),
        a = n(228366),
        l = n(380335),
        s = n(567249),
        o = n(734057),
        u = n(232835),
        _ = n(763827),
        E = n(222823),
        A = n(309010),
        c = n(543465),
        d = n(567761),
        I = n(927813),
        T = n(935208),
        N = n(206885),
        S = n(41984),
        p = n(956753),
        O = n(489277),
        C = n(222506),
        g = n(680243),
        R = n(141048);
      function m(e, t) {
        return String(
          Math.max(0, Math.min(Math.floor(e), Number.MAX_SAFE_INTEGER)),
        ).padStart(t, "0");
      }
      let h = new r.J(
          function (e) {
            return [
              e.isPrivateChannel ? R.B.PRIVATE_CHANNELS : R.B.GUILD_CHANNELS,
            ];
          },
          function (e) {
            let t = e.isPrivateChannel ? "0" : "1",
              n =
                e.mentionCount > 0
                  ? R.G.MENTION
                  : e.hasUnread
                    ? R.G.UNREAD
                    : R.G.READ,
              i = String(R.G.MENTION - n),
              r = m(Number.MAX_SAFE_INTEGER - e.mentionCount, 16),
              a = m(Number.MAX_SAFE_INTEGER - e.lastActivityAtMs, 16);
            return `${t}\0${i}\0${r}\0${a}\0${e.channelId}`;
          },
        ),
        M = null,
        f = null,
        L = !1,
        y = null,
        D = 30 * I.A.Millis.MINUTE;
      function U(e) {
        let t = o.A.getChannel(e),
          n = t?.lastMessageId;
        return null != n ? T.default.extractTimestamp(n) : Date.now();
      }
      function P(e, t, n, i, r) {
        let a;
        return {
          channelId: e,
          source: t,
          addedOnMs: n,
          lastActivityAtMs: i,
          lastMessageId: r,
          isPrivateChannel: ((a = o.A.getChannel(e)), a?.isPrivate() ?? !1),
          mentionCount: E.Ay.getMentionCount(e),
          hasUnread: E.Ay.hasUnread(e),
        };
      }
      function G() {
        h.clear(), (M = null), (f = null), (L = !1), (y = null);
      }
      function v() {
        let e = Date.now();
        G(),
          (f = e),
          (y = _.A.getChannelId() ?? null),
          (function (e) {
            let t = A.A.getChannelId();
            if (null != t && null != o.A.getChannel(t)) {
              if (((M = t), !h.has(t))) {
                let n = U(t),
                  i = o.A.getChannel(t)?.lastMessageId ?? void 0,
                  r = P(t, S.B9.MANUAL, e, n, i);
                h.set(t, r);
              }
            }
          })(e),
          (function (e) {
            let t = d.default.getPrivateChannelIds(),
              n = 0;
            for (let i of t) {
              if (n >= 3) return;
              if (h.has(i)) continue;
              let t = o.A.getChannel(i);
              if (
                null == t ||
                !t.isPrivate() ||
                c.Ay.isChannelMuted(null, i) ||
                l.A.isMessageRequest(i)
              )
                continue;
              let r = t.lastMessageId;
              if (null == r) continue;
              let a = T.default.extractTimestamp(r);
              if (e - a > D) continue;
              let s = P(i, S.B9.MANUAL, e, a, r);
              h.set(i, s), n++;
            }
          })(e),
          w();
      }
      function B() {
        return _.A.getChannelId() ?? null;
      }
      function b(e) {
        if (null == e) return h.values()[0]?.channelId ?? null;
        for (let t of h.values()) if (t.channelId !== e) return t.channelId;
        return null;
      }
      function w() {
        let e = B();
        return null != e && !L && null == M && ((M = e), !0);
      }
      function F() {
        let e,
          t = (function () {
            if (null == M) return !1;
            let e = B();
            return e !== M && y === M && e !== M && ((M = b(y)), !0);
          })(),
          n =
            null == (e = B())
              ? ((y = null), !!L && ((L = !1), !0))
              : y !== e && ((y = e), !!L && ((L = !1), !0)),
          i = w();
        return t || n || i;
      }
      function H(e) {
        let t = h.get(e);
        if (null == t) return !1;
        let n = E.Ay.getMentionCount(e),
          i = E.Ay.hasUnread(e);
        return (
          (t.mentionCount !== n || t.hasUnread !== i) &&
          (h.set(e, { ...t, mentionCount: n, hasUnread: i }), !0)
        );
      }
      function V(e) {
        let { channelId: t } = e;
        return H(t);
      }
      class k extends i.Ay.Store {
        static displayName = "Overlay-v3-Text-Chat-Store";
        initialize() {
          this.waitFor(
            g.A,
            C.A,
            O.A,
            s.A,
            o.A,
            u.A,
            l.A,
            _.A,
            d.default,
            E.Ay,
            A.A,
            c.Ay,
          ),
            v();
        }
        isChannelTracked(e) {
          return h.has(e);
        }
        getSessionEntries(e) {
          return [null != e ? h.values(e) : h.values(), h.version];
        }
        getSelectedChannelId() {
          return M;
        }
        getVoiceChatMinimized() {
          return L;
        }
      }
      let x = (e) => (0, p.U5)(e, "OverlayTextChatStore"),
        W = new k(
          a.h,
          __OVERLAY__ || (!N.O && !N.e)
            ? {}
            : {
                OVERLAY_MOUNTED: x(function (e) {
                  return null == f && (v(), !0);
                }),
                OVERLAY_V3_NATIVE_DESTROY_HOST_WINDOW: x(function () {
                  return G(), !0;
                }),
                MESSAGE_ACK: x(function (e) {
                  let { channelId: t } = e;
                  return H(t);
                }),
                CHANNEL_ACK: x(V),
                CHANNEL_LOCAL_ACK: x(V),
                BULK_ACK: x(function (e) {
                  let { channels: t } = e,
                    n = !1;
                  for (let { channelId: e } of t) H(e) && (n = !0);
                  return n;
                }),
                VOICE_STATE_UPDATES: x(F),
                VOICE_CHANNEL_SELECT: x(F),
                OVERLAY_TEXT_CHAT_SELECT_CHANNEL: x(function (e) {
                  let { channelId: t, source: n } = e;
                  return (function (e, t) {
                    if (null == e) return !1;
                    null == f && (f = Date.now()), M !== e && (M = e);
                    let n = B();
                    if (
                      (null != n && e === n && L && (L = !1),
                      null != M && !h.has(M))
                    ) {
                      let e = Date.now(),
                        n = U(M),
                        i = o.A.getChannel(M)?.lastMessageId ?? void 0,
                        r = P(M, t, e, n, i);
                      h.set(M, r);
                    }
                    return !0;
                  })(t ?? null, n);
                }),
                OVERLAY_TEXT_CHAT_ADD_OR_UPDATE_CHANNEL: x(function (e) {
                  let t = (function (e) {
                      let {
                          channelId: t,
                          source: n,
                          lastActivityAtMs: i,
                          lastMessageId: r,
                        } = e,
                        a = h.get(t) ?? null,
                        l = null == a ? i : Math.max(a.lastActivityAtMs, i),
                        s = r ?? a?.lastMessageId,
                        o = P(t, n, a?.addedOnMs ?? i, l, s);
                      return h.set(t, o);
                    })({
                      channelId: e.channelId,
                      source: e.source,
                      lastActivityAtMs: e.lastActivityAtMs,
                      lastMessageId: e.lastMessageId,
                    }),
                    n = !1;
                  return null == M && ((M = e.channelId), (n = !0)), t || n;
                }),
                OVERLAY_TEXT_CHAT_REMOVE_CHANNEL: x(function (e) {
                  let t = h.delete(e.channelId),
                    n = !1;
                  if (M === e.channelId) {
                    let e = B();
                    (M = b(e) ?? (L || null == e ? null : e)), (n = !0);
                  }
                  return t || n;
                }),
                OVERLAY_TEXT_CHAT_REMOVE_ALL_CHANNELS: x(function () {
                  let e = h.size() > 0;
                  h.clear();
                  let t = B();
                  return (M = L || null == t ? null : t), e;
                }),
                OVERLAY_TEXT_CHAT_SET_VOICE_CHAT_MINIMIZED: x(function (e) {
                  let { minimized: t } = e;
                  if (L === t) return !1;
                  if (((L = t), !t)) return w(), !0;
                  let n = B();
                  return null != n && M === n && (M = b(n)), !0;
                }),
              },
        );
    },
    792251(e, t, n) {
      function i(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
        if (0 === e) return 0;
        let n = e / t;
        return (
          (n < 1 ? Math.pow(n, 2.8) : Math.pow(10, ((n - 1) * 6) / 20)) * t
        );
      }
      function r(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
        if (0 === e) return 0;
        let n = e / t;
        return (
          (n < 1
            ? Math.pow(n, 0.35714285714285715)
            : (20 * Math.log10(n)) / 6 + 1) * t
        );
      }
      n.d(t, { M: () => r, w: () => i });
    },
    87719(e, t, n) {
      n.d(t, { e: () => s, x: () => o });
      var i = n(398590),
        r = n(976860),
        a = n(780964),
        l = n(652215);
      let s = () => {
          {
            let { openUserSettings: e } = n(858897);
            e(a.X.NITRO_PANEL);
          }
        },
        o = (e) => {
          e?.(), (0, i.jH)(), (0, r.pX)(l.BVt.APPLICATION_STORE);
        };
    },
    14400(e, t, n) {
      n.d(t, { A: () => l });
      var i = n(64700),
        r = n(253932),
        a = n(824744);
      function l() {
        let [e, t] = i.useState(r.HO.getSetting());
        return {
          volume: e,
          onVolumeChange: i.useCallback((e) => {
            let n = (0, a.w)(e);
            t(n), r.HO.updateSetting(n);
          }, []),
        };
      }
    },
    808829(e, t, n) {
      n.d(t, { P: () => r });
      var i = n(985018);
      function r(e) {
        let { application: t, username: n, usernameOnClick: r } = e;
        return null != t
          ? i.intl.formatToParts(i.t.Tes5Ou, {
              username: n,
              applicationName: t.name,
              usernameOnClick: r,
            })
          : i.intl.formatToParts(i.t.PUJtgi, {
              username: n,
              usernameOnClick: r,
            });
      }
    },
    552691(e, t, n) {
      n.d(t, { A0: () => s, eu: () => l, g6: () => o, uk: () => u });
      var i = n(975571),
        r = n(652215),
        a = n(985018);
      function l(e) {
        let {
          application: t,
          username: n,
          usernameHook: l = r.tEg,
          applicationNameHook: s = r.tEg,
        } = e;
        return null != t
          ? a.intl.format(a.t.J8SaGy, {
              username: n,
              otherUsername: t.name,
              usernameHook: l,
              otherUsernameHook: s,
              helpCenterLink: i.A.getArticleURL(
                r.MVz.PRIVATE_CHANNEL_INTEGRATIONS,
              ),
            })
          : a.intl.format(a.t["+6V2sd"], {
              username: n,
              usernameHook: l,
              helpCenterLink: i.A.getArticleURL(
                r.MVz.PRIVATE_CHANNEL_INTEGRATIONS,
              ),
            });
      }
      function s(e) {
        let {
          application: t,
          username: n,
          usernameHook: l = r.tEg,
          applicationNameHook: s = r.tEg,
        } = e;
        return null != t
          ? a.intl.format(a.t.eGCDak, {
              username: n,
              otherUsername: t.name,
              usernameHook: l,
              otherUsernameHook: s,
              helpCenterLink: i.A.getArticleURL(
                r.MVz.PRIVATE_CHANNEL_INTEGRATIONS,
              ),
            })
          : a.intl.format(a.t.sAX6rs, {
              username: n,
              usernameHook: l,
              helpCenterLink: i.A.getArticleURL(
                r.MVz.PRIVATE_CHANNEL_INTEGRATIONS,
              ),
            });
      }
      function o(e) {
        let {
          application: t,
          username: n,
          usernameOnClick: l,
          applicationNameOnClick: s,
          medium: o,
        } = e;
        return null != t
          ? a.intl.formatToParts(a.t["8r+Z+I"], {
              username: n,
              otherUsername: t.name,
              usernameOnClick: l,
              otherUsernameOnClick: s,
              medium: o,
              helpCenterLink: {
                url: i.A.getArticleURL(r.MVz.PRIVATE_CHANNEL_INTEGRATIONS),
              },
            })
          : a.intl.formatToParts(a.t.ojysqe, {
              username: n,
              usernameOnClick: l,
              medium: o,
              helpCenterLink: {
                url: i.A.getArticleURL(r.MVz.PRIVATE_CHANNEL_INTEGRATIONS),
              },
            });
      }
      function u(e) {
        let {
          application: t,
          username: n,
          usernameOnClick: l,
          applicationNameOnClick: s,
          medium: o,
        } = e;
        return null != t
          ? a.intl.formatToParts(a.t.zmc0mq, {
              username: n,
              otherUsername: t.name,
              usernameOnClick: l,
              otherUsernameOnClick: s,
              medium: o,
              helpCenterLink: {
                url: i.A.getArticleURL(r.MVz.PRIVATE_CHANNEL_INTEGRATIONS),
              },
            })
          : a.intl.formatToParts(a.t["x2CN/Z"], {
              username: n,
              usernameOnClick: l,
              medium: o,
              helpCenterLink: {
                url: i.A.getArticleURL(r.MVz.PRIVATE_CHANNEL_INTEGRATIONS),
              },
            });
      }
    },
    216623(e, t, n) {
      n.d(t, { AX: () => E, cf: () => _, oN: () => u });
      var i = n(636537),
        r = n(228366),
        a = n(320095),
        l = n(85109),
        s = n(756377),
        o = n(652215);
      async function u(e) {
        let t = await i.Bo.put({
          url: o.Rsh.PUT_SAVED_MESSAGE(e.channelId, e.messageId),
          body: { due_at: e.dueAt },
          rejectWithError: !1,
        });
        if (t.ok) return (0, s.iz)(t.body);
      }
      async function _(e) {
        if (
          (
            await i.Bo.del({
              url: o.Rsh.DELETE_SAVED_MESSAGE(e.channelId, e.messageId),
              rejectWithError: !1,
            })
          ).ok
        )
          return !0;
      }
      async function E() {
        if (!l.A.getIsStale()) return Promise.resolve();
        let e = (
          await i.Bo.get({ url: o.Rsh.GET_SAVED_MESSAGES, rejectWithError: !1 })
        ).body.results.map((e) => ({
          message: null != e.message ? (0, a.rh)(e.message) : null,
          saveData: (0, s.Dd)(e.save_data),
        }));
        r.h.dispatch({ type: "SAVED_MESSAGES_UPDATE", savedMessages: e });
      }
    },
    824492(e, t, n) {
      n.d(t, { A: () => o });
      var i = n(17928),
        r = n(228366),
        a = n(495544);
      let l = { users: {} };
      class s extends i.Ay.DeviceSettingsStore {
        static displayName = "ChannelSpoilerAgreeStore";
        static persistKey = "ChannelSpoilerAgreeStore";
        initialize(e) {
          this.waitFor(a.default),
            (l =
              null != e && null != e.users
                ? { users: e.users }
                : { users: {} });
        }
        didAgree(e) {
          if (null == e) return !1;
          let t = a.default.getId();
          return null != t && (l.users[t]?.channels[e] || !1);
        }
        getState() {
          return l;
        }
        getUserAgnosticState() {
          return l;
        }
      }
      let o = new s(r.h, {
        CHANNEL_SPOILER_AGREE: function (e) {
          let { channelId: t } = e,
            n = a.default.getId();
          if (null == n) return !1;
          null == l.users[n] && (l.users[n] = { channels: {} }),
            (l.users[n].channels[t] = !0);
        },
        CHANNEL_SPOILER_AGREE_CLEAR: function (e) {
          let { channelId: t } = e,
            n = a.default.getId();
          if (null == n || null == l.users[n]) return !1;
          delete l.users[n].channels[t];
        },
      });
    },
    905278(e, t, n) {
      n.d(t, { l: () => l }), n(17928);
      var i = n(696451),
        r = n(71393),
        a = n(488926);
      let l = function (e, t) {
        let [n, l] =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : [r.A, i.Ay];
        if (null == e || null == t) return null;
        let s = n.getGuild(e);
        if (null == s) return null;
        let o = l.getMember(s.id, t);
        return null == o ? null : a.li(s, o);
      };
    },
    926571(e, t, n) {
      n.d(t, { A: () => l });
      var i = n(954571),
        r = n(863922),
        a = n(652215);
      function l(e) {
        let {
          summary: t,
          guildId: n,
          channelId: l,
          rating: s = null,
          problem: o = null,
          feedback: u = "",
          location: _,
        } = e;
        (0, r.C7)(t, s),
          i.default.track(a.HAw.SUMMARIES_REPORT_PROBLEM, {
            reason: o,
            location: _,
            rating: s,
            feedback: u,
            participant_count: t.people.length,
            message_count: t.count,
            start_message_id: t.startId,
            guild_id: n,
            channel_id: l,
            summary_id: t.id,
            summary_source: t.source,
            summary_type: t.type,
          });
      }
    },
    913612(e, t, n) {
      n.d(t, { C: () => s, K: () => o });
      var i = n(64700),
        r = n(506774),
        a = n(935671);
      let l = "systemServiceAutoInstall";
      function s() {
        r.w.set(l, !0);
      }
      function o() {
        i.useEffect(() => {
          null == r.w.get(l) && (s(), (0, a.sL)("first-start", !1));
        }, []);
      }
    },
    219271(e, t, n) {
      n.d(t, { u: () => o });
      var i = n(636537),
        r = n(228366),
        a = n(153488),
        l = n(427358),
        s = n(652215);
      function o() {
        let e =
          !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return l.A.shouldFetch() && a.A.hasConsented(s.YAq.PERSONALIZATION)
          ? (r.h.dispatch({ type: "LOAD_USER_AFFINITIES_V2" }),
            i.Bo.get({
              url: s.Rsh.USER_AFFINITIES_V2,
              retries: 3 * !!e,
              oldFormErrors: !0,
              rejectWithError: !1,
            }).then(
              (e) => {
                let { body: t } = e;
                r.h.dispatch({
                  type: "LOAD_USER_AFFINITIES_V2_SUCCESS",
                  affineUsers: t.user_affinities.map((e) => ({
                    otherUserId: e.other_user_id,
                    userSegment: e.user_segment,
                    otherUserSegment: e.other_user_segment,
                    isFriend: e.is_friend,
                    dmProbability: e.dm_probability ?? 0,
                    dmRank: e.dm_rank ?? 0,
                    vcProbability: e.vc_probability ?? 0,
                    vcRank: e.vc_rank ?? 0,
                    serverMessageProbability: e.server_message_probability ?? 0,
                    serverMessageRank: e.server_message_rank ?? 0,
                    communicationProbability: e.communication_probability ?? 0,
                    communicationRank: e.communication_rank ?? 0,
                  })),
                });
              },
              () => {
                r.h.dispatch({ type: "LOAD_USER_AFFINITIES_V2_FAILURE" });
              },
            ))
          : Promise.resolve();
      }
    },
    284016(e, t, n) {
      n.d(t, { A: () => E });
      var i = n(735438),
        r = n.n(i),
        a = n(17928),
        l = n(506774),
        s = n(228366),
        o = n(652215);
      let u = {};
      class _ extends a.Ay.PersistedStore {
        static displayName = "SelectivelySyncedUserSettingsStore";
        static persistKey = "SelectivelySyncedUserSettingsStore";
        static migrations = [
          () => {
            let e = l.w.get("UserSettingsSync") ?? {},
              t = l.w.get("UserSettingsStore") ?? {};
            l.w.remove("UserSettingsSync");
            let n = {};
            return (
              !1 === e[o.nc_.TEXT] &&
                (n.text = {
                  shouldSync: !1,
                  settings: r().pick(t, [
                    "inlineAttachmentMedia",
                    "inlineEmbedMedia",
                    "renderEmbeds",
                    "renderReactions",
                    "animateEmoji",
                    "animateStickers",
                    "gifAutoPlay",
                    "defaultReactionEmoji",
                  ]),
                }),
              !1 === e[o.nc_.APPEARANCE] &&
                (n.appearance = {
                  shouldSync: !1,
                  settings: r().pick(t, [
                    "theme",
                    "clientThemeSettings",
                    "developerMode",
                  ]),
                }),
              n
            );
          },
          (e) => {
            if (e?.appearance?.settings?.theme === "amoled")
              return {
                ...e,
                appearance: {
                  ...e.appearance,
                  settings: { ...e.appearance.settings, theme: "midnight" },
                },
              };
          },
        ];
        initialize(e) {
          u = e ?? {};
        }
        getState() {
          return u;
        }
        shouldSync(e) {
          return u[e]?.shouldSync !== !1;
        }
        getTextSettings() {
          return u.text?.settings;
        }
        getAppearanceSettings() {
          return u.appearance?.settings;
        }
      }
      let E = new _(s.h, {
        SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE: function (e) {
          let { changes: t } = e;
          for (let e in t) {
            let { shouldSync: n, settings: i } = t[e];
            if (!0 === n) {
              delete u[e];
              continue;
            }
            if (
              (!1 === n && (u[e] = { shouldSync: n, settings: {} }),
              u[e]?.shouldSync === !1)
            )
              for (let t in i) u[e].settings[t] = i[t];
          }
        },
        LOGOUT: function () {
          u = {};
        },
      });
    },
    912630(e, t, n) {
      n.d(t, { A: () => S });
      var i = n(17928),
        r = n(205693),
        a = n(228366),
        l = n(617617),
        s = n(969341),
        o = n(309010),
        u = n(287809),
        _ = n(965162);
      let E = !1,
        A = null,
        c = !1,
        d = {};
      function I(e) {
        let t = u.default.getCurrentUser();
        if (null == t) return !1;
        let n =
          e ??
          (0, _.Hk)(
            l.A.settings.voiceAndVideo?.videoBackgroundFilterDesktop,
            t.id,
          );
        return (
          null != o.A.getVoiceChannelId() && s.Ay.isVideoEnabled() && null != n
        );
      }
      function T() {
        A !== o.A.getVoiceChannelId() && (c = !1),
          I() && (c = !0),
          (A = o.A.getVoiceChannelId());
      }
      class N extends i.Ay.Store {
        static displayName = "VideoBackgroundStore";
        initialize() {
          this.waitFor(s.Ay, o.A, l.A, u.default),
            this.syncWith([o.A, s.Ay], T);
        }
        get videoFilterAssets() {
          return d;
        }
        get hasBeenApplied() {
          return E;
        }
        get hasUsedBackgroundInCall() {
          return c;
        }
      }
      let S = new N(a.h, {
        VIDEO_FILTER_ASSETS_FETCH_SUCCESS: function (e) {
          let { assets: t } = e,
            n = {};
          t.forEach((e) => (n[e.id] = e)), (d = n);
        },
        VIDEO_FILTER_ASSET_UPLOAD_SUCCESS: function (e) {
          let { videoFilterAsset: t } = e;
          d = { ...d, [t.id]: t };
        },
        VIDEO_FILTER_ASSET_DELETE_SUCCESS: function (e) {
          let { videoFilterAsset: t } = e;
          (d = { ...d }), delete d[t.id];
        },
        VIDEO_SAVE_LAST_USED_BACKGROUND_OPTION: function (e) {
          let { backgroundOption: t } = e;
          I(t) && (c = !0);
        },
        MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: function (e) {
          let { settings: t } = e;
          r.Tr.CAMERA_BACKGROUND_LIVE in t && (E = !0);
        },
        LOGOUT: function () {
          (E = !1), (c = !1), (A = null), (d = {});
        },
      });
    },
    413339(e, t, n) {
      n.d(t, { PX: () => C, S1: () => O, gB: () => p }),
        n(393431),
        n(532706),
        n(42231),
        n(232424),
        n(949626),
        n(767709),
        n(65162);
      var i = n(284009),
        r = n.n(i),
        a = n(205693),
        l = n(287809),
        s = n(486020),
        o = n(329551),
        u = n(285918),
        _ = n(912630),
        E = n(965162),
        A = n(498559),
        c = n(463951),
        d = n(577718),
        I = n(652215);
      async function T(e) {
        let t = await fetch(e),
          n = await t.blob();
        return new Uint8ClampedArray(await n.arrayBuffer());
      }
      function N(e, t, n, i, r) {
        (0, u.wq)({ [e]: { graph: n, target: t, image: i, blob: r } });
      }
      async function S(e, t, n) {
        let i,
          l = !1;
        if (null == n) return N(e, t, a.gO.NONE);
        if ("blur" === n) return N(e, t, a.gO.BACKGROUND_BLUR);
        if ("string" == typeof n || "number" == typeof n) {
          let e = (0, A.A)()[n];
          (l = e.isVideo ?? !1), (i = e.source);
        } else {
          let e = n.asset;
          (l = (0, s.VI)(e) || (0, s.q6)(e)),
            (i = (0, s.Bo)({
              userId: n.user_id,
              assetId: n.id,
              assetHash: e,
              size: d.Im.width,
            }));
        }
        if (null != i)
          try {
            var o;
            let n = l
                ? void 0
                : await ((o = i),
                  new Promise((e, t) => {
                    let n = new Image();
                    (n.crossOrigin = "anonymous"),
                      (n.onload = () => {
                        let t = document.createElement("canvas");
                        (t.width = d.Im.width), (t.height = d.Im.height);
                        let i = t.getContext("2d");
                        r()(null != i, "Canvas context is missing");
                        let a = n.height / n.width,
                          l = d.Im.height,
                          s = d.Im.height / a,
                          o = (t.width - s) / 2,
                          u = (t.height - l) / 2;
                        i.drawImage(n, o, u, s, l);
                        let _ = i.getImageData(0, 0, t.width, t.height);
                        e({
                          data: _.data,
                          width: _.width,
                          height: _.height,
                          pixelFormat: "rgba",
                        });
                      }),
                      (n.onerror = (e) => t(e)),
                      (n.src = o);
                  })),
              s = l ? await T(i) : void 0;
            N(e, t, a.gO.BACKGROUND_REPLACEMENT, n, s);
          } catch (e) {
            (0, u.Mj)();
          }
      }
      async function p(e, t) {
        let { track: n = !0, location: i } = t;
        await S(a.Tr.CAMERA_BACKGROUND_LIVE, { type: a.Qo.INPUT_DEVICE }, e),
          n && (0, E.Uz)(e, i, "Enabled");
      }
      async function O(e, t, n) {
        let { track: i = !0, location: r } = n;
        (0, u.Oo)(),
          await S(
            a.Tr.CAMERA_BACKGROUND_PREVIEW,
            { type: a.Qo.STREAM, streamId: t },
            e,
          ),
          i && (0, E.Uz)(e, r, "Preview");
      }
      function C() {
        let e = l.default.getCurrentUser();
        if (null == e) return;
        let t = (0, o.i)(e);
        (0, c.A)() &&
          !_.A.hasBeenApplied &&
          null != t &&
          p(t, { track: !1 }).catch(I.tEg);
      }
    },
    461782(e, t, n) {
      n.d(t, { Ay: () => o, k3: () => l, vG: () => s });
      var i = n(627968),
        r = n(64700),
        a = n(451988);
      let l = r.createContext({
          onPreventIdle: () => null,
          onAllowIdle: () => null,
          onForceIdle: () => null,
          onActive: () => null,
        }),
        s = r.createContext(!1);
      function o(e) {
        let { children: t, timeout: n } = e,
          [o, u] = r.useState(!1),
          _ = r.useRef(new Set()),
          E = r.useRef(null);
        r.useEffect(
          () => (
            (E.current = new a.J_(n, () => u(!0))),
            E.current.delay(),
            () => {
              E.current?.cancel(), (E.current = null);
            }
          ),
          [n],
        );
        let A = r.useCallback(
            (e) => {
              u(!1), _.current.add(e), E.current?.cancel();
            },
            [_, E, u],
          ),
          c = r.useCallback(
            (e) => {
              _.current.delete(e), 0 === _.current.size && E.current?.delay();
            },
            [_, E],
          ),
          d = r.useCallback(() => {
            u(!1), 0 === _.current.size && E.current?.delay();
          }, [_, E, u]),
          I = r.useCallback(() => {
            _.current.size > 0 || (E.current?.cancel(), u(!0));
          }, [E, u]),
          T = r.useMemo(
            () => ({
              onAllowIdle: c,
              onPreventIdle: A,
              onActive: d,
              onForceIdle: I,
            }),
            [c, A, d, I],
          );
        return (0, i.jsx)(s.Provider, {
          value: o,
          children: (0, i.jsx)(l.Provider, {
            value: T,
            children: t({ idle: o, ...T }),
          }),
        });
      }
    },
    722776(e, t, n) {
      n.d(t, { A: () => u });
      var i = n(17928),
        r = n(462887),
        a = n(736653),
        l = n(313961),
        s = n(309010),
        o = n(652215);
      function u(e, t) {
        let n = (0, i.bG)([s.A], () => s.A.getVoiceChannelId()),
          u = (0, i.bG)([l.A], () => (null != n ? l.A.getMode(n) : null)),
          _ = (0, a.Ay)();
        return null != e
          ? e
          : u === o._Of.VOICE && (0, r.q)(_)
            ? t
              ? "activeLight"
              : "primaryLight"
            : t
              ? "white"
              : "primaryDark";
      }
    },
    34135(e, t, n) {
      n.d(t, { A: () => o });
      var i = n(17928),
        r = n(228366),
        a = n(763827),
        l = n(466814);
      class s extends i.Ay.Store {
        static displayName = "AudioRouteStore";
        initialize() {
          this.waitFor(a.A);
        }
        getCurrentRouteType() {
          return l.P.UNKNOWN;
        }
        getMultipleRoutesAvailable() {
          return !1;
        }
      }
      let o = new s(r.h, {});
    },
    885576(e, t, n) {
      let i;
      n.d(t, { A: () => f });
      var r = n(111956),
        a = n.n(r),
        l = n(17928),
        s = n(228366),
        o = n(956793),
        u = n(77729),
        _ = n(253932),
        E = n(927813),
        A = n(723702),
        c = n(495544),
        d = n(652215),
        I = n(731854);
      let T = Date.now(),
        N = !1,
        S = !1,
        p = !1,
        O = !1,
        C = !1;
      function g() {
        return p || O || ((0, A.isAndroid)() && C);
      }
      function R() {
        let e;
        Date.now() - T > d.sdF || g()
          ? N || s.h.dispatch({ type: "IDLE", idle: !0, idleSince: T })
          : N && s.h.dispatch({ type: "IDLE", idle: !1 }),
          0 === (e = _.cU.getSetting()) ||
          null != i ||
          Date.now() - T > Math.min(e * E.A.Millis.SECOND, d.sdF) ||
          g()
            ? S || s.h.dispatch({ type: "AFK", afk: !0 })
            : S && s.h.dispatch({ type: "AFK", afk: !1 });
      }
      function m(e) {
        e && (i = Date.now()), R();
      }
      if (!__OVERLAY__) {
        A.isPlatformEmbedded && u.A?.powerMonitor != null
          ? (!(function e() {
              let t = (t) => {
                let n = Date.now() - t;
                (null == i || n > i) && ((T = Math.max(n, T)), (i = null)),
                  R(),
                  setTimeout(e, 10 * E.A.Millis.SECOND);
              };
              if (u.A?.powerMonitor?.getSystemIdleTimeMs != null) {
                let e = u.A.powerMonitor.getSystemIdleTimeMs();
                e instanceof Promise ? e.then(t) : t(e);
              }
            })(),
            u.A.powerMonitor.on("resume", () => {
              (p = !1), m(!1);
            }),
            u.A.powerMonitor.on("suspend", () => {
              (p = !0), m(!0), o.default.disconnect();
            }),
            u.A.powerMonitor.on("lock-screen", () => {
              (O = !0), m(!0);
            }),
            u.A.powerMonitor.on("unlock-screen", () => {
              (O = !1), m(!1);
            }))
          : setInterval(R, 30 * E.A.Millis.SECOND);
        let e = a()(() => {
          h({});
        }, 500);
        window.addEventListener("mouseup", e),
          window.addEventListener("wheel", e),
          window.addEventListener("keypress", e);
      }
      function h(e) {
        let { timestamp: t, type: n, bypassIdleUpdate: r } = e,
          a = "OVERLAY_SET_NOT_IDLE" === n && null != t;
        return (
          (!a || !(t <= T)) &&
          !r &&
          ((i = null),
          (T = a ? t : Date.now()),
          __OVERLAY__
            ? s.h.dispatch({ type: "OVERLAY_SET_NOT_IDLE", timestamp: T })
            : R(),
          !1)
        );
      }
      class M extends l.Ay.Store {
        initialize() {
          this.waitFor(c.default);
        }
        static displayName = "IdleStore";
        isIdle() {
          return N;
        }
        isAFK() {
          return S;
        }
        getIdleSince() {
          return N ? T : null;
        }
        getSystemSuspended() {
          return p;
        }
        getSystemLocked() {
          return O;
        }
      }
      let f = new M(s.h, {
        IDLE: function (e) {
          N = e.idle;
        },
        AFK: function (e) {
          S = e.afk;
        },
        SPEAKING: function (e) {
          let { userId: t, speakingFlags: n } = e;
          return n !== I.ME.NONE && t === c.default.getId() && h({}), !1;
        },
        APP_STATE_UPDATE: function (e) {
          let { state: t } = e;
          return (
            (C = t === d.g6G.BACKGROUND), (i = null), (T = Date.now()), R(), !1
          );
        },
        OVERLAY_SET_NOT_IDLE: h,
        CHANNEL_SELECT: h,
        VOICE_CHANNEL_SELECT: h,
        WINDOW_FOCUS: h,
        OVERLAY_INITIALIZE: h,
        OVERLAY_SET_INPUT_LOCKED: h,
      });
    },
    351906(e, t, n) {
      n.d(t, { A: () => d });
      var i = n(17928),
        r = n(228366),
        a = n(589051),
        l = n(954571),
        s = n(495544),
        o = n(652215);
      function u(e, t) {
        l.default.track(o.HAw.STREAMER_MODE_TOGGLE, {
          enabled: e,
          automatic: t,
        });
      }
      let _ = {
          enabled: !1,
          autoToggle: !0,
          hideInstantInvites: !0,
          hidePersonalInformation: !0,
          disableSounds: !0,
          disableNotifications: !0,
          disabledOverlayWidgets: [],
          enableContentProtection: !1,
        },
        E = {},
        A = { ..._ };
      class c extends i.Ay.PersistedStore {
        static displayName = "StreamerModeStore";
        static persistKey = "StreamerModeStore";
        static migrations = [
          (e) => {
            let t = s.default.getId();
            return null == e || null == t ? {} : { [t]: { ...e } };
          },
        ];
        initialize(e) {
          Object.assign(E, e),
            this.syncWith([s.default], () => {
              let e,
                t = s.default.getId();
              A =
                null != t
                  ? (null == (e = E[t]) && (e = E[t] = { ..._ }), e)
                  : { ..._ };
            });
        }
        getState() {
          return E;
        }
        getSettings() {
          return A;
        }
        get enabled() {
          return A.enabled;
        }
        get autoToggle() {
          return A.autoToggle;
        }
        get hideInstantInvites() {
          return this.enabled && A.hideInstantInvites;
        }
        get hidePersonalInformation() {
          return this.enabled && A.hidePersonalInformation;
        }
        get disableSounds() {
          return this.enabled && A.disableSounds;
        }
        get disableNotifications() {
          return this.enabled && A.disableNotifications;
        }
        get enableContentProtection() {
          return this.enabled && A.enableContentProtection;
        }
        isOverlayWidgetDisabled(e) {
          return (
            !!(0, a.zQ)("StreamerModeStore").enabled &&
            this.enabled &&
            A.disabledOverlayWidgets?.includes(e) === !0
          );
        }
      }
      let d = new c(r.h, {
        LOGOUT: function (e) {
          e.isSwitchingAccount || (E = {});
        },
        MULTI_ACCOUNT_REMOVE_ACCOUNT: function (e) {
          e.userId in E && delete E[e.userId];
        },
        STREAMER_MODE_UPDATE: function (e) {
          let t = { ...A };
          return (
            Object.assign(A, { [e.key]: e.value }),
            "enabled" === e.key && "boolean" == typeof e.value
              ? u(e.value, !1)
              : l.default.track(o.HAw.UPDATE_STREAMER_MODE_SETTINGS, {
                  enabled: A.enabled,
                  automatic: A.autoToggle,
                  disable_notifications: A.disableNotifications,
                  disable_sounds: A.disableSounds,
                  hide_instant_invites: A.hideInstantInvites,
                  hide_personal_info: A.hidePersonalInformation,
                  enable_content_protection: A.enableContentProtection,
                  disabled_overlay_widgets:
                    A.disabledOverlayWidgets?.join(",") ?? "",
                  old_enabled: t.enabled,
                  old_automatic: t.autoToggle,
                  old_disable_notifications: t.disableNotifications,
                  old_disable_sounds: t.disableSounds,
                  old_hide_instant_invites: t.hideInstantInvites,
                  old_hide_personal_info: t.hidePersonalInformation,
                  old_enable_content_protection: t.enableContentProtection,
                  old_disabled_overlay_widgets:
                    t.disabledOverlayWidgets?.join(",") ?? "",
                }),
            !0
          );
        },
        RUNNING_STREAMER_TOOLS_CHANGE: function (e) {
          if (!A.autoToggle) return !1;
          {
            let t = e.count > 0;
            return (A.enabled = t), u(t, !0), !0;
          }
        },
      });
    },
    612181(e, t, n) {
      n.d(t, { gf: () => r, u8: () => l, wR: () => a });
      var i = n(247775);
      function r() {
        return i.getToken();
      }
      function a() {
        return null != r();
      }
      let l = (e) => (null != e && /^\/developers/.test(e) ? n(844564) : null);
    },
    321034(e, t, n) {
      n.d(t, { A: () => u });
      var i = n(77729),
        r = n(626584),
        a = n(832213),
        l = n(19575);
      let s = new r.A("ProcessUtilsElectron");
      class o extends a.D {
        lastMemoryUsageKB = void 0;
        constructor() {
          super(),
            (this.cpuCoreCount = i.A?.processUtils?.getCPUCoreCount?.()),
            this.setupReportingTimer();
        }
        setupReportingTimer() {
          let e = i.A?.processUtils?.setMemoryInformation;
          null == e
            ? s.log("setMemoryInformation not available.")
            : (performance.memory?.usedJSHeapSize == null &&
                s.error("usedJSHeapSize is not available."),
              setInterval(() => {
                let t = performance.memory?.usedJSHeapSize ?? 0;
                e({
                  memoryUsageKB: this.lastMemoryUsageKB ?? 0,
                  usedJSHeapSizeKB: Math.ceil(t / 1024),
                });
              }, 1e4));
        }
        getProcessUptime() {
          return i.A?.processUtils?.getProcessUptime?.();
        }
        getCurrentCPUUsagePercent() {
          return i.A?.processUtils?.getCurrentCPUUsagePercent?.();
        }
        getCumulativeCPUUsage() {
          return i.A?.processUtils?.getCumulativeCPUUsage?.();
        }
        getCurrentMemoryUsageKB() {
          let e = o.getCurrentMemoryUsageKBCore();
          return (this.lastMemoryUsageKB = e), e;
        }
        static getCurrentMemoryUsageKBCore() {
          try {
            let e = l.Ay.getDiscordMemoryUsage();
            if (null == e) return 0;
            let t = Object.values(e).reduce((e, t) => e + t, 0);
            return Math.ceil(t / 1024);
          } catch (e) {
            return 0;
          }
        }
        getMemoryUsageDetails() {
          return l.Ay.getDiscordMemoryUsage();
        }
        getMemoryUsageElectronRenderer() {
          try {
            return l.Ay.getDiscordMemoryUsageElectronRenderer();
          } catch (e) {
            return null;
          }
        }
        getMemoryPrivateUsageElectronRenderer() {
          try {
            return l.Ay.getDiscordMemoryPrivateUsageElectronRenderer();
          } catch (e) {
            return null;
          }
        }
        getMemoryUsageElectronRendererUsedHeapSize() {
          return i.A?.processUtils?.getUsedHeapSize?.();
        }
        getMemoryHeapStats() {
          return i.A?.processUtils?.getHeapStats?.();
        }
        getBlinkMemoryInfo() {
          return i.A?.processUtils?.getBlinkMemoryInfo?.();
        }
        getMemoryUsageElectronProcessTypeDetails() {
          try {
            return l.Ay.getDiscordMemoryUsageElectronProcessTypeDetails();
          } catch (e) {
            return null;
          }
        }
        enablePerfMemoryHooks(e) {
          try {
            return l.Ay.enablePerfMemoryHooks(e);
          } catch (e) {
            return null;
          }
        }
        disablePerfMemoryHooks() {
          try {
            return l.Ay.disablePerfMemoryHooks();
          } catch (e) {
            return null;
          }
        }
        getPerfAttributedMemory() {
          try {
            return l.Ay.getPerfAttributedMemory();
          } catch (e) {
            return null;
          }
        }
        getPerfAttributedMemoryCallstacks(e) {
          try {
            return l.Ay.getPerfAttributedMemoryCallstacks(e);
          } catch (e) {
            return null;
          }
        }
        getPerfAttributedMemoryStats() {
          try {
            return l.Ay.getPerfAttributedMemoryStats();
          } catch (e) {
            return null;
          }
        }
        startCPUProfiling(e) {
          try {
            return l.Ay.startCPUProfiling(e);
          } catch (e) {
            return null;
          }
        }
        stopCPUProfiling() {
          return l.Ay.stopCPUProfiling();
        }
        enablePAMemoryProfiler(e) {
          try {
            let t = i.A?.processUtils?.enablePAMemoryProfiler;
            if (void 0 === t) return null;
            return t(e), !0;
          } catch (e) {
            return null;
          }
        }
        disablePAMemoryProfiler() {
          try {
            let e = i.A?.processUtils?.disablePAMemoryProfiler;
            if (void 0 === e) return null;
            return e(), !0;
          } catch (e) {
            return null;
          }
        }
        getPerfAttributedPAMemory() {
          try {
            return i.A?.processUtils?.getPerfAttributedPAMemory?.();
          } catch (e) {
            return null;
          }
        }
        getPerfAttributedPAMemoryCallstacks(e) {
          try {
            return i.A?.processUtils?.getPerfAttributedPAMemoryCallstacks?.(e);
          } catch (e) {
            return null;
          }
        }
        getPartitionAllocatorStats() {
          try {
            return i.A?.processUtils?.getPartitionAllocatorStats?.();
          } catch (e) {
            return null;
          }
        }
        enableProfilingV8Heap(e) {
          try {
            return i.A?.processUtils?.enableProfilingV8Heap?.(e);
          } catch (e) {
            return;
          }
        }
        disableProfilingV8Heap() {
          try {
            return i.A?.processUtils?.disableProfilingV8Heap?.();
          } catch (e) {
            return;
          }
        }
        getProfilerV8MemoryCallstacks() {
          try {
            return i.A?.processUtils?.getProfilerV8MemoryCallstacks?.();
          } catch (e) {
            return null;
          }
        }
        getSystemMetrics() {
          try {
            return (
              i.A?.processUtils?.getSystemMetrics?.() ?? Promise.resolve(null)
            );
          } catch (e) {
            return Promise.resolve(null);
          }
        }
      }
      let u = new o();
    },
    861464(e, t, n) {
      n.d(t, { A: () => h });
      var i = n(385244),
        r = n(718564),
        a = n(436857),
        l = n(47167),
        s = n(652215),
        o = n(985018),
        u = n(942075),
        _ = n(320095),
        E = n(763754),
        A = n(808829),
        c = n(552691),
        d = n(383233),
        I = n(495544),
        T = n(734057),
        N = n(71393),
        S = n(994500),
        p = n(287809),
        O = n(562153),
        C = n(935208);
      let g = {
        "234395307759108106": "https://groovy.bot/commands",
        "365975655608745985": "https://www.pokecord.com/getting-started",
        512412940897484800: "http://jameslantz.net/smilebot",
      };
      function R(e) {
        let t = [
            o.t.Jm6e0x,
            o.t.MGRnRT,
            o.t.EXOEGh,
            o.t["5uCTFN"],
            o.t.rl45Qo,
            o.t.Bh9zpQ,
            o.t.RdEy1J,
            o.t.qcdp00,
            o.t.F7w2Ru,
            o.t.gSyOgK,
            o.t.uYgqv7,
            o.t["b/1SBX"],
            o.t.LhebZF,
          ],
          n = C.default.extractTimestamp(e) % t.length;
        return t[n];
      }
      function m(e) {
        return (0, a.$)(
          o.intl.formatToParts(o.t.ihxM9x, {
            username: e,
            usernameOnClick: s.tEg,
          }),
        );
      }
      let h = {
        stringify: function (e, t) {
          let n = (function (e) {
              let [t] = e.mentions ?? [];
              return null == t
                ? null
                : "object" == typeof t
                  ? (p.default.getUser(t.id) ?? null)
                  : "string" == typeof t
                    ? (p.default.getUser(t) ?? null)
                    : null;
            })(e),
            C = e.channel_id,
            g = O.Ay.getName(null, C, e.author);
          switch (e.type) {
            case s.lAJ.RECIPIENT_ADD:
              if (null == n) return;
              return (0, a.$)(
                o.intl.formatToParts(o.t["7/Xl0S"], {
                  username: g,
                  usernameOnClick: s.tEg,
                  otherUsername: O.Ay.getName(null, C, n),
                  otherUsernameOnClick: s.tEg,
                }),
              );
            case s.lAJ.RECIPIENT_REMOVE:
              if (null == n) return;
              let h = e.author;
              if (null == h || h.id === n.id)
                return (0, a.$)(
                  o.intl.formatToParts(o.t["Qn5+Lf"], {
                    username: g,
                    usernameOnClick: s.tEg,
                  }),
                );
              return (0, a.$)(
                o.intl.formatToParts(o.t.QtZ0RD, {
                  username: g,
                  usernameOnClick: s.tEg,
                  otherUsername: O.Ay.getName(null, C, n),
                  otherUsernameOnClick: s.tEg,
                }),
              );
            case s.lAJ.CALL:
              let { call: M } = e;
              if (null != M && -1 === M.participants.indexOf(I.default.getId()))
                return (0, a.$)(
                  o.intl.formatToParts(o.t.DbgSA0, {
                    username: g,
                    usernameOnClick: s.tEg,
                  }),
                );
              return;
            case s.lAJ.CHANNEL_NAME_CHANGE:
              return (0, a.$)(
                o.intl.formatToParts(
                  t.isForumPost() ? o.t["qa0e/n"] : o.t.XCPMEG,
                  {
                    username: g,
                    usernameOnClick: s.tEg,
                    channelName: e.content,
                  },
                ),
              );
            case s.lAJ.CHANNEL_ICON_CHANGE:
              return (0, a.$)(
                o.intl.formatToParts(o.t.wypJZ0, {
                  username: g,
                  usernameOnClick: s.tEg,
                }),
              );
            case s.lAJ.CHANNEL_PINNED_MESSAGE:
              return (0, a.$)(
                o.intl.formatToParts(o.t["/M60j0"], {
                  username: g,
                  usernameOnClick: s.tEg,
                }),
              );
            case s.lAJ.USER_JOIN:
              return (0, a.$)(
                o.intl.formatToParts(R(e.id), {
                  username: g,
                  usernameOnClick: s.tEg,
                }),
              );
            case s.lAJ.EMOJI_ADDED:
              let f, L;
              return (
                (L =
                  null == (f = T.A.getChannel(e.channel_id))
                    ? null
                    : N.A.getGuild(f.getGuildId())),
                (0, a.$)(
                  o.intl.formatToParts(o.t.PJsjbP, {
                    emoji: e.content,
                    guildName: L?.name ?? o.intl.string(o.t.dtwqPR),
                  }),
                )
              );
            case s.lAJ.GUILD_BOOST:
              return m(g);
            case s.lAJ.GUILD_BOOST_TIER_1:
            case s.lAJ.GUILD_BOOST_TIER_2:
            case s.lAJ.GUILD_BOOST_TIER_3:
              let y;
              return null == (y = T.A.getChannel(C)) ||
                null == N.A.getGuild(y.getGuildId())
                ? m(g)
                : (0, a.$)(
                    o.intl.formatToParts(o.t.ihxM9x, {
                      username: g,
                      usernameOnClick: s.tEg,
                    }),
                  );
            case s.lAJ.GUILD_INVITE_REMINDER:
              return o.intl.string(o.t.gxyKvr);
            case s.lAJ.THREAD_STARTER_MESSAGE:
              return o.intl.formatToPlainString(o.t["B8H+Cl"], {
                username: g,
                threadName: (0, l.m1)(t, p.default, S.A),
              });
            case s.lAJ.ROLE_SUBSCRIPTION_PURCHASE:
              if (e instanceof d.Ay) return null;
              return (0, a.$)(
                (0, u.eb)({
                  username: g,
                  guildId: t.guild_id,
                  roleSubscriptionData: e.role_subscription_data,
                }),
              );
            case s.lAJ.PURCHASE_NOTIFICATION:
              if (
                e instanceof d.Ay ||
                e.purchase_notification?.guild_product_purchase?.product_name ==
                  null
              )
                return null;
              return (0, a.$)(
                (function (e) {
                  let {
                    username: t,
                    usernameOnClickHandler: n = s.tEg,
                    productName: i,
                  } = e;
                  return o.intl.formatToParts(o.t["w4iXs+"], {
                    username: t,
                    usernameHook: n,
                    productName: i,
                  });
                })({
                  username: g,
                  productName:
                    e.purchase_notification.guild_product_purchase.product_name,
                }),
              );
            case s.lAJ.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION:
              if (e instanceof d.Ay) return null;
              let D = (0, E.p_)((0, _.rh)(e));
              return (0, a.$)(
                (0, A.P)({ application: e.application, username: D.nick }),
              );
            case s.lAJ.PRIVATE_CHANNEL_INTEGRATION_ADDED:
              if (e instanceof d.Ay) return null;
              return (0, a.$)(
                (0, c.g6)({
                  application: e.application,
                  username: (0, E.p_)((0, _.rh)(e)).nick,
                }),
              );
            case s.lAJ.PRIVATE_CHANNEL_INTEGRATION_REMOVED:
              if (e instanceof d.Ay) return null;
              return (0, a.$)(
                (0, c.uk)({
                  application: e.application,
                  username: (0, E.p_)((0, _.rh)(e)).nick,
                }),
              );
            case s.lAJ.AUTO_MODERATION_ACTION:
              if (
                e.embeds?.some((e) => {
                  let { type: t } = e;
                  return t === s.Auw.AUTO_MODERATION_NOTIFICATION;
                })
              ) {
                let t = e.embeds.find((e) => {
                    let { type: t } = e;
                    return t === s.Auw.AUTO_MODERATION_NOTIFICATION;
                  }),
                  n = t?.fields?.find(
                    (e) => "name" in e && e.name === i.E.NOTIFICATION_TYPE,
                  ),
                  l = null != n && "value" in n ? n.value : void 0,
                  u = T.A.getChannel(C);
                if (null == u) return null;
                let _ = N.A.getGuild(u.getGuildId());
                if (null == _) return null;
                switch (l) {
                  case r.W.ACTIVITY_ALERTS_ENABLED:
                    return (0, a.$)(
                      o.intl.formatToParts(o.t.wt3ZUM, { guildName: _.name }),
                    );
                  case r.W.INTERACTION_BLOCKED:
                    return (0, a.$)(
                      o.intl.formatToParts(o.t.AkqI0g, { guildName: _.name }),
                    );
                  default:
                    return (0, a.$)(
                      o.intl.formatToParts(o.t["a+lJKl"], {
                        guildName: _.name,
                      }),
                    );
                }
              }
              return e.content;
            case s.lAJ.GUILD_INCIDENT_ALERT_MODE_ENABLED:
              var U = e.content;
              let P = T.A.getChannel(C);
              if (null == P) return null;
              let G = N.A.getGuild(P.getGuildId());
              return null == G
                ? null
                : (0, a.$)(
                    o.intl.formatToParts(o.t.iOuWPk, {
                      username: g,
                      guildName: G.name,
                      time:
                        "" !== U
                          ? new Date(U).toLocaleString(o.intl.currentLocale, {
                              hour: "numeric",
                              minute: "2-digit",
                            })
                          : "",
                    }),
                  );
            case s.lAJ.GUILD_INCIDENT_ALERT_MODE_DISABLED:
              let v = T.A.getChannel(C);
              if (null == v) return null;
              let B = N.A.getGuild(v.getGuildId());
              return null == B
                ? null
                : (0, a.$)(
                    o.intl.formatToParts(o.t.axmbpm, {
                      username: g,
                      guildName: B.name,
                    }),
                  );
            default:
              return e.content;
          }
        },
        getSystemMessageUserJoin: function (e) {
          let t = [
              o.t["0cuj7l"],
              o.t["MuW+CN"],
              o.t.osqpHX,
              o.t["5ToSh2"],
              o.t.JEB8ps,
              o.t.pkOV5T,
              o.t["kRb1J+"],
              o.t["EmKLY+"],
              o.t.rPtBnb,
              o.t["5B/ekS"],
              o.t.ESNC3Y,
              o.t.Iw6d8w,
              o.t["WecSZ/"],
            ],
            n = C.default.extractTimestamp(e) % t.length;
          return t[n];
        },
        getSystemMessageUserJoinMobile: R,
        getSystemMessageBotJoin: function (e) {
          return null == g[e]
            ? null
            : o.intl.format(o.t.xw1Ij0, {
                learnOnClick: { onClick: () => window.open(g[e]) },
              });
        },
      };
    },
    612185(e, t, n) {
      n.d(t, { A: () => T, Q: () => d });
      var i = n(627968),
        r = n(64700),
        a = n(430111),
        l = n(598748),
        s = n(286043),
        o = n(659936),
        u = n(179856),
        _ = n(957742),
        E = n(705880),
        A = n(272852);
      let c = r.createContext(null);
      function d() {
        let e = r.useContext(c);
        if (null == e)
          throw Error(
            "useLayoutRendererContext must be used within a LayoutRenderer",
          );
        return e;
      }
      let I = {
        [l.m.WIDGET_TOP]: {
          hero_overview_widget_top: () => (0, i.jsx)(E.A, {}),
        },
        [l.m.WIDGET_BOTTOM]: {
          stats_grid_3x2_widget_bottom: () => (0, i.jsx)(_.A, {}),
        },
        [l.m.MINI_PROFILE]: {
          hero_stat_preview_mini_profile: () => (0, i.jsx)(u.A, {}),
        },
        [l.m.ACTIVITY_ACCESSORY]: {
          text_with_icon_activity_accessory: () => (0, i.jsx)(s.A, {}),
        },
        [l.m.ADD_WIDGET_PREVIEW]: {
          hero_preview_add_widget_preview: (e) => (0, i.jsx)(o.A, { ...e }),
        },
      };
      function T(e) {
        let {
            surface: t,
            surfaceConfig: n,
            resolutionContext: l,
            locale: s,
            header: o,
            onClick: u,
            layoutProps: _,
          } = e,
          E = r.useMemo(
            () =>
              new Intl.NumberFormat(s, {
                notation: "compact",
                compactDisplay: "short",
                roundingMode: "floor",
              }),
            [s],
          ),
          d = r.useMemo(() => new a.Y(s, { style: "narrow" }), [s]);
        if (null == n) return null;
        let T = I[t]?.[n.layout];
        return null == T
          ? null
          : (0, i.jsx)(c.Provider, {
              value: {
                surfaceConfig: n,
                locale: s,
                numberFormat: E,
                durationFormat: d,
                header: o,
                onClick: u,
                resolutionContext: l,
                resolveFieldValue: (0, A.J)(l),
              },
              children: T(_),
            });
      }
    },
    490577(e, t, n) {
      n.d(t, { W: () => s }), n(321073);
      var i = n(61090),
        r = n(887018),
        a = n(129966),
        l = n(860407);
      class s {
        name;
        handle;
        raw;
        lastState;
        databaseStateCallback;
        static async open(e, t) {
          return new s(await r.x.open(e, t));
        }
        static openSyncUnsafe(e, t) {
          return new s(r.x.openSyncUnsafe(e, t));
        }
        static delete(e) {
          return r.x.delete(e);
        }
        constructor(e) {
          (this.raw = e),
            (this.name = e.name),
            (this.lastState = l.z9.Open),
            (this.handle = e.handle),
            (this.databaseStateCallback = a.v.addDatabaseStateCallback(
              (e, t) => {
                this.handle === e && (this.lastState = t);
              },
            ));
        }
        close() {
          (this.lastState = l.z9.Closed),
            this.raw?.close(),
            (this.raw = null),
            a.v.removeCompletionCallback(this.databaseStateCallback);
        }
        disable(e) {
          return null == this.raw
            ? Promise.resolve()
            : ((this.lastState = l.z9.Disabled),
              this.execute({ type: "db.disable", handle: 0, reason: e }));
        }
        execute(e, t) {
          if (null == this.raw)
            throw Error(`database is no longer open (database: ${this}`);
          let n = "key" in e ? e.key[0] : e.table,
            r = () =>
              a.v.executeAsync(t ?? e.type, (t) => {
                this.raw.execute(t, { ...e, handle: 0 });
              });
          return null === t
            ? r()
            : i.A.timeAsync("\uD83D\uDCBE", `${t ?? e.type} ${n ?? ""}`, r);
        }
        executeSync(e) {
          if (null == this.raw)
            throw Error(`database is no longer open (database: ${this}`);
          let t = "key" in e ? e.key[0] : e.table;
          return i.A.time("\uD83D\uDCBE", `SYNC: ${e.type} ${t ?? ""}`, () =>
            this.raw.execute(null, { ...e, handle: 0 }, { synchronous: !0 }),
          );
        }
        fullVacuum() {
          return this.execute({ type: "db.vacuum", handle: 0, complete: !0 });
        }
        fsInfo() {
          return this.execute({ type: "db.fs_info", handle: 0 });
        }
        incrementalVacuum() {
          return this.execute({ type: "db.vacuum", handle: 0, complete: !1 });
        }
        instantaneousState() {
          return null == this.raw
            ? l.z9.Closed
            : (this.lastState = this.executeSync({ type: "db.state" }));
        }
        async instantaneousStateAsync() {
          return null == this.raw
            ? l.z9.Closed
            : (this.lastState = await this.execute({ type: "db.state" }));
        }
        state() {
          return this.lastState;
        }
        transaction(e, t) {
          let n = new o(this);
          return Promise.resolve(e(n)).then(() =>
            n.operations.length > 0
              ? this.execute(
                  { type: "db.transaction", operations: n.complete() },
                  t,
                )
              : Promise.resolve(),
          );
        }
      }
      class o {
        database;
        operations;
        constructor(e) {
          (this.database = e), (this.operations = []);
        }
        add(e) {
          this.operations.push(e);
        }
        complete() {
          for (let e of this.operations) e.handle = 0;
          return this.operations;
        }
        toString() {
          return `[DatabaseTransaction ${this.database.handle}: ${this.operations.length} ops]`;
        }
      }
    },
    129966(e, t, n) {
      n.d(t, { v: () => s }), n(321073);
      var i = n(118356),
        r = n(379299);
      let a = "1" === n(72290).env.KV_STORAGE_LOGGING,
        l = new i.Vy("Runtime");
      class s {
        static counter = 0;
        static pending = new Map();
        static initialized = !1;
        static dbStateCallbacks = [];
        static completionCallbacks = [];
        static nextId() {
          return ++this.counter;
        }
        static executeAsync(e, t) {
          return (
            this.initialize(),
            new Promise((n, i) => {
              let r = this.nextId();
              t(r),
                this.pending.set(r, {
                  id: r,
                  tag: e,
                  started: performance.now(),
                  resolve: n,
                  reject: i,
                });
            })
          );
        }
        static addCompletionCallback(e) {
          return this.completionCallbacks.push(e), e;
        }
        static addDatabaseStateCallback(e) {
          return this.dbStateCallbacks.push(e), e;
        }
        static removeCompletionCallback(e) {
          this.completionCallbacks = this.completionCallbacks.filter(
            (t) => t !== e,
          );
        }
        static removeDatabaseStateCallback(e) {
          this.dbStateCallbacks = this.dbStateCallbacks.filter((t) => t !== e);
        }
        static onResponse(e, t) {
          let n = performance.now(),
            i = this.pending.get(e.id);
          null != i &&
            (this.pending.delete(e.id),
            (e.timings.materializationTimeNanoseconds = t ?? 0),
            this.completeOperation(i, e, n),
            this.resolveOperation(i, e));
        }
        static onStatus(e) {
          for (let t of this.dbStateCallbacks) t(e.handle, e.state);
        }
        static resolveOperation(e, t) {
          t.ok
            ? e.resolve(t.data)
            : e.reject("string" == typeof t.data ? Error(t.data) : t.data);
        }
        static completeOperation(e, t, n) {
          if (this.completionCallbacks.length > 0) {
            let i = {
              id: e.id,
              tag: e.tag,
              ok: t.ok,
              value: t.data,
              timings: {
                queue: t.timings.queueTimeNanoseconds / 1e6,
                execution: t.timings.executionTimeNanoseconds / 1e6,
                materialization: t.timings.materializationTimeNanoseconds / 1e6,
                ccTotal: t.timings.totalTimeNanoseconds / 1e6,
                jsTotal: n - e.started,
              },
            };
            for (let e of this.completionCallbacks) e(i);
          }
        }
        static initialize() {
          this.initialized ||
            (r.T.setCallbacks({
              status: (e) => this.onStatus(e),
              response: (e, t) => this.onResponse(e, t),
            }),
            a &&
              (this.addCompletionCallback((e) => {
                let t = e.ok ? "completed" : "failed",
                  n = `${e.timings.execution.toFixed(3)}ms execution, ${e.timings.materialization.toFixed(3)}ms js materialization, ${e.timings.ccTotal.toFixed(3)}ms cc completion, ${e.timings.jsTotal.toFixed(3)}ms js reception`;
                l.info(
                  `${e.tag} (#${e.id}) ${t} in ${e.timings.ccTotal.toFixed(3)}ms (${n}).`,
                );
              }),
              this.addDatabaseStateCallback((e, t) =>
                l.info(`${e} (state: ${t})`),
              )),
            (this.initialized = !0));
        }
      }
    },
    631159(e, t, n) {
      n.d(t, { G: () => i });
      function i(e) {
        for (
          var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1;
          i < t;
          i++
        )
          n[i - 1] = arguments[i];
      }
    },
    919535(e, t, n) {
      n.d(t, {
        $: () => r,
        Ae: () =>
          function e(t) {
            let n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : { limit: 200, hasBailedAst: !1 };
            if (Array.isArray(t)) {
              let r = t.length;
              for (let a = 0; a < r; a++) {
                let { ast: r } = e(t[a], n);
                if (r === i) {
                  (n.hasBailedAst = !0), (t.length = a);
                  break;
                }
                t[a] = r;
              }
            } else if ("text" !== t.type) {
              if (((n.limit -= 1), n.limit <= 0))
                return (n.hasBailedAst = !0), { ast: i, hasBailedAst: !0 };
              if (Array.isArray(t.content)) {
                let { ast: i } = e(t.content, n);
                t.content = i;
              }
              "list" === t.type &&
                (t.items = t.items.map((t) => {
                  let { ast: i } = e(t, n);
                  return i;
                }));
            }
            return { ast: t, hasBailedAst: n.hasBailedAst };
          },
        rI: () =>
          function e(t, n) {
            let i =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (Array.isArray(n)) {
              let r = n.length,
                a = [];
              for (let l = 0; l < r; l++)
                !(function (e, t) {
                  if (Array.isArray(t)) {
                    let { length: n } = t;
                    for (let i = 0; i < n; i++) e.push(t[i]);
                    return;
                  }
                  e.push(t);
                })(a, e(t, n[l], i));
              return (
                t.isSlate ||
                  (function (e) {
                    let t = null;
                    for (let n = 0; n < e.length; n++) {
                      let i = e[n];
                      if (null == t || "text" != t.type || t.type != i.type) {
                        t = i;
                        continue;
                      }
                      (t.content += i.content), e.splice(n, 1), n--;
                    }
                  })(a),
                a
              );
            }
            return (null != n.content && (n.content = e(t, n.content, n)),
            "inlineCode" === n.type && delete n.validationChildContent,
            "list" === n.type &&
              (n.items = n.items.map((n) =>
                Array.isArray(n) ? e(t, n, null) : n,
              )),
            null != i && n.type === i.type)
              ? n.content
              : n;
          },
      }),
        n(321073);
      let i = {};
      function r(e) {
        return (function e(t) {
          let n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
          return (
            Array.isArray(t)
              ? t.forEach((t) => e(t, n))
              : "string" == typeof t.content
                ? n.push(t.content)
                : null != t.content && e(t.content, n),
            n
          );
        })(e).join("");
      }
    },
    436857(e, t, n) {
      let i;
      n.d(t, { $: () => r.$, X: () => l, aV: () => a });
      var r = n(919535);
      n(957302);
      let a = (i = n(891600).A).reactParserFor,
        l = i.astParserFor;
    },
    713402(e, t, n) {
      n.d(t, { J: () => s });
      var i = n(391470),
        r = n.n(i);
      function a(e, t, n, i) {
        if (null != t) {
          let n = r()(e, t, i);
          for (; e[n] !== t && n < e.length - 1; ) n += 1;
          e.splice(n, 1);
        }
        null != n && e.splice(r()(e, n, i), 0, n);
      }
      let l = [];
      class s {
        indexBy;
        sortBy;
        isEqual;
        valueMap = new Map();
        valueArray = [];
        valueIndexes = {};
        valueIndexesForGetter = {};
        dirty = !1;
        _version = 0;
        constructor(e, t, n = (e, t) => e === t) {
          (this.indexBy = e), (this.sortBy = t), (this.isEqual = n);
        }
        get version() {
          return this._version;
        }
        indexes() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (e) return this.valueIndexes;
          if (!e && this.dirty) {
            let e = {};
            for (let [t, n] of Object.entries(this.valueIndexes)) e[t] = [...n];
            (this.valueIndexesForGetter = e), (this.dirty = !1);
          }
          return this.valueIndexesForGetter;
        }
        keys() {
          return this.valueMap.keys();
        }
        values(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return null == e ? this.valueArray : (this.indexes(t)[e] ?? l);
        }
        size(e) {
          return null == e
            ? this.valueArray.length
            : (this.valueIndexes[e]?.length ?? 0);
        }
        clear() {
          this.valueMap.clear(),
            (this.valueArray = []),
            (this.valueIndexes = {}),
            (this.valueIndexesForGetter = {});
        }
        has(e) {
          return this.valueMap.has(e);
        }
        get(e) {
          return this.valueMap.get(e);
        }
        set(e, t) {
          let n = this.get(e);
          return (
            !(
              (null == n && null == t) ||
              (null != n && null != t && this.isEqual(n, t))
            ) &&
            (null != t ? this.valueMap.set(e, t) : this.valueMap.delete(e),
            a(this.valueArray, n, t, this.sortBy),
            null != n &&
              this.indexBy(n).forEach((e) =>
                a(this.getIndex(e), n, null, this.sortBy),
              ),
            null != t &&
              this.indexBy(t).forEach((e) =>
                a(this.getIndex(e), null, t, this.sortBy),
              ),
            (this.dirty = !0),
            this._version++,
            !0)
          );
        }
        delete(e) {
          return this.set(e, null);
        }
        getIndex(e) {
          let t = this.valueIndexes[e];
          return null == t && ((t = []), (this.valueIndexes[e] = t)), t;
        }
      }
    },
    374994(e, t, n) {
      n.d(t, { $D: () => l, dE: () => r, nt: () => a, s9: () => s });
      var i = n(661531);
      function r(e) {
        return i.A.unsafe_rawColors[e].css;
      }
      function a(e, t) {
        return i.A.unsafe_rawColors[e].resolve(t).hex();
      }
      function l() {
        return i.A.themes;
      }
      function s() {
        return i.A.radii;
      }
    },
    663675(e, t, n) {
      n.d(t, { d: () => r });
      var i,
        r =
          (((i = {}).STATIC = "STATIC"),
          (i.RESPONSIVE = "RESPONSIVE"),
          (i.MOSAIC = "MOSAIC"),
          i);
    },
    718564(e, t, n) {
      n.d(t, { W: () => r });
      var i,
        r =
          (((i = {}).RAID = "raid"),
          (i.MENTION_RAID = "mention_raid"),
          (i.ACTIVITY_ALERTS_ENABLED = "activity_alerts_enabled"),
          (i.INTERACTION_BLOCKED = "interaction_blocked"),
          i);
    },
    511986(e, t, n) {
      n.d(t, { h: () => i });
      let i = "2031446579660906796";
    },
    448761(e, t, n) {
      n.d(t, { M: () => a, l: () => r });
      var i,
        r =
          (((i = {})[(i.DEFAULT = 0)] = "DEFAULT"),
          (i[(i.RECIPIENT_ADD = 1)] = "RECIPIENT_ADD"),
          (i[(i.RECIPIENT_REMOVE = 2)] = "RECIPIENT_REMOVE"),
          (i[(i.CALL = 3)] = "CALL"),
          (i[(i.CHANNEL_NAME_CHANGE = 4)] = "CHANNEL_NAME_CHANGE"),
          (i[(i.CHANNEL_ICON_CHANGE = 5)] = "CHANNEL_ICON_CHANGE"),
          (i[(i.CHANNEL_PINNED_MESSAGE = 6)] = "CHANNEL_PINNED_MESSAGE"),
          (i[(i.USER_JOIN = 7)] = "USER_JOIN"),
          (i[(i.GUILD_BOOST = 8)] = "GUILD_BOOST"),
          (i[(i.GUILD_BOOST_TIER_1 = 9)] = "GUILD_BOOST_TIER_1"),
          (i[(i.GUILD_BOOST_TIER_2 = 10)] = "GUILD_BOOST_TIER_2"),
          (i[(i.GUILD_BOOST_TIER_3 = 11)] = "GUILD_BOOST_TIER_3"),
          (i[(i.CHANNEL_FOLLOW_ADD = 12)] = "CHANNEL_FOLLOW_ADD"),
          (i[(i.GUILD_STREAM = 13)] = "GUILD_STREAM"),
          (i[(i.GUILD_DISCOVERY_DISQUALIFIED = 14)] =
            "GUILD_DISCOVERY_DISQUALIFIED"),
          (i[(i.GUILD_DISCOVERY_REQUALIFIED = 15)] =
            "GUILD_DISCOVERY_REQUALIFIED"),
          (i[(i.GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING = 16)] =
            "GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING"),
          (i[(i.GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING = 17)] =
            "GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING"),
          (i[(i.THREAD_CREATED = 18)] = "THREAD_CREATED"),
          (i[(i.REPLY = 19)] = "REPLY"),
          (i[(i.CHAT_INPUT_COMMAND = 20)] = "CHAT_INPUT_COMMAND"),
          (i[(i.THREAD_STARTER_MESSAGE = 21)] = "THREAD_STARTER_MESSAGE"),
          (i[(i.GUILD_INVITE_REMINDER = 22)] = "GUILD_INVITE_REMINDER"),
          (i[(i.CONTEXT_MENU_COMMAND = 23)] = "CONTEXT_MENU_COMMAND"),
          (i[(i.AUTO_MODERATION_ACTION = 24)] = "AUTO_MODERATION_ACTION"),
          (i[(i.ROLE_SUBSCRIPTION_PURCHASE = 25)] =
            "ROLE_SUBSCRIPTION_PURCHASE"),
          (i[(i.INTERACTION_PREMIUM_UPSELL = 26)] =
            "INTERACTION_PREMIUM_UPSELL"),
          (i[(i.STAGE_START = 27)] = "STAGE_START"),
          (i[(i.STAGE_END = 28)] = "STAGE_END"),
          (i[(i.STAGE_SPEAKER = 29)] = "STAGE_SPEAKER"),
          (i[(i.STAGE_RAISE_HAND = 30)] = "STAGE_RAISE_HAND"),
          (i[(i.STAGE_TOPIC = 31)] = "STAGE_TOPIC"),
          (i[(i.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION = 32)] =
            "GUILD_APPLICATION_PREMIUM_SUBSCRIPTION"),
          (i[(i.PRIVATE_CHANNEL_INTEGRATION_ADDED = 33)] =
            "PRIVATE_CHANNEL_INTEGRATION_ADDED"),
          (i[(i.PRIVATE_CHANNEL_INTEGRATION_REMOVED = 34)] =
            "PRIVATE_CHANNEL_INTEGRATION_REMOVED"),
          (i[(i.PREMIUM_REFERRAL = 35)] = "PREMIUM_REFERRAL"),
          (i[(i.GUILD_INCIDENT_ALERT_MODE_ENABLED = 36)] =
            "GUILD_INCIDENT_ALERT_MODE_ENABLED"),
          (i[(i.GUILD_INCIDENT_ALERT_MODE_DISABLED = 37)] =
            "GUILD_INCIDENT_ALERT_MODE_DISABLED"),
          (i[(i.GUILD_INCIDENT_REPORT_RAID = 38)] =
            "GUILD_INCIDENT_REPORT_RAID"),
          (i[(i.GUILD_INCIDENT_REPORT_FALSE_ALARM = 39)] =
            "GUILD_INCIDENT_REPORT_FALSE_ALARM"),
          (i[(i.GUILD_DEADCHAT_REVIVE_PROMPT = 40)] =
            "GUILD_DEADCHAT_REVIVE_PROMPT"),
          (i[(i.CUSTOM_GIFT = 41)] = "CUSTOM_GIFT"),
          (i[(i.GUILD_GAMING_STATS_PROMPT = 42)] = "GUILD_GAMING_STATS_PROMPT"),
          (i[(i.PURCHASE_NOTIFICATION = 44)] = "PURCHASE_NOTIFICATION"),
          (i[(i.VOICE_HANGOUT_INVITE = 45)] = "VOICE_HANGOUT_INVITE"),
          (i[(i.POLL_RESULT = 46)] = "POLL_RESULT"),
          (i[(i.CHANGELOG = 47)] = "CHANGELOG"),
          (i[(i.NITRO_NOTIFICATION = 48)] = "NITRO_NOTIFICATION"),
          (i[(i.CHANNEL_LINKED_TO_LOBBY = 49)] = "CHANNEL_LINKED_TO_LOBBY"),
          (i[(i.GIFTING_PROMPT = 50)] = "GIFTING_PROMPT"),
          (i[(i.IN_GAME_MESSAGE_NUX = 51)] = "IN_GAME_MESSAGE_NUX"),
          (i[(i.GUILD_JOIN_REQUEST_ACCEPT_NOTIFICATION = 52)] =
            "GUILD_JOIN_REQUEST_ACCEPT_NOTIFICATION"),
          (i[(i.GUILD_JOIN_REQUEST_REJECT_NOTIFICATION = 53)] =
            "GUILD_JOIN_REQUEST_REJECT_NOTIFICATION"),
          (i[(i.GUILD_JOIN_REQUEST_WITHDRAWN_NOTIFICATION = 54)] =
            "GUILD_JOIN_REQUEST_WITHDRAWN_NOTIFICATION"),
          (i[(i.HD_STREAMING_UPGRADED = 55)] = "HD_STREAMING_UPGRADED"),
          (i[(i.CHAT_WALLPAPER_SET = 56)] = "CHAT_WALLPAPER_SET"),
          (i[(i.CHAT_WALLPAPER_REMOVED = 57)] = "CHAT_WALLPAPER_REMOVED"),
          (i[(i.REPORT_TO_MOD_DELETED_MESSAGE = 58)] =
            "REPORT_TO_MOD_DELETED_MESSAGE"),
          (i[(i.REPORT_TO_MOD_TIMEOUT_USER = 59)] =
            "REPORT_TO_MOD_TIMEOUT_USER"),
          (i[(i.REPORT_TO_MOD_KICK_USER = 60)] = "REPORT_TO_MOD_KICK_USER"),
          (i[(i.REPORT_TO_MOD_BAN_USER = 61)] = "REPORT_TO_MOD_BAN_USER"),
          (i[(i.REPORT_TO_MOD_CLOSED_REPORT = 62)] =
            "REPORT_TO_MOD_CLOSED_REPORT"),
          (i[(i.EMOJI_ADDED = 63)] = "EMOJI_ADDED"),
          (i[(i.PREMIUM_GROUP_INVITE = 64)] = "PREMIUM_GROUP_INVITE"),
          (i[(i.VOICE_SESSION = 65)] = "VOICE_SESSION"),
          (i[(i.GUILD_BOOST_UPSELL = 66)] = "GUILD_BOOST_UPSELL"),
          (i[(i.FRIEND_REQUEST_ACCEPTED = 67)] = "FRIEND_REQUEST_ACCEPTED"),
          i);
      let a = {
        UNDELETABLE: new Set([1, 2, 3, 4, 5, 21, 35, 56, 57, 64]),
        GUILD_DISCOVERY_STATUS: new Set([14, 15, 16, 17]),
        USER_MESSAGE: new Set([0, 19, 20, 23, 26, 41, 45, 47]),
        NOTIFIABLE_SYSTEM_MESSAGE: new Set([7, 22, 35, 46, 63, 64]),
        REPLYABLE: new Set([
          0, 7, 19, 20, 23, 24, 25, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42,
          45, 46, 63,
        ]),
        FORWARDABLE: new Set([0, 19, 20, 23, 35]),
        REFERENCED_MESSAGE_AVAILABLE: new Set([19, 21, 23]),
        AVAILABLE_IN_GUILD_FEED: new Set([0, 19]),
        DEADCHAT_PROMPTS: new Set([40, 42]),
        NON_COLLAPSIBLE: new Set([24]),
        NON_PARSED: new Set([4, 12, 18, 27, 28, 31]),
        AUTOMOD_INCIDENT_ACTIONS: new Set([36, 37, 38, 39]),
        SELF_MENTIONABLE_SYSTEM: new Set([46]),
        SCHEDULABLE: new Set([0, 19]),
      };
    },
    539267(e, t, n) {
      n.d(t, { V: () => r });
      var i,
        r =
          (((i = {})[(i.ONE_MONTH = 30)] = "ONE_MONTH"),
          (i[(i.TWO_MONTHS = 60)] = "TWO_MONTHS"),
          (i[(i.THREE_MONTHS = 90)] = "THREE_MONTHS"),
          i);
    },
    70298(e, t, n) {
      n.d(t, { b: () => i });
      function i() {
        let e = window;
        return (
          null != e.jQuery ||
          null != e.$ ||
          null != e.BetterDiscord ||
          null != e.BdApi ||
          null != e.rambox
        );
      }
    },
    490114(e, t, n) {
      e.exports = { k: "animationWrapper__41e0f", I: "lottieAnimation__41e0f" };
    },
    343166(e, t, n) {
      e.exports = { l: "appMount__51fd7" };
    },
  },
]);
//# sourceMappingURL=98298.68777eca1f0d2489.js.map
