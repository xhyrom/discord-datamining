"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["26683"],
  {
    356645(e, t, n) {
      n.d(t, { n: () => T });
      var i = n(636537),
        r = n(499979),
        a = n(451988),
        l = n(228366),
        s = n(773669),
        E = n(189081),
        _ = n(645243),
        o = n(927813),
        u = n(652215);
      let A = 10 * o.A.Millis.MINUTE,
        d = 10 * o.A.Millis.MINUTE,
        c = +o.A.Millis.MINUTE,
        I = {};
      async function T(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          o = s.default.locale;
        return (
          l.h.dispatch({
            type: "APPLICATION_BUILD_FETCH_START",
            applicationId: e,
            branchId: t,
            locale: o,
          }),
          n && (await (0, r.yy)(Math.random() * c)),
          i.Bo.get({
            url: u.Rsh.APPLICATION_LIVE_BUILD(e, t),
            query: { platform: (0, _.O)(), locale: o },
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
                    locale: o,
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
                  I[t].start(A + Math.random() * d, () => {
                    null != E.A.getLibraryApplication(e, t) && T(e, t);
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
        uA: () => E,
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
      function E(e) {
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
      n.d(t, { x: () => m });
      var i = n(132500),
        r = n(192308),
        a = n(228366),
        l = n(890615),
        s = n(51758),
        E = n(776781),
        _ = n(96566),
        o = n(413339),
        u = n(58149),
        A = n(329551),
        d = n(912630),
        c = n(965162),
        I = n(734057),
        T = n(51760),
        N = n(763827),
        S = n(309010),
        O = n(287809),
        C = n(34135),
        p = n(71393),
        R = n(834942),
        g = n(576705),
        M = n(977997),
        h = n(147036);
      let m = function (e, t) {
        let m = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          L = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          { lockVoiceStateForResume: D = !1, bypassIdleUpdate: y = !1 } =
            arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
          f = I.A.getChannel(e),
          U = M.A.getCurrentClientVoiceChannelId(t ?? null) === e,
          P = null != f ? R.A.getCheck(f.guild_id) : null;
        if (
          !(null != t && (0, s.V)(t)) &&
          (null == P || P.canChat || (0, E.pC)(f))
        ) {
          if (null != f && !U) {
            let e = (0, h.Pd)(f, M.A, p.A);
            if (e && f.isGuildStageVoice() && (0, _.xn)(f.id))
              return void (0, r.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                  n.e("90261"),
                  n.e("24199"),
                  n.e("43039"),
                  n.e("88077"),
                  n.e("13681"),
                  n.e("32551"),
                  n.e("52367"),
                  n.e("77998"),
                  n.e("66900"),
                  n.e("1555"),
                  n.e("44695"),
                  n.e("21690"),
                  n.e("55314"),
                  n.e("29177"),
                  n.e("1177"),
                  n.e("32817"),
                  n.e("89094"),
                  n.e("5501"),
                  n.e("77245"),
                  n.e("34472"),
                  n.e("45723"),
                  n.e("38835"),
                  n.e("78777"),
                  n.e("19452"),
                  n.e("43568"),
                ]).then(n.bind(n, 717523));
                return (t) => e({ channel: f, ...t });
              });
            if (e)
              return void (0, r.openModalLazy)(async () => {
                let { default: e } = await n.e("54207").then(n.bind(n, 361698));
                return (t) => e(t);
              });
            if (!(0, l.A)(f, g.A)) return;
          }
          m && (0, o.PX)(),
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
                      ...(0, u.JK)(N.A.getGuildId(), N.A.getChannelId(), n),
                      duration_muted_ms: i?.duration_muted_ms ?? null,
                      output_audio_route_type: C.A.getCurrentRouteType(),
                    });
                if ((e(), d.A.hasUsedBackgroundInCall)) {
                  let e,
                    t = {
                      ...l,
                      ...((e = (0, A.i)(O.default.getCurrentUser())),
                      {
                        video_device_name:
                          T.Ay.getVideoDevices()[T.Ay.getVideoDeviceId()]?.name,
                        video_hardware_scaling_enabled:
                          T.Ay.getHardwareEncoding(),
                        video_effect_type: (0, c.wC)(e),
                        video_effect_detail: (0, c._V)(e),
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
                  video: m,
                  stream: L,
                  lockVoiceStateForResume: D,
                  joinVoiceId: n,
                  bypassIdleUpdate: y,
                });
              },
              e,
              m,
            );
        }
      };
    },
    884384(e, t, n) {
      n.d(t, { AZ: () => R, Ay: () => L, Qn: () => g, cR: () => M }), n(321073);
      var i,
        r = n(284009),
        a = n.n(r),
        l = n(636537),
        s = n(155718),
        E = n(58149),
        _ = n(626584),
        o = n(865116),
        u = n(322683),
        A = n(794691),
        d = n(495544),
        c = n(544180),
        I = n(927813),
        T = n(453771),
        N = n(513391),
        S = n(292348),
        O = n(743445),
        C = n(652215),
        p = n(381941),
        R =
          (((i = {})[(i.SEND = 0)] = "SEND"),
          (i[(i.EDIT = 1)] = "EDIT"),
          (i[(i.COMMAND = 2)] = "COMMAND"),
          (i[(i.SEND_ANNOUNCEMENT = 3)] = "SEND_ANNOUNCEMENT"),
          i);
      let g = (e) => 1 === e.type,
        M = (e) =>
          0 === e.type || 3 === e.type
            ? e.message.nonce
            : g(e)
              ? e.message.messageId
              : e.message.data.id,
        h = [+I.A.Millis.MINUTE, 5 * I.A.Millis.MINUTE];
      class m extends N.A {
        maxSize;
        requests = new Map();
        analyticsTimeouts = new Map();
        constructor(e = 5) {
          super(new _.A("MessageQueue")), (this.maxSize = e);
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
              (0, E.zV)(C.HAw.SEND_MESSAGE_QUEUED, { queued_duration_ms: e });
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
              (n.body.code === C.t02.SLOWMODE_RATE_LIMITED ||
                n.body.code === C.t02.CHANNEL_FOLLOWING_EDIT_RATE_LIMITED)
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
            s = (0, u.O)(),
            E = {
              mobile_network_type: c.A.getType(),
              ...r,
              ...(null != s && { signal_strength: s }),
            };
          if (o.Ay.get("send_fail_100")) {
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
          let _ = this.createResponseHandler(e.nonce, t),
            d = new AbortController();
          this.startQueueMetricTimers(e.nonce),
            l.Bo.post(
              {
                url: C.Rsh.MESSAGES(n),
                body: E,
                context: null != a ? { location: a } : void 0,
                oldFormErrors: !0,
                ...p.ZG,
                signal: d.signal,
                rejectWithError: !0,
                onRequestCreated: () => {
                  null != e.nonce && this.requests.set(e.nonce, d);
                },
              },
              _,
            );
        }
        handleSendAnnouncement(e, t) {
          let { channelId: n, analyticsLocation: i, ...r } = e,
            a = (0, A.A)() ?? i,
            s = (0, u.O)(),
            E = {
              mobile_network_type: c.A.getType(),
              ...r,
              ...(null != s && { signal_strength: s }),
            };
          if (o.Ay.get("send_fail_100")) {
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
          let _ = this.createResponseHandler(e.nonce, t),
            d = new AbortController();
          this.startQueueMetricTimers(e.nonce),
            l.Bo.post(
              {
                url: C.Rsh.MESSAGES_ANNOUNCEMENT(n),
                body: E,
                context: null != a ? { location: a } : void 0,
                oldFormErrors: !0,
                ...p.ZG,
                signal: d.signal,
                rejectWithError: !0,
                onRequestCreated: () => {
                  null != e.nonce && this.requests.set(e.nonce, d);
                },
              },
              _,
            );
        }
        handleEdit = (e, t) => {
          let { channelId: n, messageId: i, isCrossposted: r, ...a } = e,
            s = new AbortController(),
            E = this.createResponseHandler(i, t),
            _ = {
              url: C.Rsh.MESSAGE(n, i),
              body: a,
              retries: 1,
              oldFormErrors: !0,
              signal: s.signal,
              rejectWithError: !0,
              onRequestCreated: () => {
                this.requests.set(i, s);
              },
            };
          r && (_.failImmediatelyWhenRateLimited = !0), l.Bo.patch(_, E);
        };
        handleCommand(e, t) {
          let {
              applicationId: n,
              guildId: i,
              channelId: r,
              data: E,
              nonce: _,
              attachments: o,
              maxSizeCallback: u,
              analytics_location: A,
              sectionName: c,
              source: I,
            } = e,
            N = {
              type: s.G4.APPLICATION_COMMAND,
              application_id: n,
              guild_id: i,
              channel_id: r,
              session_id: d.default.getSessionId(),
              data: E,
              nonce: _,
              analytics_location: A,
              section_name: c,
              source: I,
            };
          null != o &&
            (N.data.attachments = o.map(
              (e, t) => (
                a()(
                  e.status === O.jP.COMPLETED,
                  "Uploads must be staged before trying to send a message",
                ),
                (0, S.OW)(e, t)
              ),
            ));
          let p = new AbortController();
          l.Bo.post(
            {
              url: C.Rsh.INTERACTIONS,
              body: N,
              signal: p.signal,
              rejectWithError: !0,
              onRequestCreated: (e) => {
                this.requests.set(_, p),
                  e.on("progress", (e) => {
                    let { total: t } = e,
                      n = (0, T.o2)(i);
                    null != t && t > n && (this.cancelRequest(_), u?.(n));
                  });
              },
            },
            this.createResponseHandler(_, t),
          );
        }
      }
      let L = new m();
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
        AC: () => u,
        Bm: () => c,
        D3: () => p,
        Dm: () => L,
        Er: () => N,
        FU: () => P,
        Gm: () => U,
        HU: () => O,
        IX: () => m,
        Jb: () => g,
        LO: () => T,
        M1: () => y,
        Qp: () => A,
        RI: () => R,
        RJ: () => S,
        XS: () => o,
        Xt: () => D,
        YV: () => I,
        kI: () => M,
        qz: () => C,
        ts: () => h,
        uS: () => d,
        uh: () => f,
      });
      var i = n(228366),
        r = n(817281),
        a = n(954571),
        l = n(775602),
        s = n(652215),
        E = n(823894),
        _ = n(355097);
      function o(e) {
        i.h.dispatch({ type: "ACCESSIBILITY_SET_FONT_SIZE", fontSize: e });
      }
      function u() {
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
      function d() {
        i.h.dispatch({ type: "ACCESSIBILITY_KEYBOARD_MODE_ENABLE" }),
          a.default.track(s.HAw.KEYBOARD_MODE_TOGGLED, { enabled: !0 });
      }
      function c() {
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
      function O(e) {
        i.h.dispatch({ type: "ACCESSIBILITY_SET_SATURATION", saturation: e });
      }
      function C(e) {
        let t = l.A.useReducedMotion;
        i.h.dispatch({
          type: "ACCESSIBILITY_SET_PREFERS_REDUCED_MOTION",
          prefersReducedMotion: e,
        });
        let n = l.A.useReducedMotion;
        !t && n
          ? r.Ay.applySettingsOverride({
              gifAutoPlay: { value: !1, reasonKey: _._A.REDUCED_MOTION },
              animateEmoji: { value: !1, reasonKey: _._A.REDUCED_MOTION },
              animateStickers: {
                value: E.BJ.ANIMATE_ON_INTERACTION,
                reasonKey: _._A.REDUCED_MOTION_STICKERS,
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
      function p(e) {
        i.h.dispatch({
          type: "ACCESSIBILITY_SET_SYNC_FORCED_COLORS",
          syncForcedColors: e,
        });
      }
      function R(e) {
        i.h.dispatch({
          type: "ACCESSIBILITY_SYSTEM_COLOR_PREFERENCES_CHANGED",
          systemForcedColors: e,
        });
      }
      function g(e) {
        i.h.dispatch({
          type: "ACCESSIBILITY_SYSTEM_PREFERS_CONTRAST_CHANGED",
          systemPrefersContrast: e,
        });
      }
      function M(e) {
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
      function m(e) {
        i.h.dispatch({ type: "ACCESSIBILITY_SET_ROLE_STYLE", roleStyle: e }),
          a.default.track(s.HAw.ROLE_STYLE_SETTING_UPDATED, { role_style: e });
      }
      function L(e) {
        i.h.dispatch({
          type: "ACCESSIBILITY_SET_DISPLAY_NAME_STYLES_ENABLED",
          enabled: e,
        });
      }
      function D() {
        i.h.dispatch({ type: "ACCESSIBILITY_SUBMIT_BUTTON_TOGGLE" });
      }
      function y() {
        i.h.dispatch({
          type: "ACCESSIBILITY_SYNC_PROFILE_THEME_WITH_USER_THEME_TOGGLE",
        });
      }
      function f(e) {
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
      n.d(t, { A: () => o });
      var i = n(734057),
        r = n(287809),
        a = n(646865),
        l = n(909206),
        s = n(795816),
        E = n(817636),
        _ = n(574152);
      async function o(e) {
        let t;
        if (null == e.targetApplicationId) return !1;
        let n = !1;
        try {
          (t = await (0, E.A)(e.targetApplicationId, e.channelId)),
            (n = (0, a.f)());
        } catch {
          return !1;
        }
        return (0, a.w)(n, () => u({ ...e, targetApplication: t }));
      }
      async function u(e) {
        let {
            targetApplication: t,
            locationObject: n,
            channelId: a,
            analyticsLocations: E,
            componentId: o,
            commandOrigin: u,
            sectionName: A,
            source: d,
            onExecutedCallback: c,
            referrerId: I,
            customId: T,
            inviterUserId: N,
            onConfirmActivityLaunchChecksAlertOpen: S,
          } = e,
          O = (0, _.A)(),
          C = r.default.getCurrentUser();
        return (
          null != a &&
          null != i.A.getChannel(a) &&
          null != C &&
          null != t &&
          (l.MJ(t.id),
          await (0, s.su)({
            channelId: a,
            applicationId: t.id,
            isStart: !0,
            embeddedActivitiesManager: O,
            componentId: o,
            commandOrigin: u,
            sectionName: A,
            locationObject: n,
            analyticsLocations: E,
            source: d,
            onExecutedCallback: c,
            referrerId: I,
            customId: T,
            inviterUserId: N,
            onConfirmActivityLaunchChecksAlertOpen: S,
          }))
        );
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
        E = n(795816),
        _ = n(933958),
        o = n(851907),
        u = n(969151),
        A = n(108959),
        d = n(5867),
        c = n(652215);
      function I(e, t) {
        let n = _.Ay.getSelfEmbeddedActivityForLocation(t);
        if (null == n) return;
        let I = r.A.getApplication(n.applicationId),
          T = (0, u.H)(n.location),
          N = (0, o.Ay)({ application: I, channelId: T });
        null != N
          ? (0, l.A)(N)
          : null != T &&
            ((0, s.pX)(c.BVt.CHANNEL(e, T)),
            (0, A.A)(T)
              ? (i.A.selectParticipant(
                  T,
                  (0, a.Qt)({
                    applicationId: n.applicationId,
                    instanceId: n?.compositeInstanceId,
                  }),
                ),
                i.A.updateLayout(T, c.DUB.NO_CHAT))
              : (0, E.gk)(d.Gd.PANEL));
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
    787389(e, t, n) {
      n.d(t, { A: () => d });
      var i = n(64700),
        r = n(17928),
        a = n(522305),
        l = n(627363),
        s = n(625180),
        E = n(91242),
        _ = n(375802),
        o = n(933958),
        u = n(748975),
        A = n(165610);
      function d(e) {
        let {
            applicationId: t,
            analyticsLocations: n,
            runBeforeLaunchAttempt: d,
            runAfterLaunchAttempt: c,
          } = e,
          { data: I } = (0, l.YY)(t),
          T = (0, r.bG)([o.Ay], () => o.Ay.getCurrentEmbeddedActivity()),
          N = (0, r.bG)([E.A], () => E.A.getConnectedFrame()),
          S = (0, _.e)(I);
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
            (0, u.A)("guild_id" in e ? e.guild_id : null, e);
            return;
          }
          d?.();
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
          c?.();
        }, [n, I, t, S, T, N, c, d]);
      }
    },
    204925(e, t, n) {
      n.d(t, {
        AM: () => o,
        Qx: () => _,
        Uy: () => a,
        bm: () => i,
        jc: () => r,
        w_: () => E,
      });
      let i = 2 * n(927813).A.Millis.HOUR,
        r = "new-user-age-gate-modal",
        a = "existing-user-age-gate-modal";
      var l,
        s,
        E =
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
      let _ = new Set(["NSFW Channel", "NSFW Voice Channel", "NSFW Server"]);
      var o =
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
          referrerId: E,
          commandOrigin: _,
        } = e;
        if ((0, a.y)({ applicationId: t })) return Promise.resolve(!0);
        let o = await i.A.openPrivateChannel({ recipientIds: n });
        return await (0, r.A)({
          targetApplicationId: t,
          channelId: o,
          analyticsLocations: l,
          customId: s,
          referrerId: E,
          commandOrigin: _,
        });
      }
    },
    827785(e, t, n) {
      n.d(t, { Ez: () => b, gZ: () => G });
      var i = n(284009),
        r = n.n(i),
        a = n(989349),
        l = n.n(a),
        s = n(478437),
        E = n(715943),
        _ = n(308528),
        o = n(686956),
        u = n(720149),
        A = n(155718),
        d = n(838111),
        c = n(451909),
        I = n(135621),
        T = n(268761),
        N = n(393309),
        S = n(406704),
        O = n(253932),
        C = n(734057),
        p = n(576705),
        R = n(287809),
        g = n(927813),
        M = n(427262),
        h = n(392054),
        m = n(73510),
        L = n(652215),
        D = n(200700),
        y = n(381941),
        f = n(985018);
      let U = n(743361).A,
        P = (e, t) => e.find((e) => e.name === t)?.value,
        G = {
          [m.Ik.BUILT_IN]: {
            id: m.Ik.BUILT_IN,
            type: h.Hf.BUILT_IN,
            get name() {
              return f.intl.string(f.t.fI5MTa);
            },
          },
          [m.Ik.FRECENCY]: {
            id: m.Ik.FRECENCY,
            type: h.Hf.BUILT_IN,
            get name() {
              return f.intl.string(f.t["+cGVV6"]);
            },
          },
        },
        B = [
          ...U,
          {
            id: "-1",
            untranslatedName: "shrug",
            displayName: "shrug",
            type: A.kc.CHAT,
            inputType: h.y$.BUILT_IN_TEXT,
            applicationId: m.Ik.BUILT_IN,
            get untranslatedDescription() {
              return f.intl.string(f.t.j5xUSW);
            },
            get displayDescription() {
              return f.intl.string(f.t.j5xUSW);
            },
            options: [
              {
                name: "message",
                displayName: "message",
                type: A.n4.STRING,
                get description() {
                  return f.intl.string(f.t.JewOrS);
                },
                get displayDescription() {
                  return f.intl.string(f.t.JewOrS);
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
            applicationId: m.Ik.BUILT_IN,
            get untranslatedDescription() {
              return f.intl.string(f.t.nrQRce);
            },
            get displayDescription() {
              return f.intl.string(f.t.nrQRce);
            },
            options: [
              {
                name: "message",
                displayName: "message",
                type: A.n4.STRING,
                get description() {
                  return f.intl.string(f.t.EI80tw);
                },
                get displayDescription() {
                  return f.intl.string(f.t.EI80tw);
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
            applicationId: m.Ik.BUILT_IN,
            get untranslatedDescription() {
              return f.intl.string(f.t.pnnn8e);
            },
            get displayDescription() {
              return f.intl.string(f.t.pnnn8e);
            },
            options: [
              {
                name: "message",
                displayName: "message",
                type: A.n4.STRING,
                get description() {
                  return f.intl.string(f.t.ETs6go);
                },
                get displayDescription() {
                  return f.intl.string(f.t.ETs6go);
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
            applicationId: m.Ik.BUILT_IN,
            get untranslatedDescription() {
              return f.intl.string(f.t.jZcIid);
            },
            get displayDescription() {
              return f.intl.string(f.t.jZcIid);
            },
            options: [
              {
                name: "message",
                displayName: "message",
                type: A.n4.STRING,
                get description() {
                  return f.intl.string(f.t["k+sw9g"]);
                },
                get displayDescription() {
                  return f.intl.string(f.t["k+sw9g"]);
                },
                required: !0,
              },
            ],
            predicate: (e) => {
              let { channel: t } = e;
              return (
                null != t &&
                !t.isPrivate() &&
                O.on.getSetting() &&
                p.A.can(L.xBc.SEND_TTS_MESSAGES, t)
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
            applicationId: m.Ik.BUILT_IN,
            get untranslatedDescription() {
              return f.intl.string(f.t.UGO8fU);
            },
            get displayDescription() {
              return f.intl.string(f.t.UGO8fU);
            },
            options: [
              {
                name: "message",
                displayName: "message",
                type: A.n4.STRING,
                get description() {
                  return f.intl.string(f.t.RWTgNd);
                },
                get displayDescription() {
                  return f.intl.string(f.t.RWTgNd);
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
            applicationId: m.Ik.BUILT_IN,
            get untranslatedDescription() {
              return f.intl.string(f.t.v0eDdV);
            },
            get displayDescription() {
              return f.intl.string(f.t.v0eDdV);
            },
            options: [
              {
                name: "message",
                displayName: "message",
                type: A.n4.STRING,
                get description() {
                  return f.intl.string(f.t.D13pbc);
                },
                get displayDescription() {
                  return f.intl.string(f.t.D13pbc);
                },
                required: !0,
              },
            ],
            execute: (e) => {
              let t = P(e, "message") ?? "";
              return { content: (0, L.ZGg)(t).trim() };
            },
          },
          {
            id: "-7",
            untranslatedName: "nick",
            displayName: "nick",
            type: A.kc.CHAT,
            inputType: h.y$.BUILT_IN,
            applicationId: m.Ik.BUILT_IN,
            get untranslatedDescription() {
              return f.intl.string(f.t["jiHfS/"]);
            },
            get displayDescription() {
              return f.intl.string(f.t["jiHfS/"]);
            },
            options: [
              {
                name: "new_nick",
                displayName: "new_nick",
                type: A.n4.STRING,
                get description() {
                  return f.intl.string(f.t.WTSzVu);
                },
                get displayDescription() {
                  return f.intl.string(f.t.WTSzVu);
                },
                maxLength: L.zzC,
              },
            ],
            predicate: (e) => {
              let { channel: t } = e;
              return (
                null != t &&
                !t.isPrivate() &&
                (p.A.can(L.xBc.CHANGE_NICKNAME, t) ||
                  p.A.can(L.xBc.MANAGE_NICKNAMES, t))
              );
            },
            execute: (e, t) => {
              let { guild: n, channel: i } = t;
              if (null == n || null == i) return;
              let r = P(e, "new_nick") ?? "";
              E.A.changeNickname(n.id, i.id, L.ME, r || "");
            },
          },
          {
            id: "-10",
            untranslatedName: "thread",
            displayName: "thread",
            type: A.kc.CHAT,
            inputType: h.y$.BUILT_IN,
            applicationId: m.Ik.BUILT_IN,
            get untranslatedDescription() {
              return f.intl.string(f.t.t6ZAS0);
            },
            get displayDescription() {
              return f.intl.string(f.t.t6ZAS0);
            },
            options: [
              {
                name: "name",
                displayName: "name",
                type: A.n4.STRING,
                get description() {
                  return f.intl.string(f.t.TffOfY);
                },
                get displayDescription() {
                  return f.intl.string(f.t.TffOfY);
                },
                required: !0,
                maxLength: L.Ign,
              },
              {
                name: "message",
                displayName: "message",
                type: A.n4.STRING,
                get description() {
                  return f.intl.string(f.t.QXfSfU);
                },
                get displayDescription() {
                  return f.intl.string(f.t.QXfSfU);
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
              u.A.sendMessage(a.id, c.Ay.parse(a, r), !0, {
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
            applicationId: m.Ik.BUILT_IN,
            get untranslatedDescription() {
              return f.intl.string(f.t["03N0UL"]);
            },
            get displayDescription() {
              return f.intl.string(f.t["03N0UL"]);
            },
            options: [
              {
                name: "user",
                displayName: "user",
                type: A.n4.USER,
                get description() {
                  return f.intl.string(f.t.gF8IpD);
                },
                get displayDescription() {
                  return f.intl.string(f.t.gF8IpD);
                },
                required: !0,
              },
              {
                name: "reason",
                displayName: "reason",
                type: A.n4.STRING,
                get description() {
                  return f.intl.string(f.t.QWldgj);
                },
                get displayDescription() {
                  return f.intl.string(f.t.QWldgj);
                },
                required: !1,
              },
            ],
            predicate: (e) => {
              let { guild: t } = e;
              return p.A.can(L.xBc.KICK_MEMBERS, t);
            },
            execute: (e, t) => {
              let { guild: n, channel: i } = t;
              if (null == n || null == i) return;
              let r = P(e, "user") ?? "";
              p.A.canManageUser(L.xBc.KICK_MEMBERS, r, n)
                ? (async () => {
                    let t = R.default.getUser(r);
                    if (null == t) throw Error();
                    await o.A.kickUser(n.id, r, P(e, "reason") ?? ""),
                      u.A.sendBotMessage(
                        i.id,
                        f.intl.formatToPlainString(f.t["9wzHDV"], {
                          user: M.Ay.getUserTag(t),
                        }),
                      );
                  })().catch(() => {
                    u.A.sendBotMessage(i.id, f.intl.string(f.t.l0gNlp));
                  })
                : u.A.sendBotMessage(i.id, f.intl.string(f.t["6RIwPI"]));
            },
          },
          {
            id: "-12",
            untranslatedName: "ban",
            displayName: "ban",
            type: A.kc.CHAT,
            inputType: h.y$.BUILT_IN,
            applicationId: m.Ik.BUILT_IN,
            get untranslatedDescription() {
              return f.intl.string(f.t.HWuskv);
            },
            get displayDescription() {
              return f.intl.string(f.t.HWuskv);
            },
            options: [
              {
                name: "user",
                displayName: "user",
                type: A.n4.USER,
                get description() {
                  return f.intl.string(f.t.z3XPjr);
                },
                get displayDescription() {
                  return f.intl.string(f.t.z3XPjr);
                },
                required: !0,
              },
              {
                name: "delete_messages",
                displayName: "delete_messages",
                type: A.n4.INTEGER,
                get description() {
                  return f.intl.string(f.t.smrvA6);
                },
                get displayDescription() {
                  return f.intl.string(f.t.smrvA6);
                },
                required: !0,
                get choices() {
                  return [
                    {
                      name: f.intl.string(f.t["4obaMS"]),
                      displayName: f.intl.string(f.t["4obaMS"]),
                      value: 0,
                    },
                    {
                      name: f.intl.string(f.t.RKpitY),
                      displayName: f.intl.string(f.t.RKpitY),
                      value: g.A.Seconds.HOUR,
                    },
                    {
                      name: f.intl.string(f.t["8WfJZ8"]),
                      displayName: f.intl.string(f.t["8WfJZ8"]),
                      value: 6 * g.A.Seconds.HOUR,
                    },
                    {
                      name: f.intl.string(f.t.p1up7u),
                      displayName: f.intl.string(f.t.p1up7u),
                      value: 12 * g.A.Seconds.HOUR,
                    },
                    {
                      name: f.intl.string(f.t.XuVkkD),
                      displayName: f.intl.string(f.t.XuVkkD),
                      value: g.A.Seconds.DAY,
                    },
                    {
                      name: f.intl.string(f.t["gMcDS+"]),
                      displayName: f.intl.string(f.t["gMcDS+"]),
                      value: 3 * g.A.Seconds.DAY,
                    },
                    {
                      name: f.intl.string(f.t.FA7IUk),
                      displayName: f.intl.string(f.t.FA7IUk),
                      value: 7 * g.A.Seconds.DAY,
                    },
                  ];
                },
              },
              {
                name: "reason",
                displayName: "reason",
                type: A.n4.STRING,
                get description() {
                  return f.intl.string(f.t.dG4noU);
                },
                get displayDescription() {
                  return f.intl.string(f.t.dG4noU);
                },
                required: !1,
              },
            ],
            predicate: (e) => {
              let { guild: t } = e;
              return p.A.can(L.xBc.BAN_MEMBERS, t);
            },
            execute: (e, t) => {
              let { guild: n, channel: i } = t;
              if (null == n || null == i) return;
              let r = P(e, "user") ?? "";
              p.A.canManageUser(L.xBc.BAN_MEMBERS, r, n)
                ? (async () => {
                    if ("" === r) throw Error();
                    let t = P(e, "delete_messages") ?? 0,
                      a = P(e, "reason") ?? "",
                      l = R.default.getUser(r);
                    await o.A.banUser(n.id, r, t, a),
                      u.A.sendBotMessage(
                        i.id,
                        f.intl.formatToPlainString(f.t.YflWdM, {
                          user: null != l ? M.Ay.getUserTag(l) : r,
                        }),
                      );
                  })().catch(() => {
                    u.A.sendBotMessage(i.id, f.intl.string(f.t.w2J6Qs));
                  })
                : u.A.sendBotMessage(i.id, f.intl.string(f.t.R27LJl));
            },
          },
          {
            id: "-13",
            untranslatedName: "timeout",
            displayName: "timeout",
            type: A.kc.CHAT,
            inputType: h.y$.BUILT_IN,
            applicationId: m.Ik.BUILT_IN,
            get untranslatedDescription() {
              return f.intl.string(f.t.KkPcep);
            },
            get displayDescription() {
              return f.intl.string(f.t.KkPcep);
            },
            options: [
              {
                name: "user",
                displayName: "user",
                type: A.n4.USER,
                get description() {
                  return f.intl.string(f.t.UU3VRm);
                },
                get displayDescription() {
                  return f.intl.string(f.t.UU3VRm);
                },
                required: !0,
              },
              {
                name: "duration",
                displayName: "duration",
                type: A.n4.INTEGER,
                get description() {
                  return f.intl.string(f.t.SNqN1e);
                },
                get displayDescription() {
                  return f.intl.string(f.t.SNqN1e);
                },
                required: !0,
                get choices() {
                  return (0, D.ny)().map((e) => ({
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
                  return f.intl.string(f.t.akHScA);
                },
                get displayDescription() {
                  return f.intl.string(f.t.akHScA);
                },
                required: !1,
              },
            ],
            predicate: (e) => {
              let { guild: t } = e;
              return p.A.can(L.xBc.MODERATE_MEMBERS, t);
            },
            execute: (e, t) => {
              let { guild: n, channel: i } = t;
              if (null == n || null == i) return;
              let r = P(e, "user");
              (0, d.b)(n.id, r)
                ? (async () => {
                    let t = P(e, "duration") ?? "",
                      a = P(e, "reason") ?? "",
                      s = R.default.getUser(r);
                    if (null == s) throw Error();
                    await o.A.setCommunicationDisabledUntil({
                      guildId: n.id,
                      userId: r,
                      communicationDisabledUntilTimestamp: l()()
                        .add(t, "s")
                        .toISOString(),
                      duration: t,
                      reason: a,
                    }),
                      u.A.sendBotMessage(
                        i.id,
                        f.intl.formatToPlainString(f.t.BbRV6o, {
                          user: M.Ay.getUserTag(s),
                          duration: t,
                        }),
                      );
                  })().catch(() => {
                    u.A.sendBotMessage(i.id, f.intl.string(f.t["+mWyVq"]));
                  })
                : u.A.sendBotMessage(i.id, f.intl.string(f.t.F5pqSf));
            },
          },
          {
            id: "-14",
            untranslatedName: "msg",
            displayName: "msg",
            type: A.kc.CHAT,
            inputType: h.y$.BUILT_IN,
            applicationId: m.Ik.BUILT_IN,
            get untranslatedDescription() {
              return f.intl.string(f.t.Dg8XZw);
            },
            get displayDescription() {
              return f.intl.string(f.t.Dg8XZw);
            },
            options: [
              {
                name: "user",
                displayName: "user",
                type: A.n4.USER,
                get description() {
                  return f.intl.string(f.t["KmVq/D"]);
                },
                get displayDescription() {
                  return f.intl.string(f.t["KmVq/D"]);
                },
                required: !0,
              },
              {
                name: "message",
                displayName: "message",
                type: A.n4.STRING,
                get description() {
                  return f.intl.string(f.t.oGUuOJ);
                },
                get displayDescription() {
                  return f.intl.string(f.t.oGUuOJ);
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
                await _.A.openPrivateChannel({ recipientIds: i }).then((e) => {
                  let t = C.A.getChannel(e);
                  r()(null != t, "Newly created PrivateChannel is null"),
                    u.A.sendMessage(t.id, c.Ay.parse(t, a), !0, {
                      location: y.Hx.PRIVATE_MESSAGE_COMMAND,
                    });
                });
              })().catch(() => {
                u.A.sendBotMessage(n.id, f.intl.string(f.t["3XaE95"]));
              });
            },
          },
        ],
        v = B.filter((e) =>
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
          let i = t ? B : v;
          return i.filter(
            (t) =>
              e.includes(t.type) &&
              (!n ||
                t.inputType === h.y$.BUILT_IN_TEXT ||
                t.inputType === h.y$.BUILT_IN_INTEGRATION),
          );
        };
    },
    934337(e, t, n) {
      n.d(t, { Bw: () => s, mZ: () => E, tq: () => l });
      var i = n(353640),
        r = n(121894);
      let a = (0, i.v)(() => ({ required: !1, checked: !1, preChecked: !1 })),
        l = (e) => {
          (0, r.r)(() => a.setState(e));
        },
        s = (e) => {
          (0, r.r)(() => a.setState({ checked: e }));
        },
        E = a;
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
      n.d(t, { Ay: () => E, C3: () => s, HL: () => l });
      var i,
        r = n(575593),
        a = n(149807),
        l = (((i = {}).FromLoop = "fromLoop"), (i.FromStart = "fromStart"), i);
      let s = (e) => e instanceof E;
      class E extends a.A {
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
          return new E({ ...super.fromServer(e), ...e });
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
      n.d(t, { k: () => u, x: () => o });
      var i = n(627968),
        r = n(64700),
        a = n(106778),
        l = n(702841),
        s = n(775602),
        E = n(652215);
      let _ = {
          confettiCanvas: null,
          cannon: null,
          createConfetti: () => void 0,
          createConfettiAt: () => void 0,
          createMultipleConfetti: () => [],
          createMultipleConfettiAt: () => [],
          addClickListener: () => E.tEg,
          removeClickListener: E.tEg,
        },
        o = r.createContext(_);
      function u(e) {
        let {
            children: t,
            confettiCanvas: n,
            spriteCanvas: E,
            baseConfig: u,
            addClickListener: A,
            removeClickListener: d,
          } = e,
          c = (0, a.f9)(n, E),
          I = (0, l.bG)([s.A], () => s.A.useReducedMotion),
          T = r.useMemo(
            () =>
              I
                ? _
                : {
                    confettiCanvas: n,
                    cannon: c,
                    createConfetti: (e, t) =>
                      c.createConfetti({ ...u, ...e }, t),
                    createConfettiAt: (e, t, n, i) =>
                      c.createConfetti(
                        {
                          ...u,
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
                      return c.createMultipleConfetti({ ...u, ...e }, t, n);
                    },
                    createMultipleConfettiAt: function (e, t, n) {
                      let i =
                          arguments.length > 3 && void 0 !== arguments[3]
                            ? arguments[3]
                            : 20,
                        r = arguments.length > 4 ? arguments[4] : void 0;
                      return c.createMultipleConfetti(
                        {
                          ...u,
                          position: { type: "static", value: { x: e, y: t } },
                          ...n,
                        },
                        i,
                        r,
                      );
                    },
                    addClickListener: A,
                    removeClickListener: d,
                  },
            [A, u, c, n, I, d],
          );
        return (0, i.jsx)(o.Provider, { value: T, children: t });
      }
    },
    851110(e, t, n) {
      n.d(t, {
        Mw: () => E,
        XA: () => _,
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
        E = {
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
        _ = new i.OH();
    },
    902811(e, t, n) {
      n.d(t, { A: () => M }), n(667532);
      var i = n(627968),
        r = n(64700),
        a = n(462887),
        l = n(38021),
        s = n(844222),
        E = n(552122),
        _ = n(676279),
        o = n(607470),
        u = n(652215),
        A = n(40180),
        d = n(770359),
        c = n(986208),
        I = n(609069),
        T = n(460860),
        N = n(734607),
        S = n(724875),
        O = n(540085);
      function C(e) {
        let {
            movDark: t = A,
            movLight: n = T,
            mp4Dark: r = d,
            mp4Light: a = N,
            pngDark: l = c,
            pngLight: s = S,
            webmDark: E = I,
            webmLight: o = O,
          } = e,
          C = (0, _.Z5)(),
          p = [
            (0, i.jsx)("source", { src: r, type: "video/mp4" }, "mp4"),
            (0, i.jsx)("img", { alt: "", src: l }, "png"),
          ],
          R = [
            (0, i.jsx)("source", { src: a, type: "video/mp4" }, "mp4"),
            (0, i.jsx)("img", { alt: "", src: s }, "png"),
          ];
        return (
          (C > 52 || -1 === C) &&
            (p.unshift(
              (0, i.jsx)("source", { src: E, type: "video/webm" }, "webm"),
            ),
            R.unshift(
              (0, i.jsx)("source", { src: o, type: "video/webm" }, "webm"),
            )),
          (0, _.TM)() &&
            (p.unshift(
              (0, i.jsx)("source", { src: t, type: "video/mp4" }, "hevc"),
            ),
            R.unshift(
              (0, i.jsx)("source", { src: n, type: "video/mp4" }, "hevc"),
            )),
          { [u.NJ8.DARK]: p, [u.NJ8.LIGHT]: R }
        );
      }
      let p = E.A.getAppSpinnerSources(),
        R = null != p ? C(p) : null,
        g = C({}),
        M = (e) => {
          let {
              loop: t = !0,
              autoPlay: n = !0,
              setRef: E,
              className: _,
              onReady: A,
            } = e,
            { theme: d } = (0, l.wR)(),
            { reducedMotion: c } = r.useContext(s.C),
            I = g;
          null != R && (I = R);
          let T = I[(0, a.M)(d) ? u.NJ8.DARK : u.NJ8.LIGHT] ?? I[u.NJ8.DARK];
          return (0, i.jsx)(
            o.A,
            {
              ref: E,
              onLoadedData: A,
              className: _,
              loop: !c.enabled && t,
              autoPlay: !c.enabled && n,
              playsInline: !0,
              "data-testid": "app-spinner",
              children: T,
            },
            d,
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
        i.M.PREMIUM_GROUP_GIFT_SELECTION_UPSELL,
        i.M.COLLECTIBLES_PROFILE_FRAMES_ANNOUNCEMENT,
        i.M.PROFILE_FRAME_USER_PROFILE_NEW_BADGE,
      ]);
    },
    625180(e, t, n) {
      n.d(t, { A: () => o });
      var i = n(523527),
        r = n(267102),
        a = n(567249),
        l = n(574172),
        s = n(494126),
        E = n(652215);
      async function _(e) {
        let t = (0, r.zd)();
        a.A.getWindowOpen(E.MLl.ACTIVITY_POPOUT) &&
          (0, l.close)(E.MLl.ACTIVITY_POPOUT),
          await s.launchFrame(e),
          t === E.BRT.POPOUT && (0, i.A)();
      }
      let o = { ...s, launchFrame: _ };
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
      n.d(t, { A: () => c });
      var i = n(17928),
        r = n(228366),
        a = n(956518),
        l = n(165610),
        s = n(5867);
      let E = null,
        _ = new Map(),
        o = new Map(),
        u = new Map(),
        A = new Map();
      class d extends i.Ay.Store {
        static displayName = "FramesStore";
        getConnectedFrame() {
          return E;
        }
        getFrameLayoutMode() {
          return E?.layoutMode;
        }
        getActivityPanelMode() {
          return E?.activityPanelMode ?? s.Gd.DISCONNECTED;
        }
        isFrameActive() {
          return null != E;
        }
        isLaunchingFrame(e) {
          return null != e ? (_.get(e) ?? !1) : _.size > 0;
        }
        isProxyTicketRefreshing(e) {
          return o.has(e);
        }
        getOrientationLockStateForApp(e) {
          return u.get(e);
        }
        getPipOrientationLockStateForApp(e) {
          return A.get(e) ?? this.getOrientationLockStateForApp(e);
        }
      }
      let c = new d(r.h, {
        FRAME_LAUNCH_START: function (e) {
          let { applicationId: t } = e;
          _.set(t, !0);
        },
        FRAME_LAUNCH: function (e) {
          let { applicationId: t, proxyTicket: n } = e,
            i = (0, a.Ay)(t);
          null == i
            ? _.delete(t)
            : (_.delete(t),
              (E = {
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
          _.delete(t);
        },
        FRAME_STOP: function (e) {
          let { applicationId: t } = e;
          E?.applicationId === t && (E = null);
        },
        FRAME_UPDATE_LAYOUT_MODE: function (e) {
          let { applicationId: t, layoutMode: n } = e;
          E?.applicationId === t && (E = { ...E, layoutMode: n });
        },
        FRAME_SET_PANEL_MODE: function (e) {
          let { activityPanelMode: t } = e;
          null != E && (E = { ...E, activityPanelMode: t });
        },
        FRAME_SET_ORIENTATION_LOCK_STATE: function (e) {
          let {
            applicationId: t,
            lockState: n,
            pictureInPictureLockState: i,
          } = e;
          null == n ? u.delete(t) : u.set(t, n),
            null === i ? A.delete(t) : void 0 !== i && A.set(t, i);
        },
        FRAME_SET_PROXY_TICKET_REFRESHING: function (e) {
          let { applicationId: t, refreshing: n } = e;
          n ? o.set(t, !0) : o.delete(t);
        },
        FRAME_UPDATE_PROXY_TICKET: function (e) {
          let { applicationId: t, proxyTicket: n } = e;
          E?.applicationId === t && (E = { ...E, proxyTicket: n });
        },
        CHANNEL_SELECT: function (e) {
          return (
            null != E &&
            E.layoutMode !== l.y.PIP &&
            ((E = { ...E, layoutMode: l.y.PIP }), !0)
          );
        },
      });
    },
    108713(e, t, n) {
      n.d(t, {
        Fc: () => R,
        JS: () => p,
        Jm: () => m,
        Uc: () => h,
        VP: () => y,
        VR: () => g,
        ZG: () => O,
        m9: () => C,
      }),
        n(321073);
      var i = n(216348),
        r = n(213270),
        a = n(636537),
        l = n(228366),
        s = n(157559),
        E = n(409826),
        _ = n(763827),
        o = n(528767),
        u = n(954571),
        A = n(38405),
        d = n(124697),
        c = n(643501),
        I = n(350701),
        T = n(652215),
        N = n(985018);
      function S(e, t) {
        u.default.track(T.HAw.REMOTE_COMMAND_SENT, {
          command_type: e,
          remote_platform: o.A.getSessionById(t)?.clientInfo?.os,
        });
      }
      async function O() {
        var e;
        let t = c.default.getAwaitingRemoteSessionInfo(),
          n = t?.nonce;
        l.h.dispatch({ type: "REMOTE_SESSION_DISCONNECT" });
        let i = [];
        (t?.type === T.fg2.PLAYSTATION ||
          t?.type === T.fg2.PLAYSTATION_STAGING) &&
          t?.commandId != null &&
          t?.deviceId != null &&
          i.push(D(t.type, t.deviceId, t.commandId)),
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
      function C(e) {
        l.h.dispatch({ type: "REMOTE_SESSION_CONNECT", sessionId: e });
      }
      function p(e, t) {
        let { selfMute: n, selfDeaf: i } = t;
        l.h.dispatch({
          type: "REMOTE_COMMAND",
          sessionId: e,
          payload: { type: "VOICE_STATE_UPDATE", self_mute: n, self_deaf: i },
        }),
          S("VOICE_STATE_UPDATE", e);
      }
      function R(e) {
        l.h.dispatch({
          type: "REMOTE_COMMAND",
          sessionId: e,
          payload: { type: "DISCONNECT" },
        }),
          S("DISCONNECT", e),
          O();
      }
      function g(e, t, n, i) {
        let r = (0, E.o)(n);
        null != r &&
          (l.h.dispatch({
            type: "REMOTE_COMMAND",
            sessionId: e,
            payload: { type: "AUDIO_SETTINGS_UPDATE", context: r, id: t, ...i },
          }),
          S("AUDIO_SETTINGS_UPDATE", e));
      }
      async function M() {
        let e;
        try {
          let t =
            null != _.A.getRTCConnectionId()
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
      function m(e, t) {
        l.h.dispatch({
          type: "GAME_CONSOLE_SELECT_DEVICE",
          platform: e,
          deviceId: t,
        });
      }
      async function L(e, t, n, r) {
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
        let E = s.body.id;
        return (
          l.h.dispatch({
            type: "WAIT_FOR_REMOTE_SESSION",
            sessionType: e,
            nonce: r,
            channelId: n.id,
            deviceId: t,
            commandId: E,
          }),
          E
        );
      }
      async function D(e, t, n) {
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
        await d.A.maybeShowPTTAlert(e), await O();
        let i = await M();
        await L(e, t, n, i), (0, I.A)(n.id, e);
      }
    },
    973522(e, t, n) {
      n.d(t, { Ic: () => s, PQ: () => _, wH: () => E });
      var i = n(871633),
        r = n(760751),
        a = n(723702);
      function l(e) {
        return (e = e.toLowerCase()).endsWith("/") && (e = e.slice(0, -1)), e;
      }
      function s(e) {
        return l(e).split("/").slice(-2).join("/");
      }
      function E(e) {
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
      function _(e, t) {
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
        WC: () => u,
        eb: () => c,
        g6: () => I,
        gw: () => o,
        xH: () => T,
        y4: () => N,
      });
      var i = n(58149),
        r = n(936555),
        a = n(71393),
        l = n(287809);
      n(935208), n(226139);
      var s = n(652215),
        E = n(985018);
      function _(e) {
        return e;
      }
      function o(e) {
        let {
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: i,
            guildId: r,
            roleSubscriptionData: a,
          } = e,
          { content: l, formatParams: s } = d({
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: i,
            guildId: r,
            roleSubscriptionData: a,
          });
        return E.intl.format(l, s);
      }
      function u(e) {
        let {
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: i,
            guildId: r,
            roleSubscriptionData: a,
          } = e,
          { content: l, formatParams: s } = d({
            username: t,
            usernameOnClickHandler: n,
            roleSubscriptionOnClickHandler: i,
            guildId: r,
            roleSubscriptionData: a,
          });
        return E.intl.formatToParts(l, s);
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
      function d(e) {
        let {
            username: t,
            usernameOnClickHandler: n = _,
            roleSubscriptionOnClickHandler: i = s.tEg,
            guildId: r,
            roleSubscriptionData: a,
          } = e,
          {
            guild: l,
            totalMonthsSubscribed: o,
            showWithDuration: u,
            isRenewal: d,
          } = A(r, a);
        return {
          content: u
            ? d
              ? E.t.Iy66M7
              : E.t.eCgb2W
            : d
              ? E.t.mPTTdv
              : E.t.mYjFFx,
          formatParams: {
            username: t,
            usernameHook: n,
            guildName: l?.name,
            handleGuildNameClick: i,
            tierName: a?.tier_name,
            months: o,
          },
        };
      }
      function c(e) {
        let t,
          {
            username: n,
            usernameOnClickHandler: i = _,
            roleSubscriptionOnClickHandler: r = s.tEg,
            guildId: a,
            roleSubscriptionData: l,
          } = e,
          {
            guild: o,
            totalMonthsSubscribed: u,
            showWithDuration: d,
            isRenewal: c,
          } = A(a, l);
        return (
          (t = d
            ? c
              ? E.t.OQ0OUy
              : E.t["+N9bxq"]
            : c
              ? E.t.OxP1NC
              : E.t["6Z1E+7"]),
          E.intl.formatToParts(t, {
            guildName: o?.name,
            tierName: l?.tier_name,
            username: n,
            usernameOnClick: i,
            roleSubscriptionOnClick: r,
            months: u,
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
      n.d(t, { A: () => x });
      var i = n(17928),
        r = n(713402),
        a = n(228366),
        l = n(380335),
        s = n(567249),
        E = n(734057),
        _ = n(232835),
        o = n(763827),
        u = n(222823),
        A = n(309010),
        d = n(543465),
        c = n(567761),
        I = n(927813),
        T = n(935208),
        N = n(206885),
        S = n(41984),
        O = n(956753),
        C = n(489277),
        p = n(222506),
        R = n(680243),
        g = n(141048);
      function M(e, t) {
        return String(
          Math.max(0, Math.min(Math.floor(e), Number.MAX_SAFE_INTEGER)),
        ).padStart(t, "0");
      }
      let h = new r.J(
          function (e) {
            return [
              e.isPrivateChannel ? g.B.PRIVATE_CHANNELS : g.B.GUILD_CHANNELS,
            ];
          },
          function (e) {
            let t = e.isPrivateChannel ? "0" : "1",
              n =
                e.mentionCount > 0
                  ? g.G.MENTION
                  : e.hasUnread
                    ? g.G.UNREAD
                    : g.G.READ,
              i = String(g.G.MENTION - n),
              r = M(Number.MAX_SAFE_INTEGER - e.mentionCount, 16),
              a = M(Number.MAX_SAFE_INTEGER - e.lastActivityAtMs, 16);
            return `${t}\0${i}\0${r}\0${a}\0${e.channelId}`;
          },
        ),
        m = null,
        L = null,
        D = !1,
        y = null,
        f = 30 * I.A.Millis.MINUTE;
      function U(e) {
        let t = E.A.getChannel(e),
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
          isPrivateChannel: ((a = E.A.getChannel(e)), a?.isPrivate() ?? !1),
          mentionCount: u.Ay.getMentionCount(e),
          hasUnread: u.Ay.hasUnread(e),
        };
      }
      function G() {
        h.clear(), (m = null), (L = null), (D = !1), (y = null);
      }
      function B() {
        let e = Date.now();
        G(),
          (L = e),
          (y = o.A.getChannelId() ?? null),
          (function (e) {
            let t = A.A.getChannelId();
            if (null != t && null != E.A.getChannel(t)) {
              if (((m = t), !h.has(t))) {
                let n = U(t),
                  i = E.A.getChannel(t)?.lastMessageId ?? void 0,
                  r = P(t, S.B9.MANUAL, e, n, i);
                h.set(t, r);
              }
            }
          })(e),
          (function (e) {
            let t = c.default.getPrivateChannelIds(),
              n = 0;
            for (let i of t) {
              if (n >= 3) return;
              if (h.has(i)) continue;
              let t = E.A.getChannel(i);
              if (
                null == t ||
                !t.isPrivate() ||
                d.Ay.isChannelMuted(null, i) ||
                l.A.isMessageRequest(i)
              )
                continue;
              let r = t.lastMessageId;
              if (null == r) continue;
              let a = T.default.extractTimestamp(r);
              if (e - a > f) continue;
              let s = P(i, S.B9.MANUAL, e, a, r);
              h.set(i, s), n++;
            }
          })(e),
          H();
      }
      function v() {
        return o.A.getChannelId() ?? null;
      }
      function b(e) {
        if (null == e) return h.values()[0]?.channelId ?? null;
        for (let t of h.values()) if (t.channelId !== e) return t.channelId;
        return null;
      }
      function H() {
        let e = v();
        return null != e && !D && null == m && ((m = e), !0);
      }
      function w() {
        let e,
          t = (function () {
            if (null == m) return !1;
            let e = v();
            return e !== m && y === m && e !== m && ((m = b(y)), !0);
          })(),
          n =
            null == (e = v())
              ? ((y = null), !!D && ((D = !1), !0))
              : y !== e && ((y = e), !!D && ((D = !1), !0)),
          i = H();
        return t || n || i;
      }
      function F(e) {
        let t = h.get(e);
        if (null == t) return !1;
        let n = u.Ay.getMentionCount(e),
          i = u.Ay.hasUnread(e);
        return (
          (t.mentionCount !== n || t.hasUnread !== i) &&
          (h.set(e, { ...t, mentionCount: n, hasUnread: i }), !0)
        );
      }
      function V(e) {
        let { channelId: t } = e;
        return F(t);
      }
      class k extends i.Ay.Store {
        static displayName = "Overlay-v3-Text-Chat-Store";
        initialize() {
          this.waitFor(
            R.A,
            p.A,
            C.A,
            s.A,
            E.A,
            _.A,
            l.A,
            o.A,
            c.default,
            u.Ay,
            A.A,
            d.Ay,
          ),
            B();
        }
        isChannelTracked(e) {
          return h.has(e);
        }
        getSessionEntries(e) {
          return [null != e ? h.values(e) : h.values(), h.version];
        }
        getSelectedChannelId() {
          return m;
        }
        getVoiceChatMinimized() {
          return D;
        }
      }
      let W = (e) => (0, O.U5)(e, "OverlayTextChatStore"),
        x = new k(
          a.h,
          __OVERLAY__ || (!N.O && !N.e)
            ? {}
            : {
                OVERLAY_MOUNTED: W(function (e) {
                  return null == L && (B(), !0);
                }),
                OVERLAY_V3_NATIVE_DESTROY_HOST_WINDOW: W(function () {
                  return G(), !0;
                }),
                MESSAGE_ACK: W(function (e) {
                  let { channelId: t } = e;
                  return F(t);
                }),
                CHANNEL_ACK: W(V),
                CHANNEL_LOCAL_ACK: W(V),
                BULK_ACK: W(function (e) {
                  let { channels: t } = e,
                    n = !1;
                  for (let { channelId: e } of t) F(e) && (n = !0);
                  return n;
                }),
                VOICE_STATE_UPDATES: W(w),
                VOICE_CHANNEL_SELECT: W(w),
                OVERLAY_TEXT_CHAT_SELECT_CHANNEL: W(function (e) {
                  let { channelId: t, source: n } = e;
                  return (function (e, t) {
                    if (null == e) return !1;
                    null == L && (L = Date.now()), m !== e && (m = e);
                    let n = v();
                    if (
                      (null != n && e === n && D && (D = !1),
                      null != m && !h.has(m))
                    ) {
                      let e = Date.now(),
                        n = U(m),
                        i = E.A.getChannel(m)?.lastMessageId ?? void 0,
                        r = P(m, t, e, n, i);
                      h.set(m, r);
                    }
                    return !0;
                  })(t ?? null, n);
                }),
                OVERLAY_TEXT_CHAT_ADD_OR_UPDATE_CHANNEL: W(function (e) {
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
                        E = P(t, n, a?.addedOnMs ?? i, l, s);
                      return h.set(t, E);
                    })({
                      channelId: e.channelId,
                      source: e.source,
                      lastActivityAtMs: e.lastActivityAtMs,
                      lastMessageId: e.lastMessageId,
                    }),
                    n = !1;
                  return null == m && ((m = e.channelId), (n = !0)), t || n;
                }),
                OVERLAY_TEXT_CHAT_REMOVE_CHANNEL: W(function (e) {
                  let t = h.delete(e.channelId),
                    n = !1;
                  if (m === e.channelId) {
                    let e = v();
                    (m = b(e) ?? (D || null == e ? null : e)), (n = !0);
                  }
                  return t || n;
                }),
                OVERLAY_TEXT_CHAT_REMOVE_ALL_CHANNELS: W(function () {
                  let e = h.size() > 0;
                  h.clear();
                  let t = v();
                  return (m = D || null == t ? null : t), e;
                }),
                OVERLAY_TEXT_CHAT_SET_VOICE_CHAT_MINIMIZED: W(function (e) {
                  let { minimized: t } = e;
                  if (D === t) return !1;
                  if (((D = t), !t)) return H(), !0;
                  let n = v();
                  return null != n && m === n && (m = b(n)), !0;
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
      n.d(t, { e: () => s, x: () => E });
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
        E = (e) => {
          e?.(), (0, i.jH)();
          {
            let { default: e } = n(779733);
            e();
          }
          (0, r.pX)(l.BVt.APPLICATION_STORE);
        };
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
      n.d(t, { A0: () => s, eu: () => l, g6: () => E, uk: () => _ });
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
      function E(e) {
        let {
          application: t,
          username: n,
          usernameOnClick: l,
          applicationNameOnClick: s,
          medium: E,
        } = e;
        return null != t
          ? a.intl.formatToParts(a.t["8r+Z+I"], {
              username: n,
              otherUsername: t.name,
              usernameOnClick: l,
              otherUsernameOnClick: s,
              medium: E,
              helpCenterLink: {
                url: i.A.getArticleURL(r.MVz.PRIVATE_CHANNEL_INTEGRATIONS),
              },
            })
          : a.intl.formatToParts(a.t.ojysqe, {
              username: n,
              usernameOnClick: l,
              medium: E,
              helpCenterLink: {
                url: i.A.getArticleURL(r.MVz.PRIVATE_CHANNEL_INTEGRATIONS),
              },
            });
      }
      function _(e) {
        let {
          application: t,
          username: n,
          usernameOnClick: l,
          applicationNameOnClick: s,
          medium: E,
        } = e;
        return null != t
          ? a.intl.formatToParts(a.t.zmc0mq, {
              username: n,
              otherUsername: t.name,
              usernameOnClick: l,
              otherUsernameOnClick: s,
              medium: E,
              helpCenterLink: {
                url: i.A.getArticleURL(r.MVz.PRIVATE_CHANNEL_INTEGRATIONS),
              },
            })
          : a.intl.formatToParts(a.t["x2CN/Z"], {
              username: n,
              usernameOnClick: l,
              medium: E,
              helpCenterLink: {
                url: i.A.getArticleURL(r.MVz.PRIVATE_CHANNEL_INTEGRATIONS),
              },
            });
      }
    },
    216623(e, t, n) {
      n.d(t, { AX: () => u, cf: () => o, oN: () => _ });
      var i = n(636537),
        r = n(228366),
        a = n(320095),
        l = n(85109),
        s = n(756377),
        E = n(652215);
      async function _(e) {
        let t = await i.Bo.put({
          url: E.Rsh.PUT_SAVED_MESSAGE(e.channelId, e.messageId),
          body: { due_at: e.dueAt },
          rejectWithError: !1,
        });
        if (t.ok) return (0, s.iz)(t.body);
      }
      async function o(e) {
        if (
          (
            await i.Bo.del({
              url: E.Rsh.DELETE_SAVED_MESSAGE(e.channelId, e.messageId),
              rejectWithError: !1,
            })
          ).ok
        )
          return !0;
      }
      async function u() {
        if (!l.A.getIsStale()) return Promise.resolve();
        let e = (
          await i.Bo.get({ url: E.Rsh.GET_SAVED_MESSAGES, rejectWithError: !1 })
        ).body.results.map((e) => ({
          message: null != e.message ? (0, a.rh)(e.message) : null,
          saveData: (0, s.Dd)(e.save_data),
        }));
        r.h.dispatch({ type: "SAVED_MESSAGES_UPDATE", savedMessages: e });
      }
    },
    824492(e, t, n) {
      n.d(t, { A: () => E });
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
      let E = new s(r.h, {
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
        let E = l.getMember(s.id, t);
        return null == E ? null : a.li(s, E);
      };
    },
    913612(e, t, n) {
      n.d(t, { C: () => s, K: () => E });
      var i = n(64700),
        r = n(506774),
        a = n(935671);
      let l = "systemServiceAutoInstall";
      function s() {
        r.w.set(l, !0);
      }
      function E() {
        i.useEffect(() => {
          null == r.w.get(l) && (s(), (0, a.sL)("first-start", !1));
        }, []);
      }
    },
    912630(e, t, n) {
      n.d(t, { A: () => S });
      var i = n(17928),
        r = n(205693),
        a = n(228366),
        l = n(617617),
        s = n(51760),
        E = n(309010),
        _ = n(287809),
        o = n(965162);
      let u = !1,
        A = null,
        d = !1,
        c = {};
      function I(e) {
        let t = _.default.getCurrentUser();
        if (null == t) return !1;
        let n =
          e ??
          (0, o.Hk)(
            l.A.settings.voiceAndVideo?.videoBackgroundFilterDesktop,
            t.id,
          );
        return (
          null != E.A.getVoiceChannelId() && s.Ay.isVideoEnabled() && null != n
        );
      }
      function T() {
        A !== E.A.getVoiceChannelId() && (d = !1),
          I() && (d = !0),
          (A = E.A.getVoiceChannelId());
      }
      class N extends i.Ay.Store {
        static displayName = "VideoBackgroundStore";
        initialize() {
          this.waitFor(s.Ay, E.A, l.A, _.default),
            this.syncWith([E.A, s.Ay], T);
        }
        get videoFilterAssets() {
          return c;
        }
        get hasBeenApplied() {
          return u;
        }
        get hasUsedBackgroundInCall() {
          return d;
        }
      }
      let S = new N(a.h, {
        VIDEO_FILTER_ASSETS_FETCH_SUCCESS: function (e) {
          let { assets: t } = e,
            n = {};
          t.forEach((e) => (n[e.id] = e)), (c = n);
        },
        VIDEO_FILTER_ASSET_UPLOAD_SUCCESS: function (e) {
          let { videoFilterAsset: t } = e;
          c = { ...c, [t.id]: t };
        },
        VIDEO_FILTER_ASSET_DELETE_SUCCESS: function (e) {
          let { videoFilterAsset: t } = e;
          (c = { ...c }), delete c[t.id];
        },
        VIDEO_SAVE_LAST_USED_BACKGROUND_OPTION: function (e) {
          let { backgroundOption: t } = e;
          I(t) && (d = !0);
        },
        MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: function (e) {
          let { settings: t } = e;
          r.Tr.CAMERA_BACKGROUND_LIVE in t && (u = !0);
        },
        LOGOUT: function () {
          (u = !1), (d = !1), (A = null), (c = {});
        },
      });
    },
    413339(e, t, n) {
      n.d(t, { PX: () => p, S1: () => C, gB: () => O }),
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
        E = n(329551),
        _ = n(285918),
        o = n(912630),
        u = n(965162),
        A = n(498559),
        d = n(463951),
        c = n(577718),
        I = n(652215);
      async function T(e) {
        let t = await fetch(e),
          n = await t.blob();
        return new Uint8ClampedArray(await n.arrayBuffer());
      }
      function N(e, t, n, i, r) {
        (0, _.wq)({ [e]: { graph: n, target: t, image: i, blob: r } });
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
              size: c.Im.width,
            }));
        }
        if (null != i)
          try {
            var E;
            let n = l
                ? void 0
                : await ((E = i),
                  new Promise((e, t) => {
                    let n = new Image();
                    (n.crossOrigin = "anonymous"),
                      (n.onload = () => {
                        let t = document.createElement("canvas");
                        (t.width = c.Im.width), (t.height = c.Im.height);
                        let i = t.getContext("2d");
                        r()(null != i, "Canvas context is missing");
                        let a = n.height / n.width,
                          l = c.Im.height,
                          s = c.Im.height / a,
                          E = (t.width - s) / 2,
                          _ = (t.height - l) / 2;
                        i.drawImage(n, E, _, s, l);
                        let o = i.getImageData(0, 0, t.width, t.height);
                        e({
                          data: o.data,
                          width: o.width,
                          height: o.height,
                          pixelFormat: "rgba",
                        });
                      }),
                      (n.onerror = (e) => t(e)),
                      (n.src = E);
                  })),
              s = l ? await T(i) : void 0;
            N(e, t, a.gO.BACKGROUND_REPLACEMENT, n, s);
          } catch (e) {
            (0, _.Mj)();
          }
      }
      async function O(e, t) {
        let { track: n = !0, location: i } = t;
        await S(a.Tr.CAMERA_BACKGROUND_LIVE, { type: a.Qo.INPUT_DEVICE }, e),
          n && (0, u.Uz)(e, i, "Enabled");
      }
      async function C(e, t, n) {
        let { track: i = !0, location: r } = n;
        (0, _.Oo)(),
          await S(
            a.Tr.CAMERA_BACKGROUND_PREVIEW,
            { type: a.Qo.STREAM, streamId: t },
            e,
          ),
          i && (0, u.Uz)(e, r, "Preview");
      }
      function p() {
        let e = l.default.getCurrentUser();
        if (null == e) return;
        let t = (0, E.i)(e);
        (0, d.A)() &&
          !o.A.hasBeenApplied &&
          null != t &&
          O(t, { track: !1 }).catch(I.tEg);
      }
    },
    461782(e, t, n) {
      n.d(t, { Ay: () => E, k3: () => l, vG: () => s });
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
      function E(e) {
        let { children: t, timeout: n } = e,
          [E, _] = r.useState(!1),
          o = r.useRef(new Set()),
          u = r.useRef(null);
        r.useEffect(
          () => (
            (u.current = new a.J_(n, () => _(!0))),
            u.current.delay(),
            () => {
              u.current?.cancel(), (u.current = null);
            }
          ),
          [n],
        );
        let A = r.useCallback(
            (e) => {
              _(!1), o.current.add(e), u.current?.cancel();
            },
            [o, u, _],
          ),
          d = r.useCallback(
            (e) => {
              o.current.delete(e), 0 === o.current.size && u.current?.delay();
            },
            [o, u],
          ),
          c = r.useCallback(() => {
            _(!1), 0 === o.current.size && u.current?.delay();
          }, [o, u, _]),
          I = r.useCallback(() => {
            o.current.size > 0 || (u.current?.cancel(), _(!0));
          }, [u, _]),
          T = r.useMemo(
            () => ({
              onAllowIdle: d,
              onPreventIdle: A,
              onActive: c,
              onForceIdle: I,
            }),
            [d, A, c, I],
          );
        return (0, i.jsx)(s.Provider, {
          value: E,
          children: (0, i.jsx)(l.Provider, {
            value: T,
            children: t({ idle: E, ...T }),
          }),
        });
      }
    },
    722776(e, t, n) {
      n.d(t, { A: () => _ });
      var i = n(17928),
        r = n(462887),
        a = n(736653),
        l = n(313961),
        s = n(309010),
        E = n(652215);
      function _(e, t) {
        let n = (0, i.bG)([s.A], () => s.A.getVoiceChannelId()),
          _ = (0, i.bG)([l.A], () => (null != n ? l.A.getMode(n) : null)),
          o = (0, a.Ay)();
        return null != e
          ? e
          : _ === E._Of.VOICE && (0, r.q)(o)
            ? t
              ? "activeLight"
              : "primaryLight"
            : t
              ? "white"
              : "primaryDark";
      }
    },
    34135(e, t, n) {
      n.d(t, { A: () => E });
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
      let E = new s(r.h, {});
    },
    885576(e, t, n) {
      let i;
      n.d(t, { A: () => L });
      var r = n(111956),
        a = n.n(r),
        l = n(17928),
        s = n(228366),
        E = n(956793),
        _ = n(77729),
        o = n(253932),
        u = n(927813),
        A = n(723702),
        d = n(495544),
        c = n(652215),
        I = n(731854);
      let T = Date.now(),
        N = !1,
        S = !1,
        O = !1,
        C = !1,
        p = !1;
      function R() {
        return O || C || ((0, A.isAndroid)() && p);
      }
      function g() {
        let e;
        Date.now() - T > c.sdF || R()
          ? N || s.h.dispatch({ type: "IDLE", idle: !0, idleSince: T })
          : N && s.h.dispatch({ type: "IDLE", idle: !1 }),
          0 === (e = o.cU.getSetting()) ||
          null != i ||
          Date.now() - T > Math.min(e * u.A.Millis.SECOND, c.sdF) ||
          R()
            ? S || s.h.dispatch({ type: "AFK", afk: !0 })
            : S && s.h.dispatch({ type: "AFK", afk: !1 });
      }
      function M(e) {
        e && (i = Date.now()), g();
      }
      if (!__OVERLAY__) {
        A.isPlatformEmbedded && _.A?.powerMonitor != null
          ? (!(function e() {
              let t = (t) => {
                let n = Date.now() - t;
                (null == i || n > i) && ((T = Math.max(n, T)), (i = null)),
                  g(),
                  setTimeout(e, 10 * u.A.Millis.SECOND);
              };
              if (_.A?.powerMonitor?.getSystemIdleTimeMs != null) {
                let e = _.A.powerMonitor.getSystemIdleTimeMs();
                e instanceof Promise ? e.then(t) : t(e);
              }
            })(),
            _.A.powerMonitor.on("resume", () => {
              (O = !1), M(!1);
            }),
            _.A.powerMonitor.on("suspend", () => {
              (O = !0), M(!0), E.default.disconnect();
            }),
            _.A.powerMonitor.on("lock-screen", () => {
              (C = !0), M(!0);
            }),
            _.A.powerMonitor.on("unlock-screen", () => {
              (C = !1), M(!1);
            }))
          : setInterval(g, 30 * u.A.Millis.SECOND);
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
            : g(),
          !1)
        );
      }
      class m extends l.Ay.Store {
        initialize() {
          this.waitFor(d.default);
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
          return O;
        }
        getSystemLocked() {
          return C;
        }
      }
      let L = new m(s.h, {
        IDLE: function (e) {
          N = e.idle;
        },
        AFK: function (e) {
          S = e.afk;
        },
        SPEAKING: function (e) {
          let { userId: t, speakingFlags: n } = e;
          return n !== I.ME.NONE && t === d.default.getId() && h({}), !1;
        },
        APP_STATE_UPDATE: function (e) {
          let { state: t } = e;
          return (
            (p = t === c.g6G.BACKGROUND), (i = null), (T = Date.now()), g(), !1
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
      n.d(t, { A: () => c });
      var i = n(17928),
        r = n(228366),
        a = n(589051),
        l = n(954571),
        s = n(495544),
        E = n(652215);
      function _(e, t) {
        l.default.track(E.HAw.STREAMER_MODE_TOGGLE, {
          enabled: e,
          automatic: t,
        });
      }
      let o = {
          enabled: !1,
          autoToggle: !0,
          hideInstantInvites: !0,
          hidePersonalInformation: !0,
          disableSounds: !0,
          disableNotifications: !0,
          disabledOverlayWidgets: [],
          enableContentProtection: !1,
        },
        u = {},
        A = { ...o };
      class d extends i.Ay.PersistedStore {
        static displayName = "StreamerModeStore";
        static persistKey = "StreamerModeStore";
        static migrations = [
          (e) => {
            let t = s.default.getId();
            return null == e || null == t ? {} : { [t]: { ...e } };
          },
        ];
        initialize(e) {
          Object.assign(u, e),
            this.syncWith([s.default], () => {
              let e,
                t = s.default.getId();
              A =
                null != t
                  ? (null == (e = u[t]) && (e = u[t] = { ...o }), e)
                  : { ...o };
            });
        }
        getState() {
          return u;
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
      let c = new d(r.h, {
        LOGOUT: function (e) {
          e.isSwitchingAccount || (u = {});
        },
        MULTI_ACCOUNT_REMOVE_ACCOUNT: function (e) {
          e.userId in u && delete u[e.userId];
        },
        STREAMER_MODE_UPDATE: function (e) {
          let t = { ...A };
          return (
            Object.assign(A, { [e.key]: e.value }),
            "enabled" === e.key && "boolean" == typeof e.value
              ? _(e.value, !1)
              : l.default.track(E.HAw.UPDATE_STREAMER_MODE_SETTINGS, {
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
            return (A.enabled = t), _(t, !0), !0;
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
      n.d(t, { A: () => _ });
      var i = n(77729),
        r = n(626584),
        a = n(832213),
        l = n(19575);
      let s = new r.A("ProcessUtilsElectron");
      class E extends a.D {
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
          let e = E.getCurrentMemoryUsageKBCore();
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
      let _ = new E();
    },
    861464(e, t, n) {
      n.d(t, { A: () => h });
      var i = n(385244),
        r = n(718564),
        a = n(436857),
        l = n(47167),
        s = n(652215),
        E = n(985018),
        _ = n(942075),
        o = n(320095),
        u = n(763754),
        A = n(808829),
        d = n(552691),
        c = n(383233),
        I = n(495544),
        T = n(734057),
        N = n(71393),
        S = n(994500),
        O = n(287809),
        C = n(562153),
        p = n(935208);
      let R = {
        "234395307759108106": "https://groovy.bot/commands",
        "365975655608745985": "https://www.pokecord.com/getting-started",
        512412940897484800: "http://jameslantz.net/smilebot",
      };
      function g(e) {
        let t = [
            E.t.Jm6e0x,
            E.t.MGRnRT,
            E.t.EXOEGh,
            E.t["5uCTFN"],
            E.t.rl45Qo,
            E.t.Bh9zpQ,
            E.t.RdEy1J,
            E.t.qcdp00,
            E.t.F7w2Ru,
            E.t.gSyOgK,
            E.t.uYgqv7,
            E.t["b/1SBX"],
            E.t.LhebZF,
          ],
          n = p.default.extractTimestamp(e) % t.length;
        return t[n];
      }
      function M(e) {
        return (0, a.$)(
          E.intl.formatToParts(E.t.ihxM9x, {
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
                  ? (O.default.getUser(t.id) ?? null)
                  : "string" == typeof t
                    ? (O.default.getUser(t) ?? null)
                    : null;
            })(e),
            p = e.channel_id,
            R = C.Ay.getName(null, p, e.author);
          switch (e.type) {
            case s.lAJ.RECIPIENT_ADD:
              if (null == n) return;
              return (0, a.$)(
                E.intl.formatToParts(E.t["7/Xl0S"], {
                  username: R,
                  usernameOnClick: s.tEg,
                  otherUsername: C.Ay.getName(null, p, n),
                  otherUsernameOnClick: s.tEg,
                }),
              );
            case s.lAJ.RECIPIENT_REMOVE:
              if (null == n) return;
              let h = e.author;
              if (null == h || h.id === n.id)
                return (0, a.$)(
                  E.intl.formatToParts(E.t["Qn5+Lf"], {
                    username: R,
                    usernameOnClick: s.tEg,
                  }),
                );
              return (0, a.$)(
                E.intl.formatToParts(E.t.QtZ0RD, {
                  username: R,
                  usernameOnClick: s.tEg,
                  otherUsername: C.Ay.getName(null, p, n),
                  otherUsernameOnClick: s.tEg,
                }),
              );
            case s.lAJ.CALL:
              let { call: m } = e;
              if (null != m && -1 === m.participants.indexOf(I.default.getId()))
                return (0, a.$)(
                  E.intl.formatToParts(E.t.DbgSA0, {
                    username: R,
                    usernameOnClick: s.tEg,
                  }),
                );
              return;
            case s.lAJ.CHANNEL_NAME_CHANGE:
              return (0, a.$)(
                E.intl.formatToParts(
                  t.isForumPost() ? E.t["qa0e/n"] : E.t.XCPMEG,
                  {
                    username: R,
                    usernameOnClick: s.tEg,
                    channelName: e.content,
                  },
                ),
              );
            case s.lAJ.CHANNEL_ICON_CHANGE:
              return (0, a.$)(
                E.intl.formatToParts(E.t.wypJZ0, {
                  username: R,
                  usernameOnClick: s.tEg,
                }),
              );
            case s.lAJ.CHANNEL_PINNED_MESSAGE:
              return (0, a.$)(
                E.intl.formatToParts(E.t["/M60j0"], {
                  username: R,
                  usernameOnClick: s.tEg,
                }),
              );
            case s.lAJ.USER_JOIN:
              return (0, a.$)(
                E.intl.formatToParts(g(e.id), {
                  username: R,
                  usernameOnClick: s.tEg,
                }),
              );
            case s.lAJ.EMOJI_ADDED:
              let L, D;
              return (
                (D =
                  null == (L = T.A.getChannel(e.channel_id))
                    ? null
                    : N.A.getGuild(L.getGuildId())),
                (0, a.$)(
                  E.intl.formatToParts(E.t.PJsjbP, {
                    emoji: e.content,
                    guildName: D?.name ?? E.intl.string(E.t.dtwqPR),
                  }),
                )
              );
            case s.lAJ.GUILD_BOOST:
              return M(R);
            case s.lAJ.GUILD_BOOST_TIER_1:
            case s.lAJ.GUILD_BOOST_TIER_2:
            case s.lAJ.GUILD_BOOST_TIER_3:
              let y;
              return null == (y = T.A.getChannel(p)) ||
                null == N.A.getGuild(y.getGuildId())
                ? M(R)
                : (0, a.$)(
                    E.intl.formatToParts(E.t.ihxM9x, {
                      username: R,
                      usernameOnClick: s.tEg,
                    }),
                  );
            case s.lAJ.GUILD_INVITE_REMINDER:
              return E.intl.string(E.t.gxyKvr);
            case s.lAJ.THREAD_STARTER_MESSAGE:
              return E.intl.formatToPlainString(E.t["B8H+Cl"], {
                username: R,
                threadName: (0, l.m1)(t, O.default, S.A),
              });
            case s.lAJ.ROLE_SUBSCRIPTION_PURCHASE:
              if (e instanceof c.Ay) return null;
              return (0, a.$)(
                (0, _.eb)({
                  username: R,
                  guildId: t.guild_id,
                  roleSubscriptionData: e.role_subscription_data,
                }),
              );
            case s.lAJ.PURCHASE_NOTIFICATION:
              if (
                e instanceof c.Ay ||
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
                  return E.intl.formatToParts(E.t["w4iXs+"], {
                    username: t,
                    usernameHook: n,
                    productName: i,
                  });
                })({
                  username: R,
                  productName:
                    e.purchase_notification.guild_product_purchase.product_name,
                }),
              );
            case s.lAJ.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION:
              if (e instanceof c.Ay) return null;
              let f = (0, u.p_)((0, o.rh)(e));
              return (0, a.$)(
                (0, A.P)({ application: e.application, username: f.nick }),
              );
            case s.lAJ.PRIVATE_CHANNEL_INTEGRATION_ADDED:
              if (e instanceof c.Ay) return null;
              return (0, a.$)(
                (0, d.g6)({
                  application: e.application,
                  username: (0, u.p_)((0, o.rh)(e)).nick,
                }),
              );
            case s.lAJ.PRIVATE_CHANNEL_INTEGRATION_REMOVED:
              if (e instanceof c.Ay) return null;
              return (0, a.$)(
                (0, d.uk)({
                  application: e.application,
                  username: (0, u.p_)((0, o.rh)(e)).nick,
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
                  _ = T.A.getChannel(p);
                if (null == _) return null;
                let o = N.A.getGuild(_.getGuildId());
                if (null == o) return null;
                switch (l) {
                  case r.W.ACTIVITY_ALERTS_ENABLED:
                    return (0, a.$)(
                      E.intl.formatToParts(E.t.wt3ZUM, { guildName: o.name }),
                    );
                  case r.W.INTERACTION_BLOCKED:
                    return (0, a.$)(
                      E.intl.formatToParts(E.t.AkqI0g, { guildName: o.name }),
                    );
                  default:
                    return (0, a.$)(
                      E.intl.formatToParts(E.t["a+lJKl"], {
                        guildName: o.name,
                      }),
                    );
                }
              }
              return e.content;
            case s.lAJ.GUILD_INCIDENT_ALERT_MODE_ENABLED:
              var U = e.content;
              let P = T.A.getChannel(p);
              if (null == P) return null;
              let G = N.A.getGuild(P.getGuildId());
              return null == G
                ? null
                : (0, a.$)(
                    E.intl.formatToParts(E.t.iOuWPk, {
                      username: R,
                      guildName: G.name,
                      time:
                        "" !== U
                          ? new Date(U).toLocaleString(E.intl.currentLocale, {
                              hour: "numeric",
                              minute: "2-digit",
                            })
                          : "",
                    }),
                  );
            case s.lAJ.GUILD_INCIDENT_ALERT_MODE_DISABLED:
              let B = T.A.getChannel(p);
              if (null == B) return null;
              let v = N.A.getGuild(B.getGuildId());
              return null == v
                ? null
                : (0, a.$)(
                    E.intl.formatToParts(E.t.axmbpm, {
                      username: R,
                      guildName: v.name,
                    }),
                  );
            default:
              return e.content;
          }
        },
        getSystemMessageUserJoin: function (e) {
          let t = [
              E.t["0cuj7l"],
              E.t["MuW+CN"],
              E.t.osqpHX,
              E.t["5ToSh2"],
              E.t.JEB8ps,
              E.t.pkOV5T,
              E.t["kRb1J+"],
              E.t["EmKLY+"],
              E.t.rPtBnb,
              E.t["5B/ekS"],
              E.t.ESNC3Y,
              E.t.Iw6d8w,
              E.t["WecSZ/"],
            ],
            n = p.default.extractTimestamp(e) % t.length;
          return t[n];
        },
        getSystemMessageUserJoinMobile: g,
        getSystemMessageBotJoin: function (e) {
          return null == R[e]
            ? null
            : E.intl.format(E.t.xw1Ij0, {
                learnOnClick: { onClick: () => window.open(R[e]) },
              });
        },
      };
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
          let n = new E(this);
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
      class E {
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
  },
]);
//# sourceMappingURL=26683.bc9cef030531981b.js.map
