"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["9238"],
  {
    177475: function (t) {
      t.exports = "/assets/a64ea373b47e9a224206.svg";
    },
    339340: function (t, n, e) {
      e.r(n),
        e.d(n, {
          VOICE_CHANNEL_STATUS_MODAL_KEY: function () {
            return m;
          },
          default: function () {
            return S;
          },
        }),
        e(47120),
        e(757143);
      var i = e(200651),
        l = e(192379),
        r = e(399606),
        a = e(343817),
        d = e(481060),
        u = e(787014),
        s = e(12498),
        o = e(541716),
        _ = e(752305),
        c = e(893718),
        E = e(600164),
        g = e(19780),
        I = e(626135),
        p = e(981631),
        f = e(388032),
        T = e(897232);
      let m = "VoiceChannelStatusModal";
      function S(t) {
        let { channel: n, transitionState: e, onClose: S } = t,
          U = (0, r.e7)([s.Z], () => s.Z.getChannelStatus(n)),
          C = (0, r.e7)([g.Z], () => g.Z.getMediaSessionId()),
          [L, D] = l.useState(null != U ? U : ""),
          [N, O] = l.useState(!1),
          [A, G] = l.useState(null),
          y = L.length > 500;
        l.useEffect(() => {
          I.default.track(p.rMx.OPEN_MODAL, {
            type: "Voice Channel Topic Modal",
            guild_id: n.guild_id,
          });
        }, [n.guild_id]);
        let v = (t) => {
            G(new a.Hx(t, t.status).getAnyErrorMessage());
          },
          Z = async (t) => {
            L === U && S(), null == t || t.preventDefault(), G(null), O(!0);
            let e = L.length,
              i = L.replace(/<(a)?:[^:]+:[0-9]+>/g, "--").length;
            try {
              let t = await u.ZP.updateVoiceChannelStatus(n.id, L);
              204 === t.status
                ? (I.default.track(p.rMx.VOICE_CHANNEL_TOPIC_SET, {
                    guild_id: n.guild_id,
                    channel_id: n.id,
                    media_session_id: C,
                    raw_length: e,
                    text_length: i,
                  }),
                  S())
                : v(t);
            } catch (t) {
              v(t);
            }
            O(!1);
          },
          [h, M] = l.useState((0, _.JM)(L)),
          b = async () => (
            !y && !N && (await Z()),
            Promise.resolve({ shouldClear: !1, shouldRefocus: !0 })
          );
        return (0, i.jsx)("form", {
          onSubmit: Z,
          className: T.form,
          children: (0, i.jsxs)(d.ModalRoot, {
            transitionState: e,
            size: d.ModalSize.SMALL,
            children: [
              (0, i.jsxs)(d.ModalContent, {
                children: [
                  (0, i.jsxs)(d.ModalHeader, {
                    direction: E.Z.Direction.VERTICAL,
                    className: T.modalHeader,
                    separator: !1,
                    children: [
                      (0, i.jsx)(d.ModalCloseButton, {
                        className: T.closeButton,
                        onClick: S,
                      }),
                      (0, i.jsx)("div", { className: T.headerImage }),
                      (0, i.jsx)(d.FormTitle, {
                        tag: "h1",
                        className: T.title,
                        children: f.intl.string(f.t["5CyJBQ"]),
                      }),
                      (0, i.jsx)(d.Text, {
                        color: "header-secondary",
                        variant: "text-sm/normal",
                        children: f.intl.string(f.t.NRBYjo),
                      }),
                    ],
                  }),
                  (0, i.jsxs)(d.FormSection, {
                    className: T.inputSection,
                    title: f.intl.string(f.t.Fq5lwM),
                    children: [
                      (0, i.jsx)(c.Z, {
                        innerClassName: T.textArea,
                        textValue: L,
                        richValue: h,
                        placeholder: f.intl.formatToPlainString(f.t.DUXxBg, {
                          channelName: n.name,
                        }),
                        focused: !0,
                        channel: n,
                        onChange: (t, n, e) => {
                          D(n), M(e);
                        },
                        onSubmit: b,
                        type: o.I.VOICE_CHANNEL_STATUS,
                        canMentionRoles: !1,
                        canMentionChannels: !1,
                        allowNewLines: !1,
                        parentModalKey: m,
                        maxCharacterCount: 500,
                        showRemainingCharsAfterCount: 250,
                        emojiPickerCloseOnModalOuterClick: !0,
                      }),
                      null != A
                        ? (0, i.jsx)(d.FormErrorBlock, {
                            className: T.error,
                            children: A,
                          })
                        : null,
                    ],
                  }),
                ],
              }),
              (0, i.jsxs)(d.ModalFooter, {
                justify: E.Z.Justify.BETWEEN,
                direction: E.Z.Direction.HORIZONTAL,
                children: [
                  (0, i.jsx)(d.Button, {
                    color: d.Button.Colors.PRIMARY,
                    onClick: S,
                    children: f.intl.string(f.t["ETE/oK"]),
                  }),
                  (0, i.jsx)(d.Button, {
                    onClick: Z,
                    submitting: N,
                    className: T.button,
                    disabled: y,
                    children: f.intl.string(f.t.XqK2Iy),
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    776568: function (t, n, e) {
      e.d(n, {
        ZP: function () {
          return S;
        },
        k: function () {
          return T;
        },
      }),
        e(47120);
      var i = e(200651);
      e(192379);
      var l = e(913527),
        r = e.n(l),
        a = e(442837),
        d = e(481060),
        u = e(211739),
        s = e(87051),
        o = e(496729),
        _ = e(777861),
        c = e(9156),
        E = e(621600),
        g = e(933557),
        I = e(981631),
        p = e(969943),
        f = e(388032);
      let T = () => [
          { value: p.Oe.MINUTES_15, label: f.intl.string(f.t["8ot6go"]) },
          { value: p.Oe.HOURS_1, label: f.intl.string(f.t.UMWBZm) },
          { value: p.Oe.HOURS_3, label: f.intl.string(f.t.QmYWtr) },
          { value: p.Oe.HOURS_8, label: f.intl.string(f.t.EpAXPD) },
          { value: p.Oe.HOURS_24, label: f.intl.string(f.t["755t4u"]) },
          { value: p.Oe.ALWAYS, label: f.intl.string(f.t.r3LawM) },
        ],
        m = (t) => {
          let n = t > 0 ? r()().add(t, "second").toISOString() : null;
          return {
            muted: !0,
            mute_config: { selected_time_window: t, end_time: n },
          };
        };
      function S(t, n) {
        let [e, l] = (0, a.Wu)([c.ZP], () => [
            c.ZP.isChannelMuted(t.guild_id, t.id),
            c.ZP.getChannelMuteConfig(t.guild_id, t.id),
          ]),
          r = (0, _.U)(l),
          p = (0, g.ZP)(t, !0);
        function S(n) {
          n && t.type === I.d4z.GUILD_CATEGORY && (0, u.c4)(t.id),
            s.Z.updateChannelOverrideSettings(
              t.guild_id,
              t.id,
              { muted: n },
              E.UE.muted(n),
            );
        }
        let U = f.intl.string(f.t.tbeRRE),
          C = f.intl.string(f.t.OYefmZ);
        switch (t.type) {
          case I.d4z.GUILD_CATEGORY:
            (U = f.intl.string(f.t.pNMCg4)), (C = f.intl.string(f.t.olaBeH));
            break;
          case I.d4z.GROUP_DM:
            (U = f.intl.string(f.t.LO3kaG)), (C = f.intl.string(f.t["s5/5fn"]));
            break;
          case I.d4z.DM:
            (U = f.intl.format(f.t.byjuJi, { name: p })),
              (C = f.intl.format(f.t["eC+9rq"], { name: p }));
            break;
          default:
            (U = f.intl.string(f.t.tbeRRE)), (C = f.intl.string(f.t.OYefmZ));
        }
        return e
          ? (0, i.jsx)(d.MenuItem, {
              id: "unmute-channel",
              label: C,
              subtext: r,
              action: () => S(!1),
            })
          : (0, i.jsx)(d.MenuItem, {
              id: "mute-channel",
              label: U,
              action: () => {
                S(!0),
                  (0, o.s)({
                    channelId: t.id,
                    location: "channel_context_menu",
                  });
              },
              children: T().map((e) => {
                let { value: l, label: r } = e;
                return (0, i.jsx)(
                  d.MenuItem,
                  {
                    id: "".concat(l),
                    label: r,
                    action: () =>
                      (function (e) {
                        t.type === I.d4z.GUILD_CATEGORY && (0, u.c4)(t.id);
                        let i = m(e);
                        s.Z.updateChannelOverrideSettings(
                          t.guild_id,
                          t.id,
                          i,
                          E.ZB.Muted,
                          n,
                        );
                      })(l),
                  },
                  l,
                );
              }),
            });
      }
    },
    241155: function (t, n, e) {
      e(47120);
      var i,
        l,
        r,
        a,
        d = e(392711),
        u = e.n(d),
        s = e(442837),
        o = e(570140),
        _ = e(924301),
        c = e(601964),
        E = e(486527);
      let g = !1,
        I = {},
        p = {},
        f = {},
        T = (t) => (
          (f[t.guild_scheduled_event.id] = new c.ZP(
            t.guild_scheduled_event.guild,
          )),
          (p[t.guild_scheduled_event.id] = t.guild_scheduled_event),
          {
            channelId: t.directory_channel_id,
            scheduledEventId: t.entity_id,
            type: E.C2.GUILD_SCHEDULED_EVENT,
            authorId: t.author_id,
            createdAt: t.created_at,
          }
        );
      class m extends (i = s.ZP.Store) {
        isFetching() {
          return g;
        }
        getEventDirectoryEntries(t) {
          if (null != t) return I[t];
        }
        getCachedGuildByEventId(t) {
          var n;
          return null !== (n = f[t]) && void 0 !== n ? n : void 0;
        }
        getCachedGuildScheduledEventById(t) {
          var n;
          return null !== (n = p[t]) && void 0 !== n ? n : void 0;
        }
      }
      (a = "EventDirectoryStore"),
        (r = "displayName") in (l = m)
          ? Object.defineProperty(l, r, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (l[r] = a),
        (n.Z = new m(o.Z, {
          EVENT_DIRECTORY_FETCH_START: function () {
            g = !0;
          },
          EVENT_DIRECTORY_FETCH_SUCCESS: function (t) {
            let { channelId: n, entries: e } = t;
            g = !1;
            let i = u().sortBy(
                [...e],
                [
                  function (t) {
                    return (0, _.CQ)(t.guild_scheduled_event);
                  },
                ],
              ),
              l = u().map(i, T);
            I[n] = l;
          },
          EVENT_DIRECTORY_FETCH_FAILURE: function () {
            g = !1;
          },
        }));
    },
    486527: function (t, n, e) {
      e.d(n, {
        AR: function () {
          return o;
        },
        C2: function () {
          return d;
        },
        Pp: function () {
          return p;
        },
        VX: function () {
          return u;
        },
        b7: function () {
          return I;
        },
        sE: function () {
          return s;
        },
      });
      var i,
        l,
        r,
        a,
        d,
        u,
        s,
        o,
        _ = e(149765),
        c = e(700785),
        E = e(981631),
        g = e(388032);
      ((i = d || (d = {}))[(i.GUILD = 0)] = "GUILD"),
        (i[(i.GUILD_SCHEDULED_EVENT = 1)] = "GUILD_SCHEDULED_EVENT"),
        ((l = u || (u = {})).GUILD_TEMPLATES = "guild-templates"),
        (l.CUSTOMIZE_NEW_GUILD = "customize-new-guild"),
        (l.CHOOSE_GUILD = "choose-guild"),
        (l.CUSTOMIZE_EXISTING_GUILD = "customize-existing-guild"),
        (l.CONFIRMATION = "confirmation"),
        ((r = s || (s = {})).CREATE = "CREATE"),
        (r.HUB_SCHOOL_CLUB = "HUB_SCHOOL_CLUB"),
        (r.HUB_STUDY = "HUB_STUDY"),
        (r.HUB_CLASS = "HUB_CLASS"),
        (r.HUB_SOCIAL = "HUB_SOCIAL"),
        (r.HUB_MAJOR = "HUB_MAJOR"),
        (r.HUB_DORM = "HUB_DORM"),
        ((a = o || (o = {}))[(a.ALL = -1)] = "ALL"),
        (a[(a.UNCATEGORIZED = 0)] = "UNCATEGORIZED"),
        (a[(a.SCHOOL_CLUB = 1)] = "SCHOOL_CLUB"),
        (a[(a.CLASS = 2)] = "CLASS"),
        (a[(a.STUDY_SOCIAL = 3)] = "STUDY_SOCIAL"),
        (a[(a.MISC = 5)] = "MISC");
      function I(t) {
        return "883060064561299456" === t
          ? [
              { value: 1, label: g.intl.string(g.t["Z+MPNz"]) },
              { value: 2, label: g.intl.string(g.t.dV9uBg) },
              { value: 3, label: g.intl.string(g.t.xoHQcn) },
              { value: 5, label: g.intl.string(g.t.Ao41rq) },
            ]
          : [
              { value: 1, label: g.intl.string(g.t.oNHFUF), idealSize: 100 },
              { value: 2, label: g.intl.string(g.t.V1i8nZ) },
              { value: 3, label: g.intl.string(g.t.Z2ygQk), idealSize: 50 },
              { value: 5, label: g.intl.string(g.t["0Bg9LS"]) },
            ];
      }
      function p() {
        return {
          CREATE: {
            id: "CREATE",
            code: "2TffvPucqHkN",
            label: g.intl.string(g.t["H3+6BA"]),
            channels: [],
            system_channel_id: null,
          },
          HUB_SCHOOL_CLUB: {
            id: "HUB_SCHOOL_CLUB",
            code: "UMUbvRpRZhS6",
            label: g.intl.string(g.t["mmFA5+"]),
            channels: [
              {
                id: "00",
                parent_id: null,
                name: g.intl.string(g.t["VCAA/f"]),
                type: E.d4z.GUILD_CATEGORY,
              },
              {
                id: "01",
                parent_id: "00",
                name: g.intl.string(g.t.GHQoER),
                type: E.d4z.GUILD_TEXT,
              },
              {
                id: "02",
                parent_id: "00",
                name: g.intl.string(g.t.nSsoSE),
                type: E.d4z.GUILD_TEXT,
              },
              {
                id: "03",
                parent_id: "00",
                name: g.intl.string(g.t.yZCzMT),
                type: E.d4z.GUILD_TEXT,
              },
              {
                id: "10",
                parent_id: null,
                name: g.intl.string(g.t.mobYpK),
                type: E.d4z.GUILD_CATEGORY,
              },
              {
                id: "11",
                parent_id: "10",
                name: g.intl.string(g.t.pIOigI),
                type: E.d4z.GUILD_TEXT,
              },
              {
                id: "12",
                parent_id: "10",
                name: g.intl.string(g.t.ao2wxs),
                type: E.d4z.GUILD_TEXT,
              },
              {
                id: "13",
                parent_id: "10",
                name: g.intl.string(g.t.AIszv7),
                type: E.d4z.GUILD_TEXT,
              },
              {
                id: "20",
                parent_id: null,
                name: g.intl.string(g.t.vcKDMj),
                type: E.d4z.GUILD_CATEGORY,
              },
              {
                id: "21",
                parent_id: "20",
                name: g.intl.string(g.t.XS6gcH),
                type: E.d4z.GUILD_VOICE,
              },
              {
                id: "22",
                parent_id: "20",
                name: g.intl.string(g.t.hi1Ykp),
                type: E.d4z.GUILD_VOICE,
              },
              {
                id: "22",
                parent_id: "20",
                name: g.intl.string(g.t.vw8oaW),
                type: E.d4z.GUILD_VOICE,
              },
            ],
            roles: [
              { id: "00", name: "@everyone", permissions: c.TP },
              {
                id: "01",
                name: "officers (example)",
                mentionable: !0,
                hoist: !0,
                permissions: _.$e(
                  c.TP,
                  E.Plq.MANAGE_ROLES,
                  E.Plq.MANAGE_CHANNELS,
                  E.Plq.KICK_MEMBERS,
                  E.Plq.BAN_MEMBERS,
                  E.Plq.MANAGE_NICKNAMES,
                  E.Plq.MANAGE_GUILD_EXPRESSIONS,
                  E.Plq.MANAGE_MESSAGES,
                  E.Plq.SEND_TTS_MESSAGES,
                ),
                color: 3066993,
              },
            ],
            system_channel_id: "12",
          },
          HUB_STUDY: {
            id: "HUB_STUDY",
            code: "2JBhzzca2vfT",
            label: g.intl.string(g.t.fYwSi4),
            channels: [
              {
                id: "00",
                parent_id: null,
                name: g.intl.string(g.t["HY+vdH"]),
                type: E.d4z.GUILD_CATEGORY,
              },
              {
                id: "01",
                parent_id: "00",
                name: g.intl.string(g.t["3eM+Li"]),
                type: E.d4z.GUILD_TEXT,
              },
              {
                id: "02",
                parent_id: "00",
                name: g.intl.string(g.t.Qi0D7e),
                type: E.d4z.GUILD_TEXT,
              },
              {
                id: "10",
                parent_id: null,
                name: g.intl.string(g.t.yZIUV1),
                type: E.d4z.GUILD_CATEGORY,
              },
              {
                id: "11",
                parent_id: "10",
                name: g.intl.string(g.t.pIOigI),
                type: E.d4z.GUILD_TEXT,
              },
              {
                id: "12",
                parent_id: "10",
                name: g.intl.string(g.t.ao2wxs),
                type: E.d4z.GUILD_TEXT,
              },
              {
                id: "12",
                parent_id: "10",
                name: g.intl.string(g.t.AIszv7),
                type: E.d4z.GUILD_TEXT,
              },
              {
                id: "20",
                parent_id: null,
                name: g.intl.string(g.t.vcKDMj),
                type: E.d4z.GUILD_CATEGORY,
              },
              {
                id: "21",
                parent_id: "20",
                name: g.intl.string(g.t.XS6gcH),
                type: E.d4z.GUILD_VOICE,
              },
              {
                id: "22",
                parent_id: "20",
                name: g.intl.formatToPlainString(g.t.LuNsNT, { number: 1 }),
                type: E.d4z.GUILD_VOICE,
              },
              {
                id: "23",
                parent_id: "20",
                name: g.intl.formatToPlainString(g.t.LuNsNT, { number: 2 }),
                type: E.d4z.GUILD_VOICE,
              },
            ],
            system_channel_id: "12",
          },
          HUB_CLASS: {
            id: "HUB_CLASS",
            code: "r86WWBwTGspb",
            label: g.intl.string(g.t.e5gFS0),
            channels: [
              {
                id: "00",
                parent_id: null,
                name: g.intl.string(g.t["HY+vdH"]),
                type: E.d4z.GUILD_CATEGORY,
              },
              {
                id: "01",
                parent_id: "00",
                name: g.intl.string(g.t["710tNj"]),
                type: E.d4z.GUILD_TEXT,
              },
              {
                id: "02",
                parent_id: "00",
                name: g.intl.string(g.t.Qi0D7e),
                type: E.d4z.GUILD_TEXT,
              },
              {
                id: "10",
                parent_id: null,
                name: g.intl.string(g.t.yZIUV1),
                type: E.d4z.GUILD_CATEGORY,
              },
              {
                id: "11",
                parent_id: "10",
                name: g.intl.string(g.t.pIOigI),
                type: E.d4z.GUILD_TEXT,
              },
              {
                id: "12",
                parent_id: "10",
                name: g.intl.string(g.t.ao2wxs),
                type: E.d4z.GUILD_TEXT,
              },
              {
                id: "13",
                parent_id: "10",
                name: g.intl.string(g.t.AIszv7),
                type: E.d4z.GUILD_TEXT,
              },
              {
                id: "20",
                parent_id: null,
                name: g.intl.string(g.t.vcKDMj),
                type: E.d4z.GUILD_CATEGORY,
              },
              {
                id: "21",
                parent_id: "20",
                name: g.intl.string(g.t.XS6gcH),
                type: E.d4z.GUILD_VOICE,
              },
              {
                id: "22",
                parent_id: "20",
                name: g.intl.formatToPlainString(g.t.LuNsNT, { number: 1 }),
                type: E.d4z.GUILD_VOICE,
              },
              {
                id: "23",
                parent_id: "20",
                name: g.intl.formatToPlainString(g.t.LuNsNT, { number: 2 }),
                type: E.d4z.GUILD_VOICE,
              },
            ],
            system_channel_id: "12",
          },
          HUB_SOCIAL: {
            id: "HUB_SOCIAL",
            code: "AvvtXE3mfbCR",
            label: g.intl.string(g.t.oOj7Ii),
            channels: [
              {
                id: "00",
                parent_id: null,
                name: g.intl.string(g.t.yZIUV1),
                type: E.d4z.GUILD_CATEGORY,
              },
              {
                id: "01",
                parent_id: "00",
                name: g.intl.string(g.t.pIOigI),
                type: E.d4z.GUILD_TEXT,
              },
              {
                id: "02",
                parent_id: "00",
                name: g.intl.string(g.t.ao2wxs),
                type: E.d4z.GUILD_TEXT,
              },
              {
                id: "03",
                parent_id: "00",
                name: g.intl.string(g.t.AIszv7),
                type: E.d4z.GUILD_TEXT,
              },
              {
                id: "04",
                parent_id: "00",
                name: g.intl.string(g.t.d4F8gI),
                type: E.d4z.GUILD_TEXT,
              },
              {
                id: "10",
                parent_id: null,
                name: g.intl.string(g.t.vcKDMj),
                type: E.d4z.GUILD_CATEGORY,
              },
              {
                id: "11",
                parent_id: "10",
                name: g.intl.string(g.t.CLWKNj),
                type: E.d4z.GUILD_VOICE,
              },
              {
                id: "12",
                parent_id: "10",
                name: g.intl.string(g.t.g3qPRk),
                type: E.d4z.GUILD_VOICE,
              },
              {
                id: "13",
                parent_id: "10",
                name: g.intl.string(g.t.yQZpe3),
                type: E.d4z.GUILD_VOICE,
              },
            ],
            system_channel_id: "02",
          },
          HUB_MAJOR: {
            id: "HUB_MAJOR",
            code: "FhmfDR6Arvsc",
            label: g.intl.string(g.t["9kly4e"]),
            channels: [
              {
                id: "00",
                parent_id: null,
                name: g.intl.string(g.t["HY+vdH"]),
                type: E.d4z.GUILD_CATEGORY,
              },
              {
                id: "01",
                parent_id: "00",
                name: g.intl.string(g.t.yZCzMT),
                type: E.d4z.GUILD_TEXT,
              },
              {
                id: "02",
                parent_id: "00",
                name: g.intl.string(g.t.Qi0D7e),
                type: E.d4z.GUILD_TEXT,
              },
              {
                id: "10",
                parent_id: null,
                name: g.intl.string(g.t.yZIUV1),
                type: E.d4z.GUILD_CATEGORY,
              },
              {
                id: "11",
                parent_id: "10",
                name: g.intl.string(g.t.pIOigI),
                type: E.d4z.GUILD_TEXT,
              },
              {
                id: "12",
                parent_id: "10",
                name: g.intl.string(g.t.ao2wxs),
                type: E.d4z.GUILD_TEXT,
              },
              {
                id: "13",
                parent_id: "10",
                name: g.intl.string(g.t.AIszv7),
                type: E.d4z.GUILD_TEXT,
              },
              {
                id: "20",
                parent_id: null,
                name: g.intl.string(g.t.vcKDMj),
                type: E.d4z.GUILD_CATEGORY,
              },
              {
                id: "21",
                parent_id: "20",
                name: g.intl.string(g.t.XS6gcH),
                type: E.d4z.GUILD_VOICE,
              },
              {
                id: "22",
                parent_id: "20",
                name: g.intl.formatToPlainString(g.t.LuNsNT, { number: 1 }),
                type: E.d4z.GUILD_VOICE,
              },
              {
                id: "23",
                parent_id: "20",
                name: g.intl.formatToPlainString(g.t.LuNsNT, { number: 2 }),
                type: E.d4z.GUILD_VOICE,
              },
            ],
            system_channel_id: "12",
          },
          HUB_DORM: {
            id: "HUB_DORM",
            code: "fkq8xHfrGE58",
            label: g.intl.string(g.t["ppGw/P"]),
            channels: [
              {
                id: "00",
                parent_id: null,
                name: g.intl.string(g.t["HY+vdH"]),
                type: E.d4z.GUILD_CATEGORY,
              },
              {
                id: "01",
                parent_id: "00",
                name: g.intl.string(g.t["b2+FCQ"]),
                type: E.d4z.GUILD_TEXT,
              },
              {
                id: "10",
                parent_id: null,
                name: g.intl.string(g.t.yZIUV1),
                type: E.d4z.GUILD_CATEGORY,
              },
              {
                id: "11",
                parent_id: "10",
                name: g.intl.string(g.t.pIOigI),
                type: E.d4z.GUILD_TEXT,
              },
              {
                id: "12",
                parent_id: "10",
                name: g.intl.string(g.t.ao2wxs),
                type: E.d4z.GUILD_TEXT,
              },
              {
                id: "13",
                parent_id: "10",
                name: g.intl.string(g.t.AIszv7),
                type: E.d4z.GUILD_TEXT,
              },
              {
                id: "20",
                parent_id: null,
                name: g.intl.string(g.t.vcKDMj),
                type: E.d4z.GUILD_CATEGORY,
              },
              {
                id: "21",
                parent_id: "20",
                name: g.intl.string(g.t.XS6gcH),
                type: E.d4z.GUILD_VOICE,
              },
              {
                id: "22",
                parent_id: "20",
                name: g.intl.string(g.t.g3qPRk),
                type: E.d4z.GUILD_VOICE,
              },
              {
                id: "23",
                parent_id: "20",
                name: g.intl.string(g.t.CLWKNj),
                type: E.d4z.GUILD_VOICE,
              },
            ],
            system_channel_id: "12",
          },
        };
      }
    },
    916069: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return a;
        },
      });
      var i = e(442837),
        l = e(914010),
        r = e(981631);
      function a() {
        return (0, i.e7)([l.Z], () => l.Z.getGuildId()) === r.I_8;
      }
    },
    951206: function (t, n, e) {
      e.d(n, {
        F: function () {
          return o;
        },
      });
      var i = e(512722),
        l = e.n(i),
        r = e(846027),
        a = e(287734),
        d = e(131951),
        u = e(254238),
        s = e(893387);
      function o(t, n) {
        var e;
        let i = null !== (e = t.sessionId) && void 0 !== e ? e : "";
        (0, u._)(i), (0, u.s6)();
        let o = null != n ? n : t.channelId;
        l()(null != o, "attempted to transfer to unknown channel"),
          t.selfMute !== d.Z.isSelfMute() && r.Z.toggleSelfMute(),
          t.selfDeaf !== d.Z.isSelfDeaf() && r.Z.toggleSelfDeaf(),
          (0, s.Z)(o, "discord_client", i),
          a.default.selectVoiceChannel(o, !1);
      }
    },
    446226: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return d;
        },
      });
      var i = e(442837),
        l = e(314897),
        r = e(979651),
        a = e(258609);
      function d() {
        return (0, i.e7)(
          [l.default, r.Z, a.Z],
          () => {
            var t;
            let n = l.default.getId(),
              e = a.Z.getRemoteSessionId();
            return null !== (t = r.Z.getVoiceStateForSession(n, e)) &&
              void 0 !== t
              ? t
              : void 0;
          },
          [],
        );
      }
    },
    937393: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return d;
        },
      });
      var i = e(442837),
        l = e(553795),
        r = e(823379),
        a = e(981631);
      function d() {
        return (0, i.Wu)([l.Z], () =>
          [
            l.Z.getAccount(null, a.ABu.XBOX),
            l.Z.getAccount(null, a.ABu.PLAYSTATION),
            l.Z.getAccount(null, a.ABu.PLAYSTATION_STAGING),
          ].filter(r.lm),
        );
      }
    },
    721351: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return d;
        },
      });
      var i = e(481060),
        l = e(374129),
        r = e(639351),
        a = e(927923);
      function d(t) {
        return null != t
          ? (0, i.makeIconCompat)(t === a.YE.XBOX ? r.Z : l.Z)
          : i.MobilePhoneControllerIcon;
      }
    },
    420529: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return p;
        },
      });
      var i = e(200651);
      e(192379);
      var l = e(399606),
        r = e(481060),
        a = e(231757),
        d = e(397639),
        u = e(19780),
        s = e(979651),
        o = e(951206),
        _ = e(446226),
        c = e(937393),
        E = e(721351),
        g = e(981631),
        I = e(388032);
      function p(t) {
        let n = (0, l.e7)([u.Z], () => u.Z.getChannelId() === t.id),
          p = (0, _.Z)(),
          f = (null == p ? void 0 : p.channelId) === t.id,
          T = (0, d.V)(t) && !t.isPrivate(),
          m = (0, d.Z)(t),
          S = (!(0, l.e7)([s.Z], () => s.Z.isInChannel(t.id)) && m) || T,
          U = (0, c.Z)();
        if (!f && 0 === U.length) return null;
        let C = (n) => {
          if (!n.twoWayLink || n.revoked) {
            (0, a.Z)({
              platformType: n.type,
              location: "Console Transfer Item",
            });
            return;
          }
          n.type === g.ABu.XBOX
            ? (0, r.openModalLazy)(async () => {
                let { default: n } = await Promise.all([
                  e.e("15812"),
                  e.e("522"),
                ]).then(e.bind(e, 200623));
                return (e) => (0, i.jsx)(n, { ...e, channel: t });
              })
            : (n.type === g.ABu.PLAYSTATION ||
                n.type === g.ABu.PLAYSTATION_STAGING) &&
              (0, r.openModalLazy)(async () => {
                let { default: l } = await e.e("638").then(e.bind(e, 543974));
                return (e) =>
                  (0, i.jsx)(l, { ...e, platform: n.type, channel: t });
              });
        };
        return (0, i.jsx)(i.Fragment, {
          children: f
            ? (0, i.jsx)(r.MenuItem, {
                label: I.intl.string(I.t.PlwgdX),
                id: "handoff",
                action: () => {
                  (0, o.F)(p);
                },
                icon: (0, E.Z)(void 0),
                disabled: S,
              })
            : U.map((t) =>
                (0, i.jsx)(
                  r.MenuItem,
                  {
                    id: "transfer-".concat(t.type, "-").concat(t.id),
                    label: (function (t, n) {
                      if (t === g.ABu.XBOX)
                        return n
                          ? I.intl.string(I.t["f+Aijo"])
                          : I.intl.string(I.t.E8euSk);
                      if (t === g.ABu.PLAYSTATION)
                        return n
                          ? I.intl.string(I.t.vzfxmZ)
                          : I.intl.string(I.t.QxEYDg);
                      if (t === g.ABu.PLAYSTATION_STAGING)
                        return n
                          ? I.intl.string(I.t.BDiXtb)
                          : I.intl.string(I.t["bhdB9/"]);
                    })(t.type, n),
                    action: () => C(t),
                    icon: (0, E.Z)(t.type),
                    disabled: S,
                  },
                  t.id,
                ),
              ),
        });
      }
    },
    658041: function (t, n, e) {
      e.d(n, {
        M: function () {
          return d;
        },
      });
      var i = e(913527),
        l = e.n(i),
        r = e(709054),
        a = e(765305);
      function d(t, n, e, i) {
        let d = l()(),
          u = new Date(t.scheduled_start_time).getTime(),
          s = { start: u - a.VF, end: u };
        if (d.isBetween(s.start, s.end)) {
          if (null != n) {
            let t = l()(n),
              e = t.isBetween(s.start, s.end),
              r = t.isBetween(l()(u).subtract(a.zV, "days"), u);
            return e || (r && !i) ? void 0 : a.X_.EVENT_STARTING_SOON;
          }
          return a.X_.EVENT_STARTING_SOON;
        }
        let o = r.default.extractTimestamp(t.id),
          _ = Math.min((null != e ? e : o) + a.Fc, u);
        if (d.isBetween(o, _) && null == n && !i) return a.X_.NEW_EVENT;
      }
    },
    835184: function (t, n, e) {
      var i,
        l = e(442837),
        r = e(570140),
        a = e(314897),
        d = e(924301),
        u = e(658041),
        s = e(765305);
      function o(t, n, e) {
        return (
          n in t
            ? Object.defineProperty(t, n, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[n] = e),
          t
        );
      }
      let _ = {},
        c = {};
      function E(t) {
        let n = { ..._ };
        delete n[t], (_ = n);
        let e = { ...c };
        delete e[t], (c = e);
      }
      class g extends (i = l.ZP.PersistedStore) {
        initialize(t) {
          if (null != t) {
            var n, e;
            (_ =
              null !== (n = t.upcomingEventDismissals) && void 0 !== n
                ? n
                : {}),
              (c =
                null !== (e = t.upcomingEventSeenTimestamps) && void 0 !== e
                  ? e
                  : {});
          }
        }
        getGuildEventNoticeDismissalTime(t) {
          return _[t];
        }
        getAllEventDismissals() {
          return _;
        }
        getUpcomingNoticeSeenTime(t) {
          return c[t];
        }
        getAllUpcomingNoticeSeenTimes() {
          return c;
        }
        getState() {
          return { upcomingEventDismissals: _, upcomingEventSeenTimestamps: c };
        }
      }
      o(g, "displayName", "UpcomingEventNoticesStore"),
        o(g, "persistKey", "UpcomingEventNotices"),
        (n.Z = new g(r.Z, {
          UPCOMING_GUILD_EVENT_NOTICE_HIDE: function (t) {
            let { eventId: n } = t,
              e = { ..._ };
            (e[n] = Date.now()), (_ = e);
          },
          GUILD_SCHEDULED_EVENT_UPDATE: function (t) {
            let { guildScheduledEvent: n } = t;
            (n.status === s.p1.CANCELED || n.status === s.p1.COMPLETED) &&
              E(n.id);
          },
          GUILD_SCHEDULED_EVENT_DELETE: function (t) {
            let { guildScheduledEvent: n } = t;
            E(n.id);
          },
          GUILD_SCHEDULED_EVENT_USER_ADD: function (t) {
            let { userId: n, guildEventId: e } = t;
            if (n !== a.default.getId()) return;
            let i = d.ZP.getGuildScheduledEvent(e);
            if (null == i || i.status !== s.p1.SCHEDULED || null != _[e])
              return;
            let l = c[e];
            if ((0, u.M)(i, void 0, l, !1) === s.X_.NEW_EVENT) {
              let t = { ..._ };
              (t[e] = Date.now()), (_ = t);
            }
          },
          UPCOMING_GUILD_EVENT_NOTICE_SEEN: function (t) {
            let { guildEventId: n } = t,
              e = { ...c };
            (e[n] = Date.now()), (c = e);
          },
        }));
    },
    554747: function (t, n, e) {
      e.d(n, {
        Vm: function () {
          return D;
        },
        ZP: function () {
          return U;
        },
        eF: function () {
          return A;
        },
        gM: function () {
          return L;
        },
        k5: function () {
          return N;
        },
        qY: function () {
          return C;
        },
        sz: function () {
          return G;
        },
        u1: function () {
          return O;
        },
      }),
        e(47120),
        e(724458);
      var i = e(192379),
        l = e(442837),
        r = e(241155),
        a = e(592125),
        d = e(984933),
        u = e(430824),
        s = e(496675),
        o = e(70956),
        _ = e(823379),
        c = e(924301),
        E = e(658041),
        g = e(835184),
        I = e(79874),
        p = e(854698),
        f = e(765305),
        T = e(981631);
      let m = [],
        S = 15 * o.Z.Millis.MINUTE;
      function U(t, n) {
        return (0, l.Wu)(
          [u.Z, r.Z, c.ZP, s.Z, a.Z, d.ZP],
          () => {
            let e = u.Z.getGuild(t);
            if (null == e) return m;
            if (e.hasFeature(T.oNc.HUB)) {
              var i, l;
              let t =
                null === (i = d.ZP.getDefaultChannel(e.id)) || void 0 === i
                  ? void 0
                  : i.id;
              return (
                null !== (l = r.Z.getEventDirectoryEntries(t)) && void 0 !== l
                  ? l
                  : []
              )
                .map((t) => {
                  let n = t.scheduledEventId,
                    e = c.ZP.getGuildScheduledEvent(n);
                  return null != e
                    ? e
                    : r.Z.getCachedGuildScheduledEventById(n);
                })
                .filter(_.lm);
            }
            return c.ZP.getGuildScheduledEventsByIndex(
              null != n ? n : c.bN.GUILD_EVENT_UPCOMING(e.id),
            ).filter((t) => {
              let n = t.channel_id;
              if (null == n) return !0;
              let e = a.Z.getChannel(n);
              return s.Z.can(T.Plq.VIEW_CHANNEL, e);
            });
          },
          [n, t],
        );
      }
      function C(t) {
        return (0, l.e7)(
          [c.ZP, a.Z, s.Z],
          () => {
            let n = a.Z.getChannel(t);
            if (
              !s.Z.can(T.Plq.VIEW_CHANNEL, n) ||
              null == (null == n ? void 0 : n.guild_id)
            )
              return null;
            let e = c.ZP.getGuildScheduledEventsByIndex(
              c.bN.CHANNEL_EVENT_ACTIVE(t),
            );
            return e.length > 0 ? e[0] : null;
          },
          [t],
        );
      }
      function L(t) {
        let n = (0, l.Wu)(
          [c.ZP],
          () => c.ZP.getGuildScheduledEventsForGuild(t),
          [t],
        );
        return i.useMemo(() => {
          let t = new Map();
          return (
            n.forEach((n) => {
              let e = n.channel_id;
              null != e && t.set(e, n);
            }),
            t
          );
        }, [n]);
      }
      function D(t) {
        var n, e;
        let i =
            ((n = t),
            (0, l.Wu)(
              [c.ZP, a.Z, s.Z],
              () =>
                c.ZP.getGuildScheduledEventsByIndex(
                  c.bN.GUILD_EVENT_UPCOMING(n),
                ).filter((t) => {
                  if (
                    t.entity_type === f.WX.NONE ||
                    t.status !== f.p1.SCHEDULED
                  )
                    return !1;
                  if (null == t.channel_id) return !0;
                  let n = a.Z.getChannel(t.channel_id);
                  return s.Z.can(T.Plq.VIEW_CHANNEL, n);
                }),
              [n],
            )),
          r = (0, l.cj)([g.Z], () => g.Z.getAllEventDismissals()),
          d = (0, l.cj)([g.Z], () => g.Z.getAllUpcomingNoticeSeenTimes()),
          o = (0, l.cj)(
            [c.ZP],
            () =>
              null == i
                ? {}
                : i.reduce((t, n) => {
                    let e = (0, p.DK)(n);
                    return {
                      ...t,
                      [n.id]: c.ZP.isInterestedInEventRecurrence(n.id, e),
                    };
                  }, {}),
            [i],
          ),
          _ = (0, l.e7)([u.Z], () => u.Z.getGuild(t)),
          I =
            null != _ &&
            !_.hasFeature(T.oNc.COMMUNITY) &&
            _.hasFeature(T.oNc.INTERNAL_EMPLOYEE_ONLY);
        if (null != i && null != o && I)
          for (let t = 0; t < i.length; t++) {
            let n = i[t],
              l = r[n.id],
              a = d[n.id],
              u = null !== (e = o[n.id]) && void 0 !== e && e,
              s = (0, E.M)(n, l, a, u);
            if (null != s) return { upcomingEvent: n, noticeType: s };
          }
      }
      function N(t) {
        return (0, l.e7)(
          [c.ZP, a.Z, s.Z],
          () =>
            c.ZP.getGuildScheduledEventsByIndex(
              c.bN.GUILD_EVENT_ACTIVE(t),
            ).find((t) => {
              if (t.entity_type === f.WX.NONE || !(0, c.xt)(t)) return !1;
              if (null == t.channel_id) return !0;
              let n = a.Z.getChannel(t.channel_id);
              return s.Z.can(T.Plq.VIEW_CHANNEL, n);
            }),
          [t],
        );
      }
      function O(t) {
        return (0, l.e7)(
          [c.ZP],
          () =>
            c.ZP.getGuildScheduledEventsByIndex(c.bN.CHANNEL_EVENT_UPCOMING(t)),
          [t],
        );
      }
      function A(t) {
        return (0, l.e7)(
          [a.Z, c.ZP],
          () => {
            let n = c.ZP.getGuildScheduledEventsByIndex(
              c.bN.GUILD_EVENT_ACTIVE(t),
            ).find((t) => null != a.Z.getChannel(t.channel_id));
            return a.Z.getChannel(null == n ? void 0 : n.channel_id);
          },
          [t],
        );
      }
      function G(t) {
        let [n, e] = i.useState(() => Date.now());
        i.useEffect(() => {
          let t = setInterval(() => {
            e(Date.now());
          }, S);
          return () => clearInterval(t);
        }, []);
        let r = (0, l.e7)(
          [c.ZP],
          () =>
            null == t
              ? []
              : c.ZP.getGuildScheduledEventsByIndex(
                  c.bN.CHANNEL_EVENT_UPCOMING(t),
                ),
          [t, n],
        );
        return i.useMemo(
          () =>
            r.filter((t) => {
              let { startTime: n, endTime: e } = (0, I.Kq)(t),
                { withinStartWindow: i, diffMinutes: l } = (0, p.ub)(
                  n.toISOString(),
                  null == e ? void 0 : e.toISOString(),
                );
              return t.status !== f.p1.ACTIVE && i && l < 15;
            }),
          [r],
        );
      }
    },
    423589: function (t, n, e) {
      e.d(n, {
        Mn: function () {
          return p;
        },
        OD: function () {
          return I;
        },
        W9: function () {
          return E;
        },
      }),
        e(47120),
        e(789020);
      var i = e(442837),
        l = e(798140),
        r = e(9156),
        a = e(630388),
        d = e(709054),
        u = e(312400),
        s = e(981631),
        o = e(969943),
        _ = e(526761),
        c = e(388032);
      function E() {
        return [
          { label: c.intl.string(c.t["8ot6go"]), value: o.Oe.MINUTES_15 },
          { label: c.intl.string(c.t.UMWBZm), value: o.Oe.HOURS_1 },
          { label: c.intl.string(c.t.QmYWtr), value: o.Oe.HOURS_3 },
          { label: c.intl.string(c.t.EpAXPD), value: o.Oe.HOURS_8 },
          { label: c.intl.string(c.t["755t4u"]), value: o.Oe.HOURS_24 },
          { label: c.intl.string(c.t.r3LawM), value: o.Oe.ALWAYS },
        ];
      }
      let g = {
        ignoreMute: !1,
        ignoreUnreadSetting: !0,
        ignoreNotificationSetting: !1,
      };
      function I(t) {
        let n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : g;
        return d.default.keys(t).filter((e) => {
          var i, r;
          let d = t[e].message_notifications !== s.bL.NULL,
            u =
              a.yE(
                null !== (i = t[e].flags) && void 0 !== i ? i : 0,
                _.ic.UNREADS_ALL_MESSAGES,
              ) ||
              a.yE(
                null !== (r = t[e].flags) && void 0 !== r ? r : 0,
                _.ic.UNREADS_ONLY_MENTIONS,
              );
          return (
            (!n.ignoreUnreadSetting && u) ||
            (!n.ignoreNotificationSetting && d) ||
            (!n.ignoreMute && (0, l.m$)(t[e]))
          );
        });
      }
      function p(t) {
        let n = (0, i.e7)([r.ZP], () => r.ZP.useNewNotifications);
        return (
          u.xT.useExperiment({ location: t }, { autoTrackExposure: !1 })
            .enabled && n
        );
      }
    },
    113449: function (t, n, e) {
      e.d(n, {
        Q4: function () {
          return r;
        },
        YF: function () {
          return a;
        },
        pq: function () {
          return d;
        },
      });
      var i = e(630388),
        l = e(526761);
      function r(t, n) {
        var e;
        return i.pj(
          ((e = t),
          i.M1(e, l.vc.UNREADS_ALL_MESSAGES, l.vc.UNREADS_ONLY_MENTIONS)),
          n,
        );
      }
      let a = (t) =>
        i.M1(t, l.ic.UNREADS_ALL_MESSAGES, l.ic.UNREADS_ONLY_MENTIONS);
      function d(t, n) {
        return i.pj(a(t), n);
      }
    },
    305587: function (t, n, e) {
      e.d(n, {
        Xs: function () {
          return l;
        },
      });
      let i = (0, e(818083).B)({
        kind: "user",
        id: "2024-09_dm_mute_feedback",
        label: "DM Mute Feedback Experiment",
        defaultConfig: { enabled: !1 },
        treatments: [
          {
            id: 1,
            label: "Enable DM Mute Feedback Survey",
            config: { enabled: !0 },
          },
        ],
      });
      function l(t) {
        let { enabled: n } = i.getCurrentConfig(
          { location: t },
          { autoTrackExposure: !0 },
        );
        return n;
      }
    },
    496729: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return _;
        },
        s: function () {
          return o;
        },
      });
      var i = e(200651),
        l = e(704215),
        r = e(481060),
        a = e(570140),
        d = e(605236),
        u = e(592125),
        s = e(305587);
      function o(t) {
        let { channelId: n, location: e } = t,
          i = u.Z.getChannel(n),
          r = (0, d.un)(l.z.USER_DM_MUTE_FEEDBACK);
        if (null != i && !!i.isDM() && !r)
          (0, s.Xs)(e) &&
            a.Z.dispatch({ type: "USER_DM_MUTE_SHOW_FEEDBACK", channel: i });
      }
      function _() {
        (0, r.openModalLazy)(async () => {
          let { default: t } = await e.e("87995").then(e.bind(e, 180970));
          return (n) => (0, i.jsx)(t, { ...n });
        });
      }
    },
    397639: function (t, n, e) {
      e.d(n, {
        V: function () {
          return s;
        },
        Z: function () {
          return o;
        },
      });
      var i = e(442837),
        l = e(430824),
        r = e(496675),
        a = e(979651),
        d = e(934415),
        u = e(231338);
      function s(t) {
        return (0, i.e7)([r.Z], () => null == t || !r.Z.can(u.Pl.CONNECT, t), [
          t,
        ]);
      }
      function o(t) {
        return (0, i.e7)([a.Z, l.Z], () => (0, d.rY)(t, a.Z, l.Z));
      }
    },
  },
]);
//# sourceMappingURL=ed22b0ea197664238c94.js.map
