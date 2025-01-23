"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["93988"],
  {
    241420: function (e, t, n) {
      n.r(t),
        n.d(t, {
          PrivacySettings: function () {
            return f;
          },
          default: function () {
            return g;
          },
        });
      var i = n(200651);
      n(192379);
      var l = n(481060),
        r = n(546957),
        a = n(190014),
        o = n(301812),
        u = n(988043),
        s = n(919539),
        d = n(526761),
        h = n(388032),
        c = n(916442);
      function f(e) {
        let { guildId: t } = e;
        return (0, i.jsxs)(r.Z, {
          children: [
            (0, i.jsx)(u.Z, { ingress: d.f4.SERVER_PRIVACY_MODAL, guildId: t }),
            (0, i.jsx)(s.Z, { ingress: d.f4.SERVER_PRIVACY_MODAL, guildId: t }),
            (0, i.jsx)(o.Z, { ingress: d.f4.SERVER_PRIVACY_MODAL, guildId: t }),
            (0, i.jsx)(a.Z, { ingress: d.f4.SERVER_PRIVACY_MODAL, guildId: t }),
            (0, i.jsx)(l.Text, {
              color: "header-secondary",
              variant: "text-sm/normal",
              children: h.intl.format(h.t.LNsV09, {
                policyLink:
                  "https://discord.com/safety/360043709612-our-policies",
              }),
            }),
          ],
        });
      }
      function g(e) {
        let { guild: t, transitionState: n, onClose: r } = e,
          a = ""
            .concat(h.intl.string(h.t.BayiAg), "—")
            .concat(null != t ? t.toString() : "??");
        return (0, i.jsxs)(l.ModalRoot, {
          transitionState: n,
          size: l.ModalSize.SMALL,
          "aria-label": a,
          children: [
            (0, i.jsx)(l.ModalHeader, {
              children: (0, i.jsx)(l.Heading, {
                variant: "heading-lg/semibold",
                children: a,
              }),
            }),
            (0, i.jsx)(l.ModalContent, {
              className: c.content,
              children: (0, i.jsx)(f, { guildId: t.id }),
            }),
            (0, i.jsx)(l.ModalFooter, {
              children: (0, i.jsx)(l.Button, {
                onClick: () => r(),
                children: h.intl.string(h.t.i4jeWV),
              }),
            }),
          ],
        });
      }
    },
    905423: function (e, t, n) {
      var i = n(512969),
        l = n(65400),
        r = n(731965),
        a = n(893607),
        o = n(981631);
      function u(e) {
        let t = (0, i.LX)(null != e ? e : "", {
          path: o.Z5c.CHANNEL(
            a.Hw.guildId(),
            a.Hw.channelId({ optional: !0 }),
            ":messageId?",
          ),
        });
        if (null != t) {
          let { guildId: e, channelId: n } = t.params;
          return {
            guildId: e === o.ME ? null : e,
            channelId: null != n ? n : null,
          };
        }
        let n = (0, i.LX)(null != e ? e : "", {
          path: o.Z5c.GUILD_BOOSTING_MARKETING(a.Hw.guildId()),
        });
        return null != n
          ? { guildId: n.params.guildId, channelId: null }
          : { guildId: null, channelId: null };
      }
      t.Z = (0, l.F)((e) => ({
        path: null,
        basePath: "/",
        guildId: null,
        channelId: null,
        updatePath(t) {
          let { guildId: n, channelId: i } = u(t);
          (0, r.j)(() => e({ path: t, guildId: n, channelId: i }));
        },
        resetPath(t) {
          let { guildId: n, channelId: i } = u(t);
          (0, r.j)(() =>
            e({ path: null, guildId: n, channelId: i, basePath: t }),
          );
        },
      }));
    },
    304445: function (e, t, n) {
      n(47120), n(411104);
      var i = n(572299),
        l = n(38618),
        r = n(905423),
        a = n(622143),
        o = n(703656),
        u = n(981631);
      function s(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      t.Z = new (class e {
        initialize() {
          this.cleanup(),
            (this.unlistenHistory = (0, o.s1)().listen(this.handleRouteChange));
          let { pathname: e } = (0, o.s1)().location;
          r.Z.getState().resetPath(e),
            (this.unlistenKeyboardChange = r.Z.subscribe(
              this.handleKeybindRouteChange,
            )),
            l.Z.addChangeListener(this.handleConnectionChange);
        }
        executeRouteRewrites(e, t) {
          if (((this.routeChangeCount += 1), this.routeChangeCount < 10))
            for (let n of this.rewrites) {
              let l = (0, o.s1)().location.pathname,
                r = n(e, t);
              if (null != r)
                return (
                  (0, i.n)({
                    message:
                      "RouteManager.handleRouteChange: A route rewrite is replacing the current route",
                    data: { replacePath: r.path, previousPath: l },
                  }),
                  (0, o.dL)(r.path, r.state),
                  !0
                );
            }
          else
            throw Error(
              "RouteManager: Something has gone horribly wrong with rewrites",
            );
          return !1;
        }
        cleanup() {
          var e, t;
          null === (e = this.unlistenHistory) || void 0 === e || e.call(this),
            (this.unlistenHistory = void 0),
            null === (t = this.unlistenKeyboardChange) ||
              void 0 === t ||
              t.call(this),
            (this.unlistenKeyboardChange = void 0),
            l.Z.removeChangeListener(this.handleConnectionChange);
        }
        addRouteChangeListener(e) {
          return (
            null != this.unlistenHistory && e((0, o.s1)().location, "REPLACE"),
            this.listeners.add(e),
            () => this.removeRouteChangeListener(e)
          );
        }
        addRouteRewriter(e) {
          if (null != this.unlistenHistory) {
            let t = e((0, o.s1)().location, (0, o.s1)().action);
            null != t && (0, o.dL)(t.path, t.state);
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
          return (0, o.s1)();
        }
        constructor() {
          s(this, "unlistenHistory", void 0),
            s(this, "unlistenKeyboardChange", void 0),
            s(this, "rewrites", new Set()),
            s(this, "listeners", new Set()),
            s(this, "routeChangeCount", 0),
            s(this, "timer", -1),
            s(this, "connected", !1),
            s(this, "handleConnectionChange", () => {
              let e = l.Z.isConnected(),
                t = e && !this.connected;
              (this.connected = e),
                t &&
                  ((this.routeChangeCount = 0),
                  this.executeRouteRewrites((0, o.s1)().location, "REPLACE"));
            }),
            s(this, "handleRouteChange", (e, t) => {
              if (this.executeRouteRewrites(e, t)) return;
              if (!(0, a.r)(e)) {
                (0, o.dL)(u.Z5c.ME);
                return;
              }
              let n = r.Z.getState();
              for (let i of (n.basePath !== e.pathname &&
                n.resetPath(e.pathname),
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
            }),
            s(this, "handleKeybindRouteChange", (e) => {
              let { path: t } = e;
              null != t
                ? (clearTimeout(this.timer),
                  (this.timer = setTimeout(this.flushRoute, 200)))
                : null == t && clearTimeout(this.timer);
            }),
            s(this, "flushRoute", () => {
              clearTimeout(this.timer);
              let e = r.Z.getState();
              null != e.path && (0, o.uL)(e.path);
            });
        }
      })();
    },
    622143: function (e, t, n) {
      n.d(t, {
        r: function () {
          return i;
        },
      });
      function i(e) {
        return !0;
      }
    },
    977059: function (e, t, n) {
      n.d(t, {
        R: function () {
          return r;
        },
        S: function () {
          return l;
        },
      });
      let i = (0, n(987170).Z)({
        kind: "user",
        id: "2024-05_secure_frames_ui_rollout",
        label: "Secure Frames Rollout",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled.", config: { enabled: !0 } }],
      });
      function l(e) {
        let { location: t } = e;
        return i.useExperiment({ location: t }, { autoTrackExposure: !0 });
      }
      function r(e) {
        let { location: t } = e;
        return i.getCurrentConfig({ location: t }, { autoTrackExposure: !0 });
      }
    },
    88658: function (e, t, n) {
      n.d(t, {
        $6: function () {
          return b;
        },
        YK: function () {
          return d;
        },
        _o: function () {
          return c;
        },
        bL: function () {
          return g;
        },
        gl: function () {
          return h;
        },
        rr: function () {
          return f;
        },
      }),
        n(47120);
      var i,
        l,
        r = n(695346),
        a = n(486472),
        o = n(430824);
      n(626135);
      var u = n(981631);
      n(388032);
      let s = 864e5 * u.eBq;
      function d() {
        let e = r.h2.getSetting();
        return (
          0 === a.Z.totalUnavailableGuilds &&
            (e = e.filter((e) => null != o.Z.getGuild(e))),
          new Set(e)
        );
      }
      function h() {
        let e = r.zA.getSetting();
        return (
          0 === a.Z.totalUnavailableGuilds &&
            (e = e.filter((e) => null != o.Z.getGuild(e))),
          new Set(e)
        );
      }
      function c() {
        let e = r.SE.getSetting();
        return (
          0 === a.Z.totalUnavailableGuilds &&
            (e = e.filter((e) => null != o.Z.getGuild(e))),
          new Set(e)
        );
      }
      function f() {
        let e = r.iH.getSetting();
        return (
          0 === a.Z.totalUnavailableGuilds &&
            (e = e.filter((e) => null != o.Z.getGuild(e))),
          new Set(e)
        );
      }
      function g(e) {
        return (e & u.HGf) === u.HGf
          ? { all: !0, mutualFriends: !0, mutualGuilds: !0 }
          : {
              all: !1,
              mutualFriends:
                (e & u.SOq.MUTUAL_FRIENDS) === u.SOq.MUTUAL_FRIENDS,
              mutualGuilds: (e & u.SOq.MUTUAL_GUILDS) === u.SOq.MUTUAL_GUILDS,
            };
      }
      function b(e, t) {
        return (
          !!(!t.verified || t.isStaff()) ||
          (null != e && s > Date.now() - new Date(e.created_at).getTime())
        );
      }
      ((l = i || (i = {}))[(l.UNDECIDED = 0)] = "UNDECIDED"),
        (l[(l.OPTIN = 1)] = "OPTIN"),
        (l[(l.OPTOUT = 2)] = "OPTOUT");
    },
    916442: function (e, t, n) {
      e.exports = { content: "content_efb43c" };
    },
    971139: function (e, t, n) {
      e.exports = {
        hoverRoll: "hoverRoll_e07331",
        forceHover: "forceHover_e07331",
        disabled: "disabled_e07331",
        default: "default_e07331",
        hovered: "hovered_e07331",
      };
    },
    373780: function (e, t, n) {
      e.exports = {
        wrapper: "wrapper_b877fa",
        disabledSelected: "disabledSelected_b877fa",
        hiddenInput: "hiddenInput_b877fa",
        bottomLeft: "bottomLeft_b877fa option_b877fa",
        bottomRight: "bottomRight_b877fa option_b877fa",
        topLeft: "topLeft_b877fa option_b877fa",
        topRight: "topRight_b877fa option_b877fa",
        disabled: "disabled_b877fa",
        disabledIcon: "disabledIcon_b877fa",
        selected: "selected_b877fa",
      };
    },
  },
]);
//# sourceMappingURL=49d26654ad59c09fdda0.js.map
