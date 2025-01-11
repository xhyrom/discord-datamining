"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["61447"],
  {
    177475: function (t) {
      t.exports = "/assets/a64ea373b47e9a224206.svg";
    },
    339340: function (t, n, e) {
      e.r(n),
        e.d(n, {
          VOICE_CHANNEL_STATUS_MODAL_KEY: function () {
            return C;
          },
          default: function () {
            return f;
          },
        }),
        e(47120),
        e(757143);
      var i = e(200651),
        l = e(192379),
        r = e(399606),
        d = e(343817),
        a = e(481060),
        u = e(787014),
        s = e(12498),
        o = e(541716),
        _ = e(752305),
        c = e(893718),
        E = e(600164),
        I = e(19780),
        g = e(626135),
        p = e(981631),
        T = e(388032),
        m = e(752670);
      let C = "VoiceChannelStatusModal";
      function f(t) {
        let { channel: n, transitionState: e, onClose: f } = t,
          L = (0, r.e7)([s.Z], () => s.Z.getChannelStatus(n)),
          U = (0, r.e7)([I.Z], () => I.Z.getMediaSessionId()),
          [D, S] = l.useState(null != L ? L : ""),
          [N, G] = l.useState(!1),
          [A, y] = l.useState(null),
          Z = D.length > 500;
        l.useEffect(() => {
          g.default.track(p.rMx.OPEN_MODAL, {
            type: "Voice Channel Topic Modal",
            guild_id: n.guild_id,
          });
        }, [n.guild_id]);
        let h = (t) => {
            y(new d.Hx(t, t.status).getAnyErrorMessage());
          },
          O = async (t) => {
            D === L && f(), null == t || t.preventDefault(), y(null), G(!0);
            let e = D.length,
              i = D.replace(/<(a)?:[^:]+:[0-9]+>/g, "--").length;
            try {
              let t = await u.ZP.updateVoiceChannelStatus(n.id, D);
              204 === t.status
                ? (g.default.track(p.rMx.VOICE_CHANNEL_TOPIC_SET, {
                    guild_id: n.guild_id,
                    channel_id: n.id,
                    media_session_id: U,
                    raw_length: e,
                    text_length: i,
                  }),
                  f())
                : h(t);
            } catch (t) {
              h(t);
            }
            G(!1);
          },
          [v, z] = l.useState((0, _.JM)(D)),
          M = async () => (
            !Z && !N && (await O()),
            Promise.resolve({ shouldClear: !1, shouldRefocus: !0 })
          );
        return (0, i.jsx)("form", {
          onSubmit: O,
          className: m.form,
          children: (0, i.jsxs)(a.ModalRoot, {
            transitionState: e,
            size: a.ModalSize.SMALL,
            children: [
              (0, i.jsxs)(a.ModalContent, {
                children: [
                  (0, i.jsxs)(a.ModalHeader, {
                    direction: E.Z.Direction.VERTICAL,
                    className: m.modalHeader,
                    separator: !1,
                    children: [
                      (0, i.jsx)(a.ModalCloseButton, {
                        className: m.closeButton,
                        onClick: f,
                      }),
                      (0, i.jsx)("div", { className: m.headerImage }),
                      (0, i.jsx)(a.FormTitle, {
                        tag: "h1",
                        className: m.title,
                        children: T.intl.string(T.t["5CyJBQ"]),
                      }),
                      (0, i.jsx)(a.Text, {
                        color: "header-secondary",
                        variant: "text-sm/normal",
                        children: T.intl.string(T.t.NRBYjo),
                      }),
                    ],
                  }),
                  (0, i.jsxs)(a.FormSection, {
                    className: m.inputSection,
                    title: T.intl.string(T.t.Fq5lwM),
                    children: [
                      (0, i.jsx)(c.Z, {
                        innerClassName: m.textArea,
                        textValue: D,
                        richValue: v,
                        placeholder: T.intl.formatToPlainString(T.t.DUXxBg, {
                          channelName: n.name,
                        }),
                        focused: !0,
                        channel: n,
                        onChange: (t, n, e) => {
                          S(n), z(e);
                        },
                        onSubmit: M,
                        type: o.Ie.VOICE_CHANNEL_STATUS,
                        canMentionRoles: !1,
                        canMentionChannels: !1,
                        allowNewLines: !1,
                        parentModalKey: C,
                        maxCharacterCount: 500,
                        showRemainingCharsAfterCount: 250,
                        emojiPickerCloseOnModalOuterClick: !0,
                      }),
                      null != A
                        ? (0, i.jsx)(a.FormErrorBlock, {
                            className: m.error,
                            children: A,
                          })
                        : null,
                    ],
                  }),
                ],
              }),
              (0, i.jsxs)(a.ModalFooter, {
                justify: E.Z.Justify.BETWEEN,
                direction: E.Z.Direction.HORIZONTAL,
                children: [
                  (0, i.jsx)(a.Button, {
                    color: a.Button.Colors.PRIMARY,
                    onClick: f,
                    children: T.intl.string(T.t["ETE/oK"]),
                  }),
                  (0, i.jsx)(a.Button, {
                    onClick: O,
                    submitting: N,
                    className: m.button,
                    disabled: Z,
                    children: T.intl.string(T.t.XqK2Iy),
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    241155: function (t, n, e) {
      e(47120);
      var i,
        l,
        r,
        d,
        a = e(392711),
        u = e.n(a),
        s = e(442837),
        o = e(570140),
        _ = e(924301),
        c = e(601964),
        E = e(486527);
      let I = !1,
        g = {},
        p = {},
        T = {},
        m = (t) => (
          (T[t.guild_scheduled_event.id] = new c.ZP(
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
      class C extends (i = s.ZP.Store) {
        isFetching() {
          return I;
        }
        getEventDirectoryEntries(t) {
          if (null != t) return g[t];
        }
        getCachedGuildByEventId(t) {
          var n;
          return null !== (n = T[t]) && void 0 !== n ? n : void 0;
        }
        getCachedGuildScheduledEventById(t) {
          var n;
          return null !== (n = p[t]) && void 0 !== n ? n : void 0;
        }
      }
      (d = "EventDirectoryStore"),
        (r = "displayName") in (l = C)
          ? Object.defineProperty(l, r, {
              value: d,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (l[r] = d),
        (n.Z = new C(o.Z, {
          EVENT_DIRECTORY_FETCH_START: function () {
            I = !0;
          },
          EVENT_DIRECTORY_FETCH_SUCCESS: function (t) {
            let { channelId: n, entries: e } = t;
            I = !1;
            let i = u().sortBy(
                [...e],
                [
                  function (t) {
                    return (0, _.CQ)(t.guild_scheduled_event);
                  },
                ],
              ),
              l = u().map(i, m);
            g[n] = l;
          },
          EVENT_DIRECTORY_FETCH_FAILURE: function () {
            I = !1;
          },
        }));
    },
    486527: function (t, n, e) {
      e.d(n, {
        AR: function () {
          return o;
        },
        C2: function () {
          return a;
        },
        Pp: function () {
          return p;
        },
        VX: function () {
          return u;
        },
        b7: function () {
          return g;
        },
        sE: function () {
          return s;
        },
      });
      var i,
        l,
        r,
        d,
        a,
        u,
        s,
        o,
        _ = e(149765),
        c = e(700785),
        E = e(981631),
        I = e(388032);
      ((i = a || (a = {}))[(i.GUILD = 0)] = "GUILD"),
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
        ((d = o || (o = {}))[(d.ALL = -1)] = "ALL"),
        (d[(d.UNCATEGORIZED = 0)] = "UNCATEGORIZED"),
        (d[(d.SCHOOL_CLUB = 1)] = "SCHOOL_CLUB"),
        (d[(d.CLASS = 2)] = "CLASS"),
        (d[(d.STUDY_SOCIAL = 3)] = "STUDY_SOCIAL"),
        (d[(d.MISC = 5)] = "MISC");
      function g(t) {
        return "883060064561299456" === t
          ? [
              { value: 1, label: I.intl.string(I.t["Z+MPNz"]) },
              { value: 2, label: I.intl.string(I.t.dV9uBg) },
              { value: 3, label: I.intl.string(I.t.xoHQcn) },
              { value: 5, label: I.intl.string(I.t.Ao41rq) },
            ]
          : [
              { value: 1, label: I.intl.string(I.t.oNHFUF), idealSize: 100 },
              { value: 2, label: I.intl.string(I.t.V1i8nZ) },
              { value: 3, label: I.intl.string(I.t.Z2ygQk), idealSize: 50 },
              { value: 5, label: I.intl.string(I.t["0Bg9LS"]) },
            ];
      }
      function p() {
        return {
          CREATE: {
            id: "CREATE",
            code: "2TffvPucqHkN",
            label: I.intl.string(I.t["H3+6BA"]),
            channels: [],
            system_channel_id: null,
          },
          HUB_SCHOOL_CLUB: {
            id: "HUB_SCHOOL_CLUB",
            code: "UMUbvRpRZhS6",
            label: I.intl.string(I.t["mmFA5+"]),
            channels: [
              {
                id: "00",
                parent_id: null,
                name: I.intl.string(I.t["VCAA/f"]),
                type: E.d4z.GUILD_CATEGORY,
              },
              {
                id: "01",
                parent_id: "00",
                name: I.intl.string(I.t.GHQoER),
                type: E.d4z.GUILD_TEXT,
              },
              {
                id: "02",
                parent_id: "00",
                name: I.intl.string(I.t.nSsoSE),
                type: E.d4z.GUILD_TEXT,
              },
              {
                id: "03",
                parent_id: "00",
                name: I.intl.string(I.t.yZCzMT),
                type: E.d4z.GUILD_TEXT,
              },
              {
                id: "10",
                parent_id: null,
                name: I.intl.string(I.t.mobYpK),
                type: E.d4z.GUILD_CATEGORY,
              },
              {
                id: "11",
                parent_id: "10",
                name: I.intl.string(I.t.pIOigI),
                type: E.d4z.GUILD_TEXT,
              },
              {
                id: "12",
                parent_id: "10",
                name: I.intl.string(I.t.ao2wxs),
                type: E.d4z.GUILD_TEXT,
              },
              {
                id: "13",
                parent_id: "10",
                name: I.intl.string(I.t.AIszv7),
                type: E.d4z.GUILD_TEXT,
              },
              {
                id: "20",
                parent_id: null,
                name: I.intl.string(I.t.vcKDMj),
                type: E.d4z.GUILD_CATEGORY,
              },
              {
                id: "21",
                parent_id: "20",
                name: I.intl.string(I.t.XS6gcH),
                type: E.d4z.GUILD_VOICE,
              },
              {
                id: "22",
                parent_id: "20",
                name: I.intl.string(I.t.hi1Ykp),
                type: E.d4z.GUILD_VOICE,
              },
              {
                id: "22",
                parent_id: "20",
                name: I.intl.string(I.t.vw8oaW),
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
            label: I.intl.string(I.t.fYwSi4),
            channels: [
              {
                id: "00",
                parent_id: null,
                name: I.intl.string(I.t["HY+vdH"]),
                type: E.d4z.GUILD_CATEGORY,
              },
              {
                id: "01",
                parent_id: "00",
                name: I.intl.string(I.t["3eM+Li"]),
                type: E.d4z.GUILD_TEXT,
              },
              {
                id: "02",
                parent_id: "00",
                name: I.intl.string(I.t.Qi0D7e),
                type: E.d4z.GUILD_TEXT,
              },
              {
                id: "10",
                parent_id: null,
                name: I.intl.string(I.t.yZIUV1),
                type: E.d4z.GUILD_CATEGORY,
              },
              {
                id: "11",
                parent_id: "10",
                name: I.intl.string(I.t.pIOigI),
                type: E.d4z.GUILD_TEXT,
              },
              {
                id: "12",
                parent_id: "10",
                name: I.intl.string(I.t.ao2wxs),
                type: E.d4z.GUILD_TEXT,
              },
              {
                id: "12",
                parent_id: "10",
                name: I.intl.string(I.t.AIszv7),
                type: E.d4z.GUILD_TEXT,
              },
              {
                id: "20",
                parent_id: null,
                name: I.intl.string(I.t.vcKDMj),
                type: E.d4z.GUILD_CATEGORY,
              },
              {
                id: "21",
                parent_id: "20",
                name: I.intl.string(I.t.XS6gcH),
                type: E.d4z.GUILD_VOICE,
              },
              {
                id: "22",
                parent_id: "20",
                name: I.intl.formatToPlainString(I.t.LuNsNT, { number: 1 }),
                type: E.d4z.GUILD_VOICE,
              },
              {
                id: "23",
                parent_id: "20",
                name: I.intl.formatToPlainString(I.t.LuNsNT, { number: 2 }),
                type: E.d4z.GUILD_VOICE,
              },
            ],
            system_channel_id: "12",
          },
          HUB_CLASS: {
            id: "HUB_CLASS",
            code: "r86WWBwTGspb",
            label: I.intl.string(I.t.e5gFS0),
            channels: [
              {
                id: "00",
                parent_id: null,
                name: I.intl.string(I.t["HY+vdH"]),
                type: E.d4z.GUILD_CATEGORY,
              },
              {
                id: "01",
                parent_id: "00",
                name: I.intl.string(I.t["710tNj"]),
                type: E.d4z.GUILD_TEXT,
              },
              {
                id: "02",
                parent_id: "00",
                name: I.intl.string(I.t.Qi0D7e),
                type: E.d4z.GUILD_TEXT,
              },
              {
                id: "10",
                parent_id: null,
                name: I.intl.string(I.t.yZIUV1),
                type: E.d4z.GUILD_CATEGORY,
              },
              {
                id: "11",
                parent_id: "10",
                name: I.intl.string(I.t.pIOigI),
                type: E.d4z.GUILD_TEXT,
              },
              {
                id: "12",
                parent_id: "10",
                name: I.intl.string(I.t.ao2wxs),
                type: E.d4z.GUILD_TEXT,
              },
              {
                id: "13",
                parent_id: "10",
                name: I.intl.string(I.t.AIszv7),
                type: E.d4z.GUILD_TEXT,
              },
              {
                id: "20",
                parent_id: null,
                name: I.intl.string(I.t.vcKDMj),
                type: E.d4z.GUILD_CATEGORY,
              },
              {
                id: "21",
                parent_id: "20",
                name: I.intl.string(I.t.XS6gcH),
                type: E.d4z.GUILD_VOICE,
              },
              {
                id: "22",
                parent_id: "20",
                name: I.intl.formatToPlainString(I.t.LuNsNT, { number: 1 }),
                type: E.d4z.GUILD_VOICE,
              },
              {
                id: "23",
                parent_id: "20",
                name: I.intl.formatToPlainString(I.t.LuNsNT, { number: 2 }),
                type: E.d4z.GUILD_VOICE,
              },
            ],
            system_channel_id: "12",
          },
          HUB_SOCIAL: {
            id: "HUB_SOCIAL",
            code: "AvvtXE3mfbCR",
            label: I.intl.string(I.t.oOj7Ii),
            channels: [
              {
                id: "00",
                parent_id: null,
                name: I.intl.string(I.t.yZIUV1),
                type: E.d4z.GUILD_CATEGORY,
              },
              {
                id: "01",
                parent_id: "00",
                name: I.intl.string(I.t.pIOigI),
                type: E.d4z.GUILD_TEXT,
              },
              {
                id: "02",
                parent_id: "00",
                name: I.intl.string(I.t.ao2wxs),
                type: E.d4z.GUILD_TEXT,
              },
              {
                id: "03",
                parent_id: "00",
                name: I.intl.string(I.t.AIszv7),
                type: E.d4z.GUILD_TEXT,
              },
              {
                id: "04",
                parent_id: "00",
                name: I.intl.string(I.t.d4F8gI),
                type: E.d4z.GUILD_TEXT,
              },
              {
                id: "10",
                parent_id: null,
                name: I.intl.string(I.t.vcKDMj),
                type: E.d4z.GUILD_CATEGORY,
              },
              {
                id: "11",
                parent_id: "10",
                name: I.intl.string(I.t.CLWKNj),
                type: E.d4z.GUILD_VOICE,
              },
              {
                id: "12",
                parent_id: "10",
                name: I.intl.string(I.t.g3qPRk),
                type: E.d4z.GUILD_VOICE,
              },
              {
                id: "13",
                parent_id: "10",
                name: I.intl.string(I.t.yQZpe3),
                type: E.d4z.GUILD_VOICE,
              },
            ],
            system_channel_id: "02",
          },
          HUB_MAJOR: {
            id: "HUB_MAJOR",
            code: "FhmfDR6Arvsc",
            label: I.intl.string(I.t["9kly4e"]),
            channels: [
              {
                id: "00",
                parent_id: null,
                name: I.intl.string(I.t["HY+vdH"]),
                type: E.d4z.GUILD_CATEGORY,
              },
              {
                id: "01",
                parent_id: "00",
                name: I.intl.string(I.t.yZCzMT),
                type: E.d4z.GUILD_TEXT,
              },
              {
                id: "02",
                parent_id: "00",
                name: I.intl.string(I.t.Qi0D7e),
                type: E.d4z.GUILD_TEXT,
              },
              {
                id: "10",
                parent_id: null,
                name: I.intl.string(I.t.yZIUV1),
                type: E.d4z.GUILD_CATEGORY,
              },
              {
                id: "11",
                parent_id: "10",
                name: I.intl.string(I.t.pIOigI),
                type: E.d4z.GUILD_TEXT,
              },
              {
                id: "12",
                parent_id: "10",
                name: I.intl.string(I.t.ao2wxs),
                type: E.d4z.GUILD_TEXT,
              },
              {
                id: "13",
                parent_id: "10",
                name: I.intl.string(I.t.AIszv7),
                type: E.d4z.GUILD_TEXT,
              },
              {
                id: "20",
                parent_id: null,
                name: I.intl.string(I.t.vcKDMj),
                type: E.d4z.GUILD_CATEGORY,
              },
              {
                id: "21",
                parent_id: "20",
                name: I.intl.string(I.t.XS6gcH),
                type: E.d4z.GUILD_VOICE,
              },
              {
                id: "22",
                parent_id: "20",
                name: I.intl.formatToPlainString(I.t.LuNsNT, { number: 1 }),
                type: E.d4z.GUILD_VOICE,
              },
              {
                id: "23",
                parent_id: "20",
                name: I.intl.formatToPlainString(I.t.LuNsNT, { number: 2 }),
                type: E.d4z.GUILD_VOICE,
              },
            ],
            system_channel_id: "12",
          },
          HUB_DORM: {
            id: "HUB_DORM",
            code: "fkq8xHfrGE58",
            label: I.intl.string(I.t["ppGw/P"]),
            channels: [
              {
                id: "00",
                parent_id: null,
                name: I.intl.string(I.t["HY+vdH"]),
                type: E.d4z.GUILD_CATEGORY,
              },
              {
                id: "01",
                parent_id: "00",
                name: I.intl.string(I.t["b2+FCQ"]),
                type: E.d4z.GUILD_TEXT,
              },
              {
                id: "10",
                parent_id: null,
                name: I.intl.string(I.t.yZIUV1),
                type: E.d4z.GUILD_CATEGORY,
              },
              {
                id: "11",
                parent_id: "10",
                name: I.intl.string(I.t.pIOigI),
                type: E.d4z.GUILD_TEXT,
              },
              {
                id: "12",
                parent_id: "10",
                name: I.intl.string(I.t.ao2wxs),
                type: E.d4z.GUILD_TEXT,
              },
              {
                id: "13",
                parent_id: "10",
                name: I.intl.string(I.t.AIszv7),
                type: E.d4z.GUILD_TEXT,
              },
              {
                id: "20",
                parent_id: null,
                name: I.intl.string(I.t.vcKDMj),
                type: E.d4z.GUILD_CATEGORY,
              },
              {
                id: "21",
                parent_id: "20",
                name: I.intl.string(I.t.XS6gcH),
                type: E.d4z.GUILD_VOICE,
              },
              {
                id: "22",
                parent_id: "20",
                name: I.intl.string(I.t.g3qPRk),
                type: E.d4z.GUILD_VOICE,
              },
              {
                id: "23",
                parent_id: "20",
                name: I.intl.string(I.t.CLWKNj),
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
          return d;
        },
      });
      var i = e(442837),
        l = e(914010),
        r = e(981631);
      function d() {
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
        d = e(287734),
        a = e(131951),
        u = e(254238),
        s = e(893387);
      function o(t, n) {
        var e;
        let i = null !== (e = t.sessionId) && void 0 !== e ? e : "";
        (0, u._)(i), (0, u.s6)();
        let o = null != n ? n : t.channelId;
        l()(null != o, "attempted to transfer to unknown channel"),
          t.selfMute !== a.Z.isSelfMute() && r.Z.toggleSelfMute(),
          t.selfDeaf !== a.Z.isSelfDeaf() && r.Z.toggleSelfDeaf(),
          (0, s.Z)(o, "discord_client", i),
          d.default.selectVoiceChannel(o, !1);
      }
    },
    446226: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return a;
        },
      });
      var i = e(442837),
        l = e(314897),
        r = e(979651),
        d = e(258609);
      function a() {
        return (0, i.e7)(
          [l.default, r.Z, d.Z],
          () => {
            var t;
            let n = l.default.getId(),
              e = d.Z.getRemoteSessionId();
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
          return a;
        },
      });
      var i = e(442837),
        l = e(553795),
        r = e(823379),
        d = e(981631);
      function a() {
        return (0, i.Wu)([l.Z], () =>
          [
            l.Z.getAccount(null, d.ABu.XBOX),
            l.Z.getAccount(null, d.ABu.PLAYSTATION),
            l.Z.getAccount(null, d.ABu.PLAYSTATION_STAGING),
          ].filter(r.lm),
        );
      }
    },
    721351: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return a;
        },
      });
      var i = e(481060),
        l = e(374129),
        r = e(639351),
        d = e(927923);
      function a(t) {
        return null != t
          ? (0, i.makeIconCompat)(t === d.YE.XBOX ? r.Z : l.Z)
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
        d = e(231757),
        a = e(397639),
        u = e(19780),
        s = e(979651),
        o = e(951206),
        _ = e(446226),
        c = e(937393),
        E = e(721351),
        I = e(981631),
        g = e(388032);
      function p(t) {
        let n = (0, l.e7)([u.Z], () => u.Z.getChannelId() === t.id),
          p = (0, _.Z)(),
          T = (null == p ? void 0 : p.channelId) === t.id,
          m = (0, a.V)(t) && !t.isPrivate(),
          C = (0, a.Z)(t),
          f = (!(0, l.e7)([s.Z], () => s.Z.isInChannel(t.id)) && C) || m,
          L = (0, c.Z)();
        if (!T && 0 === L.length) return null;
        let U = (n) => {
          if (!n.twoWayLink || n.revoked) {
            (0, d.Z)({
              platformType: n.type,
              location: "Console Transfer Item",
            });
            return;
          }
          n.type === I.ABu.XBOX
            ? (0, r.openModalLazy)(async () => {
                let { default: n } = await Promise.all([
                  e.e("82086"),
                  e.e("522"),
                ]).then(e.bind(e, 200623));
                return (e) => (0, i.jsx)(n, { ...e, channel: t });
              })
            : (n.type === I.ABu.PLAYSTATION ||
                n.type === I.ABu.PLAYSTATION_STAGING) &&
              (0, r.openModalLazy)(async () => {
                let { default: l } = await e.e("638").then(e.bind(e, 543974));
                return (e) =>
                  (0, i.jsx)(l, { ...e, platform: n.type, channel: t });
              });
        };
        return (0, i.jsx)(i.Fragment, {
          children: T
            ? (0, i.jsx)(r.MenuItem, {
                label: g.intl.string(g.t.PlwgdX),
                id: "handoff",
                action: () => {
                  (0, o.F)(p);
                },
                icon: (0, E.Z)(void 0),
                disabled: f,
              })
            : L.map((t) =>
                (0, i.jsx)(
                  r.MenuItem,
                  {
                    id: "transfer-".concat(t.type, "-").concat(t.id),
                    label: (function (t, n) {
                      if (t === I.ABu.XBOX)
                        return n
                          ? g.intl.string(g.t["f+Aijo"])
                          : g.intl.string(g.t.E8euSk);
                      if (t === I.ABu.PLAYSTATION)
                        return n
                          ? g.intl.string(g.t.vzfxmZ)
                          : g.intl.string(g.t.QxEYDg);
                      if (t === I.ABu.PLAYSTATION_STAGING)
                        return n
                          ? g.intl.string(g.t.BDiXtb)
                          : g.intl.string(g.t["bhdB9/"]);
                    })(t.type, n),
                    action: () => U(t),
                    icon: (0, E.Z)(t.type),
                    disabled: f,
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
          return a;
        },
      });
      var i = e(913527),
        l = e.n(i),
        r = e(709054),
        d = e(765305);
      function a(t, n, e, i) {
        let a = l()(),
          u = new Date(t.scheduled_start_time).getTime(),
          s = { start: u - d.VF, end: u };
        if (a.isBetween(s.start, s.end)) {
          if (null != n) {
            let t = l()(n),
              e = t.isBetween(s.start, s.end),
              r = t.isBetween(l()(u).subtract(d.zV, "days"), u);
            return e || (r && !i) ? void 0 : d.X_.EVENT_STARTING_SOON;
          }
          return d.X_.EVENT_STARTING_SOON;
        }
        let o = r.default.extractTimestamp(t.id),
          _ = Math.min((null != e ? e : o) + d.Fc, u);
        if (a.isBetween(o, _) && null == n && !i) return d.X_.NEW_EVENT;
      }
    },
    835184: function (t, n, e) {
      var i,
        l = e(442837),
        r = e(570140),
        d = e(314897),
        a = e(924301),
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
      class I extends (i = l.ZP.PersistedStore) {
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
      o(I, "displayName", "UpcomingEventNoticesStore"),
        o(I, "persistKey", "UpcomingEventNotices"),
        (n.Z = new I(r.Z, {
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
            if (n !== d.default.getId()) return;
            let i = a.ZP.getGuildScheduledEvent(e);
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
          return S;
        },
        ZP: function () {
          return L;
        },
        eF: function () {
          return A;
        },
        gM: function () {
          return D;
        },
        k5: function () {
          return N;
        },
        qY: function () {
          return U;
        },
        sz: function () {
          return y;
        },
        u1: function () {
          return G;
        },
      }),
        e(47120),
        e(724458);
      var i = e(192379),
        l = e(442837),
        r = e(241155),
        d = e(592125),
        a = e(984933),
        u = e(430824),
        s = e(496675),
        o = e(70956),
        _ = e(823379),
        c = e(924301),
        E = e(658041),
        I = e(835184),
        g = e(79874),
        p = e(854698),
        T = e(765305),
        m = e(981631);
      let C = [],
        f = 15 * o.Z.Millis.MINUTE;
      function L(t, n) {
        return (0, l.Wu)(
          [u.Z, r.Z, c.ZP, s.Z, d.Z, a.ZP],
          () => {
            let e = u.Z.getGuild(t);
            if (null == e) return C;
            if (e.hasFeature(m.oNc.HUB)) {
              var i, l;
              let t =
                null === (i = a.ZP.getDefaultChannel(e.id)) || void 0 === i
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
              let e = d.Z.getChannel(n);
              return s.Z.can(m.Plq.VIEW_CHANNEL, e);
            });
          },
          [n, t],
        );
      }
      function U(t) {
        return (0, l.e7)(
          [c.ZP, d.Z, s.Z],
          () => {
            let n = d.Z.getChannel(t);
            if (
              !s.Z.can(m.Plq.VIEW_CHANNEL, n) ||
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
      function D(t) {
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
      function S(t) {
        var n, e;
        let i =
            ((n = t),
            (0, l.Wu)(
              [c.ZP, d.Z, s.Z],
              () =>
                c.ZP.getGuildScheduledEventsByIndex(
                  c.bN.GUILD_EVENT_UPCOMING(n),
                ).filter((t) => {
                  if (
                    t.entity_type === T.WX.NONE ||
                    t.status !== T.p1.SCHEDULED
                  )
                    return !1;
                  if (null == t.channel_id) return !0;
                  let n = d.Z.getChannel(t.channel_id);
                  return s.Z.can(m.Plq.VIEW_CHANNEL, n);
                }),
              [n],
            )),
          r = (0, l.cj)([I.Z], () => I.Z.getAllEventDismissals()),
          a = (0, l.cj)([I.Z], () => I.Z.getAllUpcomingNoticeSeenTimes()),
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
          g =
            null != _ &&
            !_.hasFeature(m.oNc.COMMUNITY) &&
            _.hasFeature(m.oNc.INTERNAL_EMPLOYEE_ONLY);
        if (null != i && null != o && g)
          for (let t = 0; t < i.length; t++) {
            let n = i[t],
              l = r[n.id],
              d = a[n.id],
              u = null !== (e = o[n.id]) && void 0 !== e && e,
              s = (0, E.M)(n, l, d, u);
            if (null != s) return { upcomingEvent: n, noticeType: s };
          }
      }
      function N(t) {
        return (0, l.e7)(
          [c.ZP, d.Z, s.Z],
          () =>
            c.ZP.getGuildScheduledEventsByIndex(
              c.bN.GUILD_EVENT_ACTIVE(t),
            ).find((t) => {
              if (t.entity_type === T.WX.NONE || !(0, c.xt)(t)) return !1;
              if (null == t.channel_id) return !0;
              let n = d.Z.getChannel(t.channel_id);
              return s.Z.can(m.Plq.VIEW_CHANNEL, n);
            }),
          [t],
        );
      }
      function G(t) {
        return (0, l.e7)(
          [c.ZP],
          () =>
            c.ZP.getGuildScheduledEventsByIndex(c.bN.CHANNEL_EVENT_UPCOMING(t)),
          [t],
        );
      }
      function A(t) {
        return (0, l.e7)(
          [d.Z, c.ZP],
          () => {
            let n = c.ZP.getGuildScheduledEventsByIndex(
              c.bN.GUILD_EVENT_ACTIVE(t),
            ).find((t) => null != d.Z.getChannel(t.channel_id));
            return d.Z.getChannel(null == n ? void 0 : n.channel_id);
          },
          [t],
        );
      }
      function y(t) {
        let [n, e] = i.useState(() => Date.now());
        i.useEffect(() => {
          let t = setInterval(() => {
            e(Date.now());
          }, f);
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
              let { startTime: n, endTime: e } = (0, g.Kq)(t),
                { withinStartWindow: i, diffMinutes: l } = (0, p.ub)(
                  n.toISOString(),
                  null == e ? void 0 : e.toISOString(),
                );
              return t.status !== T.p1.ACTIVE && i && l < 15;
            }),
          [r],
        );
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
        d = e(979651),
        a = e(934415),
        u = e(231338);
      function s(t) {
        return (0, i.e7)([r.Z], () => null == t || !r.Z.can(u.Pl.CONNECT, t), [
          t,
        ]);
      }
      function o(t) {
        return (0, i.e7)([d.Z, l.Z], () => (0, a.rY)(t, d.Z, l.Z));
      }
    },
  },
]);
//# sourceMappingURL=ebacba14bc90a5ae3d91.js.map
