"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["12663"],
  {
    12351(e, t, s) {
      s.d(t, { A: () => A });
      var i = s(627968),
        n = s(64700),
        l = s(503698),
        r = s.n(l),
        a = s(834730),
        E = s(985018),
        d = s(158226);
      let m = { BLOCK: d.om, INLINE: d.mG };
      class u extends n.PureComponent {
        static Types = m;
        render() {
          let {
            children: e,
            className: t,
            textClassName: s,
            type: n = m.BLOCK,
            style: l,
          } = this.props;
          return (0, i.jsxs)("div", {
            className: r()(t, n),
            style: l,
            children: [
              (0, i.jsxs)(a.E, {
                variant: "text-sm/bold",
                tag: "div",
                color: "text-feedback-positive",
                className: d.AD,
                children: [E.intl.string(E.t["8tvIiN"]), ":"],
              }),
              (0, i.jsx)(a.E, {
                className: r()(d.uN, s),
                variant: "text-sm/normal",
                children: e,
              }),
            ],
          });
        }
      }
      let A = u;
    },
    966833(e, t, s) {
      s.d(t, { A: () => g, e: () => D }), s(667532);
      var i,
        n = s(735438),
        l = s.n(n),
        r = s(17928),
        a = s(228366),
        E = s(390248),
        d = s(320095),
        m = s(773669),
        u = s(734057),
        A = s(696451),
        c = s(71393),
        I = s(232835),
        o = s(994500),
        f = s(287809),
        D =
          (((i = {}).LOADING = "LOADING"),
          (i.LOADED_HAS_MORE = "LOADED_HAS_MORE"),
          (i.LOADED_FINISHED = "LOADING_FINISHED"),
          (i.FAILED = "FAILED"),
          i);
      let N = {};
      function _(e) {
        let { channel: t } = e;
        delete N[t.id];
      }
      function h() {
        l().forEach(N, (e) => {
          e.items.forEach((e) => {
            let { message: t } = e;
            t.set("blocked", o.A.isBlockedForMessage(t)),
              t.set("ignored", o.A.isIgnoredForMessage(t));
          }),
            (e.items = e.items.slice());
        });
      }
      class L extends r.Ay.Store {
        static displayName = "ChannelPinsStore";
        initialize() {
          this.waitFor(u.A, A.Ay, c.A, m.default, I.A, o.A, f.default);
        }
        getPins(e) {
          return N[e];
        }
      }
      let g = new L(a.h, {
        CONNECTION_OPEN: function () {
          N = {};
        },
        LOAD_PINNED_MESSAGES: function (e) {
          let { channelId: t, reset: s } = e;
          if (!s && null != N[t]) {
            N[t].state = "LOADING";
            return;
          }
          let i = u.A.getChannel(t)?.getGuildId() ?? void 0;
          N[t] = { id: t, items: [], state: "LOADING", guildId: i };
        },
        LOAD_PINNED_MESSAGES_SUCCESS: function (e) {
          let { channelId: t, pins: s, hasMore: i } = e,
            n = N[t];
          if (null == n) return !1;
          let l = s.map((e) => {
            let { pinned_at: t, message: s } = e;
            return { pinnedAt: new Date(Date.parse(t)), message: (0, d.rh)(s) };
          });
          (n.items = [...n.items, ...l]),
            (n.state = i ? "LOADED_HAS_MORE" : "LOADING_FINISHED");
        },
        LOAD_PINNED_MESSAGES_FAILURE: function (e) {
          let { channelId: t } = e,
            s = N[t];
          if (null == s) return !1;
          s.state = "FAILED";
        },
        CHANNEL_DELETE: _,
        THREAD_DELETE: _,
        GUILD_DELETE: function (e) {
          let { guild: t } = e;
          N = l()(N)
            .filter((e) => e.guildId !== t.id)
            .keyBy("id")
            .value();
        },
        MESSAGE_DELETE: function (e) {
          let { id: t, channelId: s } = e,
            i = N[s];
          if (
            null == i ||
            0 ===
              l().remove(i.items, (e) => {
                let { message: s } = e;
                return s.id === t;
              }).length
          )
            return !1;
          (i.items = i.items.slice()), (N[s] = i);
        },
        MESSAGE_DELETE_BULK: function (e) {
          let { ids: t, channelId: s } = e,
            i = N[s];
          if (null == i) return !1;
          i.items = i.items.filter((e) => {
            let { message: s } = e;
            return !t.includes(s.id);
          });
        },
        MESSAGE_UPDATE: function (e) {
          let t = e.message.id,
            s = e.message.channel_id;
          if (null == s) return !1;
          let i = N[s];
          if (null == i) return !1;
          if (null == e.message.author) {
            let n = l().findIndex(i.items, (e) => {
              let { message: s } = e;
              return s.id === t;
            });
            if (-1 === n) return;
            let { pinnedAt: r, message: a } = i.items[n],
              E = (0, d.IU)(a, e.message);
            if (E !== a) {
              let e = i.items.slice();
              (e[n] = { pinnedAt: r, message: E }), (N[s].items = e);
            }
            return;
          }
          if (e.message.pinned) {
            i.items = i.items.slice();
            let s = l().findIndex(i.items, (e) => {
              let { message: s } = e;
              return s.id === t;
            });
            -1 === s
              ? i.items.unshift({
                  message: (0, d.rh)(e.message),
                  pinnedAt: new Date(),
                })
              : (i.items[s].message = (0, d.IU)(i.items[s].message, e.message));
            return;
          }
          let n = l().findIndex(i.items, (e) => {
            let { message: s } = e;
            return s.id === t;
          });
          if (-1 === n) return !1;
          (i.items = i.items.slice()), i.items.splice(n, 1);
        },
        RELATIONSHIP_ADD: h,
        RELATIONSHIP_REMOVE: h,
        RELATIONSHIP_UPDATE: h,
        MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: function (e) {
          let { messageId: t, channelId: s } = e,
            i = N[s];
          if (null == i) return !1;
          let n = l().findIndex(i.items, (e) => {
            let { message: s } = e;
            return s.id === t;
          });
          if (-1 === n) return !1;
          (i.items = i.items.slice()),
            (i.items[n].message = (0, E.Td)(i.items[n].message));
        },
      });
    },
    666492(e, t, s) {
      s.d(t, { Q: () => a });
      var i = s(627968);
      s(64700);
      var n = s(661531),
        l = s(996682),
        r = s(27989);
      let a = (e) => {
        let {
            size: t = "md",
            width: s,
            height: a,
            color: E = n.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: d = "",
            ...m
          } = e,
          u = (0, r.J)(t),
          A = u?.width ?? s,
          c = u?.height ?? a;
        return (0, i.jsxs)("svg", {
          ...(0, l.A)(m),
          xmlns: "http://www.w3.org/2000/svg",
          width: A,
          height: c,
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, i.jsx)("path", {
              d: "M12.93 21.96c.25-.03.43-.23.47-.47a3 3 0 0 1 .08-.35.66.66 0 0 0-.24-.71A3 3 0 0 1 12 18v-3a3 3 0 0 1 4.35-2.68c.14.07.3.09.44.04a7 7 0 0 1 4.58.05c.3.1.63-.1.63-.41a10 10 0 1 0-18.45 5.36c.13.19.11.44-.04.61l-2.06 2.37A1 1 0 0 0 2.2 22H12c.32 0 .63-.01.93-.04Z",
              fill: "string" == typeof E ? E : E.css,
              className: d,
            }),
            (0, i.jsx)("path", {
              d: "M18 17h-1.24a3 3 0 1 1 .26 4.25 1 1 0 1 0-1.33 1.5A4.98 4.98 0 0 0 24 19a5 5 0 0 0-8-4 1 1 0 0 0-2 0v3a1 1 0 0 0 1 1h3a1 1 0 1 0 0-2Z",
              fill: "string" == typeof E ? E : E.css,
              className: d,
            }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=12663.5f0df180b72eecc5.js.map
